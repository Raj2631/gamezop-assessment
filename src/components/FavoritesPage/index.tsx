"use client";

import { useEffect, useState } from "react";
import GameCard from "../GameCard";
import GamesContainer from "../GamesContainer";

const FavoritesPage = ({ gamesData }: any) => {
  const [favoriteGames, setFavoriteGames] = useState([]);
  useEffect(() => {
    const localGames = localStorage.getItem("favoriteGames");
    const favoriteGames = localGames ? JSON.parse(localGames) : [];

    setFavoriteGames(
      gamesData.games.filter((game: any) => favoriteGames.includes(game.code))
    );
  }, [gamesData.games]);

  const removeFromFavorite = (gameCode: string) => {
    setFavoriteGames(
      favoriteGames.filter((game: any) => game.code !== gameCode)
    );
  };

  return (
    <div className="max-w-screen-2xl ">
      <h1 className=" text-3xl mb-12 font-semibold">My Favorites</h1>
      {favoriteGames.length > 0 ? (
        <GamesContainer>
          {favoriteGames?.map((game: any) => (
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
