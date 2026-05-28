import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { UseFormRegisterReturn } from "react-hook-form"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    icon?: React.ReactNode
    register?: UseFormRegisterReturn
    error?: string | null
}

function InputField({ name, label, icon, register, error = null, type = "text", className, ...props }: InputFieldProps) {
    return (
        <div>
            {label && (
                <label htmlFor={name} className="block text-sm mb-1">
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">
                        {icon}
                    </div>
                )}

                <Input id={name} type={type} className={cn(icon ? "pl-10" : "", className)} {...(register ?? {})} {...props} />
            </div>

            {error && <p className="text-xs text-destructive mt-1">{error}</p>}
        </div>
    )
}

export { InputField }
