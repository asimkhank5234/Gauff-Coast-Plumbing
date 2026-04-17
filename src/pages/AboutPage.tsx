import React from 'react';
import { PageLayout } from '../components/Navigation';
import { SectionHeading, FeatureCheck } from '../components/UI';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { Phone, Users, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <PageLayout title="About Us">
      {/* Hero Header */}
      <section className="bg-slate-900 pt-24 pb-48 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/about/1920/1080')] bg-cover bg-center"></div>
        <div className="container px-4 text-center relative z-10">
          <SectionHeading 
            light
            centered
            title="Your Trusted Local Plumbing Experts" 
            subtitle="Gauff Coast Plumbing has been serving the Hitchcock community with integrity, professionalism, and unmatched expertise for years."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white px-4">
        <div className="container -mt-40 relative z-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-16 border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h3 className="text-3xl font-black text-primary mb-6">Our Company Story</h3>
                   <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                      <p>
                        Gauff Coast Plumbing was founded on a simple principle: provide the residents and business owners of Hitchcock and the surrounding areas with plumbing services they can actually rely on. We saw a need for a plumbing company that combines technical precision with old-fashioned customer service and honest, transparent pricing.
                      </p>
                      <p>
                        Being a locally owned and operated business means we aren't just serving customers—we're serving our neighbors. This deep connection to the community drives us to maintain the highest standards of workmanship on every job, from a simple leaking faucet repair to a complex emergency sewer backup.
                      </p>
                   </div>
                   
                   <div className="mt-10 grid sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic font-medium">
                         "We don't just fix pipes; we provide peace of mind for Hitchcock families."
                      </div>
                      <div className="flex flex-col justify-center">
                         <div className="flex items-center space-x-2 text-primary font-black text-xl mb-1">
                            <span className="text-secondary tracking-widest uppercase text-xs block mb-1">Quality Guaranteed</span>
                         </div>
                         <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => <CheckCircle key={i} size={20} className="text-secondary" fill="currentColor" />)}
                         </div>
                      </div>
                   </div>
                </div>

                <div className="relative">
                   <div className="absolute -inset-4 bg-secondary/10 rounded-full blur-3xl"></div>
                   <img 
                      src="https://picsum.photos/seed/van/800/800" 
                      alt="Gauff Coast Plumbing Van" 
                      className="relative z-10 rounded-2xl shadow-xl w-full"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute -bottom-10 -right-10 hidden md:block z-20">
                      <div className="bg-primary p-8 rounded-full shadow-2xl border-8 border-white">
                         <Users size={64} className="text-secondary" />
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface px-4">
        <div className="container">
          <SectionHeading 
            centered
            title="Our Commitment To You" 
            subtitle="At Gauff Coast Plumbing, these values guide everything we do."
          />
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto text-secondary text-3xl font-black">01</div>
              <h4 className="text-2xl font-bold text-primary">Honest Pricing</h4>
              <p className="text-slate-600">No hidden fees, no unnecessary upsells. We provide clear, upfront estimates before any work begins.</p>
            </div>
            <div className="text-center space-y-4">
               <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto text-secondary text-3xl font-black">02</div>
              <h4 className="text-2xl font-bold text-primary">Quality Workmanship</h4>
              <p className="text-slate-600">Our plumbers are highly trained and experienced. We use high-quality materials to ensure long-lasting results.</p>
            </div>
            <div className="text-center space-y-4">
               <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto text-secondary text-3xl font-black">03</div>
              <h4 className="text-2xl font-bold text-primary">Customer Satisfaction</h4>
              <p className="text-slate-600">Your satisfaction is our primary goal. We aren't happy with the job until you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Team / Support */}
      <section className="py-24 bg-white px-4">
         <div className="container flex flex-col items-center text-center">
            <SectionHeading 
               centered
               title="Expert Plumbers Available 24/7" 
               subtitle="Our team is equipped to handle any plumbing challenge, large or small, at any time of day or night."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
               <FeatureCheck text="Licensed & Insured Technicians" />
               <FeatureCheck text="Comprehensive Background Checks" />
               <FeatureCheck text="Continuing Education & Training" />
               <FeatureCheck text="State-of-the-Art Equipment" />
               <FeatureCheck text="Friendly & Professional Conduct" />
               <FeatureCheck text="Fast Emergency Support" />
            </div>
            
            <div className="mt-16 bg-primary text-white p-10 rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-6">Need Immediate Assistance?</h3>
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Our local plumbers are standing by for any emergency repair or maintenance service you might need.</p>
                  <a href={`tel:${PHONE_NUMBER}`} className="btn-accent text-xl px-12 py-5 shadow-inner">
                    <Phone size={24} className="mr-3" /> Call {PHONE_NUMBER}
                  </a>
               </div>
            </div>
         </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
