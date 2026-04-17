import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Logo = ({ light = false, className = "" }: { light?: boolean, className?: string }) => (
  <div className={`flex items-center group transition-transform hover:scale-105 ${className}`}>
    <div className="relative mr-3">
      {/* Mimicking the provided circle logo design with SVG */}
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
        <circle cx="50" cy="50" r="48" fill={light ? "white" : "white"} stroke={light ? "white" : "#003B5C"} strokeWidth="4"/>
        <path d="M10 50 C 10 50, 25 35, 45 45 C 65 55, 80 40, 90 40 L 90 90 L 10 90 Z" fill="#1D708B" opacity="0.8"/>
        <circle cx="55" cy="35" r="10" fill="#E67E22" />
        <path d="M70 30 L 75 25 M 78 35 L 85 35 M 70 45 L 75 50" stroke="#003B5C" strokeWidth="2" strokeLinecap="round"/>
        <rect x="68" y="20" width="2" height="40" fill="#003B5C" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className={`text-xl lg:text-2xl font-display font-black leading-none ${light ? 'text-white' : 'text-primary'}`}>GAUFF COAST</span>
      <div className="flex items-center justify-between w-full mt-0.5">
        <div className={`h-[2px] flex-grow ${light ? 'bg-secondary' : 'bg-secondary'}`}></div>
        <span className={`text-[10px] font-black tracking-[0.3em] uppercase px-2 ${light ? 'text-secondary/90' : 'text-secondary'}`}>Plumbing</span>
        <div className={`h-[2px] flex-grow ${light ? 'bg-secondary' : 'bg-secondary'}`}></div>
      </div>
    </div>
  </div>
);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  key?: React.Key;
}

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}: SectionHeadingProps) => (
  <div className={`mb-16 lg:mb-24 ${centered ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'}`}>
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter ${light ? 'text-white' : 'text-primary'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-xl md:text-2xl leading-relaxed ${light ? 'text-slate-300' : 'text-slate-500 font-medium'}`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-10 h-1.5 w-24 rounded-full bg-accent ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

interface TrustBadgeProps {
  icon: any;
  title: string;
  text: string;
  key?: React.Key;
}

export const TrustBadge = ({ icon: Icon, title, text }: TrustBadgeProps) => (
  <div className="flex items-center p-6 bg-white rounded-2xl border border-slate-50 card-shadow">
    <div className="bg-secondary/10 p-4 rounded-xl text-secondary mr-5 ring-4 ring-secondary/5">
      <Icon size={28} />
    </div>
    <div>
      <h4 className="font-bold text-primary text-lg mb-0.5">{title}</h4>
      <p className="text-sm text-slate-500 font-medium">{text}</p>
    </div>
  </div>
);

export const RatingStars = ({ count = 5 }: { count?: number }) => (
  <div className="flex text-yellow-500 gap-1">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={20} fill="currentColor" />
    ))}
  </div>
);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  link: string;
  key?: React.Key;
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link 
}: ServiceCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-10 rounded-3xl card-shadow group"
  >
    <div className="w-16 h-16 bg-sand/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500 ring-4 ring-sand/5">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">{title}</h3>
    <p className="text-slate-500 text-base leading-relaxed mb-8">
      {description}
    </p>
    <a href={link} className="inline-flex items-center text-primary font-black text-sm uppercase tracking-widest group-hover:text-secondary transition-colors">
      Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
    </a>
  </motion.div>
);

interface FeatureCheckProps {
  text: string;
  key?: React.Key;
}

export const FeatureCheck = ({ text }: FeatureCheckProps) => (
  <div className="flex items-center space-x-3 text-slate-700 bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-slate-100/50">
    <div className="bg-secondary/10 p-1.5 rounded-full">
      <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
    </div>
    <span className="font-bold text-sm tracking-tight">{text}</span>
  </div>
);
