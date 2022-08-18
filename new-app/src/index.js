import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from "./Components/About";
import Contact from "./Components/Contact"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route element={<App/>} path="/"></Route>
        <Route element={<Contact/>} path="Contact"></Route>
        <Route element={<About/>} path="About"></Route>
      </Routes>
    </BrowserRouter>
);

