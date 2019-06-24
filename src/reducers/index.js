import { combineReducers } from 'redux';
import perfilCarteiraReducer from './perfilCarteiraReducer';

export default combineReducers({
  perfilCarteira: perfilCarteiraReducer
});
