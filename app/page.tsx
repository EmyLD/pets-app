import Publication from "@/components/publication/Publication";
import H2 from "@/components/ui/H2";
import { ChevronRight } from "lucide-react";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <section id="publication-section" className="grid grid-cols-12 py-5 px-2">
      <div className="max-h-32  min-h-24  col-start-1 col-span-full md:col-span-10 md:col-start-2 md:grid-rows-1 md:grid-cols-2 md:grid md:items-center">
        <H2 className="text-4xl md:text-6xl">Dernières publications</H2>
        <a className="flex gap-2 md:items-center md:justify-end">
          Voir plus d'annonces <ChevronRight />
        </a>
      </div>

      <div className="pub-container gap-y-3 md:col-start-2 col-span-full md:grid-cols-2 md:grid lg:grid-cols-5  flex flex-wrap w-full justify-around items-center">
        <Publication
          avatarDesc="pp"
          avatarImg=""
          petImg="/dog.webp"
          title="Mon super bébou"
          name="L'élevage du Sud"
          rating="4/5"
          description="Je vous présente mon bébou, il ne mord pas, il est très chou."
          price={400}
          city="Paris"
        />
        <Publication
          avatarDesc="pp"
          avatarImg=""
          petImg="/dog.webp"
          title="Mon super bébou"
          name="L'élevage du Sud"
          rating="4/5"
          description="Je vous présente mon bébou, il ne mord pas, il est très chou."
          price={400}
          city="Paris"
        />
        <Publication
          avatarDesc="pp"
          avatarImg=""
          petImg="/dog.webp"
          title="Mon super bébou"
          name="L'élevage du Sud"
          rating="4/5"
          description="Je vous présente mon bébou, il ne mord pas, il est très chou."
          price={400}
          city="Paris"
        />
        <Publication
          avatarDesc="pp"
          avatarImg=""
          petImg="/dog.webp"
          title="Mon super bébou"
          name="L'élevage du Sud"
          rating="4/5"
          description="Je vous présente mon bébou, il ne mord pas, il est très chou."
          price={400}
          city="Paris"
        />
        <Publication
          avatarDesc="pp"
          avatarImg=""
          petImg="/dog.webp"
          title="Mon super bébou"
          name="L'élevage du Sud"
          rating="4/5"
          description="Je vous présente mon bébou, il ne mord pas, il est très chou."
          price={400}
          city="Paris"
        />
      </div>
    </section>
  );
}
