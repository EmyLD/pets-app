import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navlink from "./Navlink";

let userConnected = false;
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <header className=" flex flex-initial justify-between text-center items-center px-2 py-1">
        <Link href={"/"} className={`${bebas.className} p-4 text-5xl`}>
          nos animaux
        </Link>
        <nav>
          <ul className="flex justify-between">
            {userConnected ? (
              <>
                <Navlink href={"/recherche"} variant={"link"}>
                  Rechercher
                </Navlink>
                <Navlink href={"/information"} variant={"link"}>
                  M'informer
                </Navlink>
                <Navlink href={"/contact"} variant={"link"}>
                  Contact
                </Navlink>
                <Navlink href={"/profil"} variant={"default"}>
                  Profil
                </Navlink>
              </>
            ) : (
              <>
                <Navlink href={"/pro"} variant={"outline"}>
                  Vous êtes un éleveur ?
                </Navlink>
                <Navlink href={"/login"} variant={"default"}>
                  Se connecter
                </Navlink>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
