"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

 // Código agregado
interface CustomProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>{
  indicatorColor?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  CustomProps  // Código agregado
  //React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, indicatorColor = 'bg-primary', ...props }, ref) => (  // Código agregado
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorColor)} // Código agregado
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
