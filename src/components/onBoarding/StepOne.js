"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@react-hook/media-query";

const StepOne = ({ onNext, formData }) => { 
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState(formData.step1 || []);
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

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
                            className="absolute left-[-20px] bottom-[20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]"
                            alt="icon"
                        />
                        What Type of help do you need?
                    </h3>
                    <p className="text-p1">You can select multiple options</p>
                </div>

                <div className="container mr-auto px-3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Image
                            src="/images/login/step-1.svg"
                            alt="Help options"
                            width={450}
                            height={350}
                            className="mx-auto"
                        />
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Complete Course",
                                "Backing Coverage",
                                "Score Improvement",
                                "Exam Preparation",
                                "Help with Homework",
                                "Understanding Companion for School/Tuition",
                                "Study Ahead of School",
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

                        <div className="mt-4 mb-10 text-center">
                            {isDesktop ? (
                                <Dialog open={open} onOpenChange={setOpen}>
                                    <DialogTrigger asChild>
                                        <Button size="md" variant="link">View All</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>
                                                <h6 className="text-h6">
                                                    What Type of help do you need?
                                                </h6>
                                            </DialogTitle>
                                            <DialogDescription>
                                                {[
                                                    "Complete Course",
                                                    "Backing Coverage",
                                                    "Score Improvement",
                                                    "Exam Preparation",
                                                    "Help with Homework",
                                                    "Understanding Companion for School/Tuition",
                                                    "Study Ahead of School",
                                                    "Advanced Classes",
                                                ]
                                                    .map((option, index) => (
                                                        <label
                                                            key={index}
                                                            htmlFor={`option-${index}`}
                                                            className="flex items-center justify-between px-4 py-2 bg-background text-sm font-medium cursor-pointer space-x-3 space-y-0 rounded-md border p-4 shadow mb-3"
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

                                                <Button
                                                    onClick={() => setOpen(false)}
                                                    variant="black"
                                                    className="w-full text-primary-foreground"
                                                    disabled={loading}
                                                >
                                                    {loading ? "Next..." : "Next"}
                                                </Button>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Drawer open={open} onOpenChange={setOpen}>
                                    <DrawerTrigger asChild>
                                        <Button size="md" variant="link">View All</Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle>
                                                <h6 className="text-h6">
                                                    What Type of help do you need?
                                                </h6>
                                            </DrawerTitle>
                                            <DrawerDescription>
                                                {[
                                                    "Complete Course",
                                                    "Backing Coverage",
                                                    "Score Improvement",
                                                    "Exam Preparation",
                                                    "Help with Homework",
                                                    "Understanding Companion for School/Tuition",
                                                    "Study Ahead of School",
                                                    "Advanced Classes",
                                                    "Advanced Classes"
                                                ]
                                                    .map((option, index) => (
                                                        <label
                                                            key={index}
                                                            htmlFor={`option-${index}`}
                                                            className="flex items-center justify-between px-4 py-2 bg-background text-sm font-medium cursor-pointer space-x-3 space-y-0 rounded-md border p-4 shadow mb-3"
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

                                                <Button
                                                    onClick={() => setOpen(false)}
                                                    variant="black"
                                                    className="w-full text-primary-foreground"
                                                    disabled={loading}
                                                >
                                                    {loading ? "Next..." : "Next"}
                                                </Button>
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <DrawerFooter className="pt-2">
                                            <DrawerClose asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            )}
                        </div>

                        <div className="w-full mx-auto pt-6 max-w-[600px]">
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
            </div>
        </>
    );
};

export default StepOne;
