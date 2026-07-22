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

  const socialItems = [
    { href: links.email, Icon: Mail, color: '#1e90ff', title: 'Email' },
    { href: links.whatsapp, Icon: Phone, color: '#32a852', title: 'WhatsApp' },
    { href: links.instagram, Icon: Instagram, color: '#e1306c', title: 'Instagram' },
    { href: links.linkedin, Icon: Linkedin, color: '#0077b5', title: 'LinkedIn' },
    { href: links.github, Icon: Github, color: '#ffffff', title: 'GitHub' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#07090d',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '40px 0 28px',
      }}
    >
      <div className="container">
        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#fff', marginBottom: '4px' }}>
            Surya <span style={{ color: '#1e90ff' }}>Prakash Reddy</span>
          </p>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Full Stack MERN Developer</p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          {socialItems.map(({ href, Icon, color, title }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              style={{ color }}
              title={title}
              aria-label={title}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} SURYA PRAKASH REDDY. All Rights Reserved. Built with MERN Stack.
          </p>
          <button
            onClick={scrollToTop}
            className="footer-top-btn"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .footer-social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-bg-card);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-social-btn:hover {
          border-color: currentColor;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy {
          color: #64748b;
          font-size: 0.85rem;
          flex: 1;
          min-width: 0;
        }
        .footer-top-btn {
          padding: 10px;
          border-radius: 50%;
          background-color: #1e90ff;
          color: #ffffff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(30, 144, 255, 0.3);
          flex-shrink: 0;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .footer-top-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(30, 144, 255, 0.5);
        }

        @media (max-width: 480px) {
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-copy {
            font-size: 0.78rem;
          }
          .footer-socials {
            gap: 10px;
          }
          .footer-social-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
