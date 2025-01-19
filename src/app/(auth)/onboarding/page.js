"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const StepOne = dynamic(() => import('@/components/onBoarding/StepOne'), { ssr: false });
const StepTwo = dynamic(() => import('@/components/onBoarding/StepTwo'), { ssr: false });
const StepThree = dynamic(() => import('@/components/onBoarding/StepThree'), { ssr: false });
const StepFour = dynamic(() => import('@/components/onBoarding/StepFour'), { ssr: false });

import { useAuth } from "@/lib/authContext";
import { useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { updateProfile } from "@/features/user/userSlice";

const Onboarding = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { authState } = useAuth();
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [isRedirecting, setIsRedirecting] = useState(true);
    const step = searchParams && searchParams.get("step") || "1"; 
    
    const [formData, setFormData] = useState({
        step1: null,
        step2: null,
        step3: null,
        step4: null,
    });

    useEffect(() => {
        if (!authState) return;

        if (!authState?.role) {
            router.push("/select-role");
        } else {
            setIsRedirecting(false);
        }
    }, [authState, router]);

    const handleNextStep = (data) => {

        setFormData((prevData) => ({
            ...prevData,
            [`step${step}`]: data,
        }));

        if (parseInt(step) < 4) {
            router.push(`/onboarding?step=${parseInt(step) + 1}`);
        } else {
            submitData({ ...formData, [`step${step}`]: data });
        }
    };

    const submitData = async (data) => {
        try {
            const payload = {
                helpNeeded: data.step1,
                availableDays: data.step2,
                availableTimeSlots: data.step3,
                hearAboutUs: data.step4,
                userId: authState?.userId,
                role: authState?.role,
            };
            const result = await dispatch(updateProfile(payload));
            toast({
                title: "Profile Updated",
                description: result?.payload.message || "An unknown error occurred.",
                status: "success",
            });
            router.push("/");
        } catch (error) {
            toast({
                title: "An error occurred",
                description: error.message || "Please try again later.",
                status: "error",
            });
        }
    };

    const renderStep = () => {
        switch (step) {
            case "1":
                return <StepOne onNext={handleNextStep} formData={formData} />;
            case "2":
                return <StepTwo onNext={handleNextStep} formData={formData} />;
            case "3":
                return <StepThree onNext={handleNextStep} formData={formData} />;
            case "4":
                return <StepFour onNext={handleNextStep} formData={formData} />;
            default:
                router.push("/onboarding?step=1");
                return null;
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
        <Suspense fallback={<div>Loading...</div>}>
            {renderStep()}
        </Suspense>
    );
};

export default Onboarding;
