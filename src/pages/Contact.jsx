import { useState } from 'react'
import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { site } from '../data/site'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Build Something Great"
        subtitle="Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help transform your business."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <ScrollReveal direction="left">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <span className="contact-info__icon">✉</span>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__icon">☎</span>
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${site.phone}`}>{site.phone}</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__icon">◎</span>
                  <div>
                    <strong>Location</strong>
                    <span>{site.address}</span>
                  </div>
                </div>
              </div>

              <div className="contact-info__hours">
                <strong>Business Hours</strong>
                <p>Mon – Fri: 9:00 AM – 6:00 PM IST</p>
                <p>Sat: 10:00 AM – 2:00 PM IST</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h3>Thank You!</h3>
                <p>Your message has been received. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@company.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="ai">AI Solutions</option>
                    <option value="software">Custom Software Development</option>
                    <option value="app">Application Development</option>
                    <option value="staffing">IT Staffing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="btn btn-primary contact-form__submit">
                  Send Message →
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
