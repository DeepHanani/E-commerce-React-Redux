import React, { useState } from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

  const [input, setInput] = useState("")

  const prod = useSelector(y => y.product);

  const naviget = useNavigate()


  const serchInfo = (e)=>{
         
    setInput(e.target.value);

    console.log(e.target.value)
  }

  const addItem = ()=>{

    naviget("/Cartitems")

  }
  

  return (

    <div class="header">
      <div class="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTervYQ39ToB-6vICysXF8z4j9bbqV7tuB7tcCmX1q-dpxRI1BxtC_1QDrV2Bqakb6vkVM&usqp=CAU"
          alt=""
        />
      </div>

      <div class="navbar">
        <ul>
          <li>Home</li>
          <li><Link to = "/about" className='contact'>About</Link></li>
          <li><Link to="/services" className='contact'>Services</Link></li>
          <li><Link to="/contact" className='contact'>Contact</Link></li>
          <li><Link to="/Login" className='contact'>Login</Link></li>
          <li class="login">
            <Link to="/signup" className='contact'>signUp</Link>
          </li>
          <li class="login">
            {/* <a class="link" >{prod.cart.length}</a> */}
            <i  onClick={addItem} class="fa-solid fa-cart-shopping" style={{color: "#2cd515"}} >{prod.cart.length}</i>
          </li>

          {/* <input
            type="search"
            class="serchbox"
            placeholder="search items"
            id="searchThem"
            onChange={serchInfo}
          />
          <input
            type="button"
            value="serch"
            class="searchBtn"
            
            
          /> */}
        </ul>
      </div>
    </div>
  )
}
