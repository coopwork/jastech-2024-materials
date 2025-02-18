import * as React from "react"

import { cn } from "@/lib/utils"
import { SeparatorMain } from "./separatormain"





const CardCentrTop = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border text-card-foreground shadow   h-[178px] w-[575px] bg-chart-3 mb-[11px] border-none flex justify-center items-center",
      className
    )}
    {...props}
  />
  
))
CardCentrTop.displayName = "Card"

const CardcontentTop = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => (

  <div>
      <SeparatorMain/>
  </div>
))
CardcontentTop.displayName = "CardcontentTop"


export { CardCentrTop, CardcontentTop }


