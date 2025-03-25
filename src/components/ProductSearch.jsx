import React, { useState } from 'react';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description of product 1' },
  { id: 2, name: 'Product 2', description: 'Description of product 2' },
  { id: 3, name: 'Product 3', description: 'Description of product 3' },
  { id: 4, name: 'Product 4', description: 'Description of product 4' },
];

function ProductSearch() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle change in search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for products..."
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '5px',
          margin: '20px 0',
          border: '1px solid #ccc',
        }}
      />
      
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
