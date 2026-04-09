import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="flex justify-between items-center py-3 max-w-300 mx-auto">
        <h1 className="text-3xl">Unicode Admin</h1>
        <ul className="flex gap-3">
          <li>
            <Link href={"/admin"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/admin/users"}>Users</Link>
          </li>
          <li>
            <Link href={"/admin/accounts"}>Accounts</Link>
          </li>
        </ul>
      </header>
      <main className="max-w-300 mx-auto py-3">{children}</main>
    </div>
  );
}
