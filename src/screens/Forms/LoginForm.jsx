import useForm from '../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, clearFormData } from '../../redux/form/formActions';
import { motion } from 'framer-motion';
import ModalInfo from '../../components/ModalInfo';

import { useState } from 'react';
import useEmail from '../../hooks/useEmail';

const LoginForm = () => {
  const [values, handleChange] = useForm({ username: '', email: '' }); //aqui el parametro puede ser un objeto, array..
  const [showModalInfo, setShowModalInfo] = useState(false);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [messageModal, setMessageModal] = useState('');
  const [buttonPassword, setButtonPassword] = useState({typePassword: 'password', labelButton: 'Show'});

  const {email, setEmail, error} = useEmail(''); //usando el hook
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const login = (event) => {
    event.preventDefault();
    console.log(values);
    if(validateLogin(values.password)){  
      dispatch(saveFormData(values)); //aqui guardamos en redux todos los valores
      showModalInfoVisible('Bienvenido al Modulo 7');  
    } else {
      dispatch(clearFormData());
      showModalInfoVisible('Password Incorrecto');  
    }
  };

  const hideModalInfo = () => {
    setShowModalInfo(false);
  };

  const showModalInfoVisible = (message) => {
    setShowModalInfo(true);
    setMessageModal(message);
  };

  const validateLogin = (password) => {
    if(password === form.default_password){
      form.userLogedIn=true;
      values.email = email;
      dispatch(saveFormData(values));
      return true;
    } else { 
      form.userLogedIn=false;
      return false;}
  }

  const visiblePassword = () => {
    if(buttonPassword.typePassword === 'password'){
      setButtonPassword({typePassword: 'text', labelButton: 'Hide'});
    } else {
      setButtonPassword({typePassword: 'password', labelButton: 'Show'});
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -70}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <ModalInfo
          visible={showModalInfo}
          message={messageModal}
          onClose={hideModalInfo}
        />
        <form>
          <h5>username: {form.formData.username}</h5>
          <h5>email: {form.formData.email}</h5>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type={buttonPassword.typePassword}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <button type="button" onClick={visiblePassword}>{buttonPassword.labelButton}</button>
          </div>
          <div className="button-container">
            <button type="submit" onClick={login}>Submit</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;
