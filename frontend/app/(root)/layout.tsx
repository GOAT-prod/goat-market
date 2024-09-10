import { Header } from "@/components/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheese Champ | Главная"
};

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
      <Header />
      <div>{children}</div>
    </main>
  );
}
