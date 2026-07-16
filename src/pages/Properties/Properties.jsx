import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { featuredProperties } from '../../data/mockData';
import './Properties.css';
const Properties = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    setSearchParams(new URLSearchParams(location.search));
  }, [location.search]);

  const searchedLocation = searchParams.get('location') || '';
  const searchedType = searchParams.get('type') || '';
  const searchedPrice = searchParams.get('price') || '';

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(location.search);
    if (value && value !== 'Any Property Type' && value !== 'Any Price') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    navigate(`/properties?${params.toString()}`);
  };

  const filteredProperties = featuredProperties.filter(p => {
    let matches = true;
    if (searchedType) {
      matches = p.type === searchedType;
    }
    if (searchedLocation) {
      matches = matches && p.location.toLowerCase().includes(searchedLocation.toLowerCase());
    }
    return matches;
  });

  return (
    <div className="properties-page">
      <div className="container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <h1 className="animate-fade-in-up">Property Search Results</h1>
        <div className="properties-filter-bar animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="filter-group">
            <label>Location</label>
            <input 
              type="text" 
              placeholder="Anywhere"
              defaultValue={searchedLocation}
              onBlur={(e) => handleFilterChange('location', e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleFilterChange('location', e.target.value)}
            />
          </div>
          <div className="filter-divider"></div>
          <div className="filter-group">
            <label>Property Type</label>
            <select 
              value={searchedType}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">Any Property Type</option>
              <option value="house">House</option>
              <option value="condo">Condominium</option>
              <option value="townhouse">Townhouse</option>
              <option value="commercial">Commercial</option>
              <option value="vacation">Vacation Home</option>
              <option value="lot">Lot</option>
            </select>
          </div>
          <div className="filter-divider"></div>
          <div className="filter-group">
            <label>Price Range</label>
            <select 
              value={searchedPrice}
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              <option value="">Any Price</option>
              <option value="0-500">Under $500k</option>
              <option value="500-1000">$500k – $1M</option>
              <option value="1000-2000">$1M – $2M</option>
              <option value="2000+">$2M+</option>
            </select>
          </div>
        </div>

        <div className="properties-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0' }}>
              <h3>No properties found</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Try adjusting your search filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
