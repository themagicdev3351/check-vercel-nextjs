"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const StepFour = ({ onNext, formData }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState(formData || []);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            options: {},
        },
    });

    const onSubmit = (data) => {
        setLoading(true);
        onNext(selectedOptions);

        setLoading(false);
    };

    const handleCheckboxChange = (checked, optionName) => {
        if (checked) {
            setSelectedOptions((prev) => [...prev, optionName]);
        } else {
            setSelectedOptions((prev) =>
                prev.filter((option) => option !== optionName)
            );
        }
    };


    return (
        <>
            <div className="items-center py-5">
                <div className="text-center w-full mb-[20px]">
                    <h3 className="text-center mb-3 capitalize text-p1 md:text-h5 lg:text-h3 font-bold tracking-[0] relative w-fit mx-auto">
                        <img
                            src="/images/icon/left-text.png"
                            className="absolute left-[-10px] lg:left-[-20px] top-[-20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]"
                        />
                        What time of day??
                    </h3>
                    <p className="text-p1">
                        Time of day is shown in your time zone.you can select multiple option.
                    </p>
                </div>
                <div className="container mr-auto px-3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Image
                            src="/images/login/step-4.svg"
                            alt="Apple"
                            width={450}
                            height={350}
                            className="mx-auto"
                        />
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Google/Search Enginge",
                                "News, Articale",
                                "YouTube",
                                "Friends, Colleagues, family members",
                                "Social media",
                                "Ads on website or app",
                                "Ai Platform(ChatGPT, Bard, etc...)",
                            ]
                                .map((option, index) => (
                                    <label
                                        key={index}
                                        htmlFor={`option-${index}`}
                                        className="flex items-center px-4 py-2 bg-background rounded-lg shadow-sm text-sm font-medium cursor-pointer"
                                    >
                                        <span
                                            className="mr-2 cursor-pointer"
                                        >
                                            {option}
                                        </span>

                                        <Checkbox
                                            id={`option-${index}`}
                                            checked={selectedOptions.includes(option)}
                                            onCheckedChange={(checked) => {
                                                handleCheckboxChange(checked, option);
                                            }}
                                        />
                                    </label>
                                ))}
                        </div>

                        <div className="w-full mx-auto pt-6 max-w-[600px] flex gap-5">
                            <Button
                                type="submit"
                                variant="black"
                                className="w-full text-primary-foreground"
                                disabled={loading}
                            >
                                {loading ? "Next..." : "Next"}
                            </Button>
                        </div>
                    </form>

                </div>
            </div >
            <div></div>
        </>
    );
};

export default StepFour;
