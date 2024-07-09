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

export default function Publication() {
  return (
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage />
          <AvatarFallback>pp</AvatarFallback>
        </Avatar>
        <section>
          <CardTitle>Name</CardTitle>
          <CardDescription>Rating</CardDescription>
        </section>
        <button>coeur</button>
      </CardHeader>
      <CardContent>
        <Image src="/blabla.png" width={300} height={300} alt="blabla" />
      </CardContent>
      <CardFooter>
        <CardTitle>Title</CardTitle>
        <CardDescription>Ma description</CardDescription>
      </CardFooter>
    </Card>
  );
}
