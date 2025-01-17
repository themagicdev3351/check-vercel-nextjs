"use client";

import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import Image from "next/image"; 
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { logout } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { checkAuth, logoutUser } from "@/lib/checkAuth";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [navItems, setNavItems] = useState([
    { name: "Find Tutor", href: "/select-role" },
    { name: "Become Tutor", href: "/signin" },
    { name: "Sign In", href: "/signin" },
    { name: "How it works", href: "/signin" },
    { name: "Expert Tutoring", href: "/signin" },
    { name: "Trending topics", href: "/signin" },
    { name: "Our Students", href: "/signin" },
    { name: "Our Tutor", href: "/signin" },
    { name: "Become a tutor", href: "/signin" },
    { name: "Get Started for free", href: "/signin", type: "button" },
  ]);

  useEffect(() => {
    const { isAuthenticated } = checkAuth();
    if (isAuthenticated) {
      setNavItems((prevItems) =>
        prevItems.map((item) =>
          item.name === "Sign In"
            ? { ...item, name: "Log Out", href: "/signin" }
            : item
        )
      );
    }
  }, []);


  const handleLogout = () => {
    logoutUser()
    router.push("/signin");
  };

  return (
    <div>
      <nav className="mq:w-[calc((1170/1440)*100vw)] w-full mq:h-[calc((70/1440)*100vw)] top-[5] mq:ml-[calc((135/1440)*100vw)] lg:top-[25] absolute z-[9]">
        <div className="container flex items-center lg:bg-background p-2 lg:pl-5 justify-between mx-auto rounded-[50px]">
          {/* Logo */}
          <Link href="/" className="mr-4 cursor-pointer pb-1.3 hidden lg:block">
            <Image
              src="/images/logo.svg"
              width={144}
              height={45}
              alt="Picture of the author"
            />
          </Link>
          <div className="grid grid-cols-2 gap-2 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="white">
                  <HiOutlineMenuAlt2 />
                </Button>
              </SheetTrigger>
              <SheetContent side={"bottom"}>
                <SheetHeader>
                  <SheetTitle className="justify-center flex">
                    <Image
                      src="/images/logo.png"
                      width={144}
                      height={45}
                      alt="Picture of the author"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="w-full w-fit py-3">
                  <NavigationMenu className="w-full">
                    <NavigationMenuList className="block text-center w-full">
                      {navItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}>
                              {item.name}
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                  <div className="w-full flex justify-center py-3">
                    <Button className="font-manrope" variant="black">
                      Get Started for free
                    </Button>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button size="icon" variant="white">
                      <IoMdClose />
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <div className="hidden w-fit lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item, index) => (
                    ['Find Tutor', 'Become Tutor', 'Sign In', 'Log Out'].includes(item.name) && (
                      <NavigationMenuItem key={index}>
                        {item.name === "Log Out" ? (
                          <Button
                            variant="link"
                            onClick={handleLogout}
                            className="navigation-item"
                          >
                            {item.name}
                          </Button>
                        ) : (
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              {item.name}
                            </NavigationMenuLink>
                          </Link>
                        )}
                      </NavigationMenuItem>
                    )
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <li>
                <Button className="font-manrope w-full text-primary-foreground" variant="black">
                  Get Started for free
                </Button>
              </li>
              {/* <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                            <span className="sr-only">Toggle theme</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => setTheme("light")}>
                                            Light
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                                            Dark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("system")}>
                                            System
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li> */}
            </ul>
          </div>

          <div className="block lg:hidden justify-between ">
            <Button className="lg:hidden text-primary-foreground" size="sm" variant="black">
              Get Started for free
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
