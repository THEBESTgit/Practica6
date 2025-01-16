import React from 'react';
import FilterableProductTable from '../Components/Product/FilterableProductTable';
import { products } from '../data/products';

const Product = () => {
  return (
    <div>
      <h1>Product Inventory</h1>
      <FilterableProductTable products={products} />
    </div>
  );
};

export default Product;
