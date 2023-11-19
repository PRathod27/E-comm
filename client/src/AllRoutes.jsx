import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../src/Pages/Home/Home.jsx'
// import Auths from './Pages/Auth/Auths.jsx';
import Auths from './Pages/Auth/Auths.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Auths' element = {<Auths/>}/>
    </Routes>
  )
}

export default AllRoutes