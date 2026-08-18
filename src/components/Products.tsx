import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Products.css';

const productList = [
  { id: 1, name: 'PIPES & TUBES' },
  { id: 2, name: 'FITTINGS & FLANGES' },
  { id: 3, name: 'PLATES & SHEETS' },
  { id: 4, name: 'BARS & RODS' },
  { id: 5, name: 'STRUCTURAL' },
  { id: 6, name: 'RAW MATERIALS' },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <h4 className="section-subtitle">OUR PRODUCTS</h4>
        <h2 className="section-heading">WIDE RANGE. SUPERIOR QUALITY.</h2>
        
        <div className="product-grid">
          {productList.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-placeholder"></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <ArrowRight size={18} className="product-arrow" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#all-products" className="btn btn-outline-dark">VIEW ALL PRODUCTS</a>
        </div>
      </div>
    </section>
  );
};

export default Products;
