import React from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, RatingStars } from '../components/UI';
import { TESTIMONIALS, PHONE_NUMBER, DISPLAY_PHONE } from '../constants';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Heart, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  return (
    <PageLayout>
      {/* --- Hero Section --- */}
      <section className="bg-primary pt-48 pb-32 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/customer-service/1920/1080?grayscale')] bg-cover"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Voices of <br/><span className="text-secondary italic">Excellence</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              We've spent a decade building Hitchcock's most trusted plumbing firm, one household at a time. Here is what your neighbors think.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Stats Banner --- */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Star, count: "500+", label: "5-Star Reviews" },
               { icon: Clock, count: "24/7", label: "Emergency Support" },
               { icon: ShieldCheck, count: "100%", label: "Satisfaction rate" },
               { icon: Heart, count: "10K+", label: "Service Calls" }
             ].map((stat) => (
               <div key={stat.label} className="text-center group">
                  <div className="bg-surface p-6 rounded-3xl mb-4 transition-transform group-hover:scale-110">
                    <stat.icon className="mx-auto text-secondary" size={32} />
                  </div>
                  <h4 className="text-3xl font-black text-primary">{stat.count}</h4>
                  <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials Grid --- */}
      <section className="section-spacing bg-surface border-y border-slate-100">
        <div className="container">
          <SectionHeading 
            centered
            title="Real Stories, Real Results" 
            subtitle="Honest feedback from residential and commercial clients across Hitchcock and beyond."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {TESTIMONIALS.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] card-shadow border border-slate-50 flex flex-col h-full group"
              >
                <div className="mb-8 flex space-x-1">
                  <RatingStars count={item.rating} />
                </div>
                <div className="mb-12 flex-grow">
                   <p className="text-slate-500 font-medium text-lg leading-relaxed italic">"{item.review}"</p>
                </div>
                <div className="flex items-center pt-8 border-t border-slate-50">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-2xl mr-6 rotate-3 group-hover:rotate-0 transition-transform">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-xl leading-none mb-2">{item.name}</h4>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{item.location}</p>
                    <div className="mt-2 inline-block bg-secondary/10 px-3 py-1 rounded-full text-[9px] text-secondary font-black uppercase tracking-widest">
                       {item.service}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="section-spacing bg-white">
        <div className="container bg-primary p-16 lg:p-32 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Experience it yourself.</h2>
            <p className="text-2xl text-slate-300 mb-16 max-w-2xl mx-auto font-medium">
               Join the hundreds of Hitchcock residents who never have to worry about their pipes.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-accent px-12 py-7 text-2xl !bg-white !text-primary hover:!bg-slate-100 border-none shadow-2xl">
                Call {DISPLAY_PHONE}
              </a>
              <Link to="/contact" className="bg-secondary text-white hover:bg-[#c0392b] px-12 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TestimonialsPage;
