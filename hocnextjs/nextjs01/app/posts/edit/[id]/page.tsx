import Form from "./Form";
type Props = {
  params: Promise<{ id: number }>;
};
const getPost = async (id: number) => {
  const response = await fetch(`http://localhost:3001/posts/${id}`, {
    cache: "force-cache",
  });
  return response.json();
};
export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div>
      <h1 className="text-3xl">Edit Post</h1>
      <Form post={post} />
    </div>
  );
}

//Cache tags
