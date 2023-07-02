import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from './Navbar';
import Footer from './Footer';
// Switch is replaced with Routes in "react-router-dom" version 6
//Redirect is replaced with Navigate in "react-router-dom version 6"
// Routes only allow Route

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes basename="/myfirstReactWebsite">
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/service' element={<Service/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route path='*' element = {<Navigate to = "/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;