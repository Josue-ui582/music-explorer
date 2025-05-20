// app/search/layout.tsx
import React, { ReactNode } from "react";

export const metadata = {
  title: "Recherche d'artiste - Music Explorer",
  description: "Recherchez vos artistes préférés facilement avec notre application Deezer.",
  openGraph: {
    title: "Recherche d'artiste - Music Explorer",
    description: "Recherchez vos artistes préférés facilement avec notre application Deezer.",
    url: "https://ton-domaine.com/search",
    siteName: "Music Explorer",
    images: [
      {
        url: "https://ton-domaine.com/og-image-search.jpg",
        width: 800,
        height: 600,
        alt: "Recherche d'artiste - Music Explorer",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div>

      <main>{children}</main>

      <footer className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} Music Explorer
      </footer>
    </div>
  );
}
