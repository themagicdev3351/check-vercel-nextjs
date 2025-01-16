"use client";

import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AuthNavbar() {
    const router = useRouter();

    return (
        <div className="w-full mt-3 pb-3 lg:mt-8">
            <nav className="relative w-full top-0">
                <div className="container mx-auto flex items-center justify-between p-2">
                    <Button variant="link" onClick={() => router.back()} className="p-0">
                        <IoArrowBackOutline className="text-xl mr-2" size={40} />
                    </Button>
                    <Image
                        src="/images/logo.svg"
                        width={144}
                        height={45}
                        alt="Buddy Logo"
                        className="block"
                    />
                    <div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
