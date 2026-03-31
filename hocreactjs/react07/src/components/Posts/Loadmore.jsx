import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../../store/slices/postSlice";

export default function Loadmore() {
  const dispatch = useDispatch();
  const { loadMoreStatus, postTotal, limit } = useSelector(
    (state) => state.posts
  );
  //   console.log(`limit: ${limit}`, `postTotal: ${postTotal}`);

  const handleLoadmore = () => {
    dispatch(loadMore());
  };
  if (postTotal === 0) {
    return;
  }
  return (
    <div style={{ textAlign: "center" }}>
      {limit < postTotal ? (
        <button onClick={handleLoadmore}>
          {loadMoreStatus === "pending" ? "Loading..." : "Tải thêm"}
        </button>
      ) : (
        <p>Không còn gì nữa</p>
      )}
    </div>
  );
}
