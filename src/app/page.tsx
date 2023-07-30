import { API_ENDPOINT } from "@/commons/constants";
import { fetchGames } from "@/commons/util";
import GameCard from "@/components/GameCard";
import GamesContainer from "@/components/GamesContainer";
import Header from "@/components/Header";

import Link from "next/link";

export default async function Home() {
  const data = await fetchGames();
  return (
    <main>
      <Header gamesData={data?.categories} />
      <div className="max-w-screen-2xl">
        <div className="flex flex-col gap-20">
          {data?.categories?.map(({ title, games, category }) => (
            <div key={title}>
              <div className="flex items-center justify-center  md:justify-start gap-4 mb-10">
                <h1 className="text-left text-2xl  md:text-3xl font-semibold">
                  {title}
                </h1>

                <Link
                  href={`/categories/${category}`}
                  className=" text-hotPink hidden md:block mt-1 underline hover:font-semibold"
                >
                  View more
                </Link>
              </div>
              <GamesContainer>
                {games
                  .slice(0, Math.floor(Math.random() * 4) + 10)
                  .map((game: any) => (
                    <GameCard key={game.code} game={game} />
                  ))}
              </GamesContainer>

              <div className="flex items-center text-hotPink block md:hidden justify-center my-8 text-xl hover:font-semibold underline">
                <Link href={`/categories/${category}`} className=" ">
                  View more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
