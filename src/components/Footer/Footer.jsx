import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);


const Footer = () => (
  <footer className="footer">
    <div className="footer-top container">
      <div className="footer-brand">
        <div className="footer-logo">Havenly<span>Estates</span></div>
        <p>To make buying, selling, and renting properties transparent, accessible, and enjoyable through modern technology.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
        </div>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/agents">Our Agents</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="#">Blog</Link></li>
          <li><Link to="#">Careers</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Properties</h4>
        <ul>
          <li><Link to="/properties?type=house">Houses</Link></li>
          <li><Link to="/properties?type=condo">Condominiums</Link></li>
          <li><Link to="/properties?type=commercial">Commercial</Link></li>
          <li><Link to="/properties?type=vacation">Vacation Homes</Link></li>
          <li><Link to="/properties?type=lot">Lots</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <ul className="footer-contact">
          <li><MapPin size={16} /><span>123 Estate Ave, Beverly Hills, CA</span></li>
          <li><Phone size={16} /><span>+1 (310) 555-0100</span></li>
          <li><Mail size={16} /><span>hello@havenlyestates.com</span></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom container">
      <p>© {new Date().getFullYear()} Havenly Estates. All rights reserved.</p>
      <div className="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
