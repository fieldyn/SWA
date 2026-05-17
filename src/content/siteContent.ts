export type Language = 'en' | 'es'

export type ServiceIcon = 'backend' | 'payments' | 'security'

export type TechCategory =
  | 'cloud'
  | 'backend'
  | 'identity'
  | 'tooling'
  | 'frontend'

type NavLink = {
  label: string
  href: string
}

type ServiceCard = {
  num: string
  icon: ServiceIcon
  title: string
  titleEm: string
  description: string
  bullets: string[]
  featured: boolean
}

type Stat = {
  target: number
  suffix: string
  label: string
}

type Strength = {
  num: string
  title: string
  description: string
}

type TechItem = {
  name: string
  category: TechCategory
}

type Channel = {
  label: string
  value: string
  href?: string
  external?: boolean
}

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export interface SiteContent {
  seo: {
    title: string
    description: string
  }
  header: {
    brandAriaLabel: string
    navLinks: NavLink[]
    cta: string
    openMenu: string
    closeMenu: string
    switchToLight: string
    switchToDark: string
    languageLabel: string
    languageNames: Record<Language, string>
  }
  hero: {
    eyebrow: string
    titleIntro: string
    titleAccent: string
    titleOutro: string
    lead: string
    primaryCta: string
    secondaryCta: string
    focusLabel: string
    focusAreas: string[]
    markLabel: string
    markTag: string
    chipPrimary: string
    chipStatValue: string
    chipStatLabel: string
    scrollLabel: string
    scrollAriaLabel: string
  }
  services: {
    eyebrow: string
    title: string
    titleEm: string
    intro: string
    cards: ServiceCard[]
    linkLabel: string
  }
  about: {
    eyebrow: string
    title: string
    titleEm: string
    lead: string
    stats: [Stat, Stat, Stat, Stat]
    strengths: Strength[]
  }
  technology: {
    eyebrow: string
    title: string
    titleEm: string
    lead: string
    techStack: TechItem[]
  }
  contact: {
    eyebrow: string
    title: string
    titleEm: string
    lead: string
    cta: string
    mailto: string
    cardSub: string
    channels: Channel[]
    status: string
  }
  footer: {
    tagline: string
    badge: string
    sitemapTitle: string
    capabilityTitle: string
    capabilities: string[]
    connectTitle: string
    connectLinks: FooterLink[]
    copyrightSuffix: string
    bottomTagline: string
  }
}

