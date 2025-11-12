"use client";

import { useDispatch } from "react-redux";
import { play } from "@/lib/redux/slices/playerSlice";
import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AlbumTypes } from "@/types";

export default function TopAlbums({ albums }: { albums: AlbumTypes[]}) {
  const dispatch = useDispatch();

  function handlePlay(album: AlbumTypes) {
    dispatch(
      play({
        album: album,
        track: album.tracks[0],
      })
    );
  }

  return (
    <section className='space-y-6 pt-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-normal'>Top albums</h2>
        <Link href='/albums' className='text-sm text-small-text'>
          View all
        </Link>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {albums.map((album, index) => (
            <CarouselItem
              key={album.id}
              className='md:basis-1/2 lg:basis-1/4 pl-5'
            >
              <Card className='group overflow-hidden bg-main-bg border-none'>
                <CardContent className='p-0'>
                  <div className='relative aspect-square'>
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className='object-cover rounded-lg'
                    />
                    <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4'>
                      <Button
                        size='icon'
                        className='bg-green-700 hover:bg-green-600 h-14 w-14 rounded-full cursor-pointer'
                        onClick={() => handlePlay(album)}
                      >
                        <FaPlay className='h-6 w-6' fill='white' />
                      </Button>
                      <Button asChild variant='secondary' size='sm'>
                        <Link href={`/albums/${album.id}`}>View Album</Link>
                      </Button>
                    </div>
                    {index < 2 ? (
                      <Badge className='absolute top-3 right-3 bg-green-700 hover:bg-green-600'>
                        {index === 0 ? "Popular" : "New"}
                      </Badge>
                    ) : null}
                  </div>
                  <div className='pt-4'>
                    <h3 className='font-semibold text-lg text-white truncate'>
                      {album.title}
                    </h3>
                    <p className='text-sm text-white truncate'>
                      {album.artist}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-transparent text-white cursor-pointer' />
        <CarouselNext className='bg-transparent text-white cursor-pointer' />
      </Carousel>
    </section>
  );
}