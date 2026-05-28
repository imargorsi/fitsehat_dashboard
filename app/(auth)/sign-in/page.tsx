"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputField } from "@/components/ui/input-field"
import { Button } from "@/components/ui/button"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FiLock } from "react-icons/fi"

const signInSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type SignInValues = z.infer<typeof signInSchema>

export default function SignInPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: "", password: "" },
    })

    function onSubmit(values: SignInValues) {
        // UI-only: validated values available here
        console.log('Sign in validated:', values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            <InputField
                name="email"
                label="Email Address"
                icon={<MdOutlineAlternateEmail size={18} />}
                register={register("email")}
                error={errors.email?.message as string}
                placeholder="name@example.com"
                type="email"
            />

            <InputField
                name="password"
                label="Password"
                icon={<FiLock size={18} />}
                register={register("password")}
                error={errors.password?.message as string}
                placeholder="••••••••"
                type="password"
            />

            <div className="pt-2">
                <Button type="submit" size="lg" className="w-full">Sign In</Button>
            </div>
        </form>
    )
}