
import './styles/App.scss';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Registration from './components/Registeration'
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/registration" element={<Registration />}>
            <Route path="register" element={<Register />} ></Route>
            <Route path="login" element={<Login />} ></Route>
        </Route>
        <Route path="/products" element={<Products/>} ></Route>
      </Routes>




      <Footer />
    </div>);
}








export default App;
