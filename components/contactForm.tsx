"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"
import axios from 'axios';
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
import H1 from "@/components/ui/H1";

// Définir le schéma de validation
const formSchema = z.object({
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
            text: "",
            firstname: "",
            lastname: "",
            email: "",
            userType: "particulier", // Default value
        },
    });

    // Handler de soumission du formulaire
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await axios.post('/api/send-email', values);
            console.log(response.data);
            onFormSubmit();
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email', error);
        }
    }

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


                <div className="col-span-12 md:col-span-8 flex flex-col items-start md:items-center text-left md:text-center">
                    <H1 className="pt-6">CONTACTEZ-NOUS</H1>
                    <p className="pt-2">
                        Une question ? Une suggestion ? Une remarque ? Une demande bien spécifique ? <br />
                        Contactez-nous, on lira tous vos messages et nous nous engageons à vous répondre rapidement !
                    </p>

                    {/* Formulaire */}
                    <div className="flex justify-center w-full mt-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-md">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <FormField
                                            control={form.control}
                                            name="firstname"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Prénom</FormLabel>
                                                    <FormControl>
                                                        <Input className="rounded-2xl bg-white focus:border-secondary" {...field} />
                                                    </FormControl>
                                                    <FormDescription />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <FormField
                                            control={form.control}
                                            name="lastname"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Votre nom</FormLabel>
                                                    <FormControl>
                                                        <Input className="rounded-2xl bg-white focus:border-secondary" {...field} />
                                                    </FormControl>
                                                    <FormDescription />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="col-span-12 xl:col-span-8">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Adresse mail</FormLabel>
                                                    <FormControl>
                                                        <Input className="rounded-2xl bg-white focus:border-secondary" {...field} />
                                                    </FormControl>
                                                    <FormDescription />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="col-span-12 xl:col-span-4 flex flex-col xl:flex-row xl:items-center space-y-4 xl:space-y-0 xl:space-x-4">
                                        <FormField
                                            control={form.control}
                                            name="userType"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Vous êtes</FormLabel>
                                                    <FormControl>
                                                        <div className="flex flex-col space-y-2 xl:space-y-0 xl:flex-row xl:space-x-4">
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
                                    <div className="col-span-12">
                                        <FormField
                                            control={form.control}
                                            name="text"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Votre message</FormLabel>
                                                    <FormControl>
                                                        <textarea
                                                            className="focus:border-secondary rounded-2xl w-full h-80 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none placeholder-black-500 placeholder-opacity-50"
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
                                    <div className="col-span-12">
                                        <Button type="submit">Submit</Button>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    )
}
