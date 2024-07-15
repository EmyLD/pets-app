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
                ""
            ) : (
                <ContactThanks />
            )}
            <ContactForm onFormSubmit={handleFormSubmit} />
        </div>
    );
}






