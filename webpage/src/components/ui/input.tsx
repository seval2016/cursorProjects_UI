import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
    };

    return (
      <div className="relative">
        {label && (
          <label
            className={cn(
              "absolute left-3 transition-all duration-200 pointer-events-none",
              (isFocused || hasValue) 
                ? "-top-2 text-xs bg-white dark:bg-dark-card px-1 text-primary-500"
                : "top-2.5 text-secondary-400 dark:text-dark-text-secondary",
              error && "text-red-500"
            )}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border bg-white dark:bg-dark-card px-3 py-2 text-sm",
            "border-secondary-200 dark:border-dark-border",
            "text-secondary-900 dark:text-dark-text",
            "transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-secondary-400 dark:placeholder:text-dark-text-secondary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 focus-visible:border-primary-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus-visible:ring-red-500/30",
            label && "pt-4",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={cn(
              "mt-1.5 text-xs",
              error ? "text-red-500" : "text-secondary-400 dark:text-dark-text-secondary"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input }; 