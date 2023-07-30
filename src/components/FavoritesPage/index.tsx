"use client";

import { useEffect, useState } from "react";
import GameCard from "../GameCard";
import GamesContainer from "../GamesContainer";
import { getFavoritesFromLocal } from "@/commons/util";
import { Game, GamesData } from "@/commons/types";

const FavoritesPage = ({ gamesData }: { gamesData: GamesData }) => {
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoriteGames: string[] = getFavoritesFromLocal();
    setFavoriteGames(
      gamesData.games.filter((game: Game) => favoriteGames.includes(game.code))
    );
    setLoading(false);
  }, [gamesData.games]);

  const removeFromFavorite = (gameCode: string) => {
    setFavoriteGames(
      favoriteGames.filter((game: Game) => game.code !== gameCode)
    );
  };

  if (loading) {
    return (
      <h1 className="text-xl font-semibold my-10 text-center">Loading...</h1>
    );
  }

  return (
    <div className="max-w-screen-2xl ">
      <h1 className=" text-3xl mb-12 font-semibold">My Favorites</h1>
      {favoriteGames.length > 0 ? (
        <GamesContainer>
          {favoriteGames?.map((game: Game) => (
            <GameCard
              removeFromFavorite={removeFromFavorite}
              isFromFavoritesPage
              key={game.code}
              game={game}
            />
          ))}
        </GamesContainer>
      ) : (
        <p className="text-red-500 text-xl text-center">
          No Games favorited yet!
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;
