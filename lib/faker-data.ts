import { AlbumTypes, QuoteType, ReviewsTypes, TrackTypes } from "@/types";
import { faker } from "@faker-js/faker";

export const GENRES = [
  "Pop",
  "Jazz",
  "Rock",
  "Indie",
  "Electronic",
  "Classical",
  "Hip-Hop",
  "R&B",
];

function generateTrack(index: number, albumSeed: number): TrackTypes {
  faker.seed(albumSeed + index);
  const minutes = faker.number.int({ min: 2, max: 6 });
  const seconds = faker.number.int({ min: 0, max: 59 });

  return {
    id: index,
    title: faker.music.songName(),
    duration: `${minutes}:${seconds.toString().padStart(2, "0")}`,
    durationSeconds: minutes * 60 + seconds,
  };
}

export function generateAlbum(id: number): AlbumTypes {
  const seed = id * 1000;
  faker.seed(seed);

  const trackCount = faker.number.int({ min: 8, max: 15 });
  const tracks = Array.from({ length: trackCount }, (_, index: number) =>
    generateTrack(index + 1, seed)
  );

  const totalSeconds = tracks.reduce(
    (sum: number, track: TrackTypes) => sum + track.durationSeconds,
    0
  );

  const totalMinutes = Math.floor(totalSeconds / 60);

  return {
    id,
    title: `${faker.word.adjective()} ${faker.word.noun()}`,
    artist: faker.person.fullName(),
    coverImage: `https://picsum.photos/seed/${id}/800/800`,
    genre: faker.helpers.arrayElement(GENRES),
    releaseYear: faker.date.past({ years: 10 }).getFullYear(),
    description: faker.lorem.paragraphs(2),
    trackCount,
    totalDuration: `${totalMinutes} min`,
    tracks,
    quote: faker.lorem.sentence(),
  };
}

export function generateReview(
  id: number,
  album: AlbumTypes,
  artist: string
): ReviewsTypes {
  faker.seed(id * 2000);
  return {
    id,
    albumId: album.id,
    album: album,
    artist: artist,
    title: album.title,
    author: faker.person.fullName(),
    authorAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`,
    rating: faker.number.int({ min: 1, max: 5 }),
    summary: faker.lorem.sentences(1),
    content: faker.lorem.paragraph(2),
    publishedAt: faker.date.past({ years: 1 }).toISOString(),
  };
}

export function generateAlbums(count = 100): AlbumTypes[] {
  return Array.from({ length: count }, (_, index: number) =>
    generateAlbum(index + 1)
  );
}

export function generateReviews(albums: AlbumTypes[]): ReviewsTypes[] {
  return albums.map((album: AlbumTypes) =>
    generateReview(album.id, album, album.artist)
  );
}

export function generateQuote(): QuoteType {
  return {
    name: faker.person.fullName(),
    quote: faker.lorem.sentence(8),
    avatar: faker.image.avatar(),
  };
}

const albums = generateAlbums(100);
const reviews = generateReviews(albums);

export { albums, reviews };