"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { useAuth } from "@/lib/authContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { referralCode } from "@/features/student/studentSlice";
import { z } from "zod";
import Image from "next/image";

const codeSchema = z.object({
    code: z.string("Invalid email address"),
});

const ReferralCole = () => {
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
        } else if (!authState?.isAuthenticated) {
            router.push("/signin");
        } else {
            setIsRedirecting(false);
        }
    }, [authState, router]);

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, register, formState: { errors }, watch, setValue } = useForm({
        resolver: zodResolver(codeSchema),
        defaultValues: {
            code: "",
        },
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const payload = {
                referralCode: data.code,
                role: authState.role,
                userId: authState.userId,
            };

            const result = await dispatch(referralCode(payload));
            if (result?.payload.success) {
                toast({
                    title: result?.payload,
                    status: "success",
                });
                router.push("/");
            } else {
                toast({
                    title: result?.payload,
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
            <div className="items-center py-5">
                <div className="text-center w-full mb-[20px]">
                    <h3 className="text-center mb-3 capitalize text-p1 md:text-h5 lg:text-h3 font-bold tracking-[0] relative w-fit mx-auto">
                        <img
                            src="/images/icon/left-text.png"
                            className="absolute left-[-10px] lg:left-[-20px] top-[-20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]"
                        />
                        Referral or Discount Code
                    </h3>
                    <p className="text-p1">Please enter your referral code below</p>
                </div>

                <div className="max-w-[600px] p-3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
                        <Image
                            src="/images/login/step-2.svg"
                            alt="Apple"
                            width={450}
                            height={350}
                            className="mx-auto"
                        />
                        {/* Email */}
                        <div>
                            {/* <label className="block font-semibold text-p2 lg:text-p1 mb-1">Email address</label> */}
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Enter your referral code"
                                    aria-invalid={errors.code ? "true" : "false"}
                                    aria-describedby={errors.code ? "code-error" : undefined}
                                    {...register("code")}
                                    className="w-full p-5 text-p2 lg:text-p1 font-semibold bg-background border-0 h-[25px] lg:h-[60px] rounded-[12px]"
                                />
                            </div>
                            {errors.code && (
                                <p id="email-error" className="text-sm text-red-600 mt-1" role="alert">
                                    {errors.code.message}
                                </p>
                            )}
                        </div>

                        <Button type="submit" variant="black" className="w-full text-primary-foreground" disabled={loading}>
                            {loading ? "Submiting..." : "Submit"}
                        </Button>
                    </form>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default ReferralCole;
