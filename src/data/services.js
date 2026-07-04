export const services = [
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    shortTitle: 'Web Development',
    tagline: 'Stunning, high-performance websites built to convert.',
    description:
      'We create stunning, high-performance websites that are optimized for search engines and designed to convert visitors into customers. From startups to enterprises, we build digital experiences that drive results.',
    features: [
      'SEO Friendly Website Development',
      'Custom Business Website Development',
      'Professional Website Design',
      'Corporate & E-commerce Development',
      'React & Modern Stack Development',
      'Startup Website Development',
    ],
    icon: '◈',
    accent: '#ff6b9d',
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    tagline: 'Strategies that maximize ROI and drive growth.',
    description:
      'We deliver comprehensive digital marketing solutions including SEO, social media marketing, performance marketing, and Google Ads management. Our strategies are designed to maximize ROI and drive sustainable growth.',
    features: [
      'SEO Services',
      'Social Media Marketing',
      'Google Ads Management',
      'Performance Marketing',
      'Lead Generation Services',
      'Content Marketing',
    ],
    icon: '◉',
    accent: '#ffb6c1',
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    title: 'AI Solutions',
    shortTitle: 'AI & Automation',
    tagline: 'Intelligent systems that unlock new capabilities.',
    description:
      'We develop and integrate advanced AI solutions including generative AI, machine learning models, and intelligent automation systems. Our AI solutions help businesses unlock new efficiencies and capabilities.',
    features: [
      'AI Consulting Services',
      'Generative AI Solutions',
      'AI Software Development',
      'AI Integration Services',
      'Enterprise AI Solutions',
      'AI Powered Applications',
    ],
    icon: '✦',
    accent: '#ff8fab',
  },
  {
    id: 'custom-software',
    slug: 'custom-software',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    tagline: 'Scalable software crafted for long-term growth.',
    description:
      'We build scalable, secure, and high-performance custom software applications for startups, SMEs, and enterprises. Our solutions are crafted to streamline operations, improve productivity, and support long-term business growth.',
    features: [
      'Custom Software Development',
      'Enterprise Software Solutions',
      'CRM & ERP Development',
      'Business Management Systems',
      'API Development & Integration',
      'Software Maintenance & Support',
    ],
    icon: '⬡',
    accent: '#ffc0cb',
  },
  {
    id: 'application-development',
    slug: 'application-development',
    title: 'Application Development',
    shortTitle: 'Mobile Apps',
    tagline: 'Robust apps across every platform.',
    description:
      'We build robust, scalable applications across all platforms. Our expertise spans web applications, mobile apps (Android & iOS), enterprise solutions, and SaaS platforms with full-stack development capabilities.',
    features: [
      'Custom Application Development',
      'Mobile App Development (Android & iOS)',
      'Web Application Development',
      'Enterprise Application Development',
      'SaaS Application Development',
      'Full Stack Development',
    ],
    icon: '◇',
    accent: '#ff6b9d',
  },
  {
    id: 'it-staffing',
    slug: 'it-staffing',
    title: 'IT Staffing',
    shortTitle: 'IT Staffing',
    tagline: 'The right talent, when you need it.',
    description:
      'Our IT staffing services help organizations find highly skilled developers, designers, QA engineers, DevOps professionals, and project managers. Whether you need contract, permanent, or dedicated resources, we provide the right talent for your business.',
    features: [
      'Dedicated Development Team',
      'Contract & Permanent Staffing',
      'Remote IT Professionals',
      'Technical Resource Augmentation',
      'Software Developers & QA Engineers',
      'Quick Hiring Process',
    ],
    icon: '◎',
    accent: '#ffb6c1',
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
