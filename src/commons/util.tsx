import axios from "axios";
import { API_ENDPOINT } from "./constants";

export const fetchGames = async () => {
  try {
    const resp = await axios.get(API_ENDPOINT);

    const gamesData = resp.data.data;
    const categories = [];
    for (const category in gamesData.categories) {
      const categoryData = {
        title: gamesData.categories[category],
        category,
        games: gamesData.games.filter((game: any) =>
          game.categories.includes(category)
        ),
      };
      categories.push(categoryData);
    }
    return { categories, games: gamesData.games };
  } catch (error) {
    console.log(error);
  }
};