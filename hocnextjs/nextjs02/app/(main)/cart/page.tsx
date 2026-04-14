import { getAccessToken } from "../_actions/auth.action";
import DeleteCartItem from "../_components/DeleteCartItem";

const getShoppingCart = async (): Promise<{
  items: {
    productId: string;
    name: string;
    price: number;
    total: number;
    quantity: number;
  }[];
  total: number;
}> => {
  const accessToken = await getAccessToken();
  const response = await fetch(`${process.env.SERVER_API}/shopping-cart`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
};
export default async function CartPage() {
  const { items, total } = await getShoppingCart();
  return (
    <div>
      <h1 className="text-3xl mb-3">Shopping Cart</h1>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Price
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.productId}
                className="bg-neutral-primary border-b border-default"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.price.toLocaleString()} đ</td>
                <td className="px-6 py-4">{item.total.toLocaleString()} đ</td>
                <DeleteCartItem productId={item.productId} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-right text-xl font-medium">
        Total: {total.toLocaleString()} đ
      </p>
    </div>
  );
}
