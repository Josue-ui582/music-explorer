"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import ArtistCard from "@/component/ArtistCard"
import { searchArtist } from "@/lib/api"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import LoadingSpinner from "@/component/LoadingSpiner"

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryKey: ["artist", searchTerm],
        queryFn: () => searchArtist(searchTerm),
        enabled: !!searchTerm
    });

    const handleSearch = () => {
        if (query.trim() !== "") {
            setSearchTerm(query.trim());
        }
    };

    return (
        <main className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 min-h-screen w-full py-10 px-4">
            <section className="max-w-5xl mx-auto">
                
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">
                        Trouve ton artiste préféré
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Recherche un artiste pour explorer ses fans, ses morceaux ou accéder directement à sa page Deezer.
                    </p>
                </header>

                <div className="flex items-center bg-white border rounded-full shadow-md px-4 py-2 max-w-xl mx-auto mb-8">
                    <input 
                        type="text"
                        placeholder="Ex. Aya Nakamura, Drake, Jul..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="flex-grow bg-transparent outline-none text-sm md:text-base px-2 py-1"
                    />
                    <button 
                        onClick={handleSearch} 
                        className="ml-2 text-indigo-600 hover:text-indigo-800 transition"
                        aria-label="Rechercher un artiste"
                    >
                        <MagnifyingGlassIcon className="h-6 w-6" />
                    </button>
                </div>

                {isLoading && (
                    <div className="flex justify-center my-8">
                        <LoadingSpinner />
                    </div>
                )}

                {!searchTerm && (
                    <div className="text-center text-gray-500 mt-12">
                        🔍 Commence par taper un nom d’artiste pour lancer une recherche.
                    </div>
                )}

                {searchTerm && !isLoading && data?.length === 0 && (
                    <div className="text-center text-red-500 font-medium mt-6">
                        Aucun artiste trouvé pour "<span className="italic">{searchTerm}</span>".
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {data?.map((artist: any) => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default SearchPage;