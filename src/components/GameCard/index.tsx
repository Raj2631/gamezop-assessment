"use client";
import { fetchGames, getFavoritesFromLocal } from "@/commons/util";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";

const GameCard = ({ game, isFromFavoritesPage, removeFromFavorite }: any) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    let localFavGames: string[] = getFavoritesFromLocal();
    const isCurrentGameFavorited = localFavGames.includes(game.code);

    setIsLiked(isCurrentGameFavorited);
  }, [game.code]);

  const toggleLike = () => {
    let favoriteGames: string[] = getFavoritesFromLocal();

    if (isLiked) {
      favoriteGames = favoriteGames.filter(
        (gameCode: string) => gameCode !== game.code
      );
      if (isFromFavoritesPage) {
        removeFromFavorite(game.code);
      }
    } else {
      favoriteGames.push(game.code);
    }
    setIsLiked((prev) => !prev);
    localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
  };

  return (
    <div
      key={game.code}
      className=" flex relative flex-col  justify-end w-36 md:w-44"
    >
      {/* <img src={} /> */}
      <button onClick={toggleLike}>
        <Heart
          className={`absolute top-2 right-2 ${isLiked ? " fill-white" : ""}`}
        />
      </button>
      <div
        className="
   bg-hotPink rounded-lg h-44 md:h-52"
      />
      <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis	text-center">
        {game.name}
      </p>
    </div>
  );
};

export default GameCard;
