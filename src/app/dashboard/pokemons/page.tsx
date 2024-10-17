import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
// import { PokemonCard } from "@/pokemons/components/PokemonCard";
// import Image from "next/image";
// import Link from "next/link";
// import { IoHeartOutline } from "react-icons/io5";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemons <small>estático</small>{" "}
      </span>

      <PokemonGrid pokemons={pokemons} />

      {/* <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <div className="mx-auto right-0 mt-2 w-60" key={pokemon.id}>
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
              <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                <Image
                  key={pokemon.id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  priority={false}
                />

                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
                  {pokemon.name}
                </p>
                <div className="mt-5">
                  <Link
                    href={`dashboard/pokemon/${pokemon.id}`}
                    className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                  >
                    Más información
                  </Link>
                </div>
              </div>
              <div className="border-b">
                <Link
                  href="/dashboard/main"
                  className="px-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <div className="text-red-600">
                    <IoHeartOutline />
                  </div>
                  <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                      No es favorito
                    </p>
                    <p className="text-xs text-gray-500">View your campaigns</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
