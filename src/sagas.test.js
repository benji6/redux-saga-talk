import {call, put, takeEvery} from 'redux-saga/effects'
import {
  WIDGET_REQUEST,
  widgetRequestFail,
  widgetRequestSuccess,
} from './actions'
import watchWidgetRequest, {fetchWidget} from './sagas'
import {getWidget} from './api'

test('fetchWidget fail', () => {
  const action = {payload: 'test-payload'}
  const error = new Error('test error')
  const widget = {id: "0", name: "Widget A"}
  const gen = fetchWidget(action)

  expect(gen.next().done).toBe(false)
  expect(gen.throw(error).value).toEqual(put(widgetRequestFail()))
  expect(gen.next().done).toBe(true)
})

test('fetchWidget success', () => {
  const action = {payload: 'test-payload'}
  const widget = {id: "0", name: "Widget A"}
  const gen = fetchWidget(action)

  expect(gen.next().value).toEqual(call(getWidget, action.payload))
  expect(gen.next(widget).value).toEqual(put(widgetRequestSuccess(widget)))
  expect(gen.next().done).toBe(true)
})

test('watchWidgetRequest', () => {
  const gen = watchWidgetRequest()

  expect(gen.next().value).toEqual(takeEvery(WIDGET_REQUEST, fetchWidget))
  expect(gen.next().done).toBe(true)
})
