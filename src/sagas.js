import {
  WIDGET_REQUEST,
  widgetRequestFail,
  widgetRequestSuccess,
} from './actions'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {getWidget} from './api'

function* fetchWidget(action) {
   try {
      const widget = yield call(getWidget, action.payload)
      yield put(widgetRequestSuccess(widget))
   } catch (e) {
      yield put(widgetRequestFail)
   }
}

function* mySaga() {
  // const id = yield select(widgetIdSelector)
  // yield takeLatest(WIDGET_REQUEST, fetchWidget)
  yield takeEvery(WIDGET_REQUEST, fetchWidget)
}

export default mySaga
