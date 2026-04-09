import React from "react";
import Header from "./_components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="max-w-300 mx-auto py-3">{children}</main>
    </div>
  );
}
