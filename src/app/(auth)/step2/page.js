"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const step1Schema = z.object({
    options: z.record(z.boolean()),
});

const Step1 = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            options: {},
        },
    });

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            console.log("Form Data:", data);

            const selectedOptions = Object.keys(data.options).filter(
                (key) => data.options[key]
            );

            console.log("Selected Options:", selectedOptions);

            toast({
                title: "Selection Successful!",
                description: `You selected: ${selectedOptions.join(", ")}`,
            });

            router.push("/step-2");
        } catch (error) {
            toast({
                title: "Error",
                description: error.message || "An error occurred. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="items-center py-5">
                <div className="text-center w-full mb-[20px]">
                    <h3 className="text-center mb-3 capitalize text-p1 md:text-h5 lg:text-h3 font-bold tracking-[0] relative w-fit mx-auto">
                        <img
                            src="/images/icon/left-text.png"
                            className={`absolute left-[-20px] bottom-[20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]`}
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
                            ].map((option, index) => (
                                <div
                                    key={index}
                                    className="flex items-center px-4 py-2 bg-background rounded-lg shadow-sm text-sm font-medium cursor-pointer"
                                >
                                    <label
                                        htmlFor={`option-${index}`}
                                        className="mr-2 cursor-pointer"
                                    >
                                        {option}
                                    </label>
                                    <Checkbox
                                        id={`option-${index}`}
                                        {...register(`options.${index}`)}
                                    />

                                </div>
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
                                className="w-full"
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

export default Step1;
