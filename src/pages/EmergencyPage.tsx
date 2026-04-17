import React from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, FeatureCheck } from '../components/UI';
import { PHONE_NUMBER, DISPLAY_PHONE, COMPANY_NAME } from '../constants';
import { Phone, AlertCircle, Clock, CheckCircle, ShieldAlert, Zap } from 'lucide-react';

const EmergencyPage = () => {
  const urgentServices = [
    "Burst Pipe Emergencies",
    "Main Sewer Line Backups",
    "Water Heater Leaks/Failures",
    "Severely Clogged Drains",
    "Overflowing Toilets",
    "Gas Line Concerns",
    "Sump Pump Failure",
    "Major Plumbing Leaks"
  ];

  return (
    <PageLayout title="24/7 Emergency Plumbing">
      {/* Intense Emergency Hero */}
      <section className="bg-accent pt-24 pb-32 lg:pt-32 lg:pb-48 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/emergency/1920/1080')] bg-cover bg-center grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/80 to-transparent"></div>
        
        <div className="container px-4 text-center relative z-10 flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 inline-flex items-center text-sm font-black uppercase tracking-widest border border-white/30 animate-pulse">
            <Zap size={18} className="mr-2 text-yellow-300" /> Need a plumber right now?
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            24/7 Emergency Plumbing <br />
            <span className="text-slate-900 bg-white px-4">Available in Hitchcock</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl">
             Don't let a plumbing disaster damage your home. Our emergency team is on standby and ready to head your way immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="bg-white text-accent hover:bg-slate-100 px-12 py-6 rounded-xl font-black text-2xl md:text-3xl shadow-2xl transition-all flex items-center justify-center border-b-8 border-slate-200"
            >
              <Phone size={36} className="mr-4 animate-bounce" />
              {DISPLAY_PHONE}
            </a>
          </div>
          
          <div className="mt-12 flex items-center text-lg font-bold">
            <Clock className="mr-3" /> Average Arrival: Under 60 Minutes
          </div>
        </div>
      </section>

      {/* Quick Details / Checklist */}
      <section className="py-24 bg-white px-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <SectionHeading 
                  title="What Counts as a Plumbing Emergency?" 
                  subtitle="If your property is at risk of water damage, or you lack basic sanitation, it's an emergency. We're here to help anytime."
               />
               <div className="grid sm:grid-cols-2 gap-6">
                 {urgentServices.map(service => (
                   <div key={service} className="flex items-center space-x-3 p-4 bg-surface rounded-xl border border-slate-100 shadow-sm">
                      <AlertCircle size={20} className="text-accent flex-shrink-0" />
                      <span className="font-bold text-primary text-sm">{service}</span>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl space-y-8 relative">
                <div className="absolute -top-6 -right-6 bg-secondary p-4 rounded-2xl rotate-12 shadow-xl">
                   <ShieldAlert size={40} />
                </div>
                <h3 className="text-3xl font-black">Why Call Us For Emergencies?</h3>
                <div className="space-y-6">
                   <div className="flex items-start space-x-4">
                      <div className="bg-white/10 p-2 rounded-lg text-secondary mt-1"><CheckCircle size={24} /></div>
                      <div>
                         <h4 className="font-bold text-lg">Human Operators</h4>
                         <p className="text-slate-400 text-sm">When you call us, you speak to a real person who can help coordinate your dispatch immediately.</p>
                      </div>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="bg-white/10 p-2 rounded-lg text-secondary mt-1"><CheckCircle size={24} /></div>
                      <div>
                         <h4 className="font-bold text-lg">Fully Stocked Vans</h4>
                         <p className="text-slate-400 text-sm">Our vans carry 95% of standard repair parts so we can fix the issue on the first visit.</p>
                      </div>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="bg-white/10 p-2 rounded-lg text-secondary mt-1"><CheckCircle size={24} /></div>
                      <div>
                         <h4 className="font-bold text-lg">Local Focus</h4>
                         <p className="text-slate-400 text-sm">Based in Hitchcock, we know the shortcuts and can get to your home faster than distant franchises.</p>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step instructions for the user while waiting */}
      <section className="py-24 bg-surface px-4">
         <div className="container max-w-5xl">
            <SectionHeading 
               centered
               title="While You Wait for Our Plumber" 
               subtitle="Follow these steps to minimize damage while our technician is en route."
            />
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto text-xl font-black mb-6">1</div>
                  <h4 className="font-bold text-primary text-xl mb-4">Shut Off Water</h4>
                  <p className="text-slate-600 text-sm">Locate your main water shut-off valve (usually near the water meter) and turn it off clockwise to stop the flow.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto text-xl font-black mb-6">2</div>
                  <h4 className="font-bold text-primary text-xl mb-4">Turn Off Water Heater</h4>
                  <p className="text-slate-600 text-sm">If your main water is off, turn off the heating element for your water heater to prevent burnout or gas issues.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto text-xl font-black mb-6">3</div>
                  <h4 className="font-bold text-primary text-xl mb-4">Clear the Area</h4>
                  <p className="text-slate-600 text-sm">Remove furniture, rugs, and valuables from the affected area to prevent further water damage.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Final Urgent CTA */}
      <section className="py-24 bg-white px-4 border-t border-slate-100">
         <div className="container text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter">
               Don't Wait. Save Your Property Now.
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-12">
               Gauff Coast Plumbing is Hitchcock's premier choice for 24/7 emergency support. One call is all it takes to get help on the way.
            </p>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="btn-accent inline-flex items-center text-2xl md:text-4xl px-12 py-8 shadow-2xl tracking-tight"
            >
              <Phone size={40} className="mr-5 animate-pulse" fill="currentColor" />
              Call {DISPLAY_PHONE}
            </a>
         </div>
      </section>
    </PageLayout>
  );
};

export default EmergencyPage;
