"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { useAuth } from "@/lib/authContext";
import { useToast } from "@/hooks/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@/features/student/studentSlice";
import StepOne from "@/components/onBoarding/StepOne";
import StepTwo from "@/components/onBoarding/StepTwo";
import StepThree from "@/components/onBoarding/StepThree";
import StepFour from "@/components/onBoarding/StepFour";

const Onboarding = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { authState } = useAuth();
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [isRedirecting, setIsRedirecting] = useState(true);
    const step = searchParams && searchParams.get("step") || "helpNeeded";
    const { student } = useSelector((state) => state.student)

    const [formData, setFormData] = useState({
        helpNeeded: [],
        availableDays: [],
        availableTimeSlots: [],
        hearAboutUs: [],
    });

    useEffect(() => {
        if (student) {
            setIsRedirecting(true);

            setFormData({
                helpNeeded: student?.helpNeeded?.length > 0 ? student.helpNeeded : [],
                availableDays: student?.availableDays?.length > 0 ? student.availableDays : [],
                availableTimeSlots: student?.availableTimeSlots?.length > 0 ? student.availableTimeSlots : [],
                hearAboutUs: student?.hearAboutUs?.length > 0 ? student.hearAboutUs : [],
            });

            setIsRedirecting(false);
        }
    }, [student, router]);

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

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        const storedJwtToken = localStorage.getItem("jwtToken");

        if (storedUserId && storedJwtToken) {
            dispatch(fetchUserProfile({ userId: storedUserId }));
        }
    }, [dispatch]);

    const handleNextStep = (data) => {

        setFormData((prevData) => ({
            ...prevData,
            [`${step}`]: data,
        }));

        switch (step) {
            case "helpNeeded":
                router.push(`/onboarding?step=availableDays`);
                break;
            case "availableDays":
                router.push(`/onboarding?step=availableTimeSlots`);
                break;
            case "availableTimeSlots":
                router.push(`/onboarding?step=hearAboutUs`);
                break;
            case "hearAboutUs":
                submitData({ ...formData, [step]: data });
                break;
            default:
                router.push(`/onboarding?step=helpNeeded`);
                break;
        }
    };

    const submitData = async (data) => {
        try {
            const payload = {
                helpNeeded: data.helpNeeded,
                availableDays: data.availableDays,
                availableTimeSlots: data.availableTimeSlots,
                hearAboutUs: data.hearAboutUs,
                userId: authState?.userId,
                role: authState?.role,
            };
            const result = await dispatch(updateProfile(payload));
            if (result.payload.statusCode === 200) {
                toast({
                    title: result?.payload.message,
                    status: "success",
                });
                router.push("/referral-cole");
            }

        } catch (error) {
            toast({
                title: error.message,
                status: "error",
            });
        }
    };

    const renderStep = () => {
        switch (step) {
            case "helpNeeded":
                return <StepOne onNext={handleNextStep} formData={formData.helpNeeded} />;
            case "availableDays":
                return <StepTwo onNext={handleNextStep} formData={formData.availableDays} />;
            case "availableTimeSlots":
                return <StepThree onNext={handleNextStep} formData={formData.availableTimeSlots} />;
            case "hearAboutUs":
                return <StepFour onNext={handleNextStep} formData={formData.hearAboutUs} />;
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
