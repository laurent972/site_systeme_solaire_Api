import { all, fork, put, SagaReturnType, select, takeLeading } from 'redux-saga/effects'

import { actions, selectors } from '..'

export default class AppSagas {
  static *init() {
    const isInit: SagaReturnType<typeof selectors.app.isInit> = yield select(selectors.app.isInit)
    yield fork(AppSagas.loadInitialData) // can be forked

    if (!isInit) {
      yield put(actions.app.setIsInit({ isInit: true }))
    }
  }

  static *loadInitialData() {
    yield all([])
  }

  static *loop() {
    yield all([takeLeading('persist/REHYDRATE', this.init)])
  }
}
