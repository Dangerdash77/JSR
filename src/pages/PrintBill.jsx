import React, { useState } from 'react';
import './PrintBill.css';
import Footer from './components/Footer';
import jsPDF from 'jspdf';
import companyLogo from './assets/image.png'; // placeholder logo image
import Navbar1 from './components/Navbar1';

const PrintBill = () => {
  const [billDetails, setBillDetails] = useState({
    companyName: '',
    customerName: '',
    products: [{ name: '', quantity: '', price: '' }],
  });

  const handleInputChange = (index, field, value) => {
    const newProducts = [...billDetails.products];
    newProducts[index][field] = value;
    setBillDetails({ ...billDetails, products: newProducts });
  };

  const addProductField = () => {
    setBillDetails({ ...billDetails, products: [...billDetails.products, { name: '', quantity: '', price: '' }] });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Bill for ${billDetails.companyName}`, 10, 10);
    doc.text(`Customer: ${billDetails.customerName}`, 10, 20);

    let y = 30;
    doc.text('Product | Quantity | Price', 10, y);
    y += 10;

    billDetails.products.forEach((prod, index) => {
      doc.text(`${prod.name} | ${prod.quantity} | ₹${prod.price}`, 10, y + index * 10);
    });

    doc.save('bill.pdf');
  };

  return (
    <div className="container">
      <Navbar1 />
      <div className="printbill-page">
        <h2>Print Bill</h2>
        <input
          type="text"
          placeholder="Company Name"
          value={billDetails.companyName}
          onChange={(e) => setBillDetails({ ...billDetails, companyName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={billDetails.customerName}
          onChange={(e) => setBillDetails({ ...billDetails, customerName: e.target.value })}
        />
        <div className="products-section">
          <h3>Products</h3>
          {billDetails.products.map((product, idx) => (
            <div key={idx} className="product-inputs">
              <input
                type="text"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) => handleInputChange(idx, 'name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={product.quantity}
                onChange={(e) => handleInputChange(idx, 'quantity', e.target.value)}
              />
              <input
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) => handleInputChange(idx, 'price', e.target.value)}
              />
            </div>
          ))}
          <button onClick={addProductField}>Add Another Product</button>
        </div>
        <button className="generate-btn" onClick={generatePDF}>Generate PDF</button>
      </div>
      <Footer />
    </div>
  );
};

export default PrintBill;
