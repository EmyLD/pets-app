import { ReactElement } from "react";

import { Bebas_Neue } from "next/font/google";

type Props = {
  children: string;
};

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function H2({ children }: Props): React.ReactElement {
  return <h2 className={`${bebas.className}`}>{children}</h2>;
}
