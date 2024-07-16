"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import MenuFooter from "./MenuFooter";
export default function Footer() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <footer>
      {isDesktop ? (
          <MenuFooter />
        ) : (
          <>
           <div className="grid grid-cols-2 px-6 py-10 bg-purple gap-10 font-bebas_neue">
           <div className="grid-cols-auto text-xl">Nos-Animaux 2024 - 2024</div>
           </div>
          </>
        )}
    </footer>
  );
}
