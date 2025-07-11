import React, { useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import Aurora from './components/Aurora';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-gray-300' : 'bg-yellow-50 text-gray-900'} min-h-screen font-sans`}>
      <Header />
      <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={.5}amplitude={1.0}
  speed={0.5}/>
      <main className="container mx-auto px-4 sm:px-8">
        <Hero />
        <div className="grid md:grid-cols-2 gap-16 my-16">
          
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}