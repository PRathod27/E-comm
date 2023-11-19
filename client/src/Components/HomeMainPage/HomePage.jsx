import React from 'react'
import bag from '../../assets/Main_img.webp'
import { Link } from 'react-router-dom'
import black from '../../assets/black.webp'
import Pink from '../../assets/Pink.webp'
import Must from '../../assets/Must.webp'
import Mint from '../../assets/Mint_Green.webp'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-container-1'>
        <div className="home-container-2" style={{marginTop : '110px'}}>
        <Link to = '/Products'>
            <img src={bag} alt='unavailable' style={{display:'block', maxWidth:'100%', height : 'auto'}}/>
            <p></p>
        </Link>
        <br/>
        <br/>
        <div className='home-container-4'>
            <div className='sub-container'>
            <Link>
              <img src={black} width ="250" height = "200" alt='not visible' style={{padding:'20px'}}/>
              <h4 style={{fontSize:'18px',marginLeft : '75px',"color":'black'}}>Black Wallet</h4>
              </Link>      
            </div>
            <div className='sub-container'>
            <Link>
              <img src={Pink} width ="250" height = "200" alt='not visible' style={{padding:'20px'}}/>
              <h4 style={{fontSize:'18px',marginLeft : '75px',"color":'black'}}>Pink Wallet</h4>
              </Link>      
            </div>
            <div className='sub-container'>
            <Link>
              <img src={Must} width ="250" height = "200" alt='not visible' style={{padding:'20px'}}/>
              <h5 style={{fontSize:'18px',marginLeft : '75px',"color":'black'}}>Pink Wallet</h5>
              </Link>      
            </div>
            <div className='sub-container'>
            <Link>
              <img src={Mint} width ="250" height = "200" alt='not visible' style={{padding:'20px'}}/>
              <h4 style={{fontSize:'18px',marginLeft : '75px',"color":'black'}}>Mustard Wallet</h4>
              </Link>      
            </div>
            <div className='sub-container'>
            <Link>
              <img src={Mint} width ="250" height = "200" alt='not visible' style={{padding:'20px'}}/>
              <h4 style={{fontSize:'18px',marginLeft : '75px',"color":'black'}}>Mint Green Wallet</h4>
              </Link>      
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomePage