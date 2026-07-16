import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import './AuthModal.css';

const AuthModal = ({ onClose, onLogin }) => {
  const [tab, setTab] = useState('login');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setError('');
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (tab === 'signup' && !form.name) {
      setError('Please enter your name.');
      return;
    }

    const user = {
      name: tab === 'signup' ? form.name : form.email.split('@')[0],
      email: form.email,
    };
    onLogin(user);
    onClose();
  };

  return (
    <div className="auth-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal">
        <div className="auth-modal-header">
          <div>
            <h2>{tab === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
            <p>{tab === 'login' ? 'Sign in to your Havenly account' : 'Join thousands of happy homeowners'}</p>
          </div>
          <button className="auth-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="auth-tabs">
          <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => { setTab('login'); setError(''); }}>
            Sign In
          </button>
          <button className={`auth-tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => { setTab('signup'); setError(''); }}>
            Sign Up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}

          {tab === 'signup' && (
            <div className="auth-field">
              <label>Full Name</label>
              <div className="auth-field-input">
                <User size={16} />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div className="auth-field">
            <label>Email Address</label>
            <div className="auth-field-input">
              <Mail size={16} />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="auth-field">
            <label>Password</label>
            <div className="auth-field-input">
              <Lock size={16} />
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            {tab === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          <div className="auth-divider">or</div>

          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => { setTab(tab === 'login' ? 'signup' : 'login'); setError(''); }}
              style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
            >
              {tab === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
