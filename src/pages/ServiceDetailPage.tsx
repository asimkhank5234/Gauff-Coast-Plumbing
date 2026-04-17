import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, FeatureCheck } from '../components/UI';
import { SERVICES, PHONE_NUMBER, DISPLAY_PHONE } from '../constants';
import { Phone, ChevronRight, AlertCircle, ShieldCheck } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;

  return (
    <PageLayout title={service.title}>
      {/* Detail Hero */}
      <section className="bg-primary text-white pt-24 pb-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/service-detail/1920/1080')] bg-cover bg-center"></div>
         <div className="container px-4 text-center lg:text-left relative z-10 grid lg:grid-cols-2 items-center gap-12">
            <div>
               <div className="bg-secondary/20 inline-flex p-4 rounded-2xl mb-6 text-secondary border border-secondary/30">
                  <IconComponent size={48} />
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  {service.title}
               </h1>
               <p className="text-xl text-slate-300 font-medium mb-10 leading-relaxed">
                  {service.description}
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${PHONE_NUMBER}`} className="btn-accent text-lg px-8 py-4">
                     Internal Call Support
                  </a>
                  <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                     Get Free Estimate
                  </Link>
               </div>
            </div>
            <div className="hidden lg:block">
               <div className="bg-white/5 p-4 rounded-3xl border border-white/10 shadow-2xl">
                  <img 
                    src={`https://picsum.photos/seed/${service.slug}/800/600`} 
                    alt={service.title} 
                    className="rounded-2xl w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-white px-4">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Content (2/3) */}
            <div className="lg:col-span-2 space-y-12">
               <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <SectionHeading title={`Professional ${service.title} in Hitchcock`} />
                  <p>{service.longDescription}</p>
                  <p>When you encounter issues with your {service.title.toLowerCase()}, you need experts who understand local building codes and the specific plumbing infrastructure of Hitchcock, TX. Our team provides reliable, efficient, and long-lasting solutions tailored to your property.</p>
               </div>

               <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-2xl font-black text-primary mb-8 underline underline-offset-8 decoration-secondary decoration-4">What's Included in This Service:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.features?.map(feature => (
                      <div key={feature} className="flex items-start space-x-3">
                         <ShieldCheck className="text-secondary mt-1 flex-shrink-0" size={20} />
                         <span className="font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                    <div className="flex items-start space-x-3">
                         <ShieldCheck className="text-secondary mt-1 flex-shrink-0" size={20} />
                         <span className="font-bold text-slate-700">100% Satisfaction Guarantee</span>
                    </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h3 className="text-2xl font-black text-primary">Reliable Results You Can Trust</h3>
                  <p className="text-slate-600 leading-relaxed">We don't just fix the immediate problem; we look for the root cause to prevent it from happening again. Our the techniques we use for {service.title.toLowerCase()} are industry-standard and safe for your home's pipes and environment.</p>
               </div>
            </div>

            {/* Right Sidebar (1/3) */}
            <div className="space-y-8">
               {/* Contact Widget */}
               <div className="bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <h4 className="text-2xl font-black mb-4">Request Service</h4>
                  <p className="text-slate-300 text-sm mb-8 leading-relaxed">Ready to get started? Call us or send a message for a free, upfront estimate on your plumbing Needs.</p>
                  <div className="space-y-4">
                     <a href={`tel:${PHONE_NUMBER}`} className="btn-accent w-full text-center py-4 flex items-center justify-center">
                        <Phone size={20} className="mr-3" /> {DISPLAY_PHONE}
                     </a>
                     <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 w-full text-center py-4 rounded-md font-bold block transition-all">
                        Schedule Online
                     </Link>
                  </div>
               </div>

               {/* Other Services List */}
               <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                  <h4 className="text-xl font-bold text-primary mb-6 border-b pb-4">Other Services</h4>
                  <ul className="space-y-4">
                     {SERVICES.filter(s => s.id !== service.id).slice(0, 5).map(s => (
                        <li key={s.id}>
                           <Link 
                             to={`/services/${s.slug}`} 
                             className="flex items-center justify-between group hover:text-secondary transition-colors"
                           >
                              <span className="font-bold text-slate-700 group-hover:text-secondary">{s.title}</span>
                              <ChevronRight size={18} className="text-slate-300 group-hover:text-secondary translate-x-0 group-hover:translate-x-1 transition-all" />
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="p-8 bg-surface rounded-3xl border border-slate-100 flex items-start space-x-4">
                  <AlertCircle size={32} className="text-accent flex-shrink-0" />
                  <div>
                     <h4 className="font-bold text-primary mb-1">Emergency?</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">If this is an urgent {service.title.toLowerCase()} emergency, skip the form and call us now.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner Callout */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 px-4">
         <div className="container grid md:grid-cols-3 gap-12 text-center">
            <div>
               <LucideIcons.CheckCircle2 className="mx-auto text-secondary mb-4" size={40} />
               <h5 className="text-xl font-black text-primary mb-2">Licensed & Insured</h5>
               <p className="text-sm text-slate-500">Protecting your home with professional qualifications.</p>
            </div>
            <div>
               <LucideIcons.Timer className="mx-auto text-secondary mb-4" size={40} />
               <h5 className="text-xl font-black text-primary mb-2">Available 24/7</h5>
               <p className="text-sm text-slate-500">We respond to plumbing emergencies around the clock.</p>
            </div>
            <div>
               <LucideIcons.ShieldCheck className="mx-auto text-secondary mb-4" size={40} />
               <h5 className="text-xl font-black text-primary mb-2">Quality Guarantee</h5>
               <p className="text-sm text-slate-500">We stand behind every repair and installation we perform.</p>
            </div>
         </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetailPage;
