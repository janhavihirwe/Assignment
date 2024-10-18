import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img,setImg]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {img,name, price, description };
  
    try {
      const response = await axios.post(
        'https://assignment-hvbw.onrender.com/product/add-products',
        newProduct,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Product added successfully!');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Image URL"
        required
      />
      <br/>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <br/>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <br/>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <br/>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
