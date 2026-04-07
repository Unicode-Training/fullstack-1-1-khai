export const clearCache = async (value: string, type: "path" | "tag") => {
  await fetch(`/api/cache`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value, type }),
  });
};
