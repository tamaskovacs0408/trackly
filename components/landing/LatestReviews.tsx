import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ReviewsTypes } from "@/types";

export default function LatestReviews({ reviews }: { reviews: ReviewsTypes[]}) {
  return (
    <section className='space-y-6 pt-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-normal'>Latest reviews</h2>
        <Link href='/reviews' className='text-sm text-small-text'>
          See more
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {reviews.slice(0, 3).map(review => (
          <Card key={review.id} className='group bg-outer-container-bg'>
            <CardContent className='p-4 space-y-4 flex flex-col justify-between gap-4'>
              <div className='space-y-2'>
                <p className='text-sm text-white h-10 line-clamp-2'>
                  {review.summary}
                </p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs text-gray-400'>
                      {review.author}
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-small-text text-small-text"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex gap-5 p-4 bg-inner-container-bg rounded-lg'>
                <div className='relative w-24 h-24 p-1 shrink-0 overflow-hidden rounded-lg bg-inner-container-bg'>
                  <Image
                    src={review.album?.coverImage}
                    alt={review.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='space-y-1 bg-inner-container-bg flex flex-col justify-center'>
                  <h4 className='font-bold text-white text-xs'>
                    {review.album.title}
                  </h4>
                  <p className='text-small-text text-xs'>
                    {review.album.artist}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className='p-4 pt-0'>
              <Button asChild variant='outline' className='w-full'>
                <Link href={`/reviews/${review.id}`}>Read more</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
