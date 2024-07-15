import { Bebas_Neue } from "next/font/google";
import * as React from "react";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

const H2 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-4xl  leading-none tracking-tight",
      className,
      bebas.className
    )}
    {...props}
  />
));

H2.displayName = "H2Title";

export default H2;
