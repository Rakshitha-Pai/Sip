import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Courses from './Components/Course';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';

function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/course" element={<Courses/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;