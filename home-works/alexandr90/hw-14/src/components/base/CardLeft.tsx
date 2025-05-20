import * as React from "react"
import logo from "../images/ico.png"
import { cn } from "@/lib/utils"
import weather from "../images/weather.png"
import cities from "../images/cities.png"
import map from "../images/map.png"

const CardLeft = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref}
    className={cn(
      "rounded-xl border  text-card-foreground shadow flex flex-col items-center h-[610px] w-[70px] bg-chart-3 border-none",
      className
    )}
    {...props}
   
  />
 
  
))
CardLeft.displayName = "Card"

const Carcontent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => (

  <div>
        <div className="h-9 w-9 bg-chart-5 rounded-xl flex justify-center items-center mt-[18px] ml-[6px] "  >
          <img src={logo}alt="" className="h-8 flex" />
        </div>
        <div className="h-12 w-12  rounded-xl flex flex-col items-center mt-[30px] ">
          <img src={weather} alt="" className="h-5 flex" />
          <p className="text-white text-[13px] ">Weather</p>
        </div>
        <div className="h-12 w-12  rounded-xl flex flex-col items-center mt-[20px] ">
          <img src={cities} alt="" className="h-5 flex cursor-pointer" />
          <p className="text-chart-2 text-[13px]">Cities</p>
        </div>
        <div className="h-12 w-12  rounded-xl flex flex-col items-center mt-[20px]">
          <img src={map} alt="" className="h-5 flex cursor-pointer" />
          <p className="text-chart-2 text-[13px] ">Map</p>
        </div>
  </div>
))
Carcontent.displayName = "Carcontent"


export { CardLeft, Carcontent }
