'use client';

import PostCardWithTitle from '../components/PostCardWithTitle/PostCardWithTitle';

export default function HomeContainer({ posts }: { posts: any }) {
  console.log('home container');
  console.log(posts);
  return (
    <div>
      {posts?.map((post: any) => {
        <PostCardWithTitle data={post} />;
      })}
    </div>
  );
}
