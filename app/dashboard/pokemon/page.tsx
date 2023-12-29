import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next/types"
export const metadata: Metadata = {
    title: 'Pokedex',
    description: 'National Pokemon Dex',
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));
    return pokemons;
}

export default async function PokemonPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-10 items-center  justify-center">

                {pokemons.map(pokemon => (
                    <button key={pokemon.id} className="flex flex-col h-[150px] w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-gradient-to-b from-red-300 to-slate-300 border-4 items-center justify-center p-6 mx-2 rounded-full">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`}
                            alt={pokemon.name}
                            width={50}
                            height={50}
                        />
                        <Link href={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`} className=" mt-2 text-white border-slate-700">{pokemon.name}</Link>
                    </button>

                ))}


            </div>
        </div>
    );
}
