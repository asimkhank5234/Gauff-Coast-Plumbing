import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

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
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
    <h2 className={`text-3xl md:text-4xl font-black mb-4 ${light ? 'text-white' : 'text-primary'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1 w-20 rounded-full bg-secondary ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

interface TrustBadgeProps {
  icon: any;
  title: string;
  text: string;
  key?: React.Key;
}

export const TrustBadge = ({ icon: Icon, title, text }: TrustBadgeProps) => (
  <div className="flex items-start space-x-4">
    <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-primary mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{text}</p>
    </div>
  </div>
);

export const RatingStars = ({ count = 5 }: { count?: number }) => (
  <div className="flex text-yellow-400">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={18} fill="currentColor" />
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
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 hover:shadow-xl hover:ring-secondary/20 transition-all group"
  >
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6">
      {description}
    </p>
    <a href={link} className="inline-flex items-center text-secondary font-bold text-sm group-hover:translate-x-1 transition-transform">
      Learn More <span className="ml-1">→</span>
    </a>
  </motion.div>
);

interface FeatureCheckProps {
  text: string;
  key?: React.Key;
}

export const FeatureCheck = ({ text }: FeatureCheckProps) => (
  <div className="flex items-center space-x-2 text-slate-700">
    <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
    <span className="font-medium">{text}</span>
  </div>
);
