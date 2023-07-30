import { Game } from "@/commons/types";
import { fetchGames } from "@/commons/util";
import GameCard from "@/components/GameCard";
import GamesContainer from "@/components/GamesContainer";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const data = await fetchGames();
  const currentCategory = data?.categories?.find(
    (category) => category.category === params.category
  );

  if (!currentCategory) {
    return (
      <div className="max-w-screen-2xl ">
        <p className="text-red-500 text-xl text-center mt-10">
          Invalid Category!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl ">
      <h1 className=" text-3xl mb-12 font-semibold">
        {currentCategory?.title}
      </h1>

      {currentCategory?.games?.length > 0 ? (
        <GamesContainer>
          {currentCategory?.games.map((game: Game) => (
            <GameCard key={game.code} game={game} />
          ))}
        </GamesContainer>
      ) : (
        <p className="text-red-500 text-xl text-center">
          No games available currently.
        </p>
      )}
    </div>
  );
}
