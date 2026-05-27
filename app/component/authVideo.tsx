import Image from "next/image"

const AuthVideo = () => {
    return (
        <div className="hidden md:block flex-[60%] relative h-screen overflow-hidden">
            <video
                src="/auth_background.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-background/20 via-background/60 to-background/95" />
            <div className="absolute inset-0 bg-background/40" />
            <div className="absolute inset-0 z-10 flex items-center justify-center px-2 text-center">
                <div className="max-w-xl space-y-4">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="mx-auto"
                    />
                    <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-tighter text-foreground">
                        Forge Your <span className="text-primary">Ultimate</span> Self.
                    </h1>
                    <p className="text-base leading-7 text-foreground/80 md:text-lg">
                        Precision metrics, elite nutrition, and high-performance training systems.
                        Your transformation begins where your excuses end.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthVideo