import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable } from "react-native";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary web:hover:bg-primary/90 active:bg-primary/90",
        destructive: "bg-destructive web:hover:bg-destructive/90 active:bg-destructive/90",
        outline:
          "border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        secondary: "bg-secondary web:hover:bg-secondary/80 active:bg-secondary/80",
        ghost: "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        link: "web:underline-offset-4 web:hover:underline web:focus:underline",
      },
      size: {
        default: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
        sm: "h-9 rounded-md px-3 native:h-10 native:px-4",
        lg: "h-11 rounded-md px-8 native:h-14",
        icon: "h-10 w-10 native:h-12 native:w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => {
  return (
    <Pressable
      className={cn(
        buttonVariants({ variant, size }),
        props.disabled && "web:pointer-events-none opacity-50",
        className
      )}
      ref={ref}
      role="button"
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
