"use client";

import AudioPlayer from "./AudioPlayer";

type Track = {
  id: number;
  title: string;
  preview: string;
  album: { cover_medium: string };
};

export default function TrackList({ tracks }: { tracks: Track[] }) {
  return (
    <ul className="space-y-4">
      {tracks.map((track) => (
        <li key={track.id} className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <img
            src={track.album.cover_medium}
            alt={track.title}
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold">{track.title}</p>
            <AudioPlayer src={track.preview} />
          </div>
        </li>
      ))}
    </ul>
  );
}