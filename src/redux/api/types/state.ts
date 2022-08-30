import type { ApiTransformer } from '../sagas'

export type Header = {
  [key: string]: string
}

export type ServiceQuery = {
  fetchPolicy?: string
  errorPolicy?: string
  query: import('graphql').DocumentNode
  transformer: any
  context?: any
}

export type ServiceMutation = {
  fetchPolicy?: string
  errorPolicy?: string
  mutation: import('graphql').DocumentNode
  transformer: any
  context?: any
}

export type QueryType = {
  query: any
  transformer?: ApiTransformer | undefined
}
export type MutationType = {
  mutation: any
  transformer?: ApiTransformer | undefined
}
export type GraphqlQueryVariables = {
  [key: string]: any
}

export type ApiResponse<Service extends ServiceMutation | ServiceQuery = any> = {
  data: ReturnType<Service['transformer']>
  errors: any
}
