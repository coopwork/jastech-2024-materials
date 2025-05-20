import * as React from "react"
import thermometer from "../images/thermometer.svg"
import waterdrop from "../images/waterdrop.svg"
import wind from "../images/wind.svg"
import sun from "../images/sun.svg"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const CardCenterBottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border text-card-foreground shadow flex  h-[178px] w-[575px] bg-chart-3 border-none",
      className
    )}
    {...props}
  />
))
CardCenterBottom.displayName = "Card"

const CardcontentBotton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => (
    <div className="  h-[178px] w-[575px] flex justify-between items-center  ">

        <div className="h-[178px] w-[287px] flex items-start flex-col ml-[24px] ">
          <p className="text-chart-2 mt-[15px] text-xs ">AIR CONDITIONS</p>
          <div className="flex flex-col items-start w-[133px]"> 
          <div className="flex flex-col items-center mt-3">
          <div className=" flex ">
            <img src={thermometer} alt="" className="mr-[6px]"  />
            <p className="text-chart-2">Real Feel</p>
            </div>
            <p className="text-white font-bold items-start mr-1 text-xl text-ring">30°</p>
          </div>
          <div className="flex flex-col items-center  mt-3">
            <div className=" flex">
            <img src={waterdrop} alt="" className="mr-[8px]" />
            <p className="text-chart-2">Real Feel</p>
            </div>
          
          <p className="text-white font-bold mr-3 text-xl text-ring">0%</p>
          </div>
          </div>
                 
        </div>

        
        <div className="flex items-start justify-start">
              <div className="h-[178px] w-[143px] flex items-center   justify-start mt-3 ">
                  <div className="flex flex-col items-start w-[133px]"> 
                    <div className="flex flex-col items-center mt-3">
                      <div className=" flex mr-8">
                        <img src={wind} alt="" className="mr-[10px] items-start "  />
                            <p className="text-chart-2 items-start ">Wind</p>
                      </div>
                            
                    </div>
                    <p className="text-white font-bold text-xl ml-8 text-ring">0.2 km/h</p>
                          <div className="flex flex-col items-center  mt-3">
                              <div className=" flex">
                                  <img src={sun} alt="" className="mr-[8px]" />
                                  <p className="text-chart-2">UV Index</p>
                            </div>
                                  <p className="text-white font-bold mr-5 text-xl text-ring">3</p>
                          </div>
                    </div>
              </div>
                <div className="h-[178px] w-[143px] flex ">
                <Button variant="destructive" className="flex mt-6 ml-10 ">See more</Button>
                </div>
        
      
         
        </div>
    </div>
  ))
  CardcontentBotton.displayName = "Cardcontentresiza"



export { CardCenterBottom, CardcontentBotton}
