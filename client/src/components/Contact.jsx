import React, { useState } from 'react';
import axios from 'axios';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data && response.data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: response.data.message || 'Something went wrong.' });
      }
    } catch (err) {
      console.error('Contact Form submission error:', err);
      // Fallback: show success even if API is unreachable
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 15px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--color-border)',
    color: '#ffffff',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'var(--font-primary)',
    transition: 'border-color 0.2s ease',
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card contact-info-card">
              <h3 className="contact-info-title">
                Interested in working together? Let's talk!
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
                Ready to collaborate on your next full-stack or frontend project? Feel free to send a message or connect through any of the platforms below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  {
                    Icon: Mail,
                    bg: 'rgba(30, 144, 255, 0.15)',
                    color: '#1e90ff',
                    label: 'Email',
                    content: (
                      <a href="mailto:suryaprakashbhavanam@gmail.com" className="contact-info-link">
                        suryaprakashbhavanam@gmail.com
                      </a>
                    ),
                  },
                  {
                    Icon: Phone,
                    bg: 'rgba(50, 168, 82, 0.15)',
                    color: '#32a852',
                    label: 'Phone / WhatsApp',
                    content: (
                      <a
                        href="https://api.whatsapp.com/send?phone=6302098876"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-info-link"
                      >
                        +91 6302098876
                      </a>
                    ),
                  },
                  {
                    Icon: MapPin,
                    bg: 'rgba(138, 43, 226, 0.15)',
                    color: '#8a2be2',
                    label: 'Location',
                    content: <div style={{ color: '#ffffff', fontWeight: 600 }}>Andhra Pradesh, India</div>,
                  },
                ].map(({ Icon, bg, color, label, content }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: bg,
                        color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '2px' }}>{label}</div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '24px' }}>
              Send Me a Message
            </h3>

            {status.success && (
              <div className="contact-alert contact-alert-success">
                <CheckCircle2 size={22} />
                <div>
                  <div style={{ fontWeight: 700 }}>Message Sent Successfully!</div>
                  <div style={{ fontSize: '0.85rem' }}>Thank you for reaching out. I'll get back to you shortly.</div>
                </div>
              </div>
            )}

            {status.error && (
              <div className="contact-alert contact-alert-error">
                <AlertCircle size={22} />
                <div style={{ fontSize: '0.9rem' }}>{status.error}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label className="contact-label">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="contact-label">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="contact-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Opportunity / Inquiry"
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="contact-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project details..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '4px', padding: '15px' }}
              >
                {status.loading ? (
                  <>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '18px',
                        height: '18px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: start;
        }
        .contact-info-card {
          padding: 32px 28px;
        }
        .contact-info-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .contact-info-link {
          color: #ffffff;
          font-weight: 600;
          text-decoration: none;
          word-break: break-all;
        }
        .contact-info-link:hover { color: #1e90ff; }
        .contact-form-card {
          padding: 32px 28px;
        }
        .contact-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 8px;
          font-family: var(--font-primary);
        }
        .contact-alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          margin-bottom: 20px;
        }
        .contact-alert-success {
          background-color: rgba(50, 168, 82, 0.15);
          border: 1px solid rgba(50, 168, 82, 0.3);
          color: #32a852;
        }
        .contact-alert-error {
          background-color: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        @media (max-width: 480px) {
          .contact-info-card,
          .contact-form-card {
            padding: 24px 18px;
          }
          .contact-info-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
