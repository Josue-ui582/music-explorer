'use client'

import Link from "next/link"
import { MusicalNoteIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4 text-center">
      <div className="max-w-xl">
        <div className="flex justify-center mb-4">
          <MusicalNoteIcon className="w-12 h-12 text-indigo-600 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🎵 Music Explorer
        </h1>
        <p className="text-gray-600 mb-6">
          Recherchez vos artistes préférés, découvrez leurs albums et écoutez un aperçu de leurs morceaux.
        </p>

        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Commencer la recherche
          <ArrowRightIcon className="w-4 h-4 animate-pulse" />
        </Link>
      </div>
    </main>
  )
}