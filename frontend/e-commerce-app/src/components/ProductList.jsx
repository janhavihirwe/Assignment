import React, { useEffect, useState } from 'react';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://assignment-hvbw.onrender.com/product/get-products');
        const data = await response.json(); 
        console.log(data)
        setProducts(data.products); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            {product.img && <img src={product.img} alt={product.name} style={{maxWidth:"100px",maxHeight:"100px"}}></img>}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
