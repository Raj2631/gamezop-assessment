import { fetchGames } from "@/commons/util";
import GameCard from "@/components/GameCard";
import GamesContainer from "@/components/GamesContainer";

export default async function Search({
  params,
}: {
  params: { searchText: string };
}) {
  const resp = await fetchGames();
  const searchResults = resp?.games?.filter((game: any) =>
    game.name.toLowerCase().includes(params.searchText)
  );
  return (
    <div className="max-w-screen-2xl ">
      <h1 className=" text-3xl mb-12 font-semibold">
        Search results for {params.searchText}
      </h1>
      {searchResults?.length > 0 ? (
        <GamesContainer>
          {searchResults?.map((game: any) => (
            <GameCard key={game.code} game={game} />
          ))}
        </GamesContainer>
      ) : (
        <p className="text-red-500 text-xl text-center">No Games found.</p>
      )}
    </div>
  );
}
