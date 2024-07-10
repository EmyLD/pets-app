import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trouver votre compagnon",
  description:
    "Plateforme qui centralise toutes les étapes concernant l'adoption d'un animal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <Header />
        <main className="bg-indigo-light flex flex-col min-h-screen max-h-auto justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
