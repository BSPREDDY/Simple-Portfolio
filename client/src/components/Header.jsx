import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Qualification', href: '#qualification' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(10, 12, 16, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        padding: isScrolled ? '16px 0' : '24px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#ffffff',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1e90ff, #32a852)',
              color: '#fff',
            }}
          >
            <Code2 size={20} />
          </div>
          <span>
            Surya<span style={{ color: '#1e90ff', marginLeft: '4px' }}>Prakash Reddy</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '28px', margin: 0, padding: 0 }}>
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
                      fontSize: '0.95rem',
                      transition: 'color 0.2s ease',
                      position: 'relative',
                      padding: '4px 0',
                    }}
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
            style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(50, 168, 82, 0.15)', color: '#32a852', borderColor: 'rgba(50, 168, 82, 0.3)' }}
          >
            MERN Stack
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            backgroundColor: '#12161f',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#f0f4f8',
                fontSize: '1.1rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 0',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
