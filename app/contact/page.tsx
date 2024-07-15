"use client"
import { useState } from "react";
import H1 from "@/components/ui/H1";
import { ContactForm } from "@/components/contactForm";
import { ContactThanks } from "@/components/contactThanks";
import Image from "next/image"
export default function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setFormSubmitted(true);
    };

    return (
        <div>
            {!formSubmitted ? (
                <div className="grid grid-cols-12 gap-4 pt-6">
                    {/* 
                        grid-cols-12: Divise la grille en 12 colonnes
                        gap-4: Ajoute un espace de 4 unités entre les colonnes
                        */}

                    <div className="col-span-12 md:col-span-6"></div> {/* Colonne vide à gauche pour desktop */}
                    <div className="col-span-12 md:col-span-6 flex flex-col items-start md:items-center text-left md:text-center"> {/* Colonne avec le texte */}
                        {/* <H1 className="pt-24">CONTACTEZ-NOUS</H1>
                        <p className="pt-8">
                            Une question ? Une suggestion ? Une remarque ? Une demande bien spécifique ? <br />
                            Contactez-nous, on lira tous vos messages et nous nous engageons à vous répondre rapidement !
                        </p> */}
                    </div>
                </div>
            ) : (
                <ContactThanks />
            )}
            <ContactForm onFormSubmit={handleFormSubmit} />
        </div>
    );
}






