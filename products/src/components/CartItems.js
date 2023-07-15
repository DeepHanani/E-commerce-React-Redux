import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./CartItems.css";
import { dic, inc, remv } from '../action/productAction';
import { useNavigate } from 'react-router-dom';


export default function CartItems() {

  

  const cartProd = useSelector(y => y.product.cart);
  const dispatch = useDispatch()

  const navigate = useNavigate();

  console.log(cartProd, "lllll");


  const increment = (test) => {

    dispatch(inc(test));
  
  }

  const dicrement = (test) => {
    

    if(test.count>1){
      dispatch(dic(test));
    }
   
  }


  const remove = (test)=>{
      dispatch(remv(test))
  }

  const backHome = ()=>{
    navigate('/product')
  }


  
  return (

    <>

    <button className='backBtn' onClick={backHome}>Back</button>


    <div className='cartContainer'>
      {
        cartProd.map((test) => {

          return (

            <div className='miniContainer'>
              <div className='imgCointainer'>
                <img className='productImg' src={test.item.image} />
                <p>{test.item.title}</p>
              </div>

              <div className='BtnCointainer'>
                <div>
                  <button className='incBtn' onClick={()=>increment(test)}>+</button>
                  <span>{test.count}</span>
                  <button className='dicBtn' onClick={()=>dicrement(test)}>-</button>
                  <button className="removeBtn" onClick={()=>remove(test)}>Remove</button>
                  <h3>Total price : {test.count * test.item.price}</h3>
                </div>

              </div>
            </div>

          )

        })
      }

    </div>

</>
  )
}
