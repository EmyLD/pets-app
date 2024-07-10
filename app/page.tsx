import Publication from "@/components/publication/Publication";

export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen  items-center justify-center gap-x-10 gap-y-10 p-24">
      <Publication
        avatarDesc="pp"
        avatarImg=""
        petImg="/dog.webp"
        title="Mon super bébou"
        name="L'élevage du Sud"
        rating="4/5"
        description="Je vous présente mon bébou, il ne mord pas, il est très chou."
      />
    </main>
  );
}
