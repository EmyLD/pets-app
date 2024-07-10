import Publication from "@/components/publication/Publication";
import H2 from "@/components/ui/H2";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <>
      <section>
        <H2>cOUCOU</H2>
        <Publication
          avatarDesc="pp"
          avatarImg=""
          petImg="/dog.webp"
          title="Mon super bébou"
          name="L'élevage du Sud"
          rating="4/5"
          description="Je vous présente mon bébou, il ne mord pas, il est très chou."
        />
      </section>
    </>
  );
}
