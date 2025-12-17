
import { GoogleGenAI } from "@google/genai";
import { SALES_DATA } from "../constants";

export const generateExecutiveSummary = async () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const dataString = JSON.stringify(SALES_DATA);
  
  const prompt = `
    Analise os seguintes dados financeiros e forneça um resumo executivo conciso em português (máximo 3 parágrafos).
    Foque em tendências de crescimento, lucratividade e possíveis pontos de atenção.
    Dados: ${dataString}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Você é um analista financeiro sênior especializado em dashboards de BI corporativos. Responda de forma profissional e objetiva.",
      }
    });
    return response.text || "Não foi possível gerar o resumo no momento.";
  } catch (error) {
    console.error("Erro ao chamar Gemini API:", error);
    return "Ocorreu um erro ao processar os insights de IA.";
  }
};

export const askAIAboutData = async (userQuestion: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const dataContext = JSON.stringify(SALES_DATA);

  const prompt = `
    Pergunta do Usuário: ${userQuestion}
    Contexto dos Dados: ${dataContext}
    Instrução: Responda a pergunta baseando-se estritamente nos dados fornecidos ou no seu conhecimento geral sobre análise de negócios se a pergunta for teórica. Seja breve e direto.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Desculpe, não consegui processar sua pergunta.";
  } catch (error) {
    return "Erro na comunicação com a inteligência artificial.";
  }
};
