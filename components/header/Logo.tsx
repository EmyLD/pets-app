import { Bebas_Neue } from "next/font/google";

export default function Logo() {
  const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
  return (
    <>
      <a href={"/"} className={`${bebas.className} p-4 text-5xl`}>
        nos animaux
      </a>
    </>
  );
}
