import Link from "next/link";
import DeleteButton from "./DeleteButton";

type Post = {
  id: number;
  title: string;
};
const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`http://localhost:3001/posts`, {
    cache: "force-cache",
    // next: {
    //   revalidate: 60,
    // },
  });
  return response.json();
};
export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      {posts.map((post) => (
        <h2 className="text-xl flex gap-3" key={post.id}>
          {post.title}
          <Link href={`/posts/edit/${post.id}`}>Edit</Link>
          <DeleteButton id={post.id} />
        </h2>
      ))}
    </div>
  );
}

//Invalidate
// - Setup thời gian tự xóa cache
// - Chủ động xóa
// + revalidatePath() --> Xóa theo path
// + revalidateTags() --> Xóa theo tags (Gắn tags)
// --> Chỉ cho phép gọi ở Route Handler, Server Actions

//1. Route Handler:
// - Giống như 1 page thông thường nhưng trả về json
// - Giống như 1 API nội bộ
