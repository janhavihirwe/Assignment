import React, { useRef } from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  const productListRef = useRef();

  // Method to call when a new product is added
  const handleProductAdded = () => {
    if (productListRef.current) {
      productListRef.current.fetchProducts(); // Call fetchProducts to refresh the list
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
