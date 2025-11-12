import HeroSection from "@/components/landing/HeroSection";

import { albums } from "@/lib/faker-data";

export default function Home() {
  const featuredAlbum = albums[0];

  return (
    <section className="container mx-auto">
      <HeroSection album={featuredAlbum} />
    </section>
  )
}