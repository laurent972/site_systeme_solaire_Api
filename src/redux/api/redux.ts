import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import * as configuration from '../../configuration'

import { actionTypes, stateTypes } from './types'

type ApiState = {
  headers: stateTypes.Header | Record<string, never>
  refreshing: boolean
}

//
// Initial state
//

const initialState: ApiState = {
  headers: {
    ...(configuration.api.BASIC_AUTH
      ? { authorization: `Basic ${configuration.api.BASIC_AUTH}` }
      : {}),
  },
  refreshing: false,
}

//
// Slice (Actions & Reducers)
//

const slice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setHeaders: (state, action: actionTypes.setHeaders) => {
      const { headers } = action.payload
      state.headers = headers
    },
    setHeader: (state, action: actionTypes.setHeader) => {
      const { header } = action.payload
      state.headers = { ...state.headers, ...header }
    },
    setRefreshing: (state, action: actionTypes.setRefreshing) => {
      state.refreshing = action.payload
    },
  },
})

export const { reducer, actions } = slice

//
// Selectors
//

const root = (state: RootState) => state[slice.name]
const headers = (state: RootState) => root(state).headers
const refreshing = (state: RootState) => root(state).refreshing

export const selectors = {
  headers,
  refreshing,
}
