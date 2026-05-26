import React from 'react';
import { motion } from 'motion/react';
import { articles } from '../data';
import ArticleCard from './ArticleCard';
import { Heart } from 'lucide-react';
import { HeroMotherIllustration, FloatingElements, CloudSeparator } from './Illustrations';

interface HomeViewProps {
  onNavigateToArticleList: () => void;
  onReadArticle: (id: string) => void;
}

export default function HomeView({ onNavigateToArticleList, onReadArticle }: HomeViewProps) {
  const featuredArticles = articles.slice(0, 4);

  return (
    <div className="min-h-screen pb-12">
      {/* Background decoration container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
        <FloatingElements />
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 px-4 z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm text-peachy font-medium mb-8 border border-peachy/10">
              <Heart size={18} fill="currentColor" /> Space ปลอดภัยสำหรับคุณแม่
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading text-warm-brown leading-tight mb-6">
              ให้นมแม่ คือ<br/>
              <span className="text-peachy">ของขวัญที่ดีที่สุด</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-warm-brown/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              แหล่งความรู้และกำลังใจสำหรับคุณแม่ให้นม เพื่อทุกช่วงเวลาที่มีความหมาย เริ่มต้นและดูแลน้ำนมด้วยความรัก
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNavigateToArticleList}
              className="px-10 py-5 bg-peachy hover:bg-peachy-hover text-white rounded-full font-bold text-2xl shadow-xl shadow-peachy/30 transition-colors inline-block"
            >
              เริ่มเรียนรู้ไปด้วยกัน
            </motion.button>
          </motion.div>

          {/* Hero Illustration (Custom SVG) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-mint/20 to-cream rounded-full -rotate-6 scale-105 blur-md" />
            <div className="absolute inset-0 bg-gradient-to-bl from-peachy/10 to-butter/30 rounded-[80px] rotate-6 blur-md" />
            <div className="absolute inset-4 bg-white/80 backdrop-blur-sm rounded-[50px] shadow-sm border-4 border-white flex flex-col items-center justify-center p-6 overflow-hidden text-center group">
               <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                  <HeroMotherIllustration className="w-full h-full drop-shadow-sm" />
               </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Cloud Separator */}
      <div className="relative -mt-16 z-0">
         <CloudSeparator className="w-full h-24 md:h-32 text-white fill-white translate-y-2 drop-shadow-sm" />
      </div>

      {/* Featured Articles */}
      <section className="bg-white py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-8 h-8 text-peachy mx-auto mb-4" fill="currentColor" />
            <h2 className="text-3xl font-bold text-heading text-warm-brown">บทความแนะนำสำหรับคุณแม่</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                index={index} 
                onClick={() => onReadArticle(article.id)} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onNavigateToArticleList}
              className="text-warm-brown font-medium hover:text-peachy underline underline-offset-4"
            >
              ดูบทความทั้งหมด →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
