"use client"
import { Eye, EyeOff } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

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
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8).max(16, {
        message: "Your password must be at least 6 characters.",
    }),
    email: z.string().email({
        message: "Your email must be valid"
    }),
    passwordConfirm: z.string()
}).refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
});

export function ProfileForm() {
    // password visibility
    const [showPassword, setShowPassword] = useState(false)
    // passwordConfirm visibility
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
    })

    // Handler de soumission du formulaire
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <main className="flex justify-center pt-6" >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nom d'utilisateur</FormLabel>
                                <FormControl>
                                    <Input className="w-96" placeholder="Pseudo" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Choisissez votre pseudo.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className="w-96" placeholder="Votremail@..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Entrez votre adresse mail.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mot de passe</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input className="w-96" type={showPassword ? "text" : "password"} placeholder="Mot de passe..." {...field} />
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </span>
                                    </div>
                                </FormControl>
                                <FormDescription>
                                    Choisissez un mot de passe comprenant entre 8 et 16 caractères.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirmation du mot de passe</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input className="w-96" type={showPasswordConfirm ? "text" : "password"} placeholder="Mot de passe..." {...field} />
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                                            {showPasswordConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </span>
                                    </div>
                                </FormControl>
                                <FormDescription>
                                    Confirmez votre mot de passe.
                                </FormDescription>
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
