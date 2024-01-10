'use client'

import React from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store/store';

const FavoritePokemons = () => {

    const favoriteList = useAppSelector(state => Object.values(state.pokemons));
    const[pokemons, setPokemons] = React.useState(favoriteList);
    console.log(Object.values(favoriteList).length);

    return (
        (favoriteList.length === 0) ? (
            <div className="flex flex-col items-center justify-center">
                <div className="text-center text-2xl font-semibold text-gray-600">You don&apos;t have any favorite pokemon yet</div>
            </div>
        ) : 
        ( <PokemonGrid pokemons={pokemons} />)
       
    )
}

export default FavoritePokemons
