import Link from 'next/link'
import React from 'react'

export default function ReturnButton() {
    return (
        <main className="grid place-items-end bg-gray-100">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <Link href="/dashboard/pokemon" className="relative text-black group-hover:text-white">Return to the pokedex</Link>
            </button>
        </main>
    )
}
