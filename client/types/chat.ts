// types/chat.ts

export interface RecipeRecommendation {
  id: string;
  title: string;
  calories: number;      // kkal
  protein: number;       // gram
  fats: number;          // gram
  timeMinutes: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  proteinTarget: number; // target protein untuk mealType ini (gram)
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;          // Mendukung **teks tebal** sederhana
  createdAt: Date;
  recipe?: RecipeRecommendation; // Hanya untuk pesan assistant
}
