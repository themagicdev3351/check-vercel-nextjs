"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginUser } from "@/features/auth/authSlice";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLoginButton from "@/app/_components/SocialLoginButton";
import { useAuth } from "@/lib/authContext";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    terms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
});

const SignIn = () => {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(true);
    const router = useRouter();
    const { authState, setToken } = useAuth();

    useEffect(() => {
        if (!authState) return

        if (!authState?.role) {
            router.push("/select-role");
        } else if (authState?.isAuthenticated) {
            router.push("/");
        } else {
            setIsRedirecting(false);
        }
    }, [authState, router]);

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, register, formState: { errors }, watch, setValue } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            terms: false,
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            const payload = {
                email: data.email,
                password: data.password,
                role: localStorage.getItem("role") || "USER",
                loginMethod: "CUSTOM_EMAIL_PASSWORD",
            };

            const result = await dispatch(loginUser(payload));
            if (result?.payload.success) {
                toast({
                    title: "Login Successful!",
                    description: result?.payload.message,
                    status: "success",
                });
                setToken(result?.payload.token)
                router.push("/");
            } else {
                toast({
                    title: "Login Failed",
                    description: result?.payload.message || "An unknown error occurred.",
                    status: "error",
                });
            }
        } catch (error) {
            toast({
                title: "An error occurred",
                description: error.message || "Please try again later.",
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
                <div className="text-center w-full mb-2 lg:mb-[50px]">
                    <h3 className="text-center mb-3 capitalize text-p1 md:text-h5 lg:text-h3 font-bold tracking-[0] relative w-fit mx-auto">
                        <img
                            src="/images/icon/left-text.png"
                            className="absolute left-[-20px] bottom-[20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]"
                        />
                        Get Started Now
                    </h3>
                    <p className="text-p1">Enter your credentials to access your account.</p>
                </div>
                <div className="max-w-[600px] p-3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block font-semibold text-p2 lg:text-p1 mb-1">Email address</label>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Enter email address"
                                    aria-invalid={errors.email ? "true" : "false"}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    {...register("email")}
                                    className="w-full p-5 text-p2 lg:text-p1 font-semibold bg-background border-0 h-[25px] lg:h-[60px] rounded-[12px]"
                                />
                                <FiAtSign size={20} className="absolute right-5 top-1/2 transform -translate-y-1/2" />
                            </div>
                            {errors.email && (
                                <p id="email-error" className="text-sm text-red-600 mt-1" role="alert">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        {/* Password */}
                        <div>
                            <label className="block font-semibold text-p2 lg:text-p1 mb-1">Password</label>
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
                                <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Terms and Conditions */}
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

                        <Button type="submit" variant="black" className="w-full text-primary-foreground" disabled={loading}>
                            {loading ? "Signing In..." : "Sign In"}
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
                        <p className="text-p1 font-semibold">
                            Don’t have an account?{" "}
                            <Button onClick={() => router.push("/signup")} variant="link" className="p-0">
                                Sign Up
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
            </div>
            <div></div>
        </>
    );
};

export default SignIn;
