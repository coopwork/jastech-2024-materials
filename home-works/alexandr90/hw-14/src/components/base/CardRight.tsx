import * as React from "react"

import { cn } from "@/lib/utils"


const CardRight = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border text-card-foreground justify-center items-center shadow h-[565px] w-[320px] flex bg-chart-3 mb-[6px] border-none",
      className
    )}
    {...props}
  />
))
CardRight.displayName = "Card"




export { CardRight }
