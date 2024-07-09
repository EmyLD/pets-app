import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navlink from "./Navlink";

let userConnected = false;
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <header>
        <Link href={"/"} className={`${bebas.className} p-4 text-5xl`}>
          nos animaux
        </Link>
        <nav>
          {userConnected ? (
            <ul>
              {" "}
              <li>coucou</li>
              <li>coucou</li>
              <li>coucou</li>
              <li>coucou</li>
            </ul>
          ) : (
            <ul>
              {" "}
              <Navlink href={"/pro"} variant={"outline"}>
                Vous êtes un éleveur ?
              </Navlink>
              <Navlink href={"/login"} variant={"default"}>
                Se connecter
              </Navlink>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}
