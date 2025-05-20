import { useQuery } from "@tanstack/react-query";
import { getArtistTopTracks } from "@/lib/api";
import LoadingSpinner from "./LoadingSpiner";

const ArtistTracks = ({ artistId }: { artistId: number }) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["artistTopTracks", artistId],
        queryFn: () => getArtistTopTracks(artistId),
        enabled: !!artistId
    });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Erreur de chargement des morceaux</p>;

  return (
    <div>
      <h3>Morceaux populaires</h3>
      <ul>
        {data.data.map((track: any) => (
          <li key={track.id}>
            {track.title} - {track.album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistTracks;