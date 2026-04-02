export const clearCachePath = async (path: string) => {
  await fetch(`/api/cache`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ path }),
  });
};
