import Image from "next/image";
import { getProduct } from "../../services/product.service";
import AddToCart from "../../_components/AddToCart";

type Props = {
  params: Promise<{ id: string }>;
};
//metadata động
export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getProduct(id);
  return {
    title: product.name,
  };
};
export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
          />
          <div className="mt-3 flex gap-3">
            {product.gallery.map((item: string, index: number) => (
              <Image
                key={index}
                src={item}
                alt={product.name}
                width={100}
                height={100}
                className="h-25 w-25 cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl mb-3">{product.name}</h1>
          {product.priceDiscount && (
            <p className="text-xl">
              {product.priceDiscount.toLocaleString()} đ
            </p>
          )}
          <p className="py-2 text-lg">Mã sản phẩm: {product.code}</p>
          <p className="py-2 text-lg">Bảo hành: {product.warranty}</p>
          <p className="py-2 text-lg">Thương hiệu: {product.brand}</p>
          <div className="flex gap-2">
            <AddToCart product={product} isShowInput={true} />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-xl mb-3">Mô tả sản phẩm</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
