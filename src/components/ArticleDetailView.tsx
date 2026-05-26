import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { articles } from '../data';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { ArticleIconsMap, KawaiiFace } from './Illustrations';

interface ArticleDetailViewProps {
  articleId: string;
  onNavigateToArticleList: () => void;
  onReadArticle: (id: string) => void;
}

export default function ArticleDetailView({ articleId, onNavigateToArticleList, onReadArticle }: ArticleDetailViewProps) {
  const currentIndex = articles.findIndex(a => a.id === articleId);
  const article = articles[currentIndex];
  
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) return null;

  const IconComponent = ArticleIconsMap[article.number] || ArticleIconsMap[1];

  const CustomSeparator = () => (
    <div className="flex justify-center items-center py-6 opacity-30">
      <div className="w-16 h-[2px] bg-peachy rounded-full" />
      <div className="mx-4 w-6 h-6 text-mint">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <div className="w-16 h-[2px] bg-peachy rounded-full" />
    </div>
  );

  return (
    <div className="bg-white min-h-screen pb-24 relative">
      {/* Background patterns */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-cream rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-mint/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-peachy origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />

      <div className="max-w-3xl mx-auto px-4 pt-12 lg:pt-16 relative z-10">
        
        {/* Back Link */}
        <button 
          onClick={onNavigateToArticleList}
          className="inline-flex items-center text-warm-brown/60 hover:text-peachy transition-colors mb-10 group bg-cream px-4 py-2 rounded-full font-medium"
        >
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          กลับไปหน้าบทความ
        </button>

        {/* Article Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-mint/10 border-4 border-white shadow-sm flex items-center justify-center p-6">
              <IconComponent className="w-full h-full drop-shadow-md" />
            </div>
          </div>
          
          <div className="inline-block px-5 py-2 bg-butter/30 text-warm-brown rounded-full font-bold mb-6 border border-butter/50 shadow-sm">
            บทความที่ {article.number}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-heading text-warm-brown leading-tight mb-8">
            {article.title}
          </h1>
        </motion.div>

        {/* Article Body */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-p:text-warm-brown/80 prose-p:leading-relaxed prose-headings:text-heading max-w-none text-lg"
        >
          {article.body.split('\n\n').map((paragraph, idx) => (
            <React.Fragment key={idx}>
              <p className="mb-8 whitespace-pre-wrap">{paragraph}</p>
              {idx < article.body.split('\n\n').length - 1 && idx % 2 === 1 && (
                <CustomSeparator />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <hr className="my-16 border-peachy/20 border-2 rounded-full" />

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4">
          {prevArticle ? (
            <button 
              onClick={() => onReadArticle(prevArticle.id)}
              className="flex-1 flex items-center justify-start px-6 py-5 rounded-[32px] bg-cream hover:bg-peachy/10 text-warm-brown transition-all group border-2 border-transparent hover:border-peachy/20"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm shrink-0">
                <ChevronLeft className="text-peachy group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-peachy mb-1">บทก่อนหน้า</div>
                <div className="font-medium line-clamp-2 max-w-[200px] leading-snug">{prevArticle.title}</div>
              </div>
            </button>
          ) : <div className="flex-1" />}

          {nextArticle ? (
            <button 
              onClick={() => onReadArticle(nextArticle.id)}
              className="flex-1 flex items-center justify-end px-6 py-5 rounded-[32px] bg-cream hover:bg-peachy/10 text-warm-brown transition-all group border-2 border-transparent hover:border-peachy/20"
            >
              <div className="text-right">
                <div className="text-sm font-bold text-peachy mb-1">บทถัดไป</div>
                <div className="font-medium line-clamp-2 max-w-[200px] leading-snug">{nextArticle.title}</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center ml-4 shadow-sm shrink-0">
                <ChevronRight className="text-peachy group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ) : <div className="flex-1" />}
        </div>

      </div>
    </div>
  );
}
