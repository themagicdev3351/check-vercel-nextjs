"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StepOne from "@/components/onBoarding/StepOne";
import StepTwo from "@/components/onBoarding/StepTwo";
import StepThree from "@/components/onBoarding/StepThree";
import StepFour from "@/components/onBoarding/StepFour";
import { useAuth } from "@/lib/authContext";

const Onboarding = () => {
    const [formData, setFormData] = useState({
        step1: [],
        step2: [],
        step3: [],
    });
    const [step, setStep] = useState(1);
    const router = useRouter();
    const { authState } = useAuth();

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

    const handleNextStep = (data) => {
        console.log(data)
        setFormData((prevData) => ({
            ...prevData,
            [`step${step}`]: data,
        }));

        if (step < 4) {
            setStep(step + 1);
        } else {
            submitData(formData);
        }
    };

    const submitData = async (data) => {
        try {
            const combinedData = {
                ...data.step1,
                ...data.step2,
                ...data.step3,
            };

            const response = await fetch("https://app.xpertbuddy.in/api/profile/onboard/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(combinedData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit data");
            }

            router.push("/success");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div>
            {step === 1 && <StepOne onNext={handleNextStep} />}
            {step === 2 && <StepTwo onNext={handleNextStep} />}
            {step === 3 && <StepThree onNext={handleNextStep} />}
            {step === 4 && <StepFour onNext={handleNextStep} />}
        </div>
    );
};

export default Onboarding;
