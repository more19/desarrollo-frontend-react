//import logo from './logo.svg';

import './App.css';
/*import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Default from './screens/Default';
import Producto from './screens/Product';*/

import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Aquí va el contenido de la app */}
      {/*<Default />
      <Producto />*/}
      {/*<OpenLink href="https://www.google.com">Visitar Google</OpenLink>*/}
    </div>
  );
}
export default App;
