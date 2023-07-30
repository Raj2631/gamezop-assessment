import axios from "axios";
import { API_ENDPOINT } from "./constants";
import { CategoriesData, Game, GamesData } from "./types";

export const fetchGames = async () => {
  const resp = await fetch(API_ENDPOINT);
  const data = await resp.json();
  const gamesData = data.data;
  const categories: CategoriesData[] = [];

  for (const category in gamesData.categories) {
    const categoryData: CategoriesData = {
      title: gamesData.categories[category],
      category,
      games:
        gamesData.games.filter((game: Game) =>
          game?.categories?.includes(category)
        ) ?? [],
    };
    categories.push(categoryData);
  }

  const finalData: GamesData = { categories, games: gamesData.games ?? [] };

  return finalData;
};

export const getFavoritesFromLocal = () => {
  let localGames = localStorage.getItem("favoriteGames");
  let games: string[] = localGames ? JSON.parse(localGames) : [];
  return games;
};
