import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar,FaRegHeart,FaRupeeSign } from "react-icons/fa";
import "../ProductCard/Productcard.css";


export const Productcard = ({userProduct}) => {
  return (
    <div className="card-for-ecommerce pd-1 card-with-shadow">
                <div className="card-image-holder">
                  <Link to="">
                    <img src={userProduct.image} className="card-image" alt="product-image" />
                  </Link>
                  {userProduct.isSoldOut && (
                    <span className="sold-out-badge">Sold out</span>
                  )}
                </div>

                <div className="card-body">
                  <span className="card-title fw-300">{userProduct.productName}</span>
                  <p className="card-detail">by {userProduct.brand}</p>
                  <span className="discount"><FaRupeeSign className="rupees-sign"/> {userProduct.sellingPrice}</span>                  
                  <span className="price"><FaRupeeSign className="rupees-sign" />{userProduct.originalPrice}</span>                 
                  <p className="discountTag">({userProduct.discountOffer})</p>
                  <span className="rating-badge estee-badge">
                    <div
                      className={
                        userProduct.isRatingGood
                          ? "rating-container bg-green border-round"
                          : "rating-container bg-yellow border-round"
                      }
                    >
                      <div className="rating-with-icon">
                        {userProduct.rating}
                        <FaStar />
                      </div>
                    </div>
                  </span>
                  <div className="btns-in-flex"> 
                  <span>             
                      <Link to="/cart">
                        <button className={userProduct.isSoldOut?"link-btn btn-lg btn-outline border-round cursor-drop":"link-btn btn-lg btn-outline border-round cursor-pointer "}>
                           {userProduct.isSoldOut ? "NOTIFY ME" : "ADD TO CART"}
                        </button>
                      </Link>                       
                    </span>  
                    <span>                     
                        <Link to="/wishList">
                          <FaRegHeart className='btn-wishlist'/>
                        </Link>                      
                    </span>
                  </div>
                </div>
              </div>
  )
}

