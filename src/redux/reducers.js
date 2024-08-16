import { combineReducers } from 'redux';
//aca importamos todos los reducers
import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers({
  default: defaultReducer, //cada reducer se añade en este objeto como un valor, con su propia clave
  //ejemplo:
  //producto: productoReducer,
});

export default rootReducer;
