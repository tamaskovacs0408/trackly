import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaMusic } from "react-icons/fa";

export default function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-none bg-gray-950'>
      <div className='container flex h-16 items-center justify-between mx-auto'>
        <div className='flex items-center gap-16'>
          <Link
            href='/'
            className='flex items-center gap-2 font-medium text-xl'
          >
            <FaMusic className='h-5 w-5' />
            <span>Trackly</span>
          </Link>
          <nav className='flex items-center gap-6'>
            <Link href='/albums'>
              Albums
            </Link>
            <Link href='/reviews'>
              Reviews
            </Link>
            <Link href='/dashboard'>
              Admin
            </Link>
          </nav>
        </div>

        <div className='flex items-center gap-4'>
          <Button
            asChild
            variant='default'
            size='sm'
            className='bg-green-700 hover:bg-green-600'
          >
            <Link href='/login'>Log in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
