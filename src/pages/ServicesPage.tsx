import React from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, ServiceCard } from '../components/UI';
import { SERVICES, PHONE_NUMBER, DISPLAY_PHONE } from '../constants';
import { AlertTriangle, Droplets, Search, Thermometer, Activity, Wrench, Building2, Settings, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const icons: any = { AlertTriangle, Droplets, Search, Thermometer, Activity, Wrench, Building2, Settings };

  return (
    <PageLayout title="Plumbing Services">
      {/* Hero Header */}
      <section className="bg-primary pt-24 pb-48 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/services/1920/1080')] bg-cover bg-center"></div>
        <div className="container relative z-10">
          <SectionHeading 
            light
            centered
            title="Comprehensive Plumbing Solutions for Hitchcock, TX" 
            subtitle="From residential repairs to commercial installations, our expert plumbers provide top-quality service for every need."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface px-4">
        <div className="container -mt-40 relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* Why Professional Plumbing? */}
      <section className="py-24 bg-white px-4">
        <div className="container flex flex-col items-center">
            <SectionHeading 
               centered
               title="Why Trust Gauff Coast for Your Plumbing Needs?" 
               subtitle="When you choose us, you're choosing a partner dedicated to your home's safety and comfort."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
               <div className="flex space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary h-fit"><Settings size={28} /></div>
                  <div>
                     <h4 className="text-xl font-bold text-primary mb-2">Modern Technology</h4>
                     <p className="text-slate-600 text-sm">We use the latest tools and diagnostic equipment to find and fix issues faster and more accurately.</p>
                  </div>
               </div>
               <div className="flex space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary h-fit"><Wrench size={28} /></div>
                  <div>
                     <h4 className="text-xl font-bold text-primary mb-2">Expert Craftsmanship</h4>
                     <p className="text-slate-600 text-sm">Our licensed plumbers have seen it all and know exactly how to handle complex plumbing systems.</p>
                  </div>
               </div>
               <div className="flex space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary h-fit"><Droplets size={28} /></div>
                  <div>
                     <h4 className="text-xl font-bold text-primary mb-2">Water Efficiency</h4>
                     <p className="text-slate-600 text-sm">We help you save money and conserve resources by identifying leaks and installing high-efficiency fixtures.</p>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary px-4 text-center">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Schedule a Service?</h2>
          <p className="text-white/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Contact us today for a free estimate or to schedule your next plumbing project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-accent px-12 py-5 text-xl shadow-2xl">
              <Phone size={24} className="mr-3" /> Call Now: {DISPLAY_PHONE}
            </a>
            <Link to="/contact" className="bg-primary text-white hover:bg-slate-900 px-12 py-5 rounded-md font-bold text-xl shadow-xl transition-all">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
