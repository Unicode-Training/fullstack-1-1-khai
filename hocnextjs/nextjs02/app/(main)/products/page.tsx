import Image from "next/image";
import AddToCart from "../_components/AddToCart";

const getProducts = async (): Promise<
  {
    _id: string;
    name: string;
    image: string;
    price: number;
  }[]
> => {
  const response = await fetch(`${process.env.SERVER_API}/products`);
  const { products } = await response.json();
  return products;
};
export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-3xl mb-3">Products</h1>
      <div className="flex flex-wrap -mx-3">
        {products.map((product) => {
          return (
            <div className="px-3 w-1/4 mb-3" key={product._id}>
              <div className="border border-[#ddd] p-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-50 object-cover"
                />
                <h2 className="text-xl font-medium mt-2">{product.name}</h2>
                <p className="py-3 text-md font-semibold">{product.price} đ</p>
                <AddToCart product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
