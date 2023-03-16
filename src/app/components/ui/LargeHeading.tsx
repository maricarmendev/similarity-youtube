import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// The first argument will be the always active class
// The second value configure additional props that active some other classes
const largeHeadingVariants = cva(
  "text-black dark:text-white lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        // We add the size prop
        default: "text-4xl md:text-5mx lg:text-6xl",
        large: "text-5xl md:text-6mx lg:text-7xl",
        sm: "text-2xl md:text-3mx lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof largeHeadingVariants> {}

// forwardRef lets your component expose a DOM node to parent component with a ref.
const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(largeHeadingVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

// This is for debugging process, is needed because we use forwardRef with an unnamed arrow function
LargeHeading.displayName = "LargeHeading"

export default LargeHeading;

/*
- The max-w-prose utility gives an element a max-width optimized for readability and adapts based on the font size.
*/
