"use client";

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
import { useMediaQuery } from "@/hooks/use-media-query";

type Props = {
  avatarImg: string;
  avatarDesc: string;
  name: string;
  rating: string | number;
  petImg: string;
  title: string;
  description: string;
  price: number;
  city: string;
};

export default function Publication({ ...props }: Props): React.ReactElement {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <Card className="w-9/12 md:w-2/12">
      <CardHeader className="justify-between md:flex md:justify-between">
        <Avatar className="">
          <AvatarImage src={props.avatarImg} />
          <AvatarFallback>{props.avatarDesc}</AvatarFallback>
        </Avatar>

        <section>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.rating}</CardDescription>
        </section>
        <button>
          <Heart />
        </button>
      </CardHeader>
      <CardContent className="relative min-h-40 ">
        <Image
          src={props.petImg}
          fill={true}
          alt="blabla"
          priority={true}
          sizes=" (max-width: 768px, (max-width: 1200px) 50vw"
          className="w-full object-cover"
        />
      </CardContent>
      <CardFooter>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="py-1 md:py-2">
          <span>{isDesktop && props.description}</span>
          <span>{props.price} €</span>
          <span>{props.city}</span>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
