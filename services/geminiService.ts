
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, GroundingSource } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async searchDeals(query: string): Promise<{ text: string; sources: GroundingSource[] }> {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Encontre as melhores ofertas atuais para: ${query}. Foque em lojas confiáveis em Portugal e no Brasil como Amazon, Worten, Fnac, Mercado Livre, Magalu ou KaBuM. Explique por que a oferta é boa.`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "Desculpe, não consegui encontrar ofertas no momento.";
      const sources: GroundingSource[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
        title: chunk.web?.title || 'Fonte de Informação',
        uri: chunk.web?.uri || '#'
      })) || [];

      return { text, sources };
    } catch (error) {
      console.error("Gemini Search Error:", error);
      throw error;
    }
  }

  async getShoppingAdvice(history: ChatMessage[]): Promise<{ text: string }> {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: history.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
        config: {
          systemInstruction: "Você é o assistente virtual do CLAN DE OFERTAS. Seu tom é premium, direto, útil e focado em ajudar o usuário a economizar dinheiro. Você conhece bem o mercado de tecnologia, moda e eletrodomésticos. Responda em português.",
        },
      });

      return { text: response.text || "Estou aqui para ajudar!" };
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
