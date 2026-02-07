
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  ExternalLink, 
  Calendar, 
  ArrowRight,
  Instagram,
  ChevronDown,
  ChevronUp,
  Users,
  ChevronRight
} from 'lucide-react';
import { 
  CHURCH_NAME, 
  CHURCH_FULL_NAME,
  INSTAGRAM_VIBE_LINK,
  INSTAGRAM_KIDS_LINK,
  MINISTRIES, 
  SERVICES, 
  SOCIAL_LINKS 
} from './constants';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [instagramExpanded, setInstagramExpanded] = useState(false);

  const VIBE_IMAGE_URL = "https://image2url.com/r2/default/images/1770491469476-2c8b3c35-07be-4b45-b4ac-5fe9aadf64d5.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, platform: string) => {
    if (url === 'expand' && platform === 'Instagram') {
      e.preventDefault();
      setInstagramExpanded(!instagramExpanded);
      return;
    }
    
    if (url.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!hasEntered) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={VIBE_IMAGE_URL} 
            className="w-full h-full object-cover scale-110 blur-sm opacity-40"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="mb-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-600 via-orange-500 to-yellow-400 rounded-[2.5rem] flex items-center justify-center text-white font-bold text-5xl sm:text-6xl shadow-[0_0_50px_rgba(59,130,246,0.3)] mb-8 transition-transform hover:scale-110">
              V
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif text-white mb-4 tracking-tight drop-shadow-2xl">
            Ministério {CHURCH_NAME}
          </h1>
          <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs sm:text-sm mb-12 drop-shadow-lg">
            {CHURCH_FULL_NAME}
          </p>
          
          <button 
            onClick={() => setHasEntered(true)}
            className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            Acessar
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 flex flex-col animate-in fade-in duration-1000">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 via-orange-500 to-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight leading-none">{CHURCH_NAME}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">Ministério</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40">
        <div className="absolute inset-0 z-0 bg-black">
          <img src={VIBE_IMAGE_URL} className="w-full h-full object-cover md:object-top" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-orange-400 font-bold tracking-widest uppercase mb-10 text-xs shadow-2xl">
            Vinde Benditos do Eterno
          </div>
          <div className="p-8 md:p-14 rounded-[3rem] bg-black/40 backdrop-blur-md border border-white/5 shadow-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-[1.2] italic">
              "¹¹ Escondi a tua palavra no meu coração, para eu não pecar contra ti."
              <span className="block text-xl md:text-3xl mt-8 not-italic font-bold bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                — Salmos 119:11
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 w-full mb-32">
        <div className="flex flex-wrap justify-center gap-6 items-start">
          {SOCIAL_LINKS.map((link) => (
            <div key={link.platform} className="flex flex-col gap-4 min-w-[280px] flex-1 md:flex-none">
              <a 
                href={link.url}
                target={(link.url.startsWith('#') || link.url === 'expand') ? undefined : "_blank"}
                rel={(link.url.startsWith('#') || link.url === 'expand') ? undefined : "noopener noreferrer"}
                onClick={(e) => handleLinkClick(e, link.url, link.platform)}
                className={`bg-[#111]/90 backdrop-blur-md border border-white/10 text-white p-7 rounded-[2.5rem] shadow-2xl flex items-center gap-5 transition-all hover:-translate-y-1 group hover:border-orange-500/50 ${instagramExpanded && link.platform === 'Instagram' ? 'ring-2 ring-orange-500/50' : ''}`}
              >
                <div className={`${link.color} p-4 rounded-2xl shadow-lg`}>
                  {link.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-orange-500 tracking-[0.2em] mb-1">{link.label}</p>
                  <p className="text-xl font-bold">{link.platform}</p>
                </div>
                {link.url === 'expand' ? (
                  instagramExpanded ? <ChevronUp className="ml-auto w-5 h-5 text-orange-500" /> : <ChevronDown className="ml-auto w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="ml-auto w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                )}
              </a>

              {link.platform === 'Instagram' && instagramExpanded && (
                <div className="flex flex-col gap-3 animate-in slide-in-from-top-4 duration-300">
                  <a href={INSTAGRAM_VIBE_LINK} target="_blank" className="bg-[#181818] p-5 rounded-[2rem] flex items-center gap-4 hover:translate-x-2 transition-all">
                    <div className="bg-gradient-to-tr from-purple-600 to-blue-500 p-3 rounded-xl"><Instagram className="w-5 h-5" /></div>
                    <span className="font-bold text-sm">Ministério VI.B.E</span>
                    <ExternalLink className="ml-auto w-4 h-4 opacity-40" />
                  </a>
                  <a href={INSTAGRAM_KIDS_LINK} target="_blank" className="bg-[#181818] p-5 rounded-[2rem] flex items-center gap-4 hover:translate-x-2 transition-all">
                    <div className="bg-gradient-to-tr from-yellow-400 to-orange-500 p-3 rounded-xl"><Users className="w-5 h-5" /></div>
                    <span className="font-bold text-sm">Vibe Kids (Infantil)</span>
                    <ExternalLink className="ml-auto w-4 h-4 opacity-40" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="programacao" className="py-20 max-w-7xl mx-auto px-4 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-black tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-orange-500"></span> Nosso Cronograma <span className="w-8 h-[2px] bg-orange-500"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Dias e Horários</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-[#111] border border-white/5 p-8 rounded-[2.5rem] hover:border-emerald-500/30 transition-all">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h4 className="text-emerald-500 font-bold uppercase text-sm mb-2">{service.day}</h4>
              <p className="text-3xl font-bold text-white mb-4 tracking-tighter">{service.time}</p>
              <div className="h-px w-full bg-white/5 mb-4"></div>
              <p className="text-gray-400 font-medium leading-tight">{service.type}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-[3rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-black aspect-square">
              <img src={VIBE_IMAGE_URL} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="About" />
            </div>
          </div>
          <div>
            <h2 className="text-orange-500 font-black tracking-widest uppercase mb-6 text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-orange-500"></span> Nossa Identidade
            </h2>
            <h3 className="text-4xl lg:text-6xl font-serif text-white mb-10 leading-tight">Como tudo começou.</h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              Existimos para ser um farol de luz. No <strong>Ministério {CHURCH_NAME}</strong>, você encontrará comunhão sincera e adoração fervorosa.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-8 mb-20">
             <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 via-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center text-white font-black text-4xl">V</div>
             <div className="space-y-2">
               <span className="font-serif text-4xl font-bold tracking-tighter block uppercase">Ministério {CHURCH_NAME}</span>
               <span className="text-orange-500 text-sm font-black uppercase tracking-[0.5em]">{CHURCH_FULL_NAME}</span>
             </div>
          </div>
          <div className="pt-16 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm mb-4 font-serif italic opacity-60">"Tudo o que tem fôlego louve ao Senhor!" — Salmos 150:6</p>
            <p className="text-gray-600 text-[10px] font-black tracking-[0.4em] uppercase">
              &copy; {new Date().getFullYear()} {CHURCH_NAME} • Vida Inteligente • Bênção Eterna
            </p>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
