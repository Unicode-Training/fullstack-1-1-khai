type Props = {
  params: Promise<{
    slug: string[];
  }>;
};
export default async function PostsPage({ params }: Props) {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
    </div>
  );
}
