import React, { useRef } from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  const productListRef = useRef();
  const handleProductAdded = () => {
    if (productListRef.current) {
      productListRef.current.fetchProducts(); 
    }
  };
  return (
    <div>
      <h1>Add a Product</h1>
      <AddProduct onProductAdded={handleProductAdded} />
      <h1>Product List</h1>
      <ProductList ref={productListRef} />
    </div>
  );
};

export default App;
