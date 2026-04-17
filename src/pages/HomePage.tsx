import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ShieldCheck, BadgeDollarSign, MapPin, Search, Droplets, Thermometer, Activity, Wrench, Building2, AlertTriangle, ChevronRight, Settings } from 'lucide-react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, TrustBadge, RatingStars, ServiceCard, FeatureCheck } from '../components/UI';
import { COMPANY_NAME, PHONE_NUMBER, DISPLAY_PHONE, SERVICES, TESTIMONIALS, SERVICE_AREAS } from '../constants';
import { motion } from 'motion/react';

const HomePage = () => {
  return (
    <PageLayout>
      {/* --- Hero Section --- */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/plumbing-bg/1920/1080" 
            alt="Plumbing Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-2xl px-2"
          >
            <div className="inline-flex items-center bg-secondary/20 text-secondary border border-secondary/30 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <Clock size={14} className="mr-2" /> Open 24 Hours / 7 Days a Week
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              Reliable Plumbing Services in <span className="text-secondary italic">Hitchcock, TX</span> – Available 24/7
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Gauff Coast Plumbing provides fast, affordable, and professional plumbing services for homes and businesses in Hitchcock and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-accent text-lg px-8 py-5">
                <Phone size={22} className="mr-3" /> Call Now: {DISPLAY_PHONE}
              </a>
              <Link to="/contact" className="btn-primary text-lg px-8 py-5">
                Request Free Estimate
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <img 
                   src="https://picsum.photos/seed/plumber/800/600" 
                   alt="Professional Plumber" 
                   className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
             </div>
             {/* Floating Stats */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 max-w-xs">
                <div className="bg-primary p-3 rounded-full text-white">
                   <ShieldCheck size={32} />
                </div>
                <div>
                   <p className="text-2xl font-black text-primary leading-none">100%</p>
                   <p className="text-sm font-bold text-slate-500">Satisfaction Guaranteed</p>
                </div>
             </div>
             <div className="absolute -top-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl flex items-center space-x-4">
                <div>
                   <p className="text-xl font-black text-white leading-none tracking-wide uppercase">Emergency</p>
                   <p className="text-sm font-bold text-white/80">Support Response</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- Trust Section --- */}
      <section className="bg-white py-12 border-b border-slate-100 shadow-sm relative z-20 -mt-8 mx-4 lg:mx-auto max-w-6xl rounded-2xl">
        <div className="container px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TrustBadge icon={Clock} title="24/7 Emergency Service" text="Ready anytime you need us." />
          <TrustBadge icon={ShieldCheck} title="Licensed & Experienced" text="Quality you can count on." />
          <TrustBadge icon={Activity} title="Fast Response Time" text="We arrive when we say we will." />
          <TrustBadge icon={BadgeDollarSign} title="Affordable Pricing" text="No hidden fees, ever." />
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-24 bg-surface px-4">
        <div className="container">
          <SectionHeading 
            centered 
            title="Why Choose Gauff Coast Plumbing?" 
            subtitle="We are Hitchcock's most trusted local plumbers, dedicated to providing exceptional service and peace of mind."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-secondary hover:shadow-md transition-shadow">
              <div className="text-secondary mb-4 font-black text-3xl opacity-20">01</div>
              <h3 className="text-xl font-bold text-primary mb-3">Honest & Transparent</h3>
              <p className="text-slate-600 text-sm">We provide upfront pricing and clear explanations, so you always know what to expect.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-secondary hover:shadow-md transition-shadow">
              <div className="text-secondary mb-4 font-black text-3xl opacity-20">02</div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Hitchcock Experts</h3>
              <p className="text-slate-600 text-sm">Born and raised locally, we know the specific plumbing challenges of our community.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-secondary hover:shadow-md transition-shadow">
              <div className="text-secondary mb-4 font-black text-3xl opacity-20">03</div>
              <h3 className="text-xl font-bold text-primary mb-3">Emergency Ready</h3>
              <p className="text-slate-600 text-sm">Plumbing disasters happen at the worst times. We're here for you 24/7/365.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-secondary hover:shadow-md transition-shadow">
              <div className="text-secondary mb-4 font-black text-3xl opacity-20">04</div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality Guaranteed</h3>
              <p className="text-slate-600 text-sm">We stand by our work with a 100% satisfaction guarantee on all services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Overview --- */}
      <section className="py-24 bg-white px-4">
        <div className="container">
          <SectionHeading 
            title="Our Professional Services" 
            subtitle="From minor repairs to major installations, we handle everything plumbing with precision and care."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => {
              const icons: any = { AlertTriangle, Droplets, Search, Thermometer, Activity, Wrench, Building2, Settings };
              return (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={icons[service.icon] || Wrench}
                  link={`/services/${service.slug}`}
                />
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* --- Customer Testimony Slider Preview --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden px-4">
        <div className="container">
          <SectionHeading 
            light
            centered
            title="What Our Customers Say" 
            subtitle="Read why homeowners and business owners in Hitchcock trust Gauff Coast Plumbing."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative flex flex-col h-full"
              >
                <div className="text-secondary mb-4 italic text-6xl font-serif leading-none absolute -top-4 -left-2 opacity-20">"</div>
                <div className="mb-4">
                  <RatingStars count={item.rating} />
                </div>
                <p className="text-slate-300 italic mb-8 relative z-10 font-medium">
                  {item.review}
                </p>
                <div className="mt-auto flex items-center pt-6 border-t border-slate-700">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-black text-xl text-secondary mr-4 uppercase">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.location} • {item.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials" className="inline-flex items-center text-secondary font-black text-lg group">
              Read More Reviews <ChevronRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Service Areas --- */}
      <section className="py-24 bg-surface px-4">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Proudly Serving the Hitchcock Community" 
              subtitle="We areas we cover with our fast 24/7 plumbing services."
            />
            <div className="grid grid-cols-2 gap-4">
              {SERVICE_AREAS.map(area => (
                <FeatureCheck key={area} text={area} />
              ))}
            </div>
            <div className="mt-10 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 flex items-start space-x-4">
              <MapPin size={32} className="text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary mb-1">In a nearby area?</h4>
                <p className="text-sm text-slate-600">Give us a call! We're often able to head out to locations within 30 miles of Hitchcock.</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            {/* Realistically would be a Google Map placeholder or a nice city shot */}
            <img 
               src="https://picsum.photos/seed/hitchcock/800/400" 
               alt="Service Area Map" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
               <div className="bg-white p-4 rounded-full shadow-2xl animate-pulse">
                  <Droplets size={40} className="text-secondary" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Need a Plumber Right Now?
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Contact Gauff Coast Plumbing today for fast, affordable, and professional plumbing services. Available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-accent px-10 py-5 text-xl shadow-2xl">
              <Phone size={24} className="mr-3" /> Call {DISPLAY_PHONE}
            </a>
            <Link to="/contact" className="bg-primary text-white hover:bg-slate-900 px-10 py-5 rounded-md font-bold text-xl transition-all shadow-xl">
              Get A Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
