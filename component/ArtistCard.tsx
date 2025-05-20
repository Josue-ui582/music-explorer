import Image from "next/image";
import { ArrowRightIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type Props = {
    artist: {
        id: number
        name: string
        picture_medium: string
        nb_fan: number
    }
}

const ArtistCard = ({ artist } : Props) => {
    return(
        <Link href={`/artist/${artist.id}`} className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <Image 
                src={artist.picture_medium}
                alt={artist.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
                />
                <div className="p-4">
                <h2 className="text-lg font-semibold">{artist.name}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <UserGroupIcon className="w-4 h-4" />
                    {artist.nb_fan.toLocaleString()} fans
                </p>
                <p className="text-indigo-600 hover:underline mt-3 text-sm">Voir les morceaux</p>
                </div>
            </div>
        </Link>
    )
}

export default ArtistCard;