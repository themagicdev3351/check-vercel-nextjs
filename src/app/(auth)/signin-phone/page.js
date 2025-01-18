"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { generateOtpMobile, loginUser, registerUser, verifyMobileOtp } from "@/features/auth/authSlice";
import SocialLoginButton from "@/app/_components/SocialLoginButton";
import { useAuth } from "@/lib/authContext";

const mobileSchema = z.object({
    number: z.string().min(5, "Invalid phone number").max(15, "Phone number is too long"),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
    otp: z.string().optional().refine(value => !value || value.length === 6, {
        message: "OTP must be exactly 6 digits",
    }),
});


const SignInPhone = () => {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [isRedirecting, setIsRedirecting] = useState(true);
    const [otpSent, setOtpSent] = useState(false);
    const router = useRouter();
    const { authState, setToken } = useAuth();

    useEffect(() => {
        if (!authState) {
            return;
        }

        if (!authState.token) {
            setIsRedirecting(false);
            return;
        }

        if (!authState.role) {
            router.push("/select-role");
        } else if (authState.isAuthenticated) {
            router.push("/");
        } else {
            setIsRedirecting(false);
        }
    }, [authState, router]);


    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, register, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(mobileSchema),
        defaultValues: {
            number: "",
            countryCode: "",
            terms: false,
        },
    });

    const handleSendOtp = async (data) => {
        setLoading(true);
        try {
            const { number } = data;
            const countryCode = number.split(" ")[0].replace("+", "").trim();
            const phoneNumber = number.replace(/^\+(\d+)\s*/, "").replace(/\s+/g, "");

            if (!phoneNumber || !countryCode) {
                throw new Error("Phone number or country code is missing");
            }

            const payload = {
                mobile: phoneNumber,
                countryCode: countryCode,
                loginMethod: "LOGIN",
            };

            const otpResponse = await dispatch(generateOtpMobile(payload));
            if (otpResponse?.payload?.statusCode === 200) {
                setOtpSent(true);
                toast({
                    title: "OTP Sent!",
                    description: otpResponse?.payload?.message,
                    status: "success",
                });
            } else {
                toast({
                    title: "Failed to send OTP",
                    description: otpResponse?.payload?.message || "An unknown error occurred.",
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

    const handleVerifyOtp = async (data) => {
        setLoading(true);
        try {
            const { number, otp } = data;
            const countryCode = number.split(" ")[0].replace("+", "").trim();
            const phoneNumber = number.replace(/^\+(\d+)\s*/, "").replace(/\s+/g, "");

            const payloadVerifyOtp = {
                mobile: phoneNumber,
                countryCode: countryCode,
                otp: otp,
                loginMethod: "MOBILE_OTP",
                role: role,
            };

            const verifyResponse = await dispatch(loginUser(payloadVerifyOtp));
            console.log(verifyResponse)
            if (verifyResponse?.payload?.success) {
                setToken(verifyResponse?.payload.token)
                toast({
                    title: "Login Successfull!",
                    description: verifyResponse?.payload?.message,
                    status: "success",
                });
                router.push("/");
            } else {
                toast({
                    title: "Login Failed",
                    description: verifyResponse?.payload,
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
                <div className="text-center w-full mb-[50px]">
                    <h3 className="text-center mb-3 capitalize text-p1 md:text-h5 lg:text-h3 font-bold tracking-[0] relative w-fit mx-auto">
                        <img
                            src="/images/icon/left-text.png"
                            className={`absolute left-[-20px] bottom-[20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]`}
                        />
                        Get Started Now
                    </h3>
                    <p className="text-p1">
                        Enter your credentials to access your account.
                    </p>
                </div>
                <div className="max-w-[600px] p-3 mx-auto">
                    <form onSubmit={handleSubmit(otpSent ? handleVerifyOtp : handleSendOtp)} className="space-y-6">
                        {/* Phone Number Input */}
                        <div>
                            <label className="block font-semibold text-p2 lg:text-p1 mb-1">Phone Number</label>
                            <div className="relative">
                                <Controller
                                    name="number"
                                    control={control}
                                    rules={{ required: "Phone number is required" }}
                                    render={({ field }) => (
                                        <PhoneInput
                                            {...register("number")}
                                            defaultCountry="US"
                                            international
                                            withCountryCallingCode
                                            onChange={(value) => field.onChange(value)}
                                            value={field.value || ""}
                                            className="w-full p-5 text-p1 font-semibold bg-background border-0 h-[60px] rounded-[12px] no-spinner"
                                        />
                                    )}
                                />
                            </div>
                            {errors.number && <p className="text-sm text-red-600 mt-1">{errors.number.message}</p>}
                        </div>

                        {otpSent && (
                            <div>
                                <label className="block font-semibold text-p2 lg:text-p1 mb-1">OTP</label>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        placeholder="Enter OTP"
                                        maxLength={6}
                                        inputMode="numeric"
                                        {...register("otp")}
                                        className="w-full p-5 text-p2 lg:text-p1 font-semibold bg-background border-0 h-[25px] lg:h-[60px] rounded-[12px]"
                                    />
                                    <Button
                                        type="button"
                                        variant="link"
                                        onClick={() => {
                                            setOtpSent(false)
                                        }
                                        }
                                        className="absolute right-5 top-1/2 transform -translate-y-1/2 p-0 text-primary"
                                    >
                                        Resend OTP
                                    </Button>
                                </div>
                                {errors.code && <p className="text-sm text-red-600 mt-1">{errors.code.message}</p>}
                            </div>
                        )}

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

                        <Button
                            type="submit"
                            variant="black"
                            className="w-full text-primary-foreground"
                            disabled={loading}
                        >
                            {loading ? "Signing In..." : otpSent ? "Verify OTP" : "Send OTP"}
                        </Button>

                        <Button
                            type="button"
                            variant="transparent"
                            className="w-full"
                            onClick={() => router.push("/signin")}
                        >
                            Sign in with Email
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
                </div >
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

export default SignInPhone;
