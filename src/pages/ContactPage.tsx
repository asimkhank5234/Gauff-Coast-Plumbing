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
    // In a real app, logic to send email would go here
  };

  return (
    <PageLayout title="Contact Us">
      {/* Contact Hero */}
      <section className="bg-primary text-white pt-24 pb-32 relative overflow-hidden text-center px-4">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container relative z-10">
          <SectionHeading 
            light
            centered
            title="Get In Touch With Gauff Coast Plumbing" 
            subtitle="Request a free estimate or contact us for 24/7 emergency service in Hitchcock and surrounding areas."
          />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-surface px-4">
        <div className="container -mt-40 relative z-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6 lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-2xl font-black text-primary border-b border-slate-50 pb-4">Our Information</h3>
                
                <div className="flex items-start space-x-4">
                   <div className="bg-secondary/10 p-3 rounded-xl text-secondary"><Phone size={24} /></div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Number</p>
                      <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-primary hover:text-secondary transition-colors underline decoration-secondary/30">{DISPLAY_PHONE}</a>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-secondary/10 p-3 rounded-xl text-secondary"><Mail size={24} /></div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                      <a href={`mailto:${EMAIL}`} className="text-lg font-bold text-primary hover:text-secondary transition-colors truncate block max-w-[200px] sm:max-w-none">{EMAIL}</a>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-secondary/10 p-3 rounded-xl text-secondary"><MapPin size={24} /></div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Physical Address</p>
                      <p className="text-lg font-bold text-primary">{ADDRESS}</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-secondary/10 p-3 rounded-xl text-secondary"><Clock size={24} /></div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                      <p className="text-lg font-bold text-primary">Open 24 Hours / 7 Days</p>
                   </div>
                </div>
              </div>
              
              <div className="bg-primary p-8 rounded-2xl shadow-xl text-white">
                <h4 className="text-xl font-bold mb-4">Emergency Service?</h4>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">If you have a burst pipe or immediate plumbing emergency, please call us directly for the fastest response.</p>
                <a href={`tel:${PHONE_NUMBER}`} className="btn-accent w-full justify-center text-lg">{DISPLAY_PHONE}</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-8">
                       <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-primary mb-4">Thank You!</h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">We've received your request and one of our experts will contact you shortly to provide your free estimate.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-secondary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-black text-primary mb-2">Request a Free Estimate</h3>
                    <p className="text-slate-500 mb-10">Fill out the form below and we'll get back to you as soon as possible.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                          <input 
                            required 
                            type="text" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                          <input 
                            required 
                            type="tel" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                            placeholder="(409) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                         <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                          <input 
                            required 
                            type="email" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Service Needed</label>
                          <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none">
                            <option>Drain Cleaning</option>
                            <option>Leak Detection</option>
                            <option>Water Heater Service</option>
                            <option>Emergency Repair</option>
                            <option>Pipe Repair / Repiping</option>
                            <option>Commercial Plumbing</option>
                            <option>Other Service</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Message</label>
                        <textarea 
                          rows={4} 
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          placeholder="How can we help you today?"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-primary w-full py-5 text-xl">
                        <Send size={20} className="mr-3" /> Send My Request
                      </button>
                      
                      <p className="text-center text-xs text-slate-400 font-medium italic">
                        By submitting this form, you agree to being contacted by Gauff Coast Plumbing regarding your service request.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white px-4">
        <div className="container max-w-4xl">
          <SectionHeading 
            centered
            title="Frequently Asked Questions" 
            subtitle="Common questions about our services and area coverage."
          />
          <div className="bg-white border rounded-2xl shadow-sm px-8">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-[450px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
         {/* Placeholder for Google Map Embed */}
         <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
            <div className="text-center">
               <MapPin size={64} className="text-slate-400 mx-auto mb-4" />
               <p className="text-slate-500 font-bold uppercase tracking-widest">{ADDRESS}</p>
            </div>
         </div>
         {/* Real embed would look like this: 
         <iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src="https://maps.google.com/maps?q=438%20Pompano,%20Hitchcock,%20TX%2077563&t=&z=13&ie=UTF8&iwloc=&output=embed"
         ></iframe> 
         */}
      </section>
    </PageLayout>
  );
};

export default ContactPage;
