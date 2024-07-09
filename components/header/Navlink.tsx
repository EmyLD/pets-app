import Link from "next/link";
import { Button } from "../ui/button";
import { MouseEventHandler } from "react";

type Variant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

interface Props {
  variant?: Variant;
  href: string;
  children: string;
  onclick?: MouseEventHandler;
}

export default function Navlink({
  variant,
  href,
  children,
  onclick,
}: Props): React.ReactElement {
  return (
    <Button variant={variant} asChild onClick={onclick}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
