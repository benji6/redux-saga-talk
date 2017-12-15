import {WIDGET_REQUEST_SUCCESS} from '../actions'

const initialState = {}

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case WIDGET_REQUEST_SUCCESS:
      return payload
    default:
      return state
  }
}
