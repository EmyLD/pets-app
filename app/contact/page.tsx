"use client"
import { useState } from "react";
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
                ""
            ) : (
                <ContactThanks />
            )}
            <ContactForm onFormSubmit={handleFormSubmit} />
        </div>
    );
}






