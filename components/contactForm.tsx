

"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Définir le schéma de validation
const formSchema = z.object({
    objet: z.string().max(50, {
        message: "Objet trop long"
    }),
    text: z.string().max(255, {
        message: "Votre message est trop long"
    }),
    firstname: z.string().max(30, {
        message: "Veuillez entrer votre prénom"
    }),
    lastname: z.string().max(30, {
        message: "Veuillez entrer votre nom"
    }),
    email: z.string().email({
        message: "Adresse mail incorrecte"
    }),
    userType: z.enum(["particulier", "professionnel"], {
        required_error: "Veuillez sélectionner une option"
    }),
});

export function ContactForm({ onFormSubmit }: { onFormSubmit: () => void }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            objet: "",
            text: "",
            firstname: "",
            lastname: "",
            email: "",
            userType: "particulier", // Default value
        },
    });

    // Handler de soumission du formulaire
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        onFormSubmit();
    }

    return (
        <main className="flex justify-center pt-6">
            <div className="md:col-span-2 flex justify-center items-center">
                <Image src="/formulaire.png" alt="Formulaire Image" width={600} height={300} />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                    <div className="md:col-start-3 md:col-span-4">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-2xl" {...field} />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="md:col-span-4">
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-2xl" {...field} />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="md:col-start-3 md:col-span-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Adresse mail</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-2xl" {...field} />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="md:col-start-3 md:col-span-8">
                        <FormField
                            control={form.control}
                            name="userType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Vous êtes</FormLabel>
                                    <FormControl>
                                        <div className="flex space-x-4">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    {...field}
                                                    checked={field.value === "particulier"}
                                                    onChange={() => field.onChange("particulier")}
                                                />
                                                <span>Particulier</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    {...field}
                                                    checked={field.value === "professionnel"}
                                                    onChange={() => field.onChange("professionnel")}
                                                />
                                                <span>Professionnel</span>
                                            </label>
                                        </div>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="md:col-start-3 md:col-span-8">
                        <FormField
                            control={form.control}
                            name="text"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Votre message</FormLabel>
                                    <FormControl>
                                        <textarea
                                            className=" rounded-2xl w-full h-40 md:h-80 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black-500 placeholder-opacity-50"
                                            placeholder="Votre message..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="md:col-start-3 md:col-span-8">
                        <Button type="submit" className="w-full">Submit</Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}
