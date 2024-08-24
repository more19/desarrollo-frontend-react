import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
  formData: {
    username: '',
    email: '',
    password: '',
  },
  default_password: 'mod7ReactUSIP',
  userLogedIn: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: {
          //notacion para hacer merge de 2 objetos y q no lo sobreescriba
          ...state.formData,
          ...action.payload,
        },
      };
    case CLEAR_FORM_DATA:
      return {
        ...state,
        formData: {
          username: '',
          email: '',
          password: '',
        },
      };
    default:
      return state;

    //aqui podriamos tener varios case
  }
};
export default formReducer;
