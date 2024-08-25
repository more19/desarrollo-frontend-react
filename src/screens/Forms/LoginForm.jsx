import useForm from '../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, clearFormData } from '../../redux/form/formActions';
import { motion } from 'framer-motion';
import ModalInfo from '../../components/ModalInfo';

import { useState } from 'react';
import useEmail from '../../hooks/useEmail';

import useLogout from '../../hooks/useLogout';

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({
    username: '',
    email: '',
    password: '',
  }); //aqui el parametro puede ser un objeto, array..
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [isLogoutConfirm, setIsLogoutConfirm] = useState(false);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [messageModal, setMessageModal] = useState('');
  const [buttonPassword, setButtonPassword] = useState({
    typePassword: 'password',
    labelButton: 'Show',
  });

  const isAuthenticated = useSelector((state) => state.form.userLogedIn);
  const handleLogout = useLogout();

  const { error, setEmail } = useEmail(''); //usando el hook
  const handleEmail = (event) => {
    handleChange(event);
    setEmail(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    console.log(values);
    if (
      error === '' &&
      values.username != '' &&
      values.password === form.default_password
    ) {
      form.userLogedIn = true;
      dispatch(saveFormData(values)); //aqui guardamos en redux todos los valores
      showModalInfoVisible('Bienvenido al Modulo 7');
    } else if (error != '' || values.username === '') {
      showModalInfoVisible('Usuario o email incorrectos');
    } else if (values.password != form.default_password) {
      showModalInfoVisible('Password Incorrecto');
    }
  };

  const logout = () => {
    showModalInfoVisible('¿Estás seguro de que quieres cerrar sesión?', true);
  };

  const confirmLogout = () => {
    dispatch(clearFormData());
    handleLogout();
    hideModalInfo();
    resetForm();
  };

  const hideModalInfo = () => {
    setShowModalInfo(false);
    setIsLogoutConfirm(false);
  };

  const showModalInfoVisible = (message, isLogoutConfirm = false) => {
    setShowModalInfo(true);
    setMessageModal(message);
    setIsLogoutConfirm(isLogoutConfirm);
  };

  const visiblePassword = () => {
    if (buttonPassword.typePassword === 'password') {
      setButtonPassword({ typePassword: 'text', labelButton: 'Hide' });
    } else {
      setButtonPassword({ typePassword: 'password', labelButton: 'Show' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <ModalInfo
          visible={showModalInfo}
          message={messageModal}
          onClose={hideModalInfo}
          onConfirm={isLogoutConfirm ? confirmLogout : null}
        />
        <form>
          <h3>LOGIN FORM</h3>
          <h5>username: {form.formData.username}</h5>
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
              value={values.email}
              onChange={handleEmail}
            />
            {error && <p className="error-text">{error}</p>}
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
            <button type="button" onClick={visiblePassword}>
              {buttonPassword.labelButton}
            </button>
          </div>
          <div className="button-container">
            <button type="submit" onClick={login}>
              Submit
            </button>
            {isAuthenticated ? (
              <a href="#" onClick={logout}>
                Logout
              </a>
            ) : null}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;
