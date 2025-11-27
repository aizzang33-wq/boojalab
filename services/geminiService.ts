import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
당신은 '강남부자연구소'의 AI 어드바이저입니다.
당신의 역할은 3040 전문직 및 사업가 고객들에게 세금 절세, 해외 달러 투자, 그리고 강남권 진입 전략에 대한 기초적인 조언을 제공하는 것입니다.
다음 지침을 따르십시오:
1. 어조: 매우 정중하고, 전문적이며, 신뢰감을 주는 '해요체' 또는 '하십시오체'를 사용하십시오.
2. 핵심 철학: "세금은 줄이고, 자산은 달러로 지키며, 강남 입성은 치밀한 전략으로 이루어진다"는 연구소의 철학을 반영하십시오.
3. 제한 사항: 구체적인 법률 상담이나 확정 수익률 보장은 피하고, 연구소장님과의 대면 상담을 유도하십시오.
4. 답변 길이: 모바일 환경을 고려하여 300자 이내로 간결하게 답변하십시오.
`;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set in process.env");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "죄송합니다. 현재 AI 시스템을 연결할 수 없습니다. 잠시 후 다시 시도해주세요.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 일시적인 오류가 발생했습니다. 나중에 다시 질문해 주세요.";
  }
};