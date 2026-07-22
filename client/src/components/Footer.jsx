import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = ({ socialLinks }) => {
  const links = socialLinks || {
    email: 'mailto:suryaprakashbhavanam@gmail.com',
    whatsapp: 'https://api.whatsapp.com/send?phone=6302098876',
    instagram: 'https://www.instagram.com/_surya_prakash_reddy_28',
    linkedin: 'https://www.linkedin.com/in/surya-prakash-reddy-bhavanam-125317287/',
    github: 'https://github.com/BSPREDDY',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#07090d',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '40px 0 30px',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a
            href={links.email}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.2s ease',
            }}
            title="Email"
          >
            <Mail size={18} />
          </a>

          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#32a852',
              transition: 'all 0.2s ease',
            }}
            title="WhatsApp"
          >
            <Phone size={18} />
          </a>

          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#e1306c',
              transition: 'all 0.2s ease',
            }}
            title="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0077b5',
              transition: 'all 0.2s ease',
            }}
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.2s ease',
            }}
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', textAlign: 'center', margin: '0 auto' }}>
            &copy; {new Date().getFullYear()} SURYA PRAKASH REDDY. All Rights Reserved. Built with MERN Stack.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              padding: '10px',
              borderRadius: '50%',
              backgroundColor: '#1e90ff',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(30, 144, 255, 0.3)',
            }}
            title="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
