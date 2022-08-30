import { PayloadAction } from '@reduxjs/toolkit'

import type { Header } from './state'

export type setHeaders = PayloadAction<{
  headers: Header | Record<string, never>
}>
export type setHeader = PayloadAction<{
  header: Header
}>
export type setRefreshing = PayloadAction<boolean>
