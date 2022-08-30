import { all, call, select } from 'redux-saga/effects'

import client, { contentfulClient, defaultConfig, persistedClient } from '../../graphql/Client'
import { selectors } from '..'
import bugsnagClient from '../../helpers/BugsnagHelpers'

import {
  ApiResponse,
  GraphqlQueryVariables,
  QueryType,
  ServiceMutation,
  ServiceQuery,
} from './types/state'

export type ApiTransformer = (data: any) => any

export default class ApiSagas {
  static *getHeaders(): any {
    const headers: Headers = yield select(selectors.api.headers)

    return {
      ...headers,
    }
  }

  static *query(service: ServiceQuery, variables: GraphqlQueryVariables | null = null) {
    const headers: Headers = yield call(ApiSagas.getHeaders)
    const response: ApiResponse = yield ApiSagas.call(client.query, service, variables, headers)
    return response
  }

  static *mutate(service: ServiceMutation, variables: GraphqlQueryVariables | null = null) {
    const headers: Headers = yield call(ApiSagas.getHeaders)
    const response: ApiResponse = yield ApiSagas.call(client.mutate, service, variables, headers)
    return response
  }

  static *persistQuery(query: QueryType | any, variables: GraphqlQueryVariables | null = null) {
    const headers: Headers = yield call(ApiSagas.getHeaders)
    const response: ApiResponse = yield ApiSagas.call(
      persistedClient.query,
      query?.query ? query : { query },
      variables,
      { ...headers, Authorization: undefined } as Headers
    )
    return response
  }

  static *call(
    method:
      | typeof client.query
      | typeof client.mutate
      | typeof persistedClient.query
      | typeof contentfulClient.query,
    service: ServiceQuery | ServiceMutation,
    variables: GraphqlQueryVariables | null = null,
    headers: Headers
  ) {
    let result: ApiResponse

    try {
      // @ts-ignore
      result = yield call(method, {
        ...defaultConfig,
        ...service,
        ...(variables && { variables }),
        context: {
          ...service?.context,
          headers: {
            ...service?.context?.headers,
            ...headers,
          },
        },
      })
    } catch (e) {
      console.error(`ApiSagas:`, e, variables)

      if (bugsnagClient) {
        bugsnagClient.addMetadata('graphQL', {
          Variables: variables,
          Config: service,
        })
        bugsnagClient.notify(e)
      }

      return {
        errors: e,
      }
    }

    if (result.errors) {
      console.error(`ApiSagas:`, result.errors)
    }

    const resultTransformed: ApiTransformer = yield call(
      ApiSagas.transform,
      result,
      service?.transformer
    )

    return resultTransformed
  }

  static *contentfulQuery(service: ServiceQuery, variables: GraphqlQueryVariables | null = null) {
    let result: ApiResponse

    try {
      // @ts-ignore
      result = yield call(contentfulClient.query, {
        ...defaultConfig,
        ...service,
        ...(variables && { variables }),
        context: {
          ...service?.context,
          headers: {
            ...service?.context?.headers,
          },
        },
      })
    } catch (e) {
      console.error(`ApiSagas:`, e, variables)

      if (bugsnagClient) {
        bugsnagClient.addMetadata('graphQL', {
          Variables: variables,
          Config: service,
        })
        bugsnagClient.notify(e)
      }

      return {
        errors: e,
      }
    }

    if (result.errors) {
      console.error(`ApiSagas:`, result.errors)
    }

    const resultTransformed: ApiTransformer = yield call(
      ApiSagas.transform,
      result,
      service?.transformer
    )

    return resultTransformed
  }

  static *transform(result: ApiResponse, transformer: ApiTransformer) {
    if (!result.data || !transformer) {
      return result
    }

    const data: ApiTransformer = yield call(transformer, result.data as any)

    return { ...result, data } as ApiResponse
  }

  static *loop() {
    yield all([
      //
    ])
  }
}
