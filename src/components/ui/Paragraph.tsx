import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// The first argument will be the always active class
// The second value configure additional props that active some other classes
const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        // We add the size prop
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

// forwardRef lets your component expose a DOM node to parent component with a ref.
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

// This is for debugging process, is needed because we use forwardRef with an unnamed arrow function
Paragraph.displayName = "Paragraph"

export default Paragraph;

/*
- The max-w-prose utility gives an element a max-width optimized for readability and adapts based on the font size.
*/
