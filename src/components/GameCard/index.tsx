"use client";
import { fetchGames } from "@/commons/util";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";

const GameCard = ({ game, isFromFavoritesPage, removeFromFavorite }: any) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const localGames = localStorage.getItem("favoriteGames");
    const favoriteGames = localGames ? JSON.parse(localGames) : [];
    const isCurrentGameFavorited = favoriteGames.includes(game.code);

    setIsLiked(isCurrentGameFavorited);
  }, [game.code]);

  const toggleLike = () => {
    const localGames = localStorage.getItem("favoriteGames");
    let favoriteGames: string[] = localGames ? JSON.parse(localGames) : [];
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
    <div key={game.code} className=" flex relative flex-col  justify-end w-44">
      {/* <img src={} /> */}
      <button onClick={toggleLike}>
        <Heart
          className={`absolute top-2 right-2 ${isLiked ? " fill-white" : ""}`}
        />
      </button>
      <div
        className="
   bg-hotPink rounded-lg h-52 "
      />
      <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis	text-center">
        {game.name}
      </p>
    </div>
  );
};

export default GameCard;
