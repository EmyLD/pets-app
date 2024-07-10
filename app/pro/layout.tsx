import Header from "@/components/header/Header";
import HeaderPro from "@/components/header/HeaderPro";
import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
