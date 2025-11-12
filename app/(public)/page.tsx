import HeroSection from "@/components/landing/HeroSection";
import TopAlbums from "@/components/landing/TopAlbums";

import { shuffleArray } from "@/lib/utils";

import { albums } from "@/lib/faker-data";

export default function Home() {
  const featuredAlbum = albums[0];
  const topAlbums = shuffleArray(albums.slice(1)).slice(0, 9);

  return (
    <section className="container mx-auto">
      <HeroSection album={featuredAlbum} />
      <TopAlbums albums={topAlbums} />
    </section>
  )
}