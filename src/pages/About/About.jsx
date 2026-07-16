import React from 'react';
import { Compass, Target, ShieldCheck, HeartHandshake } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content animate-fade-in-up">
          <h1>Redefining Real Estate</h1>
          <p>We believe finding your next space should be as beautiful as the space itself.</p>
        </div>
      </section>

      <section className="about-content-section container">
        <div className="about-grid">
          <div className="about-text-block animate-fade-in-up">
            <h2 style={{ color: 'var(--accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Our Story</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Built for the Modern Lifestyle</h3>
            <p>
              Havenly Estates was born out of a simple frustration: the real estate process was too opaque, too stressful, and completely disconnected from how people actually live today. We set out to change that.
            </p>
            <p>
              By combining cutting-edge technology with a curated selection of premium properties, we've created a platform that focuses on your lifestyle, not just your budget. Whether you're looking for a minimalist condo in the city or a sprawling luxury estate, we bring transparency and joy back to the search.
            </p>
          </div>
          <div className="about-image-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop" alt="Modern luxury home interior" />
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container mv-grid">
          <div className="mv-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mv-icon">
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To make buying, selling, and renting properties transparent, accessible, and enjoyable through modern technology. We strip away the complexity so you can focus on finding a space you truly love.
            </p>
          </div>
          
          <div className="mv-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mv-icon">
              <Compass size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted digital-first real estate platform that helps people discover spaces that match their lifestyle. We envision a world where every real estate transaction is seamless and empowering.
            </p>
          </div>
        </div>
      </section>

      <section className="about-content-section container">
        <div className="section-header centered animate-fade-in-up">
          <p className="section-overline">What Drives Us</p>
          <h2>Our Core Values</h2>
        </div>
        
        <div className="about-grid" style={{ marginTop: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="mv-card animate-fade-in-up" style={{ padding: '2rem' }}>
            <ShieldCheck size={28} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Radical Transparency</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>No hidden fees, no deceptive angles. What you see is exactly what you get, backed by verified data.</p>
          </div>
          
          <div className="mv-card animate-fade-in-up" style={{ padding: '2rem', animationDelay: '0.1s' }}>
            <HeartHandshake size={28} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Client-First Approach</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Your needs dictate our actions. We are dedicated to delivering a tailored, stress-free experience from search to signing.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
