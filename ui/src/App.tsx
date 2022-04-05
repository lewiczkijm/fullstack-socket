import React from 'react';
import {Routes, Route, Outlet} from "react-router-dom";
import './App.css';
import {Login} from "./pages/login";
import {User} from "./pages/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/:id" element={<User/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;
