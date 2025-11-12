export interface TrackTypes {
  id: number
  title: string
  duration: string
  durationSeconds: number
}

export interface AlbumTypes {
  id: number
  title: string
  artist: string
  coverImage: string
  genre: string
  releaseYear: number
  description: string
  trackCount: number
  totalDuration: string
  tracks: TrackTypes[]
  quote: string
}

export interface ReviewsTypes {
  id: number,
  albumId: number,
  album: AlbumTypes,
  artist: string,
  title: string,
  author: string,
  authorAvatar: string,
  rating: number,
  summary: string,
  content: string,
  publishedAt: string
}

export interface QuoteType {
  name: string,
  quote: string,
  avatar: string
}

export interface PlayerSliceTypes {
  isPlaying: boolean
  currentTrack: TrackTypes | null
  currentAlbum: AlbumTypes | null
}