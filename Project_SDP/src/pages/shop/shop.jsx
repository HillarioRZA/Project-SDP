import React from "react";
import {useSelector} from "react-redux"
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const productList = useSelector((state) => state.product.PRODUCTS)

  return (
    <div className="shop">
      <div className="shopTitle">
      </div>

      <div className="products">
        {productList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};