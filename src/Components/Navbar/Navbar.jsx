import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/blue logo.png';
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { PiUserThin } from "react-icons/pi";

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar' >
        <div className='nav-logo'>
            <img src={logo} width="80" alt="PBF logo"/>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to='/women' style={{ textDecoration: 'none' }}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to='/men' style={{ textDecoration: 'none' }}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        </ul>
        <div className='login'>
            <Link to='/login' style={{ textDecoration: 'none' }}><PiUserThin style={{fontSize: '1.8rem'}}/> </Link>
            <Link to='/cart' style={{ textDecoration: 'none' }}><PiShoppingCartSimpleThin style={{ fontSize: '1.8rem', color: 'black' }}/></Link>
            <div className='cart-count'>0</div>
        </div>
    </div>
  )
}
