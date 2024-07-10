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

Publication.defaultProps = {
  imageUrl: "", // Valeur par défaut pour imageUrl si aucune n'est fournie
};

export default function Publication({ ...props }: Props): React.ReactElement {
  return (
    <Card className="w-5/12 md:w-2/12">
      <CardHeader className="flex justify-between">
        <Avatar className="">
          <AvatarImage src={props.avatarImg} />
          <AvatarFallback>{props.avatarDesc}</AvatarFallback>
        </Avatar>
        <section className="">
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.rating}</CardDescription>
        </section>
        <button className="">
          <Heart />
        </button>
      </CardHeader>
      <CardContent className="relative">
        <Image
          src={props.petImg}
          fill={true}
          alt="blabla"
          priority={true}
          sizes=" (max-width: 768px) 50vw, (max-width: 1200px) 50vw"
          className="w-full"
        />
      </CardContent>
      <CardFooter>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="py-2">{props.description}</CardDescription>
      </CardFooter>
    </Card>
  );
}
