import { useMemo, useState } from 'react'

const content = {
  pt: {
    navManifesto: 'Manifesto',
    navProjects: 'Projetos',
    navAbout: 'Sobre',
    github: 'GitHub',
    eyebrow: 'laboratório experimental sem filtro comercial',
    titleMain: 'No Filter Lab.',
    titleAccent: 'Criar. Testar. Aprender.',
    subtitle:
      'O NFLab é um guarda-chuva para ideias técnicas que valem ser exploradas, sem pressão de monetização. O objetivo é evolução prática e conteúdo real.',
    ctaProjects: 'Ver Projetos',
    ctaGithub: 'Acompanhar no GitHub',
    manifestoTitle: 'Manifesto NFLab',
    m1Title: 'Zero filtro financeiro',
    m1Body: 'Projeto entra porque é interessante e desafiador, não porque vira produto.',
    m2Title: 'Aprender construindo',
    m2Body: 'Experimentação com stack real, execução rápida e documentação prática.',
    m3Title: 'Compartilhar o processo',
    m3Body: 'Open source, notas públicas e conteúdo técnico quando fizer sentido.',
    projectsTitle: 'Projetos em Destaque',
    projectsTag: 'simples e direto',
    p1Title: 'NFLab MacroPad',
    p1Body:
      'Controlador físico com foco em produtividade e automações, usado como base de experimentos de hardware + software.',
    p2Title: 'NFLab Thermal Printer',
    p2Body:
      'Experimentação de impressão térmica para fluxos físicos de tarefas e informação, conectando mundo digital com execução no papel.',
    repoLink: 'ver repositório →',
    aboutKicker: 'NFLab.org',
    aboutTitle: 'Laboratório vivo de ideias técnicas',
    aboutBody: 'Sem hype, sem ruído. Só projeto prático, documentação e evolução contínua.',
    contact: 'info@nflab.org',
  },
  en: {
    navManifesto: 'Manifesto',
    navProjects: 'Projects',
    navAbout: 'About',
    github: 'GitHub',
    eyebrow: 'experimental lab with zero commercial pressure',
    titleMain: 'No Filter Lab.',
    titleAccent: 'Build. Test. Learn.',
    subtitle:
      'NFLab is an umbrella for technical ideas worth exploring, with no monetization pressure. The goal is practical growth and real output.',
    ctaProjects: 'See Projects',
    ctaGithub: 'Follow on GitHub',
    manifestoTitle: 'NFLab Manifesto',
    m1Title: 'Zero financial filter',
    m1Body: 'A project gets in because it is interesting and challenging, not because it becomes a product.',
    m2Title: 'Learn by building',
    m2Body: 'Hands-on experimentation with real stacks, fast execution, and practical documentation.',
    m3Title: 'Share the process',
    m3Body: 'Open source, public notes, and technical content whenever it makes sense.',
    projectsTitle: 'Featured Projects',
    projectsTag: 'simple and direct',
    p1Title: 'NFLab MacroPad',
    p1Body:
      'A physical controller focused on productivity and automation, used as a base for hardware + software experiments.',
    p2Title: 'NFLab Thermal Printer',
    p2Body:
      'Thermal printing experiments for physical task and information flows, connecting digital systems to paper execution.',
    repoLink: 'view repository →',
    aboutKicker: 'NFLab.org',
    aboutTitle: 'A living lab for technical ideas',
    aboutBody: 'No hype, no noise. Just practical projects, documentation, and continuous evolution.',
    contact: 'info@nflab.org',
  },
}

function App() {
  const [lang, setLang] = useState('pt')
  const t = useMemo(() => content[lang], [lang])

  return (
    <div className="app-shell">
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-gradient" />
        <div className="stars stars-a" />
        <div className="stars stars-b" />
        <div className="grid-mask" />
        <div className="red-glow" />
      </div>

      <header className="topbar">
        <nav className="nav">
          <a href="#hero" className="brand">
            <span className="brand-mark" />
            <span className="brand-text">NFLab</span>
          </a>

          <div className="nav-links">
            <a href="#manifesto">{t.navManifesto}</a>
            <a href="#projects">{t.navProjects}</a>
            <a href="#about">{t.navAbout}</a>
          </div>

          <div className="nav-right">
            <div className="lang-switch" role="group" aria-label="Language switcher">
              <button
                type="button"
                className={lang === 'pt' ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLang('pt')}
              >
                PT
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
          <a
            className="nav-btn"
            href="https://github.com/yanfernandes"
            target="_blank"
            rel="noreferrer"
          >
            {t.github}
          </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <p className="eyebrow fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="dot" /> {t.eyebrow}
          </p>

          <h1 className="title fade-up" style={{ animationDelay: '0.18s' }}>
            {t.titleMain}
            <br />
            <span>{t.titleAccent}</span>
          </h1>

          <p className="subtitle fade-up" style={{ animationDelay: '0.26s' }}>
            {t.subtitle}
          </p>

          <div className="hero-actions fade-up" style={{ animationDelay: '0.34s' }}>
            <a href="#projects" className="btn btn-primary">{t.ctaProjects}</a>
            <a
              href="https://github.com/yanfernandes"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              {t.ctaGithub}
            </a>
          </div>
        </section>

        <section id="manifesto" className="section container">
          <div className="panel">
            <h2>{t.manifestoTitle}</h2>
            <div className="manifesto-grid">
              <article>
                <p className="kicker">01</p>
                <h3>{t.m1Title}</h3>
                <p>{t.m1Body}</p>
              </article>
              <article>
                <p className="kicker">02</p>
                <h3>{t.m2Title}</h3>
                <p>{t.m2Body}</p>
              </article>
              <article>
                <p className="kicker">03</p>
                <h3>{t.m3Title}</h3>
                <p>{t.m3Body}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head">
            <h2>{t.projectsTitle}</h2>
            <span>{t.projectsTag}</span>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-icon">⌨</div>
              <h3>{t.p1Title}</h3>
              <p>{t.p1Body}</p>
              <a href="https://github.com/yanfernandes/nflab-macropad" target="_blank" rel="noreferrer">
                {t.repoLink}
              </a>
            </article>

            <article className="project-card">
              <div className="project-icon">🖨</div>
              <h3>{t.p2Title}</h3>
              <p>{t.p2Body}</p>
              <a href="https://github.com/yanfernandes/nflab-thermal-printer" target="_blank" rel="noreferrer">
                {t.repoLink}
              </a>
            </article>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-inner">
            <div>
              <p className="about-kicker">{t.aboutKicker}</p>
              <h2>{t.aboutTitle}</h2>
              <p className="about-copy">{t.aboutBody}</p>
            </div>
            <a href="mailto:info@nflab.org" className="contact-btn">{t.contact}</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
