import ProductImage from "../ProductImage";

type Props = {
  params: Promise<{ id: number }>;
};
type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  images: string[];
};
const getProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};
export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <div>
      <h1 className="text-3xl font-medium">{product.title}</h1>
      <p className="text-lg">Price: {product.price}</p>
      <ProductImage product={product} />
    </div>
  );
}
