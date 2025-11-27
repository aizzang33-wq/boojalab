import React, { useState, useEffect } from 'react';
import { Header, Footer } from './components/Layout';
import { MainPage } from './pages/MainPage';
import { PhilosophyPage, ServicesPage, AboutPage, ContactPage } from './pages/SubPages';
import AiAdvisor from './components/AiAdvisor';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <MainPage onNavigate={setCurrentPage} />;
      case Page.PHILOSOPHY:
        return <PhilosophyPage onNavigate={setCurrentPage} />;
      case Page.SERVICES:
        return <ServicesPage onNavigate={setCurrentPage} />;
      case Page.ABOUT:
        return <AboutPage onNavigate={setCurrentPage} />;
      case Page.CONTACT:
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <MainPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-primary bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer />
      
      {/* Floating AI Widget */}
      <AiAdvisor />
    </div>
  );
};

export default App;