import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        black: "bg-chart-6 text-primary-foreground shadow hover:bg-primary/90",
        white: "bg-background text-foreground shadow hover:bg-primary/90",
        transparent:
          "bg-transparent ring-ring hover:text-primary-foreground hover:bg-chart-6",
      },
      size: {
        default:
          "h-[40px] lg:h-[50px] px-[30px] py-[12px] text-p2 lg:text-p1 rounded-[50px]",
        sm: "h-[30px] lg:h-[40px] px-[10px] py-[10px] text-p3 lg:text-p2 rounded-[12px]",
        lg: "h-[50px] px-[30px] py-[10px] text-p2 lg:text-p1 rounded-[20px]",
        icon: "h-[45px] w-[45px] rounded-[12px]",
        responsive:
          "h-[50px] px-[30px] py-[12px] text-p2 lg:text-p1 lg:h-[40px] sm:px-[20px] sm:py-[10px]  xs:h-[30px] xs:px-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
