export interface Game {
  code: string;
  nameEn: string;
  battleSupported: boolean;
  rating: number;
  totalRating: number;
  name: string;
  categories?: string[] | null;
  created_at: string;
  gamePlays: number;
}

export interface CategoriesData {
  title: string;
  category: string;
  games: Game[];
}

export interface GamesData {
  categories: CategoriesData[];
  games: Game[];
}
