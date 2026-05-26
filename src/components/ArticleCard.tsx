import React from 'react';
import { motion } from 'motion/react';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';
import { ArticleIconsMap } from './Illustrations';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  index: number;
}

export default function ArticleCard({ article, onClick, index }: ArticleCardProps) {
  const IconComponent = ArticleIconsMap[article.number] || ArticleIconsMap[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="bg-white rounded-[32px] p-6 sm:p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-peachy/30 relative overflow-hidden group flex flex-col h-full"
    >
      {/* Decorative Blob */}
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br from-cream to-butter/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-mint/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
      
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className="w-20 h-20 rounded-3xl bg-cream/80 backdrop-blur-sm flex items-center justify-center shadow-inner border border-white p-3 group-hover:rotate-12 transition-transform duration-500">
          <IconComponent className="w-full h-full drop-shadow-sm" />
        </div>
        <span className="text-4xl font-bold text-peachy/20 text-heading">
          {String(article.number).padStart(2, '0')}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-warm-brown text-heading mb-3 relative z-10 leading-snug">
        {article.title}
      </h3>
      
      <p className="text-warm-brown/70 flex-grow relative z-10 line-clamp-2">
        {article.teaser}
      </p>

      <div className="mt-6 flex items-center text-peachy font-medium relative z-10 group/btn">
        <span>อ่านบทความนี้</span>
        <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}
