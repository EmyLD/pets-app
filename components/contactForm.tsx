"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"
import H3 from "./ui/H3"
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
        <div className="min-h-screen grid grid-cols-12 gap-4">
            {/* Image à gauche */}
            <div className="relative hidden 2xl:block xl:col-span-5">
                <Image
                    src="/formulaire.png"
                    alt="Formulaire"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw 33vw"
                />
            </div>

            {/* Colonne de séparation */}



            <div className=" 2xl:col-span-6 2xl:col-start-7 sm:col-start-3 sm:col-end-11 col-span-12 pt-24 xl:m-4 m-4">
                <H1 className="text-center bg-white pt-8 pb-8 rounded-t-xl">CONTACTEZ-NOUS !</H1>
                <p className="text-start pl-5 bg-white">
                    Une question ? Une suggestion ? Une remarque ? Une demande bien spécifique ? <br />
                    Contactez-nous, on lira tous vos messages et nous nous engageons à vous répondre rapidement !
                </p>

                {/* Formulaire */}
                <div className=" p-4 bg-white rounded-b-xl">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white pt-8 pl-8 rounded-xl border-2 border-zinc-100 pr-4 ">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <FormField
                                        control={form.control}
                                        name="firstname"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-2">
                                                <FormLabel className="w-1/3"><H3>prenom:</H3></FormLabel>
                                                <FormControl>
                                                    <Input className="rounded-2xl border-0 bg-zinc-100 focus:border-2 focus:border-secondary w-full" {...field} />
                                                </FormControl>
                                                <FormDescription />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center">
                                                <FormLabel className="w-1/3"><H3>nom:</H3></FormLabel>
                                                <FormControl>
                                                    <Input className="rounded-2xl border-0 bg-zinc-100 focus:border-2 focus:border-secondary w-full" {...field} />
                                                </FormControl>
                                                <FormDescription />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center">
                                            <FormLabel><H3>adresse mail:</H3></FormLabel>
                                            <FormControl>
                                                <Input className="rounded-2xl border-0 bg-zinc-100 focus:border-2 focus:border-secondary w-full" {...field} />
                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex flex-col xl:flex-row items-center space-y-2 xl:space-y-0 xl:space-x-2">
                                <FormField
                                    control={form.control}
                                    name="userType"
                                    render={({ field }) => (
                                        <FormItem className="flex space-x-4">
                                            <FormControl>
                                                <div className="flex space-x-4">
                                                    <label className="flex items-center space-x-2">
                                                        <span><H3>particulier:</H3></span>
                                                        <input
                                                            type="checkbox"
                                                            {...field}
                                                            className="hidden peer"
                                                            checked={field.value === "particulier"}
                                                            onChange={() => field.onChange("particulier")}
                                                        />
                                                        <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded peer-checked:bg-secondary"></div>
                                                    </label>
                                                    <label className="flex items-center space-x-2">
                                                        <span><H3>professionnel:</H3></span>
                                                        <input
                                                            type="checkbox"
                                                            {...field}
                                                            className="hidden peer"
                                                            checked={field.value === "professionnel"}
                                                            onChange={() => field.onChange("professionnel")}
                                                        />
                                                        <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded peer-checked:bg-secondary"></div>
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col">
                                <FormField
                                    control={form.control}
                                    name="text"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel><H3>message:</H3></FormLabel>
                                            <FormControl>
                                                <textarea
                                                    className="rounded-2xl border-0 bg-zinc-100 focus:border-2 focus:border-secondary w-full h-56 resize-none"
                                                    placeholder=""
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex justify-center pb-8">
                                <Button className="rounded-xl" type="submit">Envoyer mon message</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}