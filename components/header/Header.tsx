"use client";

import { Bebas_Neue } from "next/font/google";
import Navlink from "./Navlink";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Header() {
  let isPro = false;
  let isConnected = true;

  return (
    <>
      <header className=" flex flex-initial justify-between text-center items-center px-2 py-1">
        <a href={"/"} className={`${bebas.className} p-4 text-5xl`}>
          nos animaux
        </a>
        <nav>
          <ul className="flex gap-3 ">
            {isConnected ? (
              <>
                <Navlink href={"/recherche"} variant={"link"}>
                  {isPro ? "Rechercher" : "Rechercher"}
                </Navlink>
                <Navlink href={"/information"} variant={"link"}>
                  {isPro ? "Ajouter une publication" : "Rechercher"}
                </Navlink>
                <Navlink href={"/contact"} variant={"link"}>
                  Contact
                </Navlink>
                <Navlink href={"/profil"} variant={"default"}>
                  {isPro ? "Mon élevage" : "Profil"}
                </Navlink>
              </>
            ) : (
              <>
                <Navlink href={"/pro"} variant={"outline"}>
                  {isPro ? "Vous êtes un adoptant ?" : "Vous êtes un éleveur ?"}
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
