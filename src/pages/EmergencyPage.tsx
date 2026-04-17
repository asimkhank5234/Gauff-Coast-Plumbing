import React from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, FeatureCheck, Logo } from '../components/UI';
import { PHONE_NUMBER, DISPLAY_PHONE, COMPANY_NAME } from '../constants';
import { Phone, AlertTriangle, Clock, CheckCircle, ShieldAlert, Zap, Truck, MapPin, Users } from 'lucide-react';
import { motion } from 'motion/react';

const EmergencyPage = () => {
  return (
    <PageLayout>
      {/* --- Emergency Hero --- */}
      <section className="bg-accent pt-48 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/emergency-water/1920/1080?grayscale')] bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/80 to-transparent"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/20 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-xl border border-white/20">
               <AlertTriangle size={14} className="mr-2 animate-pulse" /> Urgent Priority Response
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none">
              Plumbing Crisis? <br/>
              <span className="text-primary italic">We're on the way.</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
              Don't let a leak become a catastrophe. Our Hitchcock emergency team is mobilized 24/7/365 to secure your home.
            </p>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center bg-white text-accent px-16 py-8 rounded-[2rem] font-black text-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform">
               <Phone size={40} className="mr-4" /> {DISPLAY_PHONE}
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- Emergency Scenarios --- */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeading 
            centered
            title="When to Call for Emergency Dispatch" 
            subtitle="If you're experiencing any of these, contact us immediately to prevent structural damage."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               { title: "Burst Pipes", text: "Flooding can destroy a home in minutes. Shut off the main valve and call us now." },
               { title: "Severe Backups", text: "Sewer backups are health hazards. We have industrial clearing technology ready." },
               { title: "Gas Leaks", text: "Smell rotten eggs? Leave the building immediately and call us from safety." },
               { title: "No Hot Water", text: "Cold showers are a secondary crisis. We repair all major heater brands overnight." }
            ].map((item) => (
              <div key={item.title} className="bg-surface p-10 rounded-[3rem] border-l-8 border-accent card-shadow">
                <h3 className="text-2xl font-black text-primary mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Gauff Coast for Emergencies --- */}
      <section className="section-spacing bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://picsum.photos/seed/tool-tech/1920/1080')] bg-cover"></div>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeading 
              light
              title="The 24/7 Priority Promise" 
              subtitle="We maintain a specialized emergency fleet specifically for Hitchcock and Galveston County."
            />
            <div className="space-y-12 mb-12">
               <div className="flex items-start">
                  <div className="bg-secondary p-4 rounded-2xl mr-6 shadow-2xl"><Users size={32} /></div>
                  <div>
                     <h4 className="text-2xl font-black mb-2 italic">No Answering Machines</h4>
                     <p className="text-slate-300 text-lg font-medium">You'll talk to a live Hitchcock operator every single time. Real human help when you need it most.</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-secondary p-4 rounded-2xl mr-6 shadow-2xl"><Truck size={32} /></div>
                  <div>
                     <h4 className="text-2xl font-black mb-2 italic">Stocked Vans</h4>
                     <p className="text-slate-300 text-lg font-medium">Our trucks carry 90% of common failure parts, meaning most emergencies are resolved in one trip.</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-secondary p-4 rounded-2xl mr-6 shadow-2xl"><MapPin size={32} /></div>
                  <div>
                     <h4 className="text-2xl font-black mb-2 italic">Hyper-Local Dispatch</h4>
                     <p className="text-slate-300 text-lg font-medium">We're based in Hitchcock. We don't drive from Houston; we're already practically in your driveway.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10">
             <h3 className="text-3xl font-black mb-8 italic text-secondary tracking-tighter">While You Wait for Us:</h3>
             <ul className="space-y-8">
                {[
                   { step: "01", text: "Locate and turn off your main water shut-off valve immediately." },
                   { step: "02", text: "Turn off your water heater's power source (gas or electric)." },
                   { step: "03", text: "Open outside faucets to drain the remaining water in the pipes." },
                   { step: "04", text: "If safe, clear away valuables from the affected area." }
                ].map((item) => (
                  <li key={item.step} className="flex items-center">
                     <span className="text-secondary font-black text-3xl mr-6">{item.step}</span>
                     <p className="text-xl font-medium text-slate-100">{item.text}</p>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </section>

      {/* --- Urgent CTA --- */}
      <section className="section-spacing bg-white">
        <div className="container relative">
           <div className="bg-accent p-16 lg:p-32 rounded-[5rem] text-center shadow-[0_50px_100px_rgba(230,126,34,0.3)]">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                 Ready to resolve <br className="hidden md:block" /> this crisis?
              </h2>
              <p className="text-2xl text-white/90 mb-16 font-medium">Click to dispatch a master plumber from our Hitchcock base.</p>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center bg-primary text-white hover:bg-slate-900 px-16 py-8 rounded-[2rem] font-black text-3xl shadow-2xl transition-all">
                <Phone size={40} className="mr-5" /> {DISPLAY_PHONE}
              </a>
           </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EmergencyPage;
