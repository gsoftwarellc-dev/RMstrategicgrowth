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
      { name: 'Business Growth Strategy', path: '/services' },
      { name: 'Operations & Systems', path: '/services' },
      { name: 'Team Leadership & Culture', path: '/services' },
      { name: 'Brand Positioning', path: '/services' },
      { name: 'New Practice Launch', path: '/services' },
      { name: 'Founder Advisory', path: '/services' },
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
                <a href="mailto:romymittler@gmail.com" className="text-white/85 hover:text-gold transition-colors">
                  romymittler@gmail.com
                </a>
              </div>
              <p className="text-white/85 text-base">
                Ready to elevate your business?
              </p>
              <a
                href="/contact#booking"
                className="btn-outline text-xs tracking-widest inline-block"
              >
                Schedule a Call
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
