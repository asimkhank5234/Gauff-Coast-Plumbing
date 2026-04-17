import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ShieldCheck, BadgeDollarSign, MapPin, Search, Droplets, Thermometer, Activity, Wrench, Building2, AlertTriangle, ChevronRight, Settings, Star } from 'lucide-react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, TrustBadge, RatingStars, ServiceCard, FeatureCheck, Logo } from '../components/UI';
import { COMPANY_NAME, PHONE_NUMBER, DISPLAY_PHONE, SERVICES, TESTIMONIALS, SERVICE_AREAS } from '../constants';
import { motion } from 'motion/react';

const HomePage = () => {
  return (
    <PageLayout>
      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/plumbing-brand/1920/1080?blur=5" 
            alt="Plumbing Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary"></div>
        </div>

        <div className="container relative z-10 py-32 lg:py-48 grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 pb-10"
          >
            <div className="inline-flex items-center bg-secondary/20 text-secondary border border-secondary/30 px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-12 shadow-2xl">
              <Clock size={14} className="mr-2" /> Reliable 24/7 Support in Hitchcock
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-12 tracking-tighter">
              Professional Plumbing <span className="text-secondary italic">Perfected.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-20 leading-relaxed font-medium max-w-2xl">
              Gauff Coast Plumbing delivers fast, affordable, and expert solutions for homes and businesses. We combine modern technology with local reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-accent px-10 py-6 text-xl shadow-[0_20px_50px_rgba(230,126,34,0.3)]">
                <Phone size={24} className="mr-3" /> Call {DISPLAY_PHONE}
              </a>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-xl border-4">
                Free Estimate
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:block relative"
          >
             <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-8 border-white/5 group">
                <img 
                   src="https://picsum.photos/seed/truck-plumbing/1200/1600" 
                   alt="Professional Service" 
                   className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-110"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
             </div>
             
             {/* Floating Trust Cards */}
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border-b-8 border-secondary ring-1 ring-slate-900/5">
                <div className="flex items-center space-x-4 mb-4">
                   <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                      <ShieldCheck size={32} />
                   </div>
                   <RatingStars count={5} />
                </div>
                <p className="text-lg font-black text-primary leading-tight">Licensed, Insured & Locally Trusted</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- Trust Grid --- */}
      <section className="bg-surface relative z-20 pb-40 -mt-10">
        <div className="container overflow-visible">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustBadge icon={Clock} title="24/7 Emergency Service" text="Ready anytime you need us." />
            <TrustBadge icon={ShieldCheck} title="Licensed & Experienced" text="Quality you can count on." />
            <TrustBadge icon={Activity} title="Fast Response Time" text="We arrive when we say we will." />
            <TrustBadge icon={BadgeDollarSign} title="Affordable Pricing" text="No hidden fees, ever." />
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section id="why-choose-us" className="section-spacing bg-white pt-24">
        <div className="container">
          <SectionHeading 
            centered 
            title="The Hitchcock Standard in Plumbing" 
            subtitle="We don't just fix pipes; we build relationships. Our commitment to excellence has made us the go-to plumbers for Texas City, Galveston, and beyond."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { num: "01", title: "Transparent Estimates", text: "Honest, fixed-price quotes before any work begins on your property." },
              { num: "02", title: "Local Recognition", text: "Deeply rooted in Hitchcock, we understand the local plumbing infrastructure." },
              { num: "03", title: "Emergency Priority", text: "Disaster doesn't keep a schedule. Neither do we. We're ready 24/7." },
              { num: "04", title: "Certified Quality", text: "Every repair is backed by our signature 100% satisfaction guarantee." }
            ].map((item) => (
              <div key={item.num} className="bg-surface p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white card-shadow transition-all group">
                <div className="text-secondary font-black text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{item.num}</div>
                <h3 className="text-2xl font-black text-primary mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium text-base tracking-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Service Cards --- */}
      <section className="section-spacing bg-surface border-y border-slate-100">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <SectionHeading 
              title="Our Core Expertise" 
              subtitle="Specialized solutions for every aspect of your plumbing system."
            />
            <Link to="/services" className="btn-primary mb-24 lg:mb-0">
               Explore All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section id="testimonials" className="section-spacing bg-primary overflow-hidden relative mt-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/water-abstract/1920/1080?grayscale')] bg-cover"></div>
        <div className="container relative z-10">
          <SectionHeading 
            light
            centered
            title="Voices of the Community" 
            subtitle="Real feedback from families and businesses we've served in the Hitchcock area."
          />
          
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 flex flex-col items-center text-center"
              >
                <div className="bg-secondary p-5 rounded-3xl mb-8 shadow-2xl relative">
                   <div className="absolute -top-3 -right-3">
                      <Star size={24} fill="white" className="text-white" />
                   </div>
                   <RatingStars count={item.rating} />
                </div>
                <p className="text-xl text-slate-100 font-medium italic mb-10 leading-relaxed">
                  "{item.review}"
                </p>
                <div className="mt-auto">
                    <h4 className="text-xl font-black text-white mb-1">{item.name}</h4>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{item.location} • {item.service}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-12">
               View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* --- Map & Area --- */}
      <section className="section-spacing bg-white">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading 
              title="Expert Help is Just Around the Corner" 
              subtitle="From our base in Hitchcock, we quickly mobilize to secure your home."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICE_AREAS.map(area => (
                <FeatureCheck key={area} text={area} />
              ))}
            </div>
            <div className="mt-16 bg-sand/10 p-10 rounded-[2.5rem] border border-sand/30 flex items-start space-x-6 relative overflow-hidden group">
               <div className="bg-secondary text-white p-4 rounded-2xl relative z-10">
                  <MapPin size={32} />
               </div>
               <div className="relative z-10">
                  <h4 className="text-xl font-black text-primary mb-2">Service Radius</h4>
                  <p className="text-slate-600 font-medium">We service Hitchcock, TX and everything within a 30-mile radius. Call us if you're unsure if you're in range!</p>
               </div>
               <div className="absolute bottom-0 right-0 opacity-5 group-hover:scale-150 transition-transform duration-700">
                  <Droplets size={200} />
               </div>
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-slate-50">
            <img 
               src="https://picsum.photos/seed/location-map/1000/1000" 
               alt="Service Location" 
               className="w-full aspect-square object-cover transition-transform duration-[2s] group-hover:scale-125 hover:rotate-2"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white p-8 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform border-4 border-secondary">
                  <Logo />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section id="cta-section" className="py-56 bg-secondary relative overflow-hidden mt-32">
        <div className="absolute inset-0 opacity-10 flex flex-wrap gap-20 items-center justify-center pointer-events-none">
           {[...Array(6)].map((_, i) => <Droplets key={i} size={300} className="text-white rotate-12" />)}
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter">
            Need a Plumber <br />
            <span className="text-primary italic">Right Now? Don't Panic.</span>
          </h2>
          <p className="text-white/90 text-2xl mb-16 max-w-3xl mx-auto font-medium">
            Join the hundreds of local families who trust Gauff Coast Plumbing for all their household and commercial needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-accent px-14 py-7 text-2xl shadow-2xl">
              <Phone size={32} className="mr-4" /> Call {DISPLAY_PHONE}
            </a>
            <Link to="/contact" className="bg-primary text-white hover:bg-slate-900 px-14 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl flex items-center justify-center">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
