async function getPost(slug: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  return res.json();
}

export default async function PostPage({ params }: any) {
  const postData = await getPost(params.slug);

  return (
    <div>
      <h3 className="text-2xl mt-5 mb-6 font-medium text-center">Post Title : {postData?.title}</h3>
      <p className="text-xl mt-3 font-regular leading-relaxed">
        Post Body: {postData?.body}. {postData?.body}. {postData?.body}. {postData?.body}. {postData?.body}. {postData?.body}
      </p>
    </div>
  );
}
