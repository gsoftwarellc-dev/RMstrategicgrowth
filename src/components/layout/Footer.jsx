import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Results', path: '/results' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Increase Revenue', path: '/services' },
      { name: 'Improve Profitability', path: '/services' },
      { name: 'Increase Patient Lifetime Value', path: '/services' },
      { name: 'Strengthen Operations', path: '/services' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      {/* Gold top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src="/images/updated_logo/footer-logo-cropped.png"
                alt="RM Strategic Growth"
                className="h-16 lg:h-20 w-auto max-w-full object-contain mb-6"
              />
            </Link>
            <p className="text-white/85 text-base leading-relaxed mb-6">
              Strategic consulting for MedSpa, aesthetic & wellness brands. Built by industry leaders, designed for growth.
            </p>
            <p className="text-white/85 text-xs tracking-wider uppercase">
              Based in South Florida
              <br />
              Working With Clients Worldwide
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/85 text-base hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4
              className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 mb-6 text-base">
                <a href="tel:+14075755121" className="text-white/85 hover:text-gold transition-colors">
                  407-575-5121
                </a>
                <a href="mailto:info@rmstrategicgrowth.com" className="text-white/85 hover:text-gold transition-colors">
                  info@rmstrategicgrowth.com
                </a>
              </div>
              <p className="text-white/85 text-base">
                Ready to elevate your business?
              </p>
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="https://www.instagram.com/rmstrategicgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/85 hover:text-gold hover:border-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/18p2nQt3yo/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/85 hover:text-gold hover:border-gold transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@RMStrategicGrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/85 hover:text-gold hover:border-gold transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m10 15 5-3-5-3z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <a
                href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-xs tracking-widest inline-block"
              >
                Schedule A Free Discovery Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/85 text-xs tracking-wider">
              © {new Date().getFullYear()} RM Strategic Growth. All Rights Reserved.
            </p>
            <p className="text-white text-base tracking-wider italic" style={{ fontFamily: 'var(--font-accent)' }}>
              Built to Scale, Designed to Last
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
