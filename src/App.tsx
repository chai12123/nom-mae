import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ArticleListView from './components/ArticleListView';
import ArticleDetailView from './components/ArticleDetailView';
import AboutView from './components/AboutView';
import { ViewState } from './types';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadArticle = (id: string) => {
    setActiveArticleId(id);
    setCurrentView('article_detail');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-peachy selection:text-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HomeView 
                onNavigateToArticleList={() => handleNavigate('articles')} 
                onReadArticle={handleReadArticle}
              />
            </motion.div>
          )}

          {currentView === 'articles' && (
            <motion.div
              key="articles"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ArticleListView onReadArticle={handleReadArticle} />
            </motion.div>
          )}

          {currentView === 'article_detail' && activeArticleId && (
            <motion.div
              key="article_detail"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ArticleDetailView 
                articleId={activeArticleId} 
                onNavigateToArticleList={() => handleNavigate('articles')}
                onReadArticle={handleReadArticle}
              />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
