import React from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, ServiceCard } from '../components/UI';
import { SERVICES, PHONE_NUMBER, DISPLAY_PHONE, BEFORE_AFTER_GALLERY } from '../constants';
import { AlertTriangle, Droplets, Search, Thermometer, Activity, Wrench, Building2, Settings, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ServicesPage = () => {
  const icons: any = { AlertTriangle, Droplets, Search, Thermometer, Activity, Wrench, Building2, Settings };

  return (
    <PageLayout>
      {/* --- Hero Section --- */}
      <section className="bg-primary pt-48 pb-32 text-white relative overflow-hidden text-center lg:text-left">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/services-bg/1920/1080?grayscale')] bg-cover"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Precision <span className="text-secondary italic">Plumbing</span> Solutions</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              From routine maintenance to complex commercial infrastructure, our certified master plumbers deliver quality that lasts a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeading 
            centered
            title="Comprehensive Service Range" 
            subtitle="We handle every plumbing problem with speed, precision, and respect for your property."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={icons[service.icon] || Wrench}
                link={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Before/After Gallery --- */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeading 
            centered
            title="Results You Can See" 
            subtitle="Explore our recent projects in Hitchcock. We take pride in leaving every job site cleaner than we found it."
          />
          <div className="grid lg:grid-cols-3 gap-12">
            {BEFORE_AFTER_GALLERY.map((project) => (
              <div key={project.id} className="group">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl mb-8 border border-slate-100">
                   <img 
                     src={project.after} 
                     alt={project.title} 
                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                     referrerPolicy="no-referrer"
                   />
                   <img 
                     src={project.before} 
                     alt={`${project.title} (Before)`} 
                     className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                      Hover for Before
                   </div>
                </div>
                <h3 className="text-2xl font-black text-primary mb-2">{project.title}</h3>
                <p className="text-slate-500 font-medium">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Professional --- */}
      <section className="section-spacing bg-surface border-y border-slate-100">
        <div className="container grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeading 
              title="Don't Settle for Less Than Master Grade" 
              subtitle="Plumbing systems are complex. Amateur fixes often lead to catastrophic failures."
            />
            <div className="space-y-10">
               <div>
                  <h4 className="text-2xl font-black text-primary mb-3">Long-Term Reliability</h4>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">Our solutions are designed to last decades, not just until the next storm. We use premium parts and verified techniques.</p>
               </div>
               <div>
                  <h4 className="text-2xl font-black text-primary mb-3">Safe & Code Compliant</h4>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">Every installation meets or exceeds Hitchcock's building codes, ensuring your insurance stays valid and your family stays safe.</p>
               </div>
               <div>
                  <h4 className="text-2xl font-black text-primary mb-3">Minimized Disruption</h4>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">We use trenchless technology and rapid-recovery methods to get your water back on without tearing up your lifestyle.</p>
               </div>
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
             <img 
               src="https://picsum.photos/seed/service-van/1000/1200" 
               alt="Gauff Coast Van" 
               className="w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-x-0 bottom-0 py-12 px-10 bg-gradient-to-t from-primary to-transparent">
                <p className="text-white text-3xl font-black italic tracking-tighter">"Fast Response, Permanent Results."</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="section-spacing bg-white">
        <div className="container bg-secondary p-16 lg:p-32 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Need an expert opinion?</h2>
            <p className="text-2xl text-white/90 mb-16 max-w-2xl mx-auto font-medium">
               Book a free diagnostic inspection for your residential or commercial property today.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-accent px-12 py-7 text-2xl !bg-primary hover:!bg-slate-900 border-none shadow-2xl">
                Call {DISPLAY_PHONE}
              </a>
              <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 px-12 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
