import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { featuredProperties } from '../../data/mockData';
import { Heart, MapPin, Bed, Bath, Square, ArrowLeft, X, Calendar, Clock } from 'lucide-react';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [saved, setSaved] = useState(false);
  const [showTourModal, setShowTourModal] = useState(false);
  const [tourScheduled, setTourScheduled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProperty = featuredProperties.find(p => p.id === parseInt(id));
    if (foundProperty) {
      setProperty(foundProperty);
    }
  }, [id]);

  if (!property) {
    return (
      <div className="property-details-page not-found">
        <div className="container" style={{ paddingTop: '120px', minHeight: '80vh', textAlign: 'center' }}>
          <h2>Property not found</h2>
          <button onClick={() => navigate('/properties')} className="btn btn-primary" style={{ marginTop: '20px' }}>
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    setTourScheduled(true);
    setTimeout(() => {
      setTourScheduled(false);
      setShowTourModal(false);
    }, 3000);
  };

  return (
    <div className="property-details-page">
      {showTourModal && (
        <div className="tour-modal-overlay">
          <div className="tour-modal">
            <button className="close-modal-btn" onClick={() => setShowTourModal(false)}>
              <X size={24} />
            </button>
            {tourScheduled ? (
              <div className="tour-success">
                <h3>Tour Scheduled!</h3>
                <p>We've sent a confirmation to your email. See you soon!</p>
              </div>
            ) : (
              <>
                <h3>Schedule a Tour</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Select a date and time to visit {property.title}.</p>
                <form onSubmit={handleScheduleSubmit}>
                  <div className="form-group">
                    <label><Calendar size={16} style={{ display: 'inline', marginRight: '5px' }}/> Date</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label><Clock size={16} style={{ display: 'inline', marginRight: '5px' }}/> Time</label>
                    <input type="time" required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Confirm Schedule
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <div className="container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <button onClick={() => navigate(-1)} className="back-btn animate-fade-in-up">
          <ArrowLeft size={20} /> Back
        </button>

        <div className="property-details-content animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="property-hero-img">
            <img src={property.image} alt={property.title} />
            <div className="property-badge large">{property.status}</div>
            <button
              className={`save-btn large ${saved ? 'saved' : ''}`}
              onClick={() => setSaved(!saved)}
              aria-label="Save property"
            >
              <Heart size={24} fill={saved ? '#D4AF37' : 'none'} />
            </button>
          </div>

          <div className="property-info-section">
            <div className="property-header">
              <div>
                <h1 className="property-title-large">{property.title}</h1>
                <div className="property-location-large">
                  <MapPin size={18} />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="property-price-large number">
                {formatPrice(property.price)}
              </div>
            </div>

            <div className="property-meta-large">
              <div className="meta-item">
                <Bed size={24} />
                <span><strong>{property.beds}</strong> Beds</span>
              </div>
              <div className="meta-item">
                <Bath size={24} />
                <span><strong>{property.baths}</strong> Baths</span>
              </div>
              <div className="meta-item">
                <Square size={24} />
                <span><strong>{property.area}</strong> sqm</span>
              </div>
              <div className="meta-item type">
                <span>Type: <strong>{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</strong></span>
              </div>
            </div>

            <div className="property-description">
              <h3>Description</h3>
              <p>
                This stunning {property.type} located in {property.location} offers a perfect blend of luxury and comfort.
                Featuring {property.beds} spacious bedrooms and {property.baths} well-appointed bathrooms across {property.area} square meters of living space. 
                Don't miss the opportunity to make this beautiful property your new home. Contact our agents today for a viewing!
              </p>
            </div>

            <div className="action-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Contact Agent</button>
              <button className="btn btn-outline" onClick={() => setShowTourModal(true)}>Schedule a Tour</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
