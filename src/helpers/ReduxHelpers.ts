import { ActionCreator, PayloadAction } from '@reduxjs/toolkit'

import { GraphqlErrors, transformErrors } from './GraphqlHelpers'

export type ServiceProps<Data, Params> = {
  pending: boolean
  success: boolean
  complete: boolean
  errors: GraphqlErrors | null
  data: Data | null
  params: Params | null
}

export type ServiceRequestAction<T> = PayloadAction<T | undefined>
export type ServiceSuccessAction = PayloadAction<any | undefined>
export type ServiceErrorAction = PayloadAction<any | undefined>

export const getServiceProps = (): ServiceProps<any, any> => ({
  pending: false,
  success: false,
  complete: false,
  errors: null,
  data: null,
  params: null,
})

export const getServiceReducers = <Params, S extends string>(id: S) => {
  return {
    [`${id}Request`]: (state: any, action: ServiceRequestAction<Params>) => {
      const params = action.payload
      state[id] = {
        pending: true,
        success: false,
        complete: false,
        errors: null,
        data: null,
        params,
      }
    },
    [`${id}Success`]: (state: any, action: ServiceSuccessAction) => {
      const data = action.payload
      state[id] = {
        ...state[id],
        pending: false,
        success: true,
        complete: true,
        errors: null,
        data,
      }
    },
    [`${id}Error`]: (state: any, action: ServiceErrorAction) => {
      const errors = transformErrors(action.payload)
      state[id] = {
        ...state[id],
        pending: false,
        success: false,
        complete: true,
        data: null,
        errors,
      }
    },
    [`${id}Reset`]: (state: any) => {
      state[id] = getServiceProps()
    },
  } as {
    [key in
      | `${typeof id}Request`
      | `${typeof id}Success`
      | `${typeof id}Error`
      | `${typeof id}Reset`]: ActionCreator<any>
  }
}
