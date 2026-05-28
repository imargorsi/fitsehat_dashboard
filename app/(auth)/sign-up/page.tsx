"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { InputField } from "@/components/ui/input-field"
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";

const signUpSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
})

type SignUpValues = z.infer<typeof signUpSchema>

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { name: "", email: "", password: "" },
    })

    function onSubmit(values: SignUpValues) {
        console.log("Validated values", values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputField
                name="name"
                label="Full Name"
                icon={<FaRegCircleUser size={18} />}
                register={register("name")}
                error={errors.name?.message as string}
                placeholder="Jordan Lee"
            />

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

            <InputField
                name="confirmPassword"
                label="Confirm Password"
                icon={<FiLock size={18} />}
                register={register("confirmPassword")}
                error={errors.confirmPassword?.message as string}
                placeholder="••••••••"
                type="password"

            />

            <div className="pt-2">
                <Button type="submit" className="w-full">
                    Create Account
                </Button>
            </div>
        </form>
    )
}
