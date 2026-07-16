import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Heart, Settings, LogOut } from 'lucide-react';
import AuthModal from '../AuthModal/AuthModal';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
  };

  const getInitials = (name) =>
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            Havenly<span>Estates</span>
          </Link>

          <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/properties" onClick={() => setIsMobileMenuOpen(false)}>Properties</Link>
            <Link to="/agents" onClick={() => setIsMobileMenuOpen(false)}>Agents</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>

          <div className="navbar-actions">
            <button className="icon-btn" aria-label="Search" onClick={() => window.location.href = '/properties'}>
              <Search size={20} />
            </button>

            {user ? (
              <div className="user-dropdown-wrap" ref={dropdownRef}>
                <button
                  className="user-avatar-btn"
                  onClick={() => setShowDropdown(!showDropdown)}
                  aria-label="Account menu"
                >
                  {getInitials(user.name)}
                </button>

                {showDropdown && (
                  <div className="user-dropdown">
                    <div className="user-dropdown-header">
                      <strong>{user.name}</strong>
                      <p>{user.email}</p>
                    </div>
                    <div className="user-dropdown-menu">
                      <button className="user-dropdown-item">
                        <Heart size={16} /> Saved Properties
                      </button>
                      <button className="user-dropdown-item">
                        <Settings size={16} /> Account Settings
                      </button>
                      <div className="user-dropdown-divider" />
                      <button className="user-dropdown-item danger" onClick={handleLogout}>
                        <LogOut size={16} /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button className="icon-btn" aria-label="Account" onClick={() => setShowAuthModal(true)}>
                <User size={20} />
              </button>
            )}

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
};

export default Navbar;
