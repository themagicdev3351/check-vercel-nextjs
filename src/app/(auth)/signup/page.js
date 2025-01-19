"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { registerUser } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import SocialLoginButton from "@/app/_components/SocialLoginButton";
import { useAuth } from "@/lib/authContext";

const signUpSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    terms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
});

const SignUp = () => {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(true);
    const router = useRouter();
    const { authState, setToken, setUserId } = useAuth();

    useEffect(() => {
        if (!authState) return

        if (!authState?.role) {
            router.push("/select-role");
        } else if (authState?.isAuthenticated) {
            router.push("/onboarding?step=helpNeeded");
        } else {
            setIsRedirecting(false);
        }
    }, [authState, router]);

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, register, formState: { errors }, watch, setValue } = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            terms: false,
        },
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const payload = {
                email: data.email,
                password: data.password,
                role: localStorage.getItem("role") || "USER",
                loginMethod: "CUSTOM_EMAIL_PASSWORD",
            };

            const result = await dispatch(registerUser(payload));
            if (result?.payload.success) {
                toast({
                    title: result?.payload.message,
                    status: "success",
                });
                router.push("/onboarding?step=helpNeeded");
                setToken(result?.payload.token)
                setUserId(result?.payload.userId)
            } else {
                toast({
                    title: result?.payload.message,
                    status: "error",
                });
            }
        } catch (error) {
            toast({
                title: error.message,
                status: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    if (isRedirecting) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <>
            <div className="items-center">
                <div className="text-center w-full mb-[50px]">
                    <h3 className="text-center mb-3 capitalize text-p1 md:text-h5 lg:text-h3 font-bold tracking-[0] relative w-fit mx-auto">
                        <img
                            src="/images/icon/left-text.png"
                            className="absolute left-[-20px] lg:left-[-20px] top-[-20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]"
                        />
                        sign up to Expertbuddy
                    </h3>
                    <p className="text-p1">
                        Enter your credential to access your account.
                    </p>
                </div>
                <div className="max-w-[600px] p-3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
                        <div>
                            <label className="block font-semibold text-p2 lg:text-p1 mb-1">
                                Email address
                            </label>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Enter email address"
                                    {...register("email")}
                                    className="w-full p-5 text-p2 lg:text-p1 font-semibold bg-background border-0 h-[25px] lg:h-[60px] rounded-[12px]"
                                />
                                <FiAtSign size={20} className="absolute right-5 top-1/2 transform -translate-y-1/2" />
                            </div>
                            {errors.email && (
                                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block font-semibold text-p2 lg:text-p1 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    {...register("password")}
                                    className="w-full p-5 text-p2 lg:text-p1 font-semibold bg-background border-0 h-[25px] lg:h-[60px] rounded-[12px]"
                                />
                                <Button
                                    type="button"
                                    variant="link"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 transform -translate-y-1/2 p-0 text-foreground"
                                >
                                    {showPassword ? <AiOutlineEyeInvisible size={25} /> : <AiOutlineEye size={25} />}
                                </Button>
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-center items-center space-x-2">
                            <Controller
                                name="terms"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        id="terms"
                                        checked={field.value}
                                        onCheckedChange={(checked) => field.onChange(checked)}
                                    />
                                )}
                            />
                            <label htmlFor="terms" className="text-sm cursor-pointer">
                                I agree to the terms and conditions
                            </label>
                        </div>
                        {errors.terms && <p className="text-sm text-red-600 mt-1">{errors.terms.message}</p>}

                        <Button
                            type="submit"
                            variant="black"
                            className="w-full text-primary-foreground"
                            disabled={loading}
                        >
                            {loading ? "Signing Up..." : "Sign Up"}
                        </Button>

                        <Button
                            type="button"
                            variant="transparent"
                            className="w-full"
                            onClick={() => router.push("/signin-phone")}
                        >
                            Sign in with Mobile
                        </Button>
                    </form>

                    <div className="my-5 text-center">
                        <p className="text-sm">Or sign in with</p>
                        <div className="flex justify-center gap-4 my-7">
                            <SocialLoginButton
                                providerName="google"
                                logoSrc="/images/login/google.svg"
                                altText="GOOGLE"
                                role={localStorage.getItem("role")}
                            />
                            <SocialLoginButton
                                providerName="apple"
                                logoSrc="/images/login/apple.svg"
                                altText="APPLE"
                                role={localStorage.getItem("role")}
                            />
                            <SocialLoginButton
                                providerName="facebook"
                                logoSrc="/images/login/facebook.svg"
                                altText="FACEBOOK"
                                role={localStorage.getItem("role")}
                            />
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-p2 lg:text-p1 font-semibold">
                            Already have an account?{" "}
                            <Button onClick={() => router.push("/signin")} variant="link" className="p-0">
                                Sign In
                            </Button>
                        </p>
                    </div>
                </div>
                <Image
                    src="/images/login/left-login.png"
                    alt="Apple"
                    width={195}
                    height={100}
                    className="absolute left-5 bottom-10 transform w-full max-w-[300px] z-[-1] hidden lg:block"
                />
                <Image
                    src="/images/login/right-login.png"
                    alt="Apple"
                    width={195}
                    height={100}
                    className="absolute right-5 bottom-10 transform w-full max-w-[300px] z-[-1] hidden lg:block"
                />
            </div >
            <div></div>
        </>
    );
};

export default SignUp;
