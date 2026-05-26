import React from 'react';
import { motion } from 'motion/react';
import { articles } from '../data';
import ArticleCard from './ArticleCard';
import { BookOpen } from 'lucide-react';

interface ArticleListViewProps {
  onReadArticle: (id: string) => void;
}

export default function ArticleListView({ onReadArticle }: ArticleListViewProps) {
  return (
    <div className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint/30 text-mint mb-6">
          <BookOpen size={32} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-heading text-warm-brown mb-4">
          บทความทั้งหมด
        </h1>
        <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
          อ่านเคล็ดลับ ซึมซับความรู้ และรับกำลังใจในทุกสเตจของการให้นม
          เพื่อให้การให้นมวิเศษและสบายใจที่สุด
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            index={index} 
            onClick={() => onReadArticle(article.id)} 
          />
        ))}
      </div>
    </div>
  );
}
