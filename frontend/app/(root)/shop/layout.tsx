import { Header } from "@/components/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация"
};

export default function ShopLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