export const siteContent: Record<Language, SiteContent> = {
  en: {
    seo: {
      title: 'InnovatioX | .NET, Payments & Cloud Engineering',
      description:
        'Independent .NET consulting for payment systems, identity, integrations, and pragmatic cloud modernization.',
    },
    header: {
      brandAriaLabel: 'InnovatioX home',
      navLinks: [
        { label: 'Services', href: '#services' },
        { label: 'Experience', href: '#about' },
        { label: 'Stack', href: '#technology' },
        { label: 'Contact', href: '#contact' },
      ],
      cta: 'Start a conversation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      languageLabel: 'Change language',
      languageNames: {
        en: 'English',
        es: 'Spanish',
      },
    },
    hero: {
      eyebrow: '.NET · Payments · Cloud',
      titleIntro: 'Senior engineering for',
      titleAccent: 'payments and identity',
      titleOutro: 'platforms that need to ship safely.',
      lead:
        "InnovatioX is Alberto Biancardi's independent practice. I help teams modernize backend platforms, authentication flows, transaction integrations, and cloud delivery with senior .NET engineering.",
      primaryCta: 'Start a conversation',
      secondaryCta: 'See services',
      focusLabel: 'Core focus',
      focusAreas: ['Payment systems', 'Identity flows', 'Modern .NET', 'Cloud delivery'],
      markLabel: 'Independent practice',
      markTag: 'EN / ES',
      chipPrimary: 'Payments · identity · cloud',
      chipStatValue: '17+',
      chipStatLabel: 'years building software',
      scrollLabel: 'Scroll',
      scrollAriaLabel: 'Scroll to services',
    },
    services: {
      eyebrow: 'What I offer',
      title: 'Specialized support for',
      titleEm: 'complex backends.',
      intro:
        'I work where transaction flows, authentication, integrations, and cloud delivery need senior-level engineering judgment.',
      cards: [
        {
          num: '01',
          icon: 'backend',
          title: 'Modern',
          titleEm: '.NET backends.',
          description:
            'API platforms, service refactors, legacy modernization, and production-grade .NET applications designed to stay maintainable under real load.',
          bullets: [
            'ASP.NET Core · Web API',
            'SQL Server · integrations',
            'Observability-minded delivery',
          ],
          featured: true,
        },
        {
          num: '02',
          icon: 'payments',
          title: 'Payment &',
          titleEm: 'integration systems.',
          description:
            'Message-oriented transaction flows, routing logic, gateway connectivity, and the operational rigor required in payment environments.',
          bullets: [],
          featured: false,
        },
        {
          num: '03',
          icon: 'security',
          title: 'Identity, security',
          titleEm: '& cloud delivery.',
          description:
            'OpenID Connect, OAuth 2.0, deployment hygiene, and practical hardening for systems that cannot afford loose edges.',
          bullets: [],
          featured: false,
        },
      ],
      linkLabel: 'Discuss your project',
    },
    about: {
      eyebrow: 'Why InnovatioX',
      title: 'Hands-on experience where',
      titleEm: 'failure is expensive.',
      lead:
        'I bring 17+ years in software engineering and more than a decade in payment platforms, helping teams ship changes with technical depth and production awareness.',
      stats: [
        { target: 17, suffix: '+', label: 'years in software engineering' },
        { target: 11, suffix: '+', label: 'years in payment platforms' },
        { target: 2, suffix: '', label: 'cloud ecosystems used in delivery' },
        { target: 2, suffix: '', label: 'working languages: EN / ES' },
      ],
      strengths: [
        {
          num: '01',
          title: 'Payment platform depth',
          description:
            'Experience across transaction connectors, formatters, routing, pre-authorization logic, and downstream payment-network integrations.',
        },
        {
          num: '02',
          title: 'Identity & security discipline',
          description:
            'OpenID Connect, OAuth 2.0, access-control thinking, and security hardening shaped by regulated environments and PCI-DSS expectations.',
        },
        {
          num: '03',
          title: 'Production delivery mindset',
          description:
            'CI/CD, deployment workflows, incident analysis, and troubleshooting across distributed systems — not just feature implementation.',
        },
        {
          num: '04',
          title: 'Pragmatic cloud range',
          description:
            'AWS certified, Azure-focused, and comfortable bridging backend systems with Node.js, Vue.js, Laravel, and front-end delivery when needed.',
        },
      ],
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Technologies I use in',
      titleEm: 'real delivery.',
      lead:
        'The tooling centers on .NET, integration-heavy backend work, security flows, cloud services, and pragmatic cross-stack support when the product needs it.',
      techStack: [
        { name: '.NET 8', category: 'backend' },
        { name: 'C#', category: 'backend' },
        { name: 'ASP.NET Core', category: 'backend' },
        { name: 'Web API', category: 'backend' },
        { name: 'SQL Server', category: 'backend' },
        { name: 'OpenID Connect', category: 'identity' },
        { name: 'OAuth 2.0', category: 'identity' },
        { name: 'PCI-DSS mindset', category: 'identity' },
        { name: 'Azure', category: 'cloud' },
        { name: 'AWS', category: 'cloud' },
        { name: 'Docker', category: 'tooling' },
        { name: 'CI/CD', category: 'tooling' },
        { name: 'AI-assisted workflows', category: 'tooling' },
        { name: 'Node.js', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Vue.js', category: 'frontend' },
        { name: 'Laravel', category: 'frontend' },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: 'Need senior help on a',
      titleEm: 'high-stakes system?',
      lead:
        "If you're modernizing a platform, tightening identity flows, or shipping integration-heavy .NET work, I can help you move with more confidence in English or Spanish.",
      cta: 'Email Alberto',
      mailto: 'mailto:fieldyn@gmail.com',
      cardSub: 'Alberto Biancardi · Independent .NET consultant',
      channels: [
        {
          label: 'Email',
          value: 'fieldyn@gmail.com',
          href: 'mailto:fieldyn@gmail.com',
        },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/albertobiancardi',
          href: 'https://linkedin.com/in/albertobiancardi',
          external: true,
        },
        {
          label: 'Location',
          value: 'Quito, Ecuador',
        },
        {
          label: 'Languages',
          value: 'English / Español',
        },
      ],
      status: 'Open to consulting conversations',
    },
    footer: {
      tagline:
        'Independent .NET, payments, identity, and cloud engineering by Alberto Biancardi.',
      badge: 'Open to consulting conversations',
      sitemapTitle: 'Sitemap',
      capabilityTitle: 'Focus',
      capabilities: [
        '.NET backend modernization',
        'Payment & systems integration',
        'Identity & security',
        'Cloud delivery',
      ],
      connectTitle: 'Connect',
      connectLinks: [
        {
          label: 'fieldyn@gmail.com',
          href: 'mailto:fieldyn@gmail.com',
        },
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/albertobiancardi',
          external: true,
        },
      ],
      copyrightSuffix: 'All rights reserved',
      bottomTagline: '.NET · Payments · Cloud · English / Español',
    },
  },
  es: {
    seo: {
      title: 'InnovatioX | Ingenieria .NET, pagos y cloud',
      description:
        'Consultoria independiente en .NET para sistemas de pago, identidad, integraciones y modernizacion cloud pragmatica.',
    },
    header: {
      brandAriaLabel: 'Inicio de InnovatioX',
      navLinks: [
        { label: 'Servicios', href: '#services' },
        { label: 'Experiencia', href: '#about' },
        { label: 'Stack', href: '#technology' },
        { label: 'Contacto', href: '#contact' },
      ],
      cta: 'Iniciar conversacion',
      openMenu: 'Abrir menu',
      closeMenu: 'Cerrar menu',
      switchToLight: 'Cambiar a modo claro',
      switchToDark: 'Cambiar a modo oscuro',
      languageLabel: 'Cambiar idioma',
      languageNames: {
        en: 'Ingles',
        es: 'Español',
      },
    },
    hero: {
      eyebrow: '.NET · Pagos · Cloud',
      titleIntro: 'Ingenieria senior para',
      titleAccent: 'pagos e identidad',
      titleOutro: 'en plataformas que deben salir bien.',
      lead:
        'InnovatioX es la practica independiente de Alberto Biancardi. Ayudo a equipos a modernizar backends, flujos de autenticacion, integraciones transaccionales y delivery cloud con ingenieria senior en .NET.',
      primaryCta: 'Iniciar conversacion',
      secondaryCta: 'Ver servicios',
      focusLabel: 'Foco principal',
      focusAreas: ['Sistemas de pago', 'Flujos de identidad', '.NET moderno', 'Delivery cloud'],
      markLabel: 'Practica independiente',
      markTag: 'EN / ES',
      chipPrimary: 'Pagos · identidad · cloud',
      chipStatValue: '17+',
      chipStatLabel: 'años construyendo software',
      scrollLabel: 'Scroll',
      scrollAriaLabel: 'Ir a servicios',
    },
    services: {
      eyebrow: 'Lo que ofrezco',
      title: 'Soporte especializado para',
      titleEm: 'backends complejos.',
      intro:
        'Trabajo donde los flujos transaccionales, la autenticacion, las integraciones y el delivery cloud necesitan criterio de ingenieria senior.',
      cards: [
        {
          num: '01',
          icon: 'backend',
          title: 'Backends',
          titleEm: '.NET modernos.',
          description:
            'Plataformas API, refactors de servicios, modernizacion de legado y aplicaciones .NET preparadas para mantenerse sanas bajo carga real.',
          bullets: [
            'ASP.NET Core · Web API',
            'SQL Server · integraciones',
            'Delivery con foco en observabilidad',
          ],
          featured: true,
        },
        {
          num: '02',
          icon: 'payments',
          title: 'Pagos e',
          titleEm: 'integraciones.',
          description:
            'Flujos transaccionales orientados a mensajes, logica de routing, conectividad con gateways y el rigor operativo que requieren los entornos de pago.',
          bullets: [],
          featured: false,
        },
        {
          num: '03',
          icon: 'security',
          title: 'Identidad, seguridad',
          titleEm: 'y delivery cloud.',
          description:
            'OpenID Connect, OAuth 2.0, higiene de despliegue y hardening practico para sistemas que no pueden permitirse bordes sueltos.',
          bullets: [],
          featured: false,
        },
      ],
      linkLabel: 'Conversemos sobre tu proyecto',
    },
    about: {
      eyebrow: 'Por que InnovatioX',
      title: 'Experiencia directa donde',
      titleEm: 'fallar cuesta caro.',
      lead:
        'Aporto 17+ años en ingenieria de software y mas de una decada en plataformas de pago, ayudando a los equipos a entregar cambios con profundidad tecnica y criterio de produccion.',
      stats: [
        { target: 17, suffix: '+', label: 'años en ingenieria de software' },
        { target: 11, suffix: '+', label: 'años en plataformas de pago' },
        { target: 2, suffix: '', label: 'ecosistemas cloud usados en delivery' },
        { target: 2, suffix: '', label: 'idiomas de trabajo: EN / ES' },
      ],
      strengths: [
        {
          num: '01',
          title: 'Profundidad en plataformas de pago',
          description:
            'Experiencia en conectores transaccionales, formateadores, routing, logica de preautorizacion e integraciones con redes y sistemas de pago.',
        },
        {
          num: '02',
          title: 'Disciplina en identidad y seguridad',
          description:
            'OpenID Connect, OAuth 2.0, pensamiento de control de acceso y hardening guiado por entornos regulados y expectativas PCI-DSS.',
        },
        {
          num: '03',
          title: 'Mentalidad de produccion',
          description:
            'CI/CD, workflows de despliegue, analisis de incidentes y troubleshooting en sistemas distribuidos; no solo implementacion de features.',
        },
        {
          num: '04',
          title: 'Cloud pragmatica y stack amplio',
          description:
            'Certificacion AWS, foco actual en Azure y soltura para conectar sistemas backend con Node.js, Vue.js, Laravel y apoyo front-end cuando hace falta.',
        },
      ],
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Tecnologias que uso en',
      titleEm: 'delivery real.',
      lead:
        'El stack gira alrededor de .NET, trabajo backend intensivo en integraciones, flujos de seguridad, servicios cloud y soporte cross-stack pragmatico cuando el producto lo necesita.',
      techStack: [
        { name: '.NET 8', category: 'backend' },
        { name: 'C#', category: 'backend' },
        { name: 'ASP.NET Core', category: 'backend' },
        { name: 'Web API', category: 'backend' },
        { name: 'SQL Server', category: 'backend' },
        { name: 'OpenID Connect', category: 'identity' },
        { name: 'OAuth 2.0', category: 'identity' },
        { name: 'Enfoque PCI-DSS', category: 'identity' },
        { name: 'Azure', category: 'cloud' },
        { name: 'AWS', category: 'cloud' },
        { name: 'Docker', category: 'tooling' },
        { name: 'CI/CD', category: 'tooling' },
        { name: 'Flujos asistidos por AI', category: 'tooling' },
        { name: 'Node.js', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Vue.js', category: 'frontend' },
        { name: 'Laravel', category: 'frontend' },
      ],
    },
    contact: {
      eyebrow: 'Conversemos',
      title: '¿Necesitas ayuda senior en un',
      titleEm: 'sistema critico?',
      lead:
        'Si estas modernizando una plataforma, ajustando flujos de identidad o empujando trabajo .NET intensivo en integraciones, puedo ayudarte a avanzar con mas confianza en ingles o español.',
      cta: 'Escribir a Alberto',
      mailto: 'mailto:fieldyn@gmail.com',
      cardSub: 'Alberto Biancardi · Consultor independiente en .NET',
      channels: [
        {
          label: 'Email',
          value: 'fieldyn@gmail.com',
          href: 'mailto:fieldyn@gmail.com',
        },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/albertobiancardi',
          href: 'https://linkedin.com/in/albertobiancardi',
          external: true,
        },
        {
          label: 'Ubicacion',
          value: 'Quito, Ecuador',
        },
        {
          label: 'Idiomas',
          value: 'English / Español',
        },
      ],
      status: 'Disponible para conversaciones de consultoria',
    },
    footer: {
      tagline:
        'Ingenieria independiente en .NET, pagos, identidad y cloud por Alberto Biancardi.',
      badge: 'Disponible para conversaciones de consultoria',
      sitemapTitle: 'Mapa del sitio',
      capabilityTitle: 'Foco',
      capabilities: [
        'Modernizacion de backends .NET',
        'Pagos e integraciones de sistemas',
        'Identidad y seguridad',
        'Delivery cloud',
      ],
      connectTitle: 'Contacto',
      connectLinks: [
        {
          label: 'fieldyn@gmail.com',
          href: 'mailto:fieldyn@gmail.com',
        },
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/albertobiancardi',
          external: true,
        },
      ],
      copyrightSuffix: 'Todos los derechos reservados',
      bottomTagline: '.NET · Pagos · Cloud · English / Español',
    },
  },
}
