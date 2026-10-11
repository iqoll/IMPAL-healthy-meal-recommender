// services/chat.ts
// Sementara masih dummy. Nanti ganti isi sendChatMessage dengan request ke server (OpenRouter via backend).
import { ChatMessage } from '@/types/chat';

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    role: 'user',
    text: 'I have chicken breast, baby spinach, avocado, and eggs in my fridge. Can you recommend a quick high-protein lunch under 25 mins?',
    createdAt: new Date(),
  },
  {
    id: 'm2',
    role: 'assistant',
    text: 'Here is a personalized lunch recommendations tailored to your daily macros **(605 calories left today)** :',
    createdAt: new Date(),
    recipe: {
      id: 'r1',
      title: 'Grilled Lemon Herb Chicken & Avocado Bowl',
      calories: 480,
      protein: 42,
      fats: 18,
      timeMinutes: 20,
      mealType: 'lunch',
      proteinTarget: 50,
    },
  },
];

export async function sendChatMessage(text: string): Promise<ChatMessage> {
  // Simulasi jeda respons AI
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    id: createId(),
    role: 'assistant',
    text: `Thanks! I'm still in demo mode, so I can't process **"${text}"** yet. Real recommendations will appear once the server is connected.`,
    createdAt: new Date(),
  };
}

export function createUserMessage(text: string): ChatMessage {
  return { id: createId(), role: 'user', text, createdAt: new Date() };
}
