import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { site } from '../data/site'
import './Legal.css'

export default function Terms() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Service" subtitle={`Last updated: January 2026`}>
        <PageHeroBreadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Terms of Service' },
          ]}
        />
      </PageHero>

      <section className="section legal-content">
        <div className="container">
          <ScrollReveal>
            <div className="legal-body">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the website and services of {site.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>Services</h2>
              <p>
                {site.name} provides website development, digital marketing, AI solutions, custom software development, application development, and IT staffing services. The scope, deliverables, and pricing for each project will be defined in a separate agreement or statement of work.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all intellectual property rights in deliverables created specifically for a client will transfer to the client upon full payment. {site.name} retains rights to its pre-existing tools, frameworks, and methodologies.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, {site.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these Terms, contact us at{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
