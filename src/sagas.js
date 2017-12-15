import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {
  WIDGET_REQUEST,
  widgetRequestFail,
  widgetRequestSuccess,
} from './actions'
import {getWidget} from './api'

export function* fetchWidget(action) {
  try {
    const widget = yield call(getWidget, action.payload)
    yield put(widgetRequestSuccess(widget))
  } catch (e) {
    yield put(widgetRequestFail())
  }
}

function* watchWidgetRequest() {
  // const id = yield select(widgetIdSelector)
  // yield takeLatest(WIDGET_REQUEST, fetchWidget)
  yield takeEvery(WIDGET_REQUEST, fetchWidget)
}

export default watchWidgetRequest
