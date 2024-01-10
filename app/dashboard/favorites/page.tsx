import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
import { Metadata } from "next/types"
import { PokemonGrid } from "../../pokemons/components/PokemonGrid";
import FavoritePokemons from "@/app/pokemons/components/FavoritePokemons";

export const metadata: Metadata = {
    title: 'Favorite Pokemons',
    description: 'National Pokemon Dex',
}

export default async function PokemonPage() {

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-10 items-center  justify-center">
            <FavoritePokemons />
            </div>
        </div>
    );
}
