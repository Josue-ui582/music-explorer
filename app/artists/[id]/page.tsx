import { getArtistTopTracks } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import TrackListe from "@/component/TrackListe";

export default async function ArtistPage({ params }: any) {
  const artistId = parseInt(params.id);
  if (!artistId) return notFound();

  const tracksData = await getArtistTopTracks(artistId);
  const tracks = tracksData?.data;

  if (!tracks || tracks.length === 0) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-6 text-indigo-600 hover:underline text-md">
          ←🎵
        </Link>
        <h1 className="text-3xl font-bold mb-4">Top morceaux de l’artiste</h1>
        <TrackListe tracks={tracks} />
      </div>
    </main>
  );
}