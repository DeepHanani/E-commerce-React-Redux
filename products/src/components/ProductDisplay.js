import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, getData } from '../action/productAction';
import axios from 'axios'
import './Products.css'
import Header from './header/Header';
import BackgroundImg from './background/BackgroundImg';
import Footer from './footer.js/Footer';

export default function ProductDisplay() {

  const productData = useSelector(y => y.product)

  // const cartItems = useSelector(y => y.product.cart)
  // console.log(cartItems,"cartItems")

  const dispatch = useDispatch();

  // console.log(productData);



  useEffect(() => {

    axios.get("https://fakestoreapi.com/products", {
      method: "GET",
    })
      .then((response) => {

        dispatch(getData(response))
        // console.log(response.data);
      })


  }, [])


  const handleAddToCart = (value) => {

    dispatch(addTocart(value))

  }

  
  return (

    <>
      <Header />
      <BackgroundImg />

      <div class="title">

        <h1 class="secound">Our  Exclusiv  Products</h1>
       
      </div>

    

      <div className="main">
        

        {
          productData?.data?.data?.map((value) =>{
            return (
              <div className="post-1">
                <img src={value.image} alt="" />
                <div className="part-1">
                  <div className="desc">
                    <p className="name">{value.title}</p>
                  </div>

                </div>
                <div className="part-2">
                  <div className="categorys">
                    {/* <p className="category">{value.category}</p> */}
                    <button className='addtocartBtn' onClick={() => { handleAddToCart(value) }}>Add to cart</button>
                  </div>
                  <div className="pricies">
                    <p className="price">{value.price}</p>
                  </div>
                </div>
                <hr />
                
                <p className="lorem">{value.description.slice(0, 20)}</p>
              </div>


            )

          })
        }
      </div>

      <Footer />

    </>
  )
}
