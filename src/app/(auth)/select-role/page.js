"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";

const SelectRole = () => {
    const { toast } = useToast();
    const router = useRouter();
    const { authState, setRole } = useAuth();
    const [selectedType, setSelectedType] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(true);


    useEffect(() => {
        setSelectedType(authState?.role)
    }, [authState])

    useEffect(() => {
        if (!authState) return

        if (authState?.role) {
            router.push("/signin");
        } else {
            setIsRedirecting(false);
        }
    }, [authState, router]);

    function onSubmit(e) {
        e.preventDefault();

        if (!selectedType) {
            toast({
                title: "Please select a role.",
                variant: "destructive"
            });
            return;
        }

        router.push("/signin");
        setRole(selectedType.toLocaleUpperCase())
        // toast({
        //     title: "Success",
        //     description: `You selected: ${selectedType}`,
        // });
    }

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
                <div className="container px-3 pb-3 mx-auto">
                    <div className="text-center w-full mb-10 lg:mb-[50px]">
                        <h3 className="text-center mb-3 capitalize text-p1 md:text-h5 lg:text-h3 font-bold tracking-[0] relative w-fit mx-auto">
                            <img
                                src="/images/icon/left-text.png"
                                className="absolute left-[-0px] lg:left-[-20px] top-[-20px] w-[30px] h-[40px] lg:w-[50px] lg:h-[60px]"
                            />
                            Discover the perfect tutor for your needs.
                        </h3>
                        <p className="text-p1">
                            Tell us how you’d like to learn to get a personalized choice of tutors
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="">
                        <div className="space-y-4 w-full mb-10 lg:mb-20">
                            <div className="flex flex-col lg:flex-row gap-5 justify-center">
                                <div
                                    className={`relative w-1/1 lg:w-1/2 border-2 rounded-lg p-5 pt-7 text-center cursor-pointer hover:shadow-md ${selectedType === "STUDENT"
                                        ? "border-[rgba(164,20,213,1)]"
                                        : ""
                                        }`}
                                    onClick={() => setSelectedType("STUDENT")}
                                >
                                    <div className="text-center">
                                        <Image
                                            src="/images/login/student-role.png"
                                            width={250}
                                            height={270}
                                            alt="Student"
                                            className="mx-auto"
                                        />
                                        <h3 className="text-h5 font-semibold mt-4">
                                            I am a Student
                                        </h3>
                                        <p className="text-p1 mt-4">
                                            Take lessons, chat with your tutor, or review recorded sessions anytime.
                                        </p>
                                    </div>
                                    {selectedType === "STUDENT" && (
                                        <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[rgba(164,20,213,1)]">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(164,20,213,1)] p-1">
                                                <MdDone size={25} className="text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={`relative w-1/1 lg:w-1/2 border-2 rounded-lg p-7 text-center cursor-pointer hover:shadow-md ${selectedType === "TUTOR"
                                        ? "border-[rgba(164,20,213,1)]"
                                        : ""
                                        }`}
                                    onClick={() => setSelectedType("TUTOR")}
                                >
                                    <div className="text-center">
                                        <Image
                                            src="/images/login/tutor-role.png"
                                            width={250}
                                            height={270}
                                            alt="Tutor"
                                            className="mx-auto"
                                        />
                                        <h3 className="text-h5 font-semibold mt-4">
                                            I am a Tutor
                                        </h3>
                                        <p className="text-p1 mt-4">
                                            Deliver lessons and manage appointments seamlessly with your clients.
                                        </p>
                                    </div>
                                    {selectedType === "TUTOR" && (
                                        <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[rgba(164,20,213,1)]">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(164,20,213,1)] p-1">
                                                <MdDone size={25} className="text-white" />
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="max-w-[600px] w-full text-primary-foreground mx-auto text-center">
                            <Button type="submit" variant="black" className="w-full">
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default SelectRole;
