import { Button } from "@/components/ui/button";
import { loginUser } from "@/features/auth/authSlice";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, OAuthProvider } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const SocialLoginButton = ({ provider, logoSrc, altText, providerName, role }) => {
    const { toast } = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        setLoading(true);
        let authProvider;
        try {
            switch (providerName) {
                case "google":
                    authProvider = new GoogleAuthProvider();
                    break;
                case "apple":
                    authProvider = new OAuthProvider("apple.com");
                    break;
                case "facebook":
                    authProvider = new FacebookAuthProvider();
                    break;
                default:
                    throw new Error("Unsupported provider");
            }

            const response = await signInWithPopup(auth, authProvider);
            const user = response.user;
            console.log(`${providerName} login successful`, user);

            const payload = {
                email: user.email,
                role: role,
                loginMethod: altText,
                externalUid: user.uid || "string",
                firstName: user.displayName || "string",
                lastName: user.displayName || "string",
                photoURL: user.photoURL || "string",
                mobile: user.phoneNumber || "string",
            };

            const result = await dispatch(loginUser(payload));
            if (result?.payload.success) {
                toast({
                    title: "Login Successful!",
                    description: result?.payload.message,
                    status: "success",
                });
                router.push("/");
            } else {
                toast({
                    title: "Login Failed",
                    description: result?.payload.message || "An unknown error occurred.",
                    status: "error",
                });
            }
        } catch (error) {
            console.error(`${providerName} login failed`, error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            type="button"
            className="flex items-center justify-center p-0 bg-transparent hover:bg-transparent py-0 w-[190px]"
            onClick={handleLogin}
            disabled={loading}
        >
            <Image src={logoSrc} alt={altText} width={195} height={100} />
        </Button>
    );
};

export default SocialLoginButton;
