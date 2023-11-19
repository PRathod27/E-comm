import React from 'react'
import './Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import bag from '../../assets/Bag_photo.jpeg'
// import { setCurrentUser } from '../../actions/currentuser'
// import { useEffect } from 'react';
// import decode from 'jwt-decode'
import Avatar from '../Avatar/Avatar';
import ecomm from '../../assets/ecomm.png'

const Navbar = () => {


 

  return (
      <div className='navbar'>
        <div className="navbar-container">
        <Link to = '/' className='nav-item nav-logo'>
          <img src={ecomm} alt = 'Logo' width= '100px'/>
        </Link>
        <Link to = '/About' className='nav-item nav-btn' style={{fontSize: '20px'}}>Bags</Link>
        <Link to = '/Products' className='nav-item nav-btn' style={{fontSize: '20px'}}>Inventory</Link>
        <Link to = '/Consult' className='nav-item nav-btn' style={{fontSize: '20px'}}>Contact us</Link>
        <Link to = '/Auths'  style={{fontSize:'18px', cursor: 'pointer', borderRadius:'4px' ,padding : '7px 13px', backgroundColor : '#28a79c1f',
         color :'black'}}>Log In</Link>
        </div>
        <br/>
    </div>
  )
}

export default Navbar