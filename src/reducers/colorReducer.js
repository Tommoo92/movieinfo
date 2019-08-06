import { CHANGE_COLOR } from "../constants/action-types";
import {combineReducers} from 'redux';

  function colorReducer(state = '', {type, payload}) {
    if (type === CHANGE_COLOR) {
        return payload.value
      }
      return state;
  };

  const allReducers = combineReducers({
    color: colorReducer
  })
  export default allReducers;