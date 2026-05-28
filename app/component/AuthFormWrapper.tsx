"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface AuthFormWrapperProps {
    title?: string
    subtitle?: string
    children: React.ReactNode
}

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18" className="inline-block">
        <path fill="#4285F4" d="M24 9.5c3.9 0 7 1.4 9.1 2.6l6.7-6.6C36.7 2.6 30.9 0 24 0 14.7 0 6.9 5.6 3 13.6l7.8 6.1C12.8 14 17.9 9.5 24 9.5z" />
        <path fill="#34A853" d="M46.5 24c0-1.6-.1-3.1-.4-4.6H24v9.1h12.6c-.5 2.8-2 5.2-4.3 6.8l6.7 5.2C43.7 36.6 46.5 30.9 46.5 24z" />
        <path fill="#FBBC05" d="M10.8 29.7A14.7 14.7 0 0 1 9.5 24c0-1.9.3-3.7.9-5.4L3 12.5A24 24 0 0 0 0 24c0 3.8.9 7.4 2.5 10.6l8.3-4.9z" />
        <path fill="#EA4335" d="M24 48c6.6 0 12.3-2.2 16.4-6l-7.6-5.9c-2.2 1.5-4.9 2.4-8.8 2.4-6.1 0-11.3-4.5-13.1-10.6L2.5 34.6C6.9 42.4 14.7 48 24 48z" />
    </svg>
)

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
    children,
}) => {


    const pathname = usePathname()
    const isSignIn = pathname === "/sign-in"
    const title = isSignIn ? "Welcome Back" : "Create Account"
    const subtitle = isSignIn ? "Step into the elite fitness ecosystem to unlock your potential." : "Join the elite fitness ecosystem and unlock your full potential."
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4">
                <header className="mb-6">
                    <h2 className="text-3xl font-semibold text-foreground">{title}</h2>
                    <p className="mt-2 text-sm text-foreground/70">{subtitle}</p>
                </header>


                <div className="mb-4">
                    <Button variant="outline" className="w-full justify-center gap-3 p-2.5">
                        <GoogleIcon />
                        <span>Continue with Google</span>
                    </Button>
                </div>


                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-px bg-border/60" />
                    <span className="text-xs text-foreground/60 uppercase tracking-widest">or email</span>
                    <div className="flex-1 h-px bg-border/60" />
                </div>

                <div className="space-y-4">{children}</div>

                <footer className="mt-6 text-center text-sm text-foreground/60">
                    {isSignIn ?
                        <p>New to the platform? <Link href="/sign-up" className="text-primary font-medium hover:underline">Create Professional Account</Link> </p>
                        : <p> Already have an account? <Link href="/sign-in" className="text-primary font-medium hover:underline">Sign In</Link> </p>}
                </footer>
            </div>
        </div>
    )
}

export default AuthFormWrapper