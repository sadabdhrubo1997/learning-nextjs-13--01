'use client';

import Link from 'next/link';

export default function PostCardWithTitle({ data }: { data: any }) {
  return (
    <div className='flex justify-center'>
      <Link href={`/post/${data?.id}`} className="inline-flex text-lg mb-3 text-gray-400 hover:text-gray-900 cursor-pointer duration-300">
        {data.title}
      </Link>
    </div>
  );
}
