import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SimplePokemon } from '@/app/pokemons/interfaces/simple-pokemon';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;

    return (
        <>
            <div className="mx-5 right-0 mt-2 w-80 ">
                <div className="flex flex-col rounded-3xl bg-gradient-to-b from-red-400 to-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   overflow-hidden shadow-lg">
                    <div className="text-center py-6 border-b ">
                        <div key={id} className="flex flex-col items-center justify-center hover:bg-gray-200 duration-200 border-4 w-60 p-6 mx-auto  rounded-full">
                            <Image 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                alt={name}
                                width={100}
                                height={100}
                                priority={false}
                            />
                            <span className="capitalize mt-2 text-gray-100 hover:text-black border-slate-700 hover:bg-gray-200 duration-200">{name}</span>
                        </div>
                        <div className="mt-5">
                            <Link href={`pokemon/${name}`}
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:bg-gray-200 hover:text-black"
                            >
                                More info
                            </Link>
                        </div>
                    </div>
                    <div className="border-b ">
                        <button className="px-4 py-2 hover:bg-gray-100 hover:text-black flex text-center">
                            <div className="text-red-600">
                                <IoHeartOutline />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800  leading-none">
                                    Not Favorite
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}