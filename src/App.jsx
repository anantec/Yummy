
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes }from "react-router-dom"
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import OurFood from './Component/OurFood';
import Home from './Component/Home';
import Aboutus from './Aboutus';
import SignIn from './Component/SignIn';




function App() {
 
  const [count,setCount] = useState(0);


  const handleAdd = ()=>{
    setCount(count+1)
  }


  return (
   
   <>
      <BrowserRouter>
           <Header count={count}/>
       <Routes>
           <Route path="/" element={<Home handleAdd={handleAdd}/>} />
           <Route path="/aboutus" element={<Aboutus/>}/>
           <Route path="/ourfood" element={<OurFood/>}/>
           <Route path="/signin" element={<SignIn/>}/>
       </Routes>
           <Footer/>
      </BrowserRouter>
   </>
  )
}

export default App;
