import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Circle,
  Code2,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

function GithubIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></svg>
}

function LinkedinIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
}

const projects = [
  {
    number: '01',
    title: 'AIMPACT 2026',
    eyebrow: 'Hackathon platform · 2026',
    description:
      'An end-to-end hackathon platform that handled registrations, shortlisting, admin workflows, and on-site check-ins for a real 8-hour event.',
    metrics: ['64 teams', '200+ students', '0 downtime'],
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    live: 'https://aimpact-hackathon.vercel.app',
    github: 'https://github.com/TaifoorAnsari/aimpact-hackathon',
    image: '/projects/aimpact.png',
    imageAlt: 'AIMPACT 2026 hackathon landing page with event tracks and registration details',
    imageWidth: 1872,
    imageHeight: 880,
    color: 'coral',
  },
  {
    number: '02',
    title: 'PathForge',
    eyebrow: 'Adaptive learning · AI',
    description:
      'A learning platform that turns ambitious skill goals into structured roadmaps, milestone quiz gates, automated schedules, and downloadable guides.',
    metrics: ['AI roadmaps', 'Quiz gates', 'Smart schedules'],
    stack: ['React', 'Zustand', 'Node.js', 'Gemini API', 'MongoDB'],
    live: 'https://pathforge-app-wine.vercel.app/',
    github: 'https://github.com/TaifoorAnsari/LakshyaAI',
    image: '/projects/pathforge.png',
    imageAlt: 'PathForge MERN development roadmap dashboard with milestones and learning progress',
    imageWidth: 1909,
    imageHeight: 888,
    color: 'violet',
  },
  {
    number: '03',
    title: 'GetGrades',
    eyebrow: 'Education platform · UI/UX',
    description:
      'A fast, conversion-focused website for a competitive coaching institute, with curriculum roadmaps, verified reviews, and touch-first mobile carousels.',
    metrics: ['Mobile first', 'Local SEO', 'Touch UX'],
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'React Router'],
    live: 'https://getgrades.in/',
    github: 'https://github.com/TaifoorAnsari/GetGrades',
    image: '/projects/getgrades.png',
    imageAlt: 'GetGrades Career Institute homepage with course options and admissions information',
    imageWidth: 1900,
    imageHeight: 886,
    color: 'blue',
  },
]

function RollText({ children }) {
  return <span className="roll-text"><span>{children}</span><span aria-hidden="true">{children}</span></span>
}

function Header({ menuOpen, setMenuOpen }) {
  const links = ['Home', 'About', 'Work', 'Contact']

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Taifoor Ansari, home">
        <span>TA</span>
        <i />
      </a>

      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {links.map((link) => (
          <a className="roll-link" key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            <RollText>{link}</RollText>
          </a>
        ))}
        <a className="mobile-social roll-link" href="https://github.com/TaifoorAnsari" target="_blank" rel="noreferrer">
          <RollText>GitHub</RollText> <ArrowUpRight size={15} />
        </a>
      </nav>

      <div className="availability"><span /> Open to work</div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}

function HeroClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const localTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).format(now)

  return <time className="hero-clock" dateTime={now.toISOString()} aria-label={`India local time: ${localTime} IST`}>{localTime} <span>IST</span></time>
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <p className="hero-kicker reveal">Full-stack developer · India</p>
      <h1 className="hero-title" aria-label="Taifoor Ansari">
        <span className="title-line title-first">TAIFOOR</span>
        <span className="title-line title-last">ANSARI</span>
      </h1>

      <div className="hero-copy reveal reveal-delay-1">
        <span className="eyebrow">Hello, I’m Taifoor.</span>
        <p>I build thoughtful digital products from first interaction to production.</p>
        <a href="#work" className="text-link roll-link"><RollText>Explore my work</RollText> <ArrowDownRight size={18} /></a>
      </div>

      <div className="portrait-wrap reveal reveal-delay-2">
        <div className="portrait-halo" />
        <div className="portrait-frame">
          <img src="/taifoor-cutout.png" alt="Taifoor Ansari in a professional portrait" />
        </div>
        <div className="portrait-caption"><span>01</span> Developer & designer</div>
      </div>

      <div className="hero-disciplines reveal reveal-delay-3">
        <span>Selected focus</span>
        <ul>
          <li>Full-stack products</li>
          <li>Frontend systems</li>
          <li>UI/UX engineering</li>
          <li>Reliable deployment</li>
        </ul>
      </div>

      <nav className="hero-socials" aria-label="Social profiles and email">
        <a href="https://github.com/TaifoorAnsari" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><GithubIcon size={17} /></a>
        <a href="https://www.linkedin.com/in/taifoor-ansari/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><LinkedinIcon size={17} /></a>
        <a href="mailto:mohammadtaifoor9175@gmail.com" aria-label="Email Taifoor"><Mail size={17} aria-hidden="true" /></a>
      </nav>
      <HeroClock />
      <a className="hero-scroll" href="#about" aria-label="Scroll to About">Scroll <span aria-hidden="true" /></a>

      <div className="hero-footer">
        {['React', 'Node.js', 'MongoDB', 'Product thinking', 'UI engineering'].map((item, index) => (
          <span key={item}><i>{String(index + 1).padStart(2, '0')}</i>{item}</span>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-label reveal"><span>01</span> About</div>
      <div className="about-main">
        <h2 className="reveal">Building products that feel <em>clear, useful,</em> and dependable.</h2>
        <div className="about-copy reveal reveal-delay-1">
          <p>
            I’m Taifoor Ansari, a full-stack developer who enjoys turning ambitious ideas into polished, production-ready experiences. I work across React frontends, Node.js APIs, databases, authentication, and deployment—so I can see a product as one connected system rather than a collection of parts.
          </p>
          <p>
            My work sits at the intersection of engineering and product thinking. Whether I’m building an AI-powered learning platform, running registrations for 200+ students, or refining a mobile-first education experience, I care about useful details, resilient systems, and interfaces that make sense immediately.
          </p>
          <a href="mailto:mohammadtaifoor9175@gmail.com" className="button button-dark roll-link"><RollText>Let’s work together</RollText> <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="about-stats reveal">
        <div><strong>03</strong><span>Featured products</span></div>
        <div><strong>200+</strong><span>Event users served</span></div>
        <div><strong>Full-stack</strong><span>Idea to deployment</span></div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project project-${project.color} reveal`}>
      <div className="project-info">
        <div className="project-top"><span>{project.number}</span><span>{project.eyebrow}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="metric-list">{project.metrics.map((m) => <span key={m}><Circle size={7} fill="currentColor" />{m}</span>)}</div>
        <div className="stack-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer" className="button button-light roll-link"><RollText>View live</RollText> <ArrowUpRight size={17} /></a>
          <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" aria-label={`${project.title} on GitHub`}><GithubIcon size={20} /></a>
        </div>
      </div>
      <a href={project.live} target="_blank" rel="noreferrer" className="project-visual" aria-label={`Open ${project.title} live website`}>
        <div className="project-screenshot">
          <img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" />
        </div>
        <span className="visual-index">0{index + 1} / 03</span>
      </a>
    </article>
  )
}

function Work() {
  return (
    <section className="work section" id="work">
      <div className="work-heading">
        <div className="section-label reveal"><span>02</span> Selected work</div>
        <h2 className="reveal">Products built to work<br/><em>in the real world.</em></h2>
      </div>
      <div className="projects">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
    setSent(true)
    window.location.href = `mailto:mohammadtaifoor9175@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact-orbit orbit-one" aria-hidden="true"/><div className="contact-orbit orbit-two" aria-hidden="true"/>
      <div className="section-label light reveal"><span>03</span> Contact</div>
      <div className="contact-grid">
        <div className="contact-intro reveal">
          <span className="eyebrow">Have a project in mind?</span>
          <h2>Let’s make<br/>something <em>useful.</em></h2>
          <p>I’m open to full-stack opportunities, product collaborations, and thoughtful ideas worth building.</p>
          <a className="mail-link" href="mailto:mohammadtaifoor9175@gmail.com">mohammadtaifoor9175@gmail.com <ArrowUpRight /></a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/taifoor-ansari/" target="_blank" rel="noreferrer"><LinkedinIcon size={18}/> LinkedIn</a>
            <a href="https://github.com/TaifoorAnsari" target="_blank" rel="noreferrer"><GithubIcon size={18}/> GitHub</a>
          </div>
        </div>

        <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
          <label><span>Your name</span><input type="text" name="name" placeholder="Jane Smith" required /></label>
          <label><span>Email address</span><input type="email" name="email" placeholder="jane@company.com" required /></label>
          <label><span>Tell me about your project</span><textarea name="message" rows="4" placeholder="A little about the idea, timeline, or role…" required /></label>
          <button type="submit" className="roll-link">{sent ? <><RollText>Email ready</RollText> <Check size={19}/></> : <><RollText>Send enquiry</RollText> <Send size={18}/></>}</button>
          <small>This form opens your default email app—no information is stored.</small>
        </form>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} Taifoor Ansari</span>
        <span>Designed & built with intention</span>
        <a href="#home">Back to top <ArrowUpRight size={15}/></a>
      </footer>
    </section>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main><Hero /><About /><Work /><Contact /></main>
    </>
  )
}
