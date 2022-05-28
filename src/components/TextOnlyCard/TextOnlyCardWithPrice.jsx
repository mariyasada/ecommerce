import React from "react";
import { BiMinus, BiRupee } from "react-icons/bi";
import { FaRupeeSign, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartandWishList } from "../../context/CartAndWishlist-context";

export const TextOnlyCardWithPrice = () => {
  const { cartState, getCartItemCount } = useCartandWishList();
  const { cartItem } = cartState;
  const itemsInCart = getCartItemCount(cartItem);
  const DeliveryCharges = 50;

  // calculating total original price
  const totalOriginalPrice = cartItem.reduce(
    (acc, currentItem) => currentItem.qty * currentItem.originalPrice + acc,
    0
  );
  //  calculating total sellingPrice
  const totalSellingPrice = cartItem.reduce(
    (acc, currentItem) => currentItem.qty * currentItem.sellingPrice + acc,
    0
  );
  // calculating Bag discount (original-selling)
  const BagDiscount = totalOriginalPrice - totalSellingPrice;

  //  billing
  const GrandTotal = totalSellingPrice + DeliveryCharges;

  return (
    <div className="text-only-card card-with-shadow">
      <h2 className="text-onlycard-heading">PAYMENT DETAILS</h2>
      <div className="card-body">
        <hr />
        <div className="item-price-detail">
          <p className="card-detail">
            Bag Total ({getCartItemCount(cartItem)}
            {itemsInCart === 1 ? "item" : "items"})
          </p>
          <span className="discount">
            <FaRupeeSign className="rupees-sign-cart" />
            {totalOriginalPrice}
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail"> Bag Discount</p>
          <span className="discount">
            <BiMinus />
            <FaRupeeSign className="rupees-sign-cart" />
            {BagDiscount}
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail">Sub Total</p>
          <span className="discount">
            <FaRupeeSign className="rupees-sign-cart" />
            {totalSellingPrice}
          </span>
        </div>
        <div className="item-price-detail">
          <p className="card-detail">Delivery Charges</p>
          <span className="discount">
            <FaRupeeSign className="rupees-sign-cart" />
            {DeliveryCharges}
          </span>
        </div>
        <hr />
        <div className="item-price-detail">
          <p className="card-detail fw-bold">Grand Total</p>
          <span className="discount fw-bold">
            <FaRupeeSign className="rupees-sign-cart" />
            {GrandTotal}
          </span>
        </div>

        <div className="saving-quote">
          <p className="card-detail">
            You will save <FaRupeeSign className="rupees-sign-cart" />
            {BagDiscount} on this order.
          </p>
          <span>
            <Link to="/checkout">
              <button className="link-btn border-round btn-proceed">
                PROCEED
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
