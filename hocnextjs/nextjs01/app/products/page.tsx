import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";

type Props = {
  searchParams: Promise<{ s: string }>;
};
type Product = {
  id: number;
  title: string;
  thumbnail: string;
};
const getProducts = async (s: string): Promise<Product[]> => {
  let url = `https://dummyjson.com/products`;
  if (s) {
    url = `https://dummyjson.com/products/search?q=${s}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.products;
};
export default async function ProductsPage({ searchParams }: Props) {
  const { s } = await searchParams;
  const products = await getProducts(s);
  return (
    <div>
      <h1 className="text-3xl">Products List</h1>
      <SearchInput />
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-1/4 p-3">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
              />
            </Link>
            <Link
              href={`/products/${product.id}`}
              className="text-xl font-medium"
            >
              {product.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
