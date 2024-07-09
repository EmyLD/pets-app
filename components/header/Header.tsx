"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <header className=" flex justify-between items-center px-2 py-1 w-full">
        <Logo />
        {isDesktop ? (
          <Menu />
        ) : (
          <>
            <Drawer>
              <DrawerTrigger>.....</DrawerTrigger>
              <DrawerContent>
                <Menu />
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
