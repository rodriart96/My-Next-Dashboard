import { SimplePokemon } from '@/app/pokemons/interfaces/simple-pokemon';
import React from 'react'
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  )
}

