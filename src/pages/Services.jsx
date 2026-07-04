import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import './Services.css'

export default function Services() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="End-to-End Digital Solutions"
        subtitle="From web development to AI integration, we offer comprehensive services designed to accelerate your business growth."
      >
        <div className="page-hero__actions">
          <Link to="/contact" className="btn btn-primary">Get a Free Consultation →</Link>
        </div>
      </PageHero>

      <section className="section services-page">
        <div className="container">
          <div className="services-page__grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We <span className="gradient-text">Work With You</span></h2>
          </ScrollReveal>
          <div className="process-grid">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and requirements through in-depth consultation.' },
              { step: '02', title: 'Strategy', desc: 'We craft a tailored roadmap with clear milestones, tech stack, and deliverables.' },
              { step: '03', title: 'Development', desc: 'Our expert team builds, tests, and iterates with agile methodology and transparency.' },
              { step: '04', title: 'Launch & Support', desc: 'We deploy, optimize, and provide ongoing maintenance to ensure long-term success.' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="process-card">
                  <span className="process-card__step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}