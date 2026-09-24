"use client";

import { SubmitEvent } from "react";

type CommentProps = {
  comments: { id: number; name: string; message: string }[];
  postId: number;
};
export default function Comment({ comments, postId }: CommentProps) {
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentData = Object.fromEntries(formData.entries());
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/posts/${postId}/comments`,
      {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const { data } = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h2 className="mb-3 text-2xl">Comments</h2>
      {comments.map(
        (comment: { id: number; name: string; message: string }) => (
          <div key={comment.id} className="mb-3 pb-3 border-border border-b">
            <p className="mb-3 font-semibold text-lg">{comment.name}</p>
            <p>{comment.message}</p>
          </div>
        ),
      )}
      <h2 className="mb-3 text-2xl">Add comment</h2>
      <form className="w-1/2" onSubmit={handleSubmit}>
        <div className="gap-3 grid grid-cols-2 mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name..."
            className="px-3 py-1 border border-gray-300 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="px-3 py-1 border border-gray-300 outline-none"
          />
        </div>
        <textarea
          placeholder="Message..."
          className="px-3 py-1 border border-gray-300 outline-none w-full h-25"
          name="message"
        ></textarea>
        <button className="bg-green-600 px-3 py-1 text-white cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
}
