import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/slices/postSlice";
import PostList from "./PostList";
import Loadmore from "./Loadmore";

export default function Posts() {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.posts.limit);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [limit]);
  return (
    <div>
      <PostList />
      <Loadmore />
    </div>
  );
}

//Cách làm cũ: Call Component --> Dispatch Store

//Theo Redux: Dispatch Action --> Middleware (Thunk, Saga) --> Reducer --> Store
