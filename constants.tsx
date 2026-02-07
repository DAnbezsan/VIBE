
import { ChurchInfo } from './types';

export const CHURCH_DATA: ChurchInfo = {
  name: "VI.B.E vinde benditos do eterno",
  tagline: "Vinde, benditos de meu Pai, possuí por herança o reino que vos está preparado.",
  address: "Av. Principal, 1234, Centro",
  city: "São Paulo - SP",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197582313654!2d-46.6521903!3d-23.5615097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da173f47%3A0x650f51d597370335!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com', label: '@vibechurch' },
    { platform: 'YouTube', url: 'https://youtube.com', label: 'VI.B.E Channel' },
    { platform: 'Facebook', url: 'https://facebook.com', label: '/vibechurch' },
    { platform: 'WhatsApp', url: 'https://wa.me/5511999999999', label: 'Fale Conosco' },
  ],
  schedule: [
    { day: 'Domingo', time: '09:00', activity: 'Escola Bíblica Dominical', description: 'Um tempo de aprendizado profundo da Palavra.' },
    { day: 'Domingo', time: '18:00', activity: 'Culto de Celebração', description: 'Louve e receba uma mensagem de esperança.' },
    { day: 'Terça-feira', time: '19:30', activity: 'Reunião de Oração', description: 'Intercessão e busca espiritual em comunidade.' },
    { day: 'Quinta-feira', time: '20:00', activity: 'Culto da Família', description: 'Fortalecendo os laços familiares através de Cristo.' },
    { day: 'Sábado', time: '19:00', activity: 'Rede de Jovens', description: 'Conexão, amizade e propósito para a juventude.' },
  ]
};
