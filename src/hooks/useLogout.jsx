import { LOGOUT_USER } from '../redux/form/formTypes';
import { useDispatch } from 'react-redux';

const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER });
  };

  return handleLogout;
};

export default useLogout;
