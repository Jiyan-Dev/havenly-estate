import React from 'react';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { agents } from '../../data/mockData';
import './Agents.css';

const Agents = () => {
  return (
    <div className="agents-page">
      <div className="container">
        <div className="agents-header animate-fade-in-up">
          <h1>Meet Our Experts</h1>
          <p>
            Our team of licensed professionals combines local expertise with global reach to help you find the perfect property.
          </p>
        </div>

        <div className="agents-page-grid">
          {agents.map((agent, index) => (
            <div 
              key={agent.id} 
              className="agent-profile-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="agent-profile-image-wrap">
                <img src={agent.photo} alt={agent.name} className="agent-profile-image" />
              </div>
              <div className="agent-profile-content">
                <h3>{agent.name} <CheckCircle2 size={18} color="var(--accent)" style={{ display: 'inline', verticalAlign: 'text-bottom' }}/></h3>
                <p className="specialization">{agent.specialization}</p>
                
                <div className="agent-stats">
                  <div className="agent-stat-item">
                    <span className="stat-value">{agent.sold}</span>
                    <span className="stat-label">Properties Sold</span>
                  </div>
                  <div className="agent-stat-item">
                    <span className="stat-value">5.0</span>
                    <span className="stat-label">Rating</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-outline agent-contact-btn" style={{ flex: 1 }}>
                    <Phone size={16} /> Call
                  </button>
                  <button className="btn btn-primary agent-contact-btn" style={{ flex: 1 }}>
                    <Mail size={16} /> Email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
