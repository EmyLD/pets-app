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

type Props = {
  avatarImg: string;
  avatarDesc: string;
  name: string;
  rating: string | number;
  petImg: string;
  title: string;
  description: string;
};

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
      <CardContent className="relative w-96 h-72">
        <Image
          src={props.petImg}
          layout="fill"
          className="object-cover"
          alt="blabla"
        />
        <p className="bg-slate-500 relative h-full -z-10 hover:z-50 ">
          Voir pluus
        </p>
      </CardContent>
      <CardFooter>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="py-2">{props.description}</CardDescription>
      </CardFooter>
    </Card>
  );
}
