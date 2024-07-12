import H2 from "@/components/ui/H2";
import Image from "next/image";

export function ContactThanks() {
    return (
        <main className="flex justify-center pt-6">
            <div className="grid grid-cols-12 gap-4 w-full">


                {/* Image à gauche */}
                <div className="hidden md:block md:col-span-4">
                    <Image
                        src="/formulaire.png"
                        alt="Formulaire"
                        className="w-full h-auto"
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                </div>

                {/* Message de remerciement */}
                <div className="col-span-10 md:col-span-8 md:ml-4">
                    <H2 className="text-center pt-24">
                        MERCI POUR VOTRE MESSAGE ! <br />
                        PATOUNEMENT VOTRE 🐾
                    </H2>
                </div>

                {/* Marges à droite */}
                <div className="col-span-1 md:col-span-1"></div>
            </div>
        </main>
    );
}
