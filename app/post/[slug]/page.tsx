import { notFound } from 'next/navigation';
import { wait } from '../../../ultils/time';

async function getPost(slug: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  await wait(1);
  return res.json();
}

export default async function PostPage({ params }: any) {
  const postData = await getPost(params.slug);

  if (!postData.id) {
    notFound();
  }

  return (
    <>
      <div>
        <h3 className="text-2xl mt-5 mb-6 font-medium text-center">Post Title : {postData?.title}</h3>
        <p className="text-xl mt-3 font-regular leading-relaxed">
          Post Body: {postData?.body}. {postData?.body}. {postData?.body}. {postData?.body}. {postData?.body}. {postData?.body}
        </p>
      </div>
    </>
  );
}
