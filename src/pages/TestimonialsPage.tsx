import React from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, RatingStars } from '../components/UI';
import { TESTIMONIALS, PHONE_NUMBER, DISPLAY_PHONE } from '../constants';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Heart, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  return (
    <PageLayout title="Customer Reviews">
      {/* Hero Header */}
      <section className="bg-primary pt-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container px-4 text-center relative z-10">
          <SectionHeading 
            light
            centered
            title="What Our Customers Say About Gauff Coast Plumbing" 
            subtitle="We are proud to provide reliable plumbing services and 24/7 emergency support to homeowners and businesses throughout Hitchcock, TX and surrounding areas."
          />
        </div>
      </section>

      {/* Trust Banner */}
      <section className="container px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
                <div className="text-secondary mb-3"><Clock size={32} /></div>
                <h4 className="font-black text-primary text-sm uppercase tracking-wider">24/7 Emergency</h4>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="text-secondary mb-3"><ShieldCheck size={32} /></div>
                <h4 className="font-black text-primary text-sm uppercase tracking-wider">Fast Response</h4>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="text-secondary mb-3"><Heart size={32} /></div>
                <h4 className="font-black text-primary text-sm uppercase tracking-wider">100% Satisfaction</h4>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="text-secondary mb-3"><Star size={32} /></div>
                <h4 className="font-black text-primary text-sm uppercase tracking-wider">Locally Trusted</h4>
            </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-surface px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <RatingStars count={item.rating} />
                </div>
                <div className="mb-8 flex-grow">
                   <p className="text-slate-700 font-medium italic leading-relaxed">"{item.review}"</p>
                </div>
                <div className="flex items-center pt-6 border-t border-slate-50">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center font-black text-secondary mr-4 uppercase">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.location}</p>
                    <p className="text-[10px] text-secondary font-black mt-0.5 uppercase tracking-tighter">Service: {item.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white border-t border-slate-100 px-4">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">
            Need Reliable Plumbing Service?
          </h2>
          <p className="text-slate-600 text-xl mb-12 font-medium">
             Call Gauff Coast Plumbing today for fast, affordable, and professional plumbing services. Our experts are ready to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-accent text-xl px-12 py-5 shadow-xl">
              <Phone size={24} className="mr-3" /> Call {DISPLAY_PHONE}
            </a>
            <Link to="/contact" className="btn-primary text-xl px-12 py-5 shadow-xl">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TestimonialsPage;
