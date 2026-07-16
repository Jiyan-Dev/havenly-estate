import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  CheckCircle2,
  Users,
  Sparkles,
  Star,
  ArrowRight,
  ChevronRight,
  Home as HomeIcon,
  Building2,
  Building,
  Briefcase,
  Trees,
  Palmtree,
} from "lucide-react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./Home.css";
import {
  featuredProperties,
  agents,
  testimonials,
  categories,
} from "../../data/mockData";

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categoryIcons = {
    Houses: <HomeIcon size={42} strokeWidth={1.2} color="var(--primary)" />,
    Condominiums: (
      <Building2 size={42} strokeWidth={1.2} color="var(--primary)" />
    ),
    Townhouses: <Building size={42} strokeWidth={1.2} color="var(--primary)" />,
    Commercial: (
      <Briefcase size={42} strokeWidth={1.2} color="var(--primary)" />
    ),
    Lots: <Trees size={42} strokeWidth={1.2} color="var(--primary)" />,
    "Vacation Homes": (
      <Palmtree size={42} strokeWidth={1.2} color="var(--primary)" />
    ),
  };

  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const listingsCount = useCountUp(12000, 2000, statsVisible);
  const agentsCount = useCountUp(450, 2000, statsVisible);
  const citiesCount = useCountUp(80, 2000, statsVisible);
  const satisfiedCount = useCountUp(98, 2000, statsVisible);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (propertyType) params.append("type", propertyType);
    if (priceRange) params.append("price", priceRange);
    navigate(`/properties?${params.toString()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-tag animate-fade-in-up">
            {" "}
            Trusted by 50,000+ families
          </div>
          <h1 className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Find More Than a House.
            <br />
            <em>Find Your Place.</em>
          </h1>
          <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Browse premium homes, condos, apartments, and commercial spaces
            tailored to your lifestyle.
          </p>

          <div
            className="search-bar animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="search-input-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="City, neighborhood..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="divider"></div>
            <div className="search-input-group">
              <label>Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="condo">Condominium</option>
                <option value="townhouse">Townhouse</option>
                <option value="commercial">Commercial</option>
                <option value="vacation">Vacation Home</option>
                <option value="lot">Lot</option>
              </select>
            </div>
            <div className="divider"></div>
            <div className="search-input-group">
              <label>Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">Any Price</option>
                <option value="0-500">Under $500k</option>
                <option value="500-1000">$500k – $1M</option>
                <option value="1000-2000">$1M – $2M</option>
                <option value="2000+">$2M+</option>
              </select>
            </div>
            <button
              className="btn btn-accent search-submit"
              onClick={handleSearch}
            >
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      <section className="stats-bar" ref={statsRef}>
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number number">
              {listingsCount.toLocaleString()}+
            </span>
            <span className="stat-label">Active Listings</span>
          </div>
          <div className="stat-item">
            <span className="stat-number number">{agentsCount}+</span>
            <span className="stat-label">Licensed Agents</span>
          </div>
          <div className="stat-item">
            <span className="stat-number number">{citiesCount}+</span>
            <span className="stat-label">Cities Covered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number number">{satisfiedCount}%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <p className="section-overline">Browse by Type</p>
            <h2>What Are You Looking For?</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="category-card"
                onClick={() => navigate(`/properties?type=${cat.type}`)}
              >
                <span className="category-icon">
                  {categoryIcons[cat.label]}
                </span>
                <span className="category-label">{cat.label}</span>
                <ChevronRight size={16} className="category-arrow" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <p className="section-overline">Handpicked for You</p>
            <h2>Featured Properties</h2>
            <button
              className="view-all-btn"
              onClick={() => navigate("/properties")}
            >
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="properties-grid">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-header centered">
            <p className="section-overline light">Our Promise</p>
            <h2>Why Havenly Estates?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <CheckCircle2 size={28} />
              </div>
              <h3>Verified Listings</h3>
              <p>
                Every property is manually verified by our team before being
                published. No duplicates, no fakes.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Users size={28} />
              </div>
              <h3>Trusted Agents</h3>
              <p>
                All agents are licensed professionals with proven track records
                and deep local expertise.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Sparkles size={28} />
              </div>
              <h3>AI-Powered Search</h3>
              <p>
                Our smart recommendations match properties to your lifestyle,
                budget, and commute preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container premium-inner">
          <div className="premium-text">
            <p className="section-overline">Exclusive Access</p>
            <h2>Luxury & Premium Listings</h2>
            <p>
              Explore our curated selection of ultra-luxury homes with cinematic
              photography and virtual tours. Properties you won't find anywhere
              else.
            </p>
            <button
              className="btn btn-accent"
              onClick={() => navigate("/properties?tier=premium")}
            >
              Explore Premium{" "}
              <ArrowRight size={16} style={{ marginLeft: "8px" }} />
            </button>
          </div>
          <div className="premium-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop"
              alt="Luxury property"
            />
          </div>
        </div>
      </section>

      <section className="agents-section">
        <div className="container">
          <div className="section-header">
            <p className="section-overline">The Experts</p>
            <h2>Meet Our Agents</h2>
            <button
              className="view-all-btn"
              onClick={() => navigate("/agents")}
            >
              All Agents <ArrowRight size={16} />
            </button>
          </div>
          <div className="agents-grid">
            {agents.map((agent) => (
              <div key={agent.id} className="agent-card">
                <div className="agent-photo-wrap">
                  <img src={agent.photo} alt={agent.name} />
                  <div className="agent-overlay">
                    <button
                      className="btn btn-outline"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
                <h3>{agent.name}</h3>
                <p className="agent-spec">{agent.specialization}</p>
                <div className="agent-meta">
                  <span className="number">{agent.sold}</span>
                  <span>Properties Sold</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <p className="section-overline">Real Experiences</p>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.photo} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2>Stay Ahead of the Market</h2>
            <p>
              Get exclusive listings, market insights, and investment tips
              delivered to your inbox.
            </p>
          </div>
          {subscribed ? (
            <div className="newsletter-success">
              <CheckCircle2 size={24} color="#D4AF37" />
              <span>You're subscribed! Welcome to Havenly Estates.</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
