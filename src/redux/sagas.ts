import { all, fork } from 'redux-saga/effects'

import ApiSagas from './api/sagas'
import AppSagas from './app/sagas'

function* loop() {
  yield all([ApiSagas.loop(), AppSagas.loop()])
}

export default function* rootSaga() {
  yield fork(loop)
}
