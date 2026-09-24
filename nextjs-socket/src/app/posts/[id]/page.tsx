import Comment from "@/components/Comment";

type PostDetailPageProps = {
  params: Promise<{ id: string }>;
};
const getPost = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${id}`);
  const { data } = await response.json();
  return data;
};
const getComments = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/${id}/comments`,
  );
  const { data } = await response.json();
  return data;
};
export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getComments(id);
  return (
    <div className="mx-auto py-5 max-w-300">
      <div className="mb-3">
        <h1 className="mb-3 text-3xl">{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <Comment comments={comments} postId={+id!} />
    </div>
  );
}
