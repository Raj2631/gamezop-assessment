import { fetchGames } from "@/commons/util";
import FavoritesPage from "@/components/FavoritesPage";

const Favorites = async () => {
  const gamesData = await fetchGames();
  return <FavoritesPage gamesData={gamesData} />;
};

export default Favorites;
