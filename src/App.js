import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './component/Navbar';
import { Footer } from './component/footer';
import {Slider}  from './component/slider';
import {Cardd}  from './component/Card';
import ThemeContext from './component/ThemeContext';
import { Login } from './component/login';
import { Posts } from './component/Posts';
import Todos from './component/Todos';
import Profile from "./component/Profile";

import Error from "./component/Error";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from './component/Product';

function App() {

  return (
    <div className="App">
      <ThemeContext>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Slider to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>

      </ThemeContext>
    </div>
  );
}

export default App;
      