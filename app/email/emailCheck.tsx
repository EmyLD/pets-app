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
    email: z.string().email({
        message: "Your email must be valid"
    })
});

export function MailVerif() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    })

    // Handler de soumission du formulaire
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <main className="flex justify-center pt-6 ">

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                    Saisissez votre adresse mail.
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
