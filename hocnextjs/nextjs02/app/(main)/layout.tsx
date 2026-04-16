import React from "react";
import Header from "./_components/Header";
import { Toaster } from "sonner";
import MainProvider from "./_components/MainProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainProvider>
        <Header />
        <main className="max-w-300 mx-auto py-3">{children}</main>
        <Toaster />
      </MainProvider>
    </div>
  );
}
