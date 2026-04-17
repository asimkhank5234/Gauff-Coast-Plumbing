import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronRight, Star, Droplets, Wrench, ShieldCheck, HeartPulse, Hammer } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, DISPLAY_PHONE, EMAIL, ADDRESS, SERVICE_AREAS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import SchemaMarkup from './SchemaMarkup';
import { Logo } from './UI';

// --- Header ---
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3 border-b border-secondary/10' : 'bg-transparent py-6'}`}>
      {/* Top Bar (Desktop) - only visible when not scrolled or on certain themes */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
          <div className="container flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black text-white/70">
            <div className="flex items-center space-x-8">
              <span className="flex items-center"><Clock size={12} className="mr-2 text-secondary" /> Available 24/7</span>
              <span className="flex items-center"><MapPin size={12} className="mr-2 text-secondary" /> {ADDRESS}</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href={`mailto:${EMAIL}`} className="flex items-center hover:text-secondary shadow-primary transition-colors"><Mail size={12} className="mr-2 text-secondary" /> {EMAIL}</a>
            </div>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <div className="container flex justify-between items-center">
        <Link to="/">
          <Logo light={!isScrolled && location.pathname === '/'} />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-secondary relative group ${isActive ? 'text-secondary' : (isScrolled ? 'text-primary' : 'text-white')}`
              }
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </NavLink>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className={`${isScrolled ? 'btn-accent' : 'bg-white text-primary px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-2xl'} flex items-center`}
          >
            <Phone size={16} className="mr-2" />
            {DISPLAY_PHONE}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className={`lg:hidden p-3 rounded-xl ${isScrolled ? 'text-primary bg-slate-50' : 'text-white bg-white/10'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-primary lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <Logo light />
                <button className="text-white p-3 bg-white/10 rounded-xl" onClick={() => setIsMenuOpen(false)}>
                  <X size={28} />
                </button>
              </div>
              <div className="flex-grow flex flex-col justify-center items-center space-y-8 p-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-3xl font-black text-white uppercase tracking-widest hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-8 border-t border-white/10">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="btn-accent w-full py-6 text-xl"
                >
                  <Phone size={24} className="mr-3" />
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Footer ---
export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 border-t border-white/5">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-20 px-4 mb-24">
        {/* Brand */}
        <div className="space-y-8">
          <Logo light />
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Professional 24/7 plumbing services locally owned and operated in Hitchcock, TX. We pride ourselves on honest pricing and quality craftsmanship.
          </p>
          <div className="flex space-x-4">
             {/* Social items would go here */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-10 flex items-center">
            Navigation
          </h4>
          <ul className="space-y-5 text-slate-300 text-sm font-bold">
            <li><Link to="/about" className="hover:text-secondary flex items-center transition-colors"><ChevronRight size={14} className="mr-3 text-secondary" /> About Our Team</Link></li>
            <li><Link to="/services" className="hover:text-secondary flex items-center transition-colors"><ChevronRight size={14} className="mr-3 text-secondary" /> Our Plumbing Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-secondary flex items-center transition-colors"><ChevronRight size={14} className="mr-3 text-secondary" /> Customer Stories</Link></li>
            <li><Link to="/contact" className="hover:text-secondary flex items-center transition-colors"><ChevronRight size={14} className="mr-3 text-secondary" /> Contact & Location</Link></li>
          </ul>
        </div>

        {/* Services Areas */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-10 flex items-center">
            Service Areas
          </h4>
          <ul className="grid grid-cols-1 gap-5 text-slate-300 text-sm font-bold">
            {SERVICE_AREAS.map(area => (
              <li key={area} className="flex items-center">
                <MapPin size={14} className="mr-3 text-secondary" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-10 flex items-center">
            Get In Touch
          </h4>
          <ul className="space-y-6 text-slate-300 text-sm font-bold">
            <li className="flex items-start">
              <MapPin size={18} className="mr-4 text-secondary flex-shrink-0" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-4 text-secondary flex-shrink-0" />
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{DISPLAY_PHONE}</a>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-4 text-secondary flex-shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors truncate block">{EMAIL}</a>
            </li>
            <li className="flex items-center italic text-secondary">
              <Clock size={18} className="mr-4 flex-shrink-0" />
              <span>Available 24 Hours / 7 Days</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 space-y-6 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Licensed Plumbing Services.</p>
        <p className="hover:text-slate-300 transition-colors cursor-default">
          Hitchcock • Galveston • Texas City • La Marque • Santa Fe
        </p>
      </div>
    </footer>
  );
};

// --- Floating CTA (Mobile) ---
export const FloatingCTA = () => {
  return (
    <div className="md:hidden fixed bottom-6 right-6 z-40">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="bg-accent text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 active:scale-95 transition-transform"
      >
        <Phone size={30} fill="currentColor" />
      </a>
    </div>
  );
};

// --- Page Layout ---
export const PageLayout = ({ children, title }: { children: React.ReactNode, title?: string }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) {
        document.title = `${title} | Gauff Coast Plumbing`;
    } else {
        document.title = `${COMPANY_NAME} | 24/7 Professional Plumbing in Hitchcock, TX`;
    }
  }, [pathname, title]);

  return (
    <div className="min-h-screen pt-[72px] lg:pt-[104px]">
      <SchemaMarkup />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};
