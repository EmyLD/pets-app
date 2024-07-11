"use client"
import { useState } from "react";
import H2 from "@/components/ui/H2";
import { ContactForm } from "@/components/contactForm";
import { ContactThanks } from "@/components/contactThanks";

export default function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setFormSubmitted(true);
    };

    return (
        <div>
            {!formSubmitted ? (
                <div>
                    <H2 className="text-center pt-24">CONTACTEZ-NOUS</H2>
                    <p className="text-center pt-8 ">
                        Une question ? Une suggestion ? Une remarque ? Une demande bien spécifique ? <br />
                        Contactez-nous, on lira tous vos messages et nous nous engageons à vous répondre rapidement !
                    </p>
                    <ContactForm onFormSubmit={handleFormSubmit} />
                </div>
            ) : (
                <ContactThanks />
            )}
        </div>
    );
}
