import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, FeatureCheck } from '../components/UI';
import { PHONE_NUMBER } from '../constants';
import { Phone, Users, BadgeDollarSign, Wrench, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

const AboutPage = () => {
  return (
    <PageLayout>
      {/* --- Hero Section --- */}
      <section className="bg-primary pt-48 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/about-plumbing/1920/1080?grayscale')] bg-cover"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">Your Neighborhood <br/><span className="text-secondary italic">Plumbing Experts</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              For over a decade, Gauff Coast Plumbing has been the trusted name for quality repairs and installations in Hitchcock. We've built our reputation on a simple promise: exceptional service and honest pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Company Values --- */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeading 
            title="What Drives Us Forward" 
            subtitle="Our core values are at the heart of everything we do. We're not just your plumbers; we're your neighbors."
          />
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Honest Pricing", text: "We believe in transparency. No hidden fees, no surprise surcharges—just fair quotes for outstanding work.", icon: BadgeDollarSign },
              { title: "Quality Workmanship", text: "Our masters use the latest technology and techniques to ensure every repair is permanent and professional.", icon: Wrench },
              { title: "Customer Satisfaction", text: "We're not finished until you're smiling. Our 100% satisfaction guarantee is unconditional.", icon: HeartPulse }
            ].map((value) => (
              <div key={value.title} className="bg-surface p-12 rounded-[3rem] card-shadow border border-slate-50 transition-all hover:translate-y-[-8px]">
                <div className="bg-secondary p-4 rounded-2xl text-white inline-block mb-8 shadow-xl">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">{value.title}</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Team Support Section --- */}
      <section className="section-spacing bg-surface border-y border-slate-100">
        <div className="container grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
             <img 
               src="https://picsum.photos/seed/expert-plumber/800/1000" 
               alt="Our Expert Team" 
               className="w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
          </div>
          <div>
            <SectionHeading 
              title="Expert Plumbers Available 24/7" 
              subtitle="When a pipe bursts or a drain clogs, you shouldn't have to wait for normal business hours."
            />
            <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
              Our fleet is fully equipped with advanced diagnostic tools and parts to handle 95% of repairs on the spot. We've spent years honing our craft in Hitchcock to ensure your peace of mind.
            </p>
            <div className="space-y-6 mb-12">
               <FeatureCheck text="Certified Master Plumbing Technicians" />
               <FeatureCheck text="State-of-the-Art Leak Detection" />
               <FeatureCheck text="Locally Recognized Community Leaders" />
               <FeatureCheck text="Comprehensive Liability Insurance" />
            </div>
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary px-12 py-6 text-xl">
               Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="section-spacing bg-white">
        <div className="container bg-primary p-16 lg:p-32 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready for better plumbing?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join thousands of Hitchcock families who trust Gauff Coast for their plumbing maintenance and repairs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-accent px-12 py-5 text-xl">
                Call {PHONE_NUMBER}
              </a>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-12 py-5 text-xl border-4">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
