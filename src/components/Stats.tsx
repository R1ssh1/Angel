import React from 'react';
import { Trophy, Users, Package, Globe } from 'lucide-react';
import './Stats.css';

const stats = [
  { id: 1, icon: <Trophy size={40} />, number: '25+', label: 'YEARS OF EXPERIENCE' },
  { id: 2, icon: <Users size={40} />, number: '1000+', label: 'HAPPY CUSTOMERS' },
  { id: 3, icon: <Package size={40} />, number: '5000+', label: 'PRODUCTS' },
  { id: 4, icon: <Globe size={40} />, number: '30+', label: 'COUNTRIES SERVED' },
];

const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
              {index < stats.length - 1 && <div className="divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
