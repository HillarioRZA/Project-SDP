import React, { useState} from 'react';
import { PRODUCTS } from "./products";
import { Product } from './pages/shop/product';
import "./ImageFilter.css";

export const ImageFilter =() => {
  const [activeFilter, setActiveFilter] = useState('all');
  const getCategories = (PRODUCTS) => {
    const categories = ['all'];
   
    PRODUCTS.forEach((product) => {
       if (!categories.includes(product.categori)) {
         categories.push(product.categori);
       }
    });
   
    return categories;
   };
   
   const categories = getCategories(PRODUCTS);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="image-filter-container">
      <div className='Title'>Categories</div>
      <div className="filter-buttons" id="filter-buttons">
        {categories.map((filter) => (
          <button
            key={filter}
            className={`btn-filter ${activeFilter === filter ? 'active-filter' : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter === 'all' ? 'Show all' : filter}
          </button>
        ))}
      </div>
      <div className="filterable-cards" id="filterable-cards">
        {PRODUCTS.map((product) => (
          <div
          key={product.id}
          className={`card-filter ${activeFilter === 'all' || activeFilter === product.categori ? '' : 'hide'}`}
          >
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

