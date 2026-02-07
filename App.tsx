
import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { Socials } from './components/Socials';
import { Location } from './components/Location';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Schedule />
      <GeminiChat />
      <Socials />
      <Location />
      
      {/* Visual background accents for smoother section transitions */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[30%] right-[10%] w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[150px]"></div>
      </div>
    </Layout>
  );
};

export default App;
