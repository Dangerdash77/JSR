import React, { useState } from 'react';
import './Inventory.css';
import { Link } from 'react-router-dom';
import companyLogo from './assets/image.png';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const addProduct = () => {
    if (productName && quantity && imgUrl) {
      setProducts([...products, { id: Date.now(), name: productName, quantity, imgUrl }]);
      setProductName('');
      setQuantity('');
      setImgUrl('');
    } else {
      alert('Please fill all product details');
    }
  };

  return (
    <div className="container">
      <Navbar1 />
    <div className="inventory-page">
      <h2>Inventory Management</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="product-cards">
        {products.length === 0 && <p>No products added yet.</p>}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Inventory;
