"use client";

import { Bebas_Neue } from "next/font/google";
import Navlink from "./Navlink";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import Menu from "./Menu";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  let isPro = false;
  let isConnected = false;

  return (
    <>
      <header className=" flex flex-initial justify-between text-center items-center px-2 py-1">
        {isDesktop ? (
          <p>isDesktop</p>
        ) : (
          <Drawer>
            <DrawerTrigger>.....</DrawerTrigger>
            <DrawerContent>Some gregerger</DrawerContent>
          </Drawer>
        )}

        {/*
        <nav>
          <ul className="flex gap-3 ">
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
                  {isPro
                    ? "Vous êtes un particulier ?"
                    : "Vous êtes un éleveur ?"}
                </Navlink>
                <Navlink href={"/login"} variant={"default"}>
                  Se connecter
                </Navlink>
              </>
            )}
          </ul>
        </nav> */}
      </header>
    </>
  );
}
