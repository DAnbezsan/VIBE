import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { CHURCH_NAME } from '../constants';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: `Paz do Senhor! Sou o assistente do Ministério ${CHURCH_NAME}. Como posso te ajudar hoje?` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      const aiResponse = await getGeminiResponse(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse || "Desculpe, tive um problema ao processar sua resposta." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Erro ao conectar com o assistente. Tente novamente." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all flex items-center justify-center hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-[#111] w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-orange-600 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm">Assistente Virtual VI.B.E</h3>
              <p className="text-xs opacity-80">Online agora</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-orange-500 rounded-lg p-1 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-orange-600 text-white rounded-br-none'
                      : 'bg-[#222] text-gray-100 border border-white/5 rounded-bl-none shadow-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#222] px-4 py-2 rounded-2xl border border-white/5 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
                  <span className="text-xs text-gray-400">Digitando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-[#0a0a0a]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Como posso te ajudar?"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-orange-600 text-white p-2 rounded-xl hover:bg-orange-700 disabled:opacity-50 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;