import * as React from "react"
import solnce2 from "../images/SunContent.png"
import { cn } from "@/lib/utils"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      " border text-card-foreground shadow flex justify-center items-center  h-[178px] w-[575px] bg-chart-4 rounded-none border-none mb-[30px]",
      className
    )}
    {...props}
  />
))




CardContent.displayName = "Card"



const Cardcontentresiza = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => (
    <div className="  h-[178px] w-[575px] mt-4 flex justify-self-center content-center items-center">
        <div className="h-[178px] w-[287px] flex  flex-col  content-center ml-[55px] mt-[33px]">
          <h1 className="font-bold text-2xl text-white">Madrid</h1>
          <div className="flex mt-[5px]">
          <p className="text-xs text-chart-2">Chance of rain:</p>
          <p className="text-xs text-chart-2 ml-1">0%</p>
          </div>
          <p className="flex font-bold text-5xl text-white mt-[53px]">31°</p>
        </div>

        <div className="h-[178px] w-[287px] flex items-center content-center">
          <img src={solnce2} alt="" className="h-[200px] ml-6" />
        </div>
    </div>
  ))
Cardcontentresiza.displayName = "Cardcontentresiza"


export { CardContent, Cardcontentresiza }


