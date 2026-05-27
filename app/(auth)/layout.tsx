import AuthVideo from "../component/authVideo"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-screen flex">
            <AuthVideo />
            <div className="flex-[40%] flex items-center justify-center p-8">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout