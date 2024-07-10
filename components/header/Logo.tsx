import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Logo() {
  return (
    <>
      <a
        href={"/"}
        className={`${bebas.className} p-4 text-xl md:text-2xl lg:text-3xl`}
      >
        nos animaux
      </a>
    </>
  );
}
