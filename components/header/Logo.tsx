import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Logo() {
  return (
    <>
      <a
        href={"/"}
        className={`${bebas.className}  text-4xl md:text-2xl lg:text-5xl`}
      >
        nos animaux
      </a>
    </>
  );
}
