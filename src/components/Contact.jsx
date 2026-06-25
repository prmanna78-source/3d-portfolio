import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className="container">
        <div className={styles.contactWrapper}>

          <div className={styles.leftCol}>
            <h2>Let's build<br /> something great.</h2>
            <p>I'm always open to discussing AI, Machine Learning, autonomous systems, and new opportunities.</p>

            <div className={styles.contactInfo}>
              <a href="mailto:umanna@student.gitam.edu" className={styles.infoItem}>
                <Mail size={20} />
                umanna@student.gitam.edu
              </a>
              <a href="tel:+918827548218" className={styles.infoItem}>
                <Phone size={20} />
                +91 88275 48218
              </a>
              <a href="https://linkedin.com/in/ujjwal-manna-8394b5373" target="_blank" rel="noreferrer" className={styles.infoItem}>
                <FaLinkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className={styles.rightCol}>
            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label>Name</label>
                <input type="text" placeholder="Mail ID" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="ABC@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea rows="4" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        <footer className={styles.footer}>
          <p>© 2026 Ujjwal Manna. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
