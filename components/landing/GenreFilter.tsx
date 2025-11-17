import { Button } from "@/components/ui/button";
import { GENRES } from "@/lib/faker-data";

export default function GenreFilter() {
  return (
    <section className='space-y-6'>
      <h2 className='text-3xl font-normal'>Genres</h2>
      <div
        className='flex gap-3 pb-2 overflow-x-auto
	[&::-webkit-scrollbar]:h-1.5
	[&::-webkit-scrollbar-thumb]:rounded-full
	[&::-webkit-scrollbar-thumb]:bg-small-text
	[&::-webkit-scrollbar-track]:bg-transparent
	'
      >
        {GENRES.map(genre => (
          <Button
            key={genre}
            asChild
            variant='outline'
            className='text-small-text bg-inner-container-bg font-light border-none'
          >
            <span>{genre}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}
