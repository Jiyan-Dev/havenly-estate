import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);

  return (
    <div className="property-card" onClick={() => navigate(`/properties/${property.id}`)}>
      <div className="property-card-img">
        <img src={property.image} alt={property.title} loading="lazy" />
        <div className="property-badge">{property.status}</div>
        <button
          className={`save-btn ${saved ? 'saved' : ''}`}
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          aria-label="Save property"
        >
          <Heart size={18} fill={saved ? '#D4AF37' : 'none'} />
        </button>
      </div>

      <div className="property-card-body">
        <div className="property-price number">{formatPrice(property.price)}</div>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>
        <div className="property-meta">
          <span><Bed size={14} /> {property.beds} Beds</span>
          <span><Bath size={14} /> {property.baths} Baths</span>
          <span><Square size={14} /> {property.area} sqm</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
