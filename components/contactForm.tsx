// "use client"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// // Définir le schéma de validation
// const formSchema = z.object({

//     text: z.string().max(255, {
//         message: "Votre message est trop long"
//     }),
//     firstname: z.string().max(30, {
//         message: "Veuillez entrer votre prénom"
//     }),
//     lastname: z.string().max(30, {
//         message: "Veuillez entrer votre prénom"
//     }),
//     email: z.string().email({
//         message: "Adresse mail incorrecte"
//     }),
//     userType: z.enum(["particulier", "professionnel"], {
//         required_error: "Veuillez sélectionner une option"
//     }),
//     professionnel: z.boolean()
// });

// export function ContactForm({ onFormSubmit }: { onFormSubmit: () => void }) {

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             text: "",
//             firstname: "",
//             lastname: "",
//             email: "",
//             userType: "particulier", // Default value
//         },
//     });

//     // Handler de soumission du formulaire
//     function onSubmit(values: z.infer<typeof formSchema>) {
//         console.log(values);
//         onFormSubmit();
//     }

//     return (
//         <main className="flex justify-center pt-6">

//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                     <FormField
//                         control={form.control}
//                         name="firstname"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Prénom</FormLabel>
//                                 <FormControl>
//                                     <Input />
//                                 </FormControl>
//                                 <FormDescription />
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <FormField
//                         control={form.control}
//                         name="lastname"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Votre nom</FormLabel>
//                                 <FormControl>
//                                     <Input />
//                                 </FormControl>
//                                 <FormDescription />
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Adresse mail</FormLabel>
//                                 <FormControl>
//                                     <Input />
//                                 </FormControl>
//                                 <FormDescription />
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <FormField
//                         control={form.control}
//                         name="userType"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Particulier</FormLabel>
//                                 <FormControl>
//                                     <Input type="radio" />
//                                 </FormControl>
//                                 <FormDescription />
//                                 <FormMessage />
//                                 <FormLabel>Professionnel</FormLabel>
//                                 <FormControl>
//                                     <Input type="radio" />
//                                 </FormControl>
//                                 <FormDescription />
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <FormField
//                         control={form.control}
//                         name="text"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Votre message</FormLabel>
//                                 <FormControl>
//                                     <textarea
//                                         className="w-full h-80 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black-500 placeholder-opacity-50"
//                                         placeholder="Votre message..."
//                                         {...field}
//                                     />
//                                 </FormControl>
//                                 <FormDescription />
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <Button type="submit">Submit</Button>
//                 </form>
//             </Form>

//         </main>
//     )
// }


"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
        message: "Veuillez entrer votre prénom"
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

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Prénom</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Votre nom</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adresse mail</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Votre message</FormLabel>
                                <FormControl>
                                    <textarea
                                        className="w-full h-80 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black-500 placeholder-opacity-50"
                                        placeholder="Votre message..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </main>
    )
}
