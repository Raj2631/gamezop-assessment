import { fetchGames } from "@/commons/util";
import GameCard from "@/components/GameCard";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const data = await fetchGames();
  const currentCategory = data?.categories?.find(
    (category) => category.category === params.category
  );

  return (
    <div className="max-w-screen-2xl ">
      <h1 className="text-center text-3xl mb-12 font-semibold">
        {currentCategory?.title}
      </h1>

      {currentCategory?.games?.length > 0 ? (
        <div className="flex align-center justify-between gap-6   flex-wrap ">
          {currentCategory?.games.map((game: any) => (
            <GameCard key={game.code} game={game} />
          ))}
        </div>
      ) : (
        <p className="text-red-500 text-xl text-center">
          No Games favorited yet!
        </p>
      )}
    </div>
  );
}
