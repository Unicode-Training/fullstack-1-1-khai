import Link from "next/link";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="w-55">
        <ul>
          <li>
            <Link href={"/admin/accounts"}>Accounts</Link>
          </li>
          <li>
            <Link href={"/admin/accounts/profile"}>Profile</Link>
          </li>
          <li>
            <Link href={"/admin/accounts/orders"}>Orders</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
