
import { CHURCH_NAME, CHURCH_FULL_NAME, SERVICES, CHURCH_ADDRESS } from "../constants";

// Respostas pré-definidas para simular o assistente sem necessidade de API
const LOCAL_RESPONSES: Record<string, string> = {
  "horario": `Nossos cultos acontecem nos seguintes dias: ${SERVICES.map(s => `\n- ${s.day} às ${s.time} (${s.type})`).join('')}`,
  "onde": `Estamos localizados na ${CHURCH_ADDRESS}. Esperamos por você!`,
  "localização": `Estamos localizados na ${CHURCH_ADDRESS}. Esperamos por você!`,
  "endereço": `Estamos localizados na ${CHURCH_ADDRESS}. Esperamos por você!`,
  "quem": `O Ministério ${CHURCH_NAME} (${CHURCH_FULL_NAME}) é uma comunidade cristã focada em adoração e ensino da palavra.`,
  "ministério": "Temos ministérios para todas as idades: Kids, Jovens, Louvor, Homens e Mulheres. Como podemos te ajudar a se conectar?",
  "contato": "Você pode nos encontrar no Instagram oficial ou vir nos visitar em um de nossos cultos!",
  "paz": "Paz do Senhor! Como posso ser útil hoje?",
  "oi": "Olá! Bem-vindo ao canal de atendimento do Ministério VI.B.E. Como posso te ajudar?",
  "olá": "Olá! Bem-vindo ao canal de atendimento do Ministério VI.B.E. Como posso te ajudar?"
};

export const getGeminiResponse = async (userPrompt: string, _history: any[]) => {
  // Simula um pequeno delay de processamento
  await new Promise(resolve => setTimeout(resolve, 800));

  const prompt = userPrompt.toLowerCase();
  
  // Procura por palavras-chave
  for (const key in LOCAL_RESPONSES) {
    if (prompt.includes(key)) {
      return LOCAL_RESPONSES[key];
    }
  }

  // Resposta padrão caso não encontre palavra-chave
  return `Paz do Senhor! No momento estou operando em modo offline. Você pode encontrar informações sobre nossos horários, localização e redes sociais logo abaixo aqui no nosso catálogo. Se precisar de algo específico, sinta-se à vontade para nos visitar em um de nossos cultos!`;
};
