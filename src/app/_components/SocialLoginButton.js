import { Button } from "@/components/ui/button";
import { loginUser, registerUser } from "@/features/auth/authSlice";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, OAuthProvider } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";

const SocialLoginButton = ({ method, provider, logoSrc, altText, providerName }) => {
    const { toast } = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { authState, setToken, setUserId } = useAuth();

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
                role: authState.role,
                loginMethod: altText,
                externalUid: user.uid || "string",
                firstName: user.displayName || "string",
                lastName: user.displayName || "string",
                photoURL: user.photoURL || "string",
                mobile: user.phoneNumber || "string",
            };

            if (method === "signup") {
                const result = await dispatch(registerUser(payload));
                if (result?.payload.success) {
                    toast({
                        description: result?.payload.message,
                        status: "success",
                    });
                    setToken(result?.payload.token)
                    setUserId(result?.payload.userId)
                    router.push("/onboarding?step=helpNeeded");
                } else {
                    toast({
                        description: result?.payload.message || "An unknown error occurred.",
                        status: "error",
                    });
                }
            } else {
                const result = await dispatch(loginUser(payload));
                if (result?.payload.success) {
                    toast({
                        description: result?.payload.message,
                        status: "success",
                    });
                    setToken(result?.payload.token)
                    router.push("/onboarding?step=helpNeeded");
                } else {
                    toast({
                        description: result?.payload.message || "An unknown error occurred.",
                        status: "error",
                    });
                }
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
