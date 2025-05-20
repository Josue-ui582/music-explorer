export const searchArtist = async (query: string) => {
    const response = await fetch(`api/deezer?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Erreur API");
    const data = await response.json();
    return data.data;
};


export async function getArtistTopTracks(artistId: number) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/artist/${artistId}/top`);
    
    if (!res.ok) throw new Error("Erreur lors du chargement des morceaux");
    return res.json();
}
  