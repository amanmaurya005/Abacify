import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-12 w-full rounded-lg border border-white/12 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-neon-cyan/70 focus:ring-2 focus:ring-neon-cyan/15",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
