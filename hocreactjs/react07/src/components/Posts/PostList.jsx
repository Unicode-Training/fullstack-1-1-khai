import { useSelector } from "react-redux";

export default function PostList() {
  const { postList, isLoading, error } = useSelector((state) => state.posts);
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        postList.map((post) => (
          <div
            key={post.id}
            style={{
              display: "list-item",
              listStyle: "inside decimal-leading-zero",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
