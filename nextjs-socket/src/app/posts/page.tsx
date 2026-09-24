import Link from "next/link";

const getPosts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/posts`);
  const { data } = await response.json();
  return data;
};
export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className="mx-auto py-5 max-w-300">
      <h1 className="text-3xl">Posts</h1>
      {posts.map((post: { id: number; title: string }) => (
        <div key={post.id} className="mb-3">
          <h3 className="mb-2 font-medium text-3xl">{post.title}</h3>
          <Link
            href={`/posts/${post.id}`}
            className="inline-block bg-amber-700 px-3 py-1 rounded-lg text-white"
          >
            Chi tiết
          </Link>
        </div>
      ))}
    </div>
  );
}
