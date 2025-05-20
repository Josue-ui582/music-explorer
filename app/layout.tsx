
import './globals.css'
import { ReactQueryClientProvider } from '@/lib/react-query-provider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Music Explorer',
    template: '%s | Music Explorer',
  },
  description:
    'Découvrez vos artistes préférés, explorez leurs albums et écoutez des extraits musicaux grâce à l’API Deezer.',
  keywords: ['musique', 'deezer', 'albums', 'artistes', 'next.js', 'typescript'],
  openGraph: {
    title: 'Music Explorer',
    description:
      'Recherchez vos artistes favoris et écoutez des extraits musicaux gratuitement.',
    url: 'https://music-explorer.vercel.app',
    siteName: 'Music Explorer',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music Explorer',
    description: 'Recherchez vos artistes favoris et explorez leurs albums.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <ReactQueryClientProvider>
          {children}
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}