'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href={`/`}>
        <Image src="/logo.svg" alt="app-logo" width={100} height={50} />
      </Link>
      <ul className="flex justify-center py-4 space-x-6">
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/posts`}>Posts</Link>
        </li>
      </ul>
    </div>
  );
}
