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

/*
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
              <li style={{ marginRight: '10px' }}>
                <Link className="App-navbar" to="/">
                  --Default--
                </Link>
              </li>
              <> </>
              <li style={{ marginRight: '10px' }}>
                <Link className="App-navbar" to="/product">
                  --Producto--
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/product" element={<Producto />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}
*/
export default App;
