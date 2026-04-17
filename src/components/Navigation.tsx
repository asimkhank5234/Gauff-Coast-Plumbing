import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronRight, Star, Droplets, Wrench, ShieldCheck, HeartPulse, Hammer } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, DISPLAY_PHONE, EMAIL, ADDRESS, SERVICE_AREAS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import SchemaMarkup from './SchemaMarkup';

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
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
      {/* Top Bar (Desktop) */}
      <div className="hidden lg:block bg-primary text-white py-1">
        <div className="container flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Clock size={14} className="mr-1" /> Available 24/7</span>
            <span className="flex items-center"><MapPin size={14} className="mr-1" /> {ADDRESS}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`mailto:${EMAIL}`} className="flex items-center hover:text-secondary"><Mail size={14} className="mr-1" /> {EMAIL}</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container flex justify-between items-center px-4">
        <Link to="/" className="flex items-center group">
          <div className="bg-primary p-2 rounded-lg mr-2 group-hover:bg-secondary transition-colors">
            <Droplets size={24} className="text-white" />
          </div>
          <div>
            <span className="text-xl font-display font-black text-primary leading-tight block">GAUFF COAST</span>
            <span className="text-xs font-bold text-secondary tracking-[0.2em] block -mt-1 uppercase">Plumbing</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wider transition-colors hover:text-secondary ${isActive ? 'text-secondary border-b-2 border-secondary' : 'text-slate-600'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="btn-accent py-2 px-5 flex items-center"
          >
            <Phone size={18} className="mr-2" />
            {DISPLAY_PHONE}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container py-6 px-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-bold text-slate-800 py-2 border-b border-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-accent w-full text-center flex justify-center items-center py-4"
              >
                <Phone size={20} className="mr-2" />
                Call Now: {DISPLAY_PHONE}
              </a>
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
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center">
            <div className="bg-white p-2 rounded-lg mr-2">
              <Droplets size={24} className="text-primary" />
            </div>
            <div>
              <span className="text-xl font-display font-black text-white leading-tight block">GAUFF COAST</span>
              <span className="text-xs font-bold text-secondary tracking-[0.2em] block -mt-1 uppercase">Plumbing</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Fast, Reliable, and Affordable Plumbing Services in Hitchcock, TX. Available 24/7 for all your residential and commercial plumbing needs.
          </p>
          <div className="flex space-x-4">
             {/* Social items would go here */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 flex items-center">
            <span className="w-8 h-1 bg-secondary mr-3 rounded-full"></span>
            Quick Links
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-secondary flex items-center"><ChevronRight size={14} className="mr-2" /> About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary flex items-center"><ChevronRight size={14} className="mr-2" /> Our Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-secondary flex items-center"><ChevronRight size={14} className="mr-2" /> Customer Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-secondary flex items-center"><ChevronRight size={14} className="mr-2" /> Contact Us</Link></li>
            <li><Link to="/services/emergency-plumbing" className="hover:text-secondary flex items-center text-accent"><ChevronRight size={14} className="mr-2" /> Emergency Service</Link></li>
          </ul>
        </div>

        {/* Services Areas */}
        <div>
          <h4 className="text-lg font-bold mb-6 flex items-center">
            <span className="w-8 h-1 bg-secondary mr-3 rounded-full"></span>
            Service Areas
          </h4>
          <ul className="grid grid-cols-1 gap-4 text-slate-400 text-sm">
            {SERVICE_AREAS.map(area => (
              <li key={area} className="flex items-center">
                <MapPin size={14} className="mr-2 text-secondary" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 flex items-center">
            <span className="w-8 h-1 bg-secondary mr-3 rounded-full"></span>
            Contact Us
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-secondary flex-shrink-0" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-secondary flex-shrink-0" />
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">{DISPLAY_PHONE}</a>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-secondary flex-shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
            </li>
            <li className="flex items-center">
              <Clock size={18} className="mr-3 text-secondary flex-shrink-0" />
              <span>Open 24 Hours</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container px-4 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
        <p className="flex items-center justify-center">
          Licensed & Insured Plumbing Contractor in Hitchcock, Texas
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
