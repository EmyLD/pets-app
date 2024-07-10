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
import { Button } from "../ui/button";

type Props = {
  avatarImg: string;
  avatarDesc: string;
  name: string;
  rating: string | number;
  petImg: string;
  title: string;
  description: string;
};

// todo : contour violet hover récupérer couleur orange.
// todo : ajouter un hook mediaquery pour ifMobile (div display none)

export default function Publication({ ...props }: Props) {
  return (
    <Card className="w-96">
      <CardHeader className="items-center">
        <Avatar className="w-16 h-16 mr-4">
          <AvatarImage src={props.avatarImg} />
          <AvatarFallback>{props.avatarDesc}</AvatarFallback>
        </Avatar>
        <section className="w-full">
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.rating}</CardDescription>
        </section>
        <button className="w-full flex justify-end">
          <Heart />
        </button>
      </CardHeader>
      <CardContent className="relative w-96 h-72 overflow-hidden">
        <Image
          src={props.petImg}
          fill={true}
          objectFit="cover"
          alt="blabla"
          priority={true}
        />
      </CardContent>
      <CardFooter>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="py-2">{props.description}</CardDescription>
      </CardFooter>
    </Card>
  );
}
