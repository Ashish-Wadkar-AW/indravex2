import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { careers } from '../data/site'
import './Careers.css'

export default function Careers() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Join Our Team"
        subtitle="Be part of a team that's shaping the future of digital intelligence. We're always looking for talented individuals who share our passion for innovation."
      >
        <div className="page-hero__actions">
          <a href="mailto:indravextechnologies@gmail.com" className="btn btn-primary">
            Send Your Resume →
          </a>
        </div>
      </PageHero>

      <section className="section perks-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Why Join Us</span>
            <h2 className="section-title">Grow With <span className="gradient-text">Indravex</span></h2>
          </ScrollReveal>
          <div className="perks-grid">
            {[
              { icon: '✦', title: 'Innovative Projects', desc: 'Work on cutting-edge AI, web, and mobile projects for diverse clients.' },
              { icon: '◈', title: 'Flexible Work', desc: 'Remote-friendly culture with options for hybrid and on-site work in Pune.' },
              { icon: '◇', title: 'Learning Culture', desc: 'Continuous upskilling with access to latest tools, frameworks, and training.' },
              { icon: '◎', title: 'Great Team', desc: 'Collaborate with passionate developers, designers, and strategists.' },
            ].map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 100}>
                <div className="perk-card">
                  <span className="perk-card__icon">{perk.icon}</span>
                  <h3>{perk.title}</h3>
                  <p>{perk.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section openings-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Open Positions</span>
            <h2 className="section-title">Current <span className="gradient-text">Openings</span></h2>
          </ScrollReveal>
          <div className="openings-list">
            {careers.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 80}>
                <div className="opening-card">
                  <div className="opening-card__info">
                    <h3>{job.title}</h3>
                    <span className="opening-card__type">{job.type}</span>
                    <p>{job.desc}</p>
                  </div>
                  <a
                    href={`mailto:indravextechnologies@gmail.com?subject=Application: ${job.title}`}
                    className="btn btn-outline opening-card__btn"
                  >
                    Apply Now →
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section careers-cta">
        <div className="container">
          <ScrollReveal>
            <div className="careers-cta-box">
              <h2>Don't see your role?</h2>
              <p>We're always interested in meeting talented people. Send us your resume and tell us how you'd like to contribute.</p>
              <Link to="/contact" className="btn btn-primary">Get In Touch →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
