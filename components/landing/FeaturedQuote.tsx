"use client";

import { useState, useEffect } from "react";
import { generateQuote } from "@/lib/faker-data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function FeaturedQuote() {
  const [quote, setQuote] = useState(generateQuote());
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(generateQuote());
      setKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className='text-3xl font-normal'>Featured artist</h2>
      <Card
        key={key}
        className='bg-outer-container-bg text-white border-none mt-4 rounded-lg'
      >
        <CardContent className='p-8 flex flex-col md:flex-row items-center gap-6'>
          <Avatar className='h-24 w-24'>
            <AvatarImage src={quote.avatar} alt={quote.name} />
            <AvatarFallback>{quote.name[0]}</AvatarFallback>
          </Avatar>
          <div className='flex-1 text-center md:text-left'>
            <blockquote className='text-xl h-25 italic font-medium mb-2 line-clamp-3'>
              "{quote.quote}"
            </blockquote>
            <p className='font-semibold'>{quote.name}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
