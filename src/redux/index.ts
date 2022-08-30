import * as apiRedux from './api/redux'
import * as appRedux from './app/redux'

export const actions = {
  app: appRedux.actions,
  api: apiRedux.actions,
}

export const selectors = {
  app: appRedux.selectors,
  api: apiRedux.selectors,
}

export const reducers = {
  app: appRedux.reducer,
  api: apiRedux.reducer,
}
