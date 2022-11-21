async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    console.log('no posts available');
    throw new Error('no posts available');
  }

  return (
    <div>
      <h1 className="text-center mb-5 text-4xl font-medium">Posts</h1>
      <h2>Total Posts : {posts?.length}</h2>
    </div>
  );
}
