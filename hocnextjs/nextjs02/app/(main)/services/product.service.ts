export const getProduct = async (id: string) => {
  const response = await fetch(`${process.env.SERVER_API}/products/${id}`);
  const { product } = await response.json();
  return product;
};
