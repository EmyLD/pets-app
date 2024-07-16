import { Bebas_Neue } from "next/font/google";
import * as React from "react";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

const H3 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl  leading-none tracking-tight",
      className,
      bebas.className
    )}
    {...props}
  />
));

H3.displayName = "H3Title";

export default H3;
