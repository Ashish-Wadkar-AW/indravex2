import { Link } from 'react-router-dom'
import './PageHero.css'

export default function PageHero({ label, title, subtitle, dark = false, children }) {
  return (
    <section className={`page-hero ${dark ? 'page-hero--dark' : ''}`}>
      {!dark && <div className="page-hero__blob" aria-hidden="true" />}
      <div className="container page-hero__inner">
        {label && <span className="section-label">{label}</span>}
        <h1 className={`page-hero__title ${dark ? 'gradient-text-light' : 'gradient-text'}`}>
          {title}
        </h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
      <div className="page-hero__line" />
    </section>
  )
}

export function PageHeroActions({ children }) {
  return <div className="page-hero__actions">{children}</div>
}

export function PageHeroBreadcrumb({ items }) {
  return (
    <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.label}>
          {item.path ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
          {i < items.length - 1 && <span className="sep">/</span>}
        </span>
      ))}
    </nav>
  )
}
