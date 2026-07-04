import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { site } from '../data/site'
import './Legal.css'

export default function Privacy() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" subtitle={`Last updated: January 2026`}>
        <PageHeroBreadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Privacy Policy' },
          ]}
        />
      </PageHero>

      <section className="section legal-content">
        <div className="container">
          <ScrollReveal>
            <div className="legal-body">
              <h2>Introduction</h2>
              <p>
                {site.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name, email address, and phone number when you contact us</li>
                <li>Company name and project details submitted through our contact form</li>
                <li>Resume and employment information when you apply for a position</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide our services</li>
                <li>Process job applications and communicate about career opportunities</li>
                <li>Improve our website and services</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
