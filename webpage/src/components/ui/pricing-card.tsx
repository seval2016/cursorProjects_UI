"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const pricingCardVariants = cva(
  "relative w-full min-w-[280px] max-w-[380px] transform overflow-hidden rounded-lg border shadow-lg transition duration-300",
  {
    variants: {
      variant: {
        default: "border-gray-700  from-slate-700 to-slate-800",
        outline: "border-gray-700  from-slate-700 to-slate-800 ring-primary/20",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        default: "p-6 lg:p-8",
        sm: "p-4 lg:p-6",
        lg: "p-8 lg:p-10",
      },
      hover: {
        default: "hover:scale-[none] md:hover:scale-105",
        none: "hover:scale-100",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "default"
    }
  }
)

export interface PricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardVariants> {
  heading: string
  description: string
  price: number
  buttonText: string
  list: string[]
  discount?: number
  listHeading?: string
  onButtonClick?: () => void
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ 
    className, 
    variant, 
    size,
    hover,
    heading,
    description,
    price,
    discount,
    list,
    listHeading,
    buttonText,
    onButtonClick,
    ...props 
  }, ref) => {
    const withDiscount = React.useMemo(() => {
      return Math.round(price - (price * (discount ?? 100)) / 100)
    }, [price, discount])

    return (
      <div
        ref={ref}
        className={cn(pricingCardVariants({ variant, size, hover, className }))}
        {...props}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 lg:mb-6">
            <h3 className="mb-2 text-xl font-semibold text-white lg:text-2xl">
              {heading}
            </h3>
            <p className="text-gray-300 text-sm lg:text-base">
              {description}
            </p>
          </div>

          <div>
            <div className="mb-3 flex space-x-2 xl:mb-4">
              <span className="text-2xl font-extrabold text-white lg:text-3xl">
                ₺{discount ? withDiscount : price}
              </span>
              {discount && (
                <span className="text-gray-400 line-through text-lg lg:text-xl">
                  ₺{price}
                </span>
              )}
            </div>

            {discount && (
              <div className="origin-center-right absolute right-[-50%] top-0 w-full -translate-x-6 translate-y-4 rotate-45 bg-gradient-to-r from-slate-600 to-slate-700 text-center text-white text-sm lg:text-base">
                {discount}%
              </div>
            )}

            <Button
              onClick={onButtonClick}
              className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600"
            >
              {buttonText}
            </Button>

            <ul className="mt-4 space-y-1 text-gray-200 text-sm lg:text-base">
              {listHeading && <h5 className="font-medium mb-2">{listHeading}</h5>}
              {list.map((text, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-emerald-500" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
)
PricingCard.displayName = "PricingCard"

export { PricingCard, pricingCardVariants } 