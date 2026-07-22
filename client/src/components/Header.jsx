import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      // Close mobile menu on scroll
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Qualification', href: '#qualification' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(10, 12, 16, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          padding: isScrolled ? '14px 0' : '22px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a href="#hero" className="header-brand" aria-label="Surya Prakash Reddy - Home">
            <div className="header-logo-icon">
              <Code2 size={20} />
            </div>
            <span className="header-brand-text">
              Surya<span style={{ color: '#1e90ff' }}> Reddy</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul style={{ display: 'flex', listStyle: 'none', gap: '24px', margin: 0, padding: 0 }}>
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      style={{
                        color: isActive ? '#1e90ff' : '#94a3b8',
                        fontWeight: isActive ? 600 : 500,
                        textDecoration: 'none',
                        fontSize: '0.92rem',
                        transition: 'color 0.2s ease',
                        position: 'relative',
                        padding: '4px 0',
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.name}
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: '#1e90ff',
                            borderRadius: '2px',
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div
              className="badge"
              style={{
                fontSize: '0.72rem',
                padding: '4px 10px',
                background: 'rgba(50, 168, 82, 0.15)',
                color: '#32a852',
                borderColor: 'rgba(50, 168, 82, 0.3)',
                marginLeft: '8px',
              }}
            >
              MERN Stack
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: isActive ? '#1e90ff' : '#f0f4f8',
                  fontSize: '1.05rem',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  padding: '12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  transition: 'color 0.2s',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#1e90ff',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <style>{`
        .header-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
          font-family: var(--font-heading);
          flex-shrink: 0;
        }
        .header-logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1e90ff, #32a852);
          color: #fff;
          flex-shrink: 0;
        }
        .header-brand-text {
          white-space: nowrap;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          color: #ffffff;
          cursor: pointer;
          padding: 6px;
          transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .mobile-toggle:hover {
          border-color: rgba(30,144,255,0.5);
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(12, 16, 24, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          padding: 80px 24px 40px;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
        .mobile-menu-open {
          transform: translateX(0);
          pointer-events: all;
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }

        @media (max-width: 360px) {
          .header-brand-text {
            font-size: 0.95rem;
          }
          .header-logo-icon {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
