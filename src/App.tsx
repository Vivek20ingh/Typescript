
import React, { useState } from "react";
import {Form }from "./Component/Form";
import  NavBar  from "./Component/NavBar/NavBar";
import Listview from "./Component/Listview";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//<Form />

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/Form" element={<Form />} />
        <Route path="/" element={<Navigate replace to="/Form" />} />
        <Route path="/List" element={<Listview />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
