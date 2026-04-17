import React, { useState } from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, FeatureCheck } from '../components/UI';
import { COMPANY_NAME, PHONE_NUMBER, DISPLAY_PHONE, EMAIL, ADDRESS, FAQS } from '../constants';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItemProps {
  faq: any;
  key?: React.Key;
}

const FAQItem = ({ faq }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
          {faq.question}
        </span>
        {isOpen ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {/* --- Contact Hero --- */}
      <section className="bg-primary pt-48 pb-32 text-white relative overflow-hidden text-center lg:text-left">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/contact-plumbing/1920/1080?grayscale')] bg-cover"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Let's Fix Your <br/><span className="text-secondary italic">Plumbing Pipes</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              We're available 24/7 for Hitchcock emergencies and standard repairs. Reach out today for a free, transparent estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Contact Info & Form --- */}
      <section className="section-spacing bg-white">
        <div className="container grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <SectionHeading 
              title="Get in touch" 
              subtitle="Our team is standing by to assist with any questions or service requests."
            />
            
            <div className="space-y-8">
               {[
                 { icon: Phone, label: "Call Us 24/7", value: DISPLAY_PHONE, href: `tel:${PHONE_NUMBER}` },
                 { icon: Mail, label: "Email Support", value: EMAIL, href: `mailto:${EMAIL}` },
                 { icon: MapPin, label: "Our Base", value: ADDRESS, href: "#" },
                 { icon: Clock, label: "Operating Hours", value: "Open 24/7/365", href: "#" }
               ].map((item) => (
                 <a 
                   key={item.label} 
                   href={item.href}
                   className="flex items-center p-8 bg-surface rounded-[2.5rem] border border-slate-50 card-shadow transition-transform hover:translate-x-4"
                 >
                    <div className="bg-white p-4 rounded-xl text-secondary shadow-lg mr-8">
                       <item.icon size={28} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                       <p className="text-xl font-black text-primary lowercase">{item.value}</p>
                    </div>
                 </a>
               ))}
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="bg-primary p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                {submitted ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="text-center py-20 text-white"
                   >
                     <div className="bg-secondary p-8 rounded-full inline-block mb-10 shadow-2xl">
                        <CheckCircle2 size={64} />
                     </div>
                     <h3 className="text-4xl font-black mb-6 italic tracking-tighter">Message Received.</h3>
                     <p className="text-xl text-slate-300 font-medium mb-12">One of our master plumbers will contact you within 15 minutes.</p>
                     <button onClick={() => setSubmitted(false)} className="text-secondary font-black underline decoration-2 underline-offset-8">Send another message</button>
                   </motion.div>
                ) : (
                   <div className="relative z-10">
                      <h3 className="text-3xl font-black text-white mb-10 italic">Request an Estimate</h3>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors" />
                           <input required type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors" />
                        </div>
                        <input required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors" />
                        <select className="w-full bg-white/5 border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors appearance-none">
                           <option className="bg-primary">Surface Drainage</option>
                           <option className="bg-primary">Leak Detection</option>
                           <option className="bg-primary">Emergency Repair</option>
                           <option className="bg-primary">Water Heaters</option>
                        </select>
                        <textarea rows={5} placeholder="Tell us about the project..." className="w-full bg-white/5 border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors" />
                        <button type="submit" className="w-full bg-secondary text-white py-6 rounded-2xl font-black text-2xl hover:bg-[#c0392b] transition-all shadow-2xl">
                           Send Request
                        </button>
                      </form>
                   </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="section-spacing bg-surface border-y border-slate-100">
        <div className="container max-w-4xl">
          <SectionHeading 
            centered
            title="Common Questions" 
            subtitle="Everything you need to know about our Hitchcock repair services."
          />
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 card-shadow border border-slate-50">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-[2s]">
         <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?q=438%20Pompano,%20Hitchcock,%20TX%2077563&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="border-none"
         ></iframe> 
      </section>
    </PageLayout>
  );
};

export default ContactPage;
