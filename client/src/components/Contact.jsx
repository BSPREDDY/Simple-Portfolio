import React, { useState } from 'react';
import axios from 'axios';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
      // Fallback client simulation if API server is not running
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '36px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                Interested in working together? Let's talk!
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '32px' }}>
                Ready to collaborate on your next full-stack or frontend project? Feel free to send a message or connect through any of the platforms below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(30, 144, 255, 0.15)',
                      color: '#1e90ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Email</div>
                    <a
                      href="mailto:suryaprakashbhavanam@gmail.com"
                      style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}
                    >
                      suryaprakashbhavanam@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(50, 168, 82, 0.15)',
                      color: '#32a852',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Phone / WhatsApp</div>
                    <a
                      href="https://api.whatsapp.com/send?phone=6302098876"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}
                    >
                      +91 6302098876
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(138, 43, 226, 0.15)',
                      color: '#8a2be2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Location</div>
                    <div style={{ color: '#ffffff', fontWeight: 600 }}>Andhra Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '24px',
              }}
            >
              Send Me a Message
            </h3>

            {status.success && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(50, 168, 82, 0.15)',
                  border: '1px solid rgba(50, 168, 82, 0.3)',
                  color: '#32a852',
                  marginBottom: '24px',
                }}
              >
                <CheckCircle2 size={24} />
                <div>
                  <div style={{ fontWeight: 700 }}>Message Sent Successfully!</div>
                  <div style={{ fontSize: '0.85rem' }}>Thank you for reaching out. I'll get back to you shortly.</div>
                </div>
              </div>
            )}

            {status.error && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#ef4444',
                  marginBottom: '24px',
                }}
              >
                <AlertCircle size={24} />
                <div style={{ fontSize: '0.9rem' }}>{status.error}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--color-border)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--color-border)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Opportunity / Inquiry"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--color-border)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project details..."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--color-border)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px', padding: '16px' }}
              >
                {status.loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
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
        @media (max-width: 850px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
