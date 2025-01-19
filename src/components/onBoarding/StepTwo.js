"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const StepTwo = ({ onNext, formData }) => {
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
                        When can you take lessons?
                    </h3>
                    <p className="text-p1">
                        You  can select multiple options
                    </p>
                </div>
                <div className="container mr-auto px-3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Image
                            src="/images/login/step-2.svg"
                            alt="Apple"
                            width={450}
                            height={350}
                            className="mx-auto"
                        />
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
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
                            <div className="flex items-center gap-2 bg-background py-3 px-5 rounded-[100px]">
                                <Label htmlFor="airplane-mode">Anytime</Label>
                                <Switch id="airplane-mode" />
                            </div>

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

export default StepTwo;
