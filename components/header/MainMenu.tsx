import { useMediaQuery } from "@/hooks/use-media-query";
import Navlink from "./Navlink";
import Logo from "./Logo";
let isPro = false;
let isConnected = false;

export default function Menu() {
  return (
    <nav>
      <ul className="flex flex-col justify-center  items-center md:flex-row gap-3">
        {isConnected ? (
          <>
            <Navlink href={"/recherche"} variant={"link"}>
              Rechercher
            </Navlink>
            <Navlink href={"/information"} variant={"link"}>
              {isPro ? "Ajouter une publication" : "Rechercher"}
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
              {isPro ? "Vous êtes un particulier ?" : "Vous êtes un éleveur ?"}
            </Navlink>
            <Navlink href={"/login"} variant={"default"}>
              Se connecter
            </Navlink>
          </>
        )}
      </ul>
    </nav>
  );
}
