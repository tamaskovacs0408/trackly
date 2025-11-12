"use client";

import { useDispatch, UseDispatch } from "react-redux";
import { play } from "@/lib/redux/slices/playerSlice";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaPlay } from "react-icons/fa6";
import { AlbumTypes } from "@/types";

export default function HeroSection({ album }: { album: AlbumTypes }) {
  const dispatch = useDispatch();

  function handlePlay() {
    dispatch(
      play({
        album: album,
        track: album.tracks[0],
      })
    );
  }

  return (
    <Card className='relative overflow-hidden border-0 bg-gray-950'>
      <div className='pt-4'>
        <div className='flex flex-col md:flex-row gap-8 items-end'>
          <div className='relative group cursor-pointer shrink-0'>
            <div className='relative w-80 h-80 rounded-lg overflow-hidden'>
              <Image
                src={album.coverImage}
                alt={album.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center'>
              <div className='bg-white flex justify-center items-center rounded-full p-4'>
                <FaPlay
                  className='w-8 h-8 pl-1'
                  fill='black'
                  stroke="black"
                  onClick={handlePlay}
                />
              </div>
            </div>
          </div>

          <div className='flex-1 text-white space-y-4'>
            <p className='text-sm uppercase tracking-wider font-semibold'>
              Today's featured album
            </p>
            <h1 className='text-4xl font-bold'>{album.title}</h1>
            <p className='text-xl font-medium'>{album.artist}</p>
            <p className='text-base font-light line-clamp-3'>
              {album.description}
            </p>
            <div className='flex flex-wrap gap-4 pt-4'>
              <Button
                size='lg'
                className='bg-green-700 hover:bg-green-600 text-white font-semibold cursor-pointer'
                onClick={handlePlay}
              >
                Listen now
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='text-small-text bg-transparent border-none'
              >
                <Link href={`/reviews/${album.id}`}>More details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
