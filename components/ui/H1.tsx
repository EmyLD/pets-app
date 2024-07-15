import { Bebas_Neue } from "next/font/google";
import * as React from "react";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

const H1 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={
      cn(
        "text-6xl  leading-none tracking-tight",
        className,
        bebas.className
      )}
    {...props}
  />
));

H1.displayName = "H1Title";

export default H1;
