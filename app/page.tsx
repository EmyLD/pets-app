import H2 from "@/components/ui/H2";
import { Car, ChevronRight, Heart } from "lucide-react";
import { ReactElement } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function Home(): ReactElement {
  return (
    <section id="publication-section">
      <div>
        <H2 className="text-4xl">Dernières publications</H2>
        <a className=" flex">
          Voir plus d'annonces <ChevronRight />
        </a>
      </div>

      <div className="grid grid-cols-6 gap-2 mt-10 px-2 sm:grid-cols-8  lg:px-0 lg:grid-cols-12 lg:gap-4">
        <Card className=" col-span-4 sm:col-span-3 lg:col-span-3 col-start-2 ">
          <CardHeader className="grid grid-cols-custom-cols gap-x-5 grid-rows-custom-rows px-2">
            <CardTitle className="col-span-3 font-semibold text-indigo-dark truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
              L'élevage des montagnes
            </CardTitle>
            <CardDescription className="row-start-2 self-end text-indigo-light-active">
              Rating
            </CardDescription>
            <div className="col-start-4 row-start-1 row-span-2 justify-self-end self-center">
              <Heart />
            </div>
          </CardHeader>
          <CardContent className="relative h-52">
            <Image src="/dog.webp" alt="chien" fill />
          </CardContent>
          <CardFooter className="grid grid-rows-custom-rows px-2">
            <CardTitle className="font-semibold">Titre</CardTitle>
            <CardDescription>Mon superbe petit chiot</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
