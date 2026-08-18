import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Products.css';

const productList = [
  { id: 1, name: 'PIPES & TUBES', image: '/products/nickel-alloy-201-pipes.webp' },
  { id: 2, name: 'FITTINGS & FLANGES', image: '/products/ss-duplex-forged.webp' },
  { id: 3, name: 'PLATES & SHEETS', image: '/products/ss-monel-400-plates.webp' },
  { id: 4, name: 'BARS & RODS', image: '/products/ss-alloy-28-roundbars.webp' },
  { id: 5, name: 'STRUCTURAL', image: '/products/angles-channels3.jpg' },
  { id: 6, name: 'RAW MATERIALS', image: '/products/steel-wire.png' },
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
              <div className="product-img-container">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
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
