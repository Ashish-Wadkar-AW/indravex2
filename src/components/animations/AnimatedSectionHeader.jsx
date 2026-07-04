import AnimatedTitle from './AnimatedTitle'
import ScrollReveal from '../ScrollReveal'

export default function AnimatedSectionHeader({
  label,
  title,
  highlight,
  subtitle,
  align = 'left',
  titleVariant = 'words',
  animation = 'default',
}) {
  const fullTitle = highlight
    ? title.replace(highlight, `<span class="gradient-text">${highlight}</span>`)
    : title

  return (
    <div className={`section-header section-header--${align} section-header--${animation}`}>
      <ScrollReveal>
        <span className="section-label anim-label-slide">{label}</span>
      </ScrollReveal>

      {highlight ? (
        <ScrollReveal delay={100}>
          <h2 className="section-title anim-title-reveal">
            {title.split(highlight)[0]}
            <span className="gradient-text anim-highlight-pulse">{highlight}</span>
            {title.split(highlight)[1]}
          </h2>
        </ScrollReveal>
      ) : (
        <ScrollReveal delay={100}>
          <AnimatedTitle
            text={title}
            as="h2"
            className="section-title"
            variant={titleVariant}
            trigger="scroll"
          />
        </ScrollReveal>
      )}

      {subtitle && (
        <ScrollReveal delay={200}>
          <p className="section-subtitle anim-subtitle-reveal">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}
