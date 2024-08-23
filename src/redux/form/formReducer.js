import { SET_FORM_DATA } from './formTypes';

const initialState = {
  formData: {
    username: '',
    email: '',
  },
  password: 'mod7',
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
    default:
      return state;

    //aqui podriamos tener varios case
  }
};
export default formReducer;
