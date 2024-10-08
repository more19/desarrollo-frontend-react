import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const form = useSelector((state) => state.form);
  const isAuthenticated = useSelector((state) => state.form.userLogedIn);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/default">Default</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/forms">Login Forms</Link>
        </li>
        {isAuthenticated ? (
          <li className="login-user">
            <span>
              {' '}
              Bienvenido {form.formData.username}: {form.formData.email}
            </span>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
