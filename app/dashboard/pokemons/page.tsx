import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
import { Metadata } from "next/types"
import { PokemonGrid } from "../../pokemons/components/PokemonGrid";

export const metadata: Metadata = {
    title: 'Pokedex',
    description: 'National Pokemon Dex',
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

    try {
        const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then(res => res.json());
        const pokemons = data.results.map(pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }));
        return pokemons;
    } catch (error) {
        throw new Error('Failed to fetch pokemons');
    }
}

export default async function PokemonPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-10 items-center  justify-center">
                <PokemonGrid pokemons={pokemons} />
            </div>
        </div>
    );
}
