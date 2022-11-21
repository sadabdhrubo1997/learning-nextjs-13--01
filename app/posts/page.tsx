import PostCardWithTitle from '../../components/PostCardWithTitle/PostCardWithTitle';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  return res.json();
}

export default async function Posts() {
  const data = await getPosts();
  return <div className="flex flex-col">{data?.length && data?.map((post: any) => <PostCardWithTitle data={post} key={post?.id} />)}</div>;
}
