import AuthNavbar from "@/components/landingPage/AuthNavbar";
import Image from "next/image";

export default function AuthLayout({ children }) {
    return (
        <>
            <main
                className="bg-cover bg-center h-screen flex justify-between flex-col w-full"
                style={{
                    backgroundImage: "url('/images/login/bg-login.png')",
                    backgroundColor: "rgba(225, 213, 201, 0.1)",
                    backgroundBlendMode: "overlay",
                }}
            >
                <AuthNavbar />
                {children}
                <Image
                    src="/images/login/login-top-round.png"
                    height={135}
                    width={150}
                    alt="ellipse"
                    className="absolute w-[600px] z-[-1] top-[0] left-[50%] opacity-70 transform -translate-x-1/2"
                />
                {/* <Image
                    src="/images/login/login-bottom-round.png"
                    height={135}
                    width={150}
                    alt="ellipse"
                    className="absolute w-[600px] z-[-1] bottom-[0] left-[50%] opacity-70 transform -translate-x-1/2"
                /> */}
            </main>
        </>
    );
}
