import { combineReducers } from 'redux';
//aca importamos todos los reducers
import defaultReducer from './default/defaultReducer';
import productReducer from './product/productReducer';
import formReducer from './form/formReducer';

const rootReducer = combineReducers({
  default: defaultReducer, //cada reducer se añade en este objeto como un valor, con su propia clave
  product: productReducer,
  form: formReducer,
});

export default rootReducer;
