import H2 from "@/components/ui/H2";
import { Car, ChevronRight } from "lucide-react";
import { ReactElement } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Home(): ReactElement {
  return (
    <section id="publication-section">
      <div>
        <H2 className="text-4xl">Dernières publications</H2>
        <a className=" flex">
          Voir plus d'annonces <ChevronRight />
        </a>
      </div>

      <div className="grid grid-cols-6 gap-2 mt-10">
        <Card className="col-start-2 col-span-4">
          <CardHeader>cac</CardHeader>
        </Card>
        <Card className=" col-start-2 col-span-4">
          <CardHeader>coucou</CardHeader>
        </Card>
        <Card className="col-start-2 col-span-4">
          <CardHeader>coucou</CardHeader>
        </Card>
        <Card className="col-start-2 col-span-4">
          <CardHeader>coucou</CardHeader>
        </Card>
      </div>
    </section>
  );
}
