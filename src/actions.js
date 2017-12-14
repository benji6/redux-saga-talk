export const WIDGET_REQUEST = 'WIDGET_REQUEST'
export const WIDGET_REQUEST_FAIL = 'WIDGET_REQUEST_FAIL'
export const WIDGET_REQUEST_SUCCESS = 'WIDGET_REQUEST_SUCCESS'

export const widgetRequest = () => ({type: WIDGET_REQUEST})
export const widgetRequestSuccess = payload => ({payload, type: WIDGET_REQUEST_SUCCESS})
export const widgetRequestFail = payload => ({payload, type: WIDGET_REQUEST_FAIL})
