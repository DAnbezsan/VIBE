import React from 'react';
import { Instagram, MapPin, Calendar } from 'lucide-react';
import { Ministry, ServiceTime, SocialLink } from './types';

export const CHURCH_NAME = "VI.B.E";
export const CHURCH_FULL_NAME = "Vinde Benditos do Eterno";
export const CHURCH_ADDRESS = "Sua Rua e Número Aqui - Seu Bairro, Sua Cidade - UF"; 
export const MAP_LINK = "https://maps.app.goo.gl/iCSDfBZY3Fb9Db68A?g_st=ic";
export const INSTAGRAM_VIBE_LINK = "https://www.instagram.com/ministeriovibe?igsh=MXhlY21pZ2V4NG04dw==";
export const INSTAGRAM_KIDS_LINK = "https://www.instagram.com/min.infantil_vibe?igsh=bnZseWFtb2M2MmYw";

export const MINISTRIES: Ministry[] = [
  {
    id: '1',
    title: 'Kids',
    description: 'Um lugar seguro para crianças aprenderem sobre o amor de Deus de forma lúdica.',
    icon: '🧸',
    image: 'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    title: 'Jovens',
    description: 'Conectando a nova geração através de amizades reais e propósito cristão.',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    title: 'Louvor',
    description: 'Adoração profunda e excelência musical para glorificar ao Senhor.',
    icon: '🎸',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '4',
    title: 'Encontro de Mulheres',
    description: 'Um espaço de comunhão, oração e fortalecimento espiritual para mulheres de todas as idades.',
    icon: '🌸',
    image: 'https://image2url.com/r2/default/images/1770493615621-2d2302b8-0872-4dfc-a793-a5e50b3660aa.png'
  }
];

export const SERVICES: ServiceTime[] = [
  { day: 'Segunda-feira', time: '19:30', type: 'Culto de Mulheres' },
  { day: 'Quarta-feira', time: '19:30', type: 'Culto de Oração' },
  { day: 'Quinta-feira', time: '19:30', type: 'Jovens e Adolescentes' },
  { day: 'Sexta-feira', time: '19:30', type: 'Reunião de Homens' },
  { day: 'Domingo', time: '19:00', type: 'Culto de Celebração' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    label: 'Redes Sociais', 
    platform: 'Instagram', 
    url: 'expand', 
    icon: <Instagram className="w-6 h-6" />, 
    color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' 
  },
  { 
    label: 'Mapa', 
    platform: 'Localização', 
    url: MAP_LINK, 
    icon: <MapPin className="w-6 h-6" />, 
    color: 'bg-blue-500' 
  },
  { 
    label: 'Agenda', 
    platform: 'Cronograma', 
    url: '#programacao', 
    icon: <Calendar className="w-6 h-6" />, 
    color: 'bg-emerald-500' 
  },
];