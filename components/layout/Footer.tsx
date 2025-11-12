import Link from "next/link";
import { FaMusic } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='border-none bg-gray-950 mt-16'>
      <div className='container py-12 mx-auto'>
        <div className='flex justify-between items-center px-4'>
          <div className='space-y-4'>
            <Link
              href='/'
              className='flex items-center gap-2 font-medium text-xl'
            >
              <FaMusic className='h-5 w-5' />
              <span>Trackly</span>
            </Link>
          </div>

          <div>
            <ul className='text-m flex justify-between items-center gap-16'>
              <li>
                <Link href='/albums'>Albums</Link>
              </li>
              <li>
                <Link href='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link href='/dashboard'>Admin</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className='flex gap-4'>
              <Link href='#' aria-label='X'>
                <FaSquareXTwitter className='h-5  w-5' />
              </Link>
              <Link href='#' aria-label='Instagram'>
                <FaInstagram className='h-5 w-5' />
              </Link>
              <Link href='#' aria-label='Facebok'>
                <FaFacebook className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
