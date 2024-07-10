"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./MainMenu";
import { Menu } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <header className=" flex justify-between items-center px-2 py-1 w-full">
        <Logo />
        {isDesktop ? (
          <MainMenu />
        ) : (
          <>
            <Drawer>
              <DrawerTrigger>
                <Menu />
              </DrawerTrigger>
              <DrawerContent>
                <MainMenu />
              </DrawerContent>
            </Drawer>
          </>
        )}

        {/*
         */}
      </header>
    </>
  );
}
