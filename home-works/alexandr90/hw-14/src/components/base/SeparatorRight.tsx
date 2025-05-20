import { Separator } from "@/components/ui/separator"
import solnce from "../images/SunContent.png"
import oblako from "../images/oblako.svg"
import sundojd from "../images/sundojd.svg"
import storm from "../images/storm.svg"
export function Separatorright() {
  return (
    <div className="flex flex-col  w-[267px] max-h-[520px] ">
      <div className="space-y-1 flex justify-start mb-3" >
               <p className="text-xs text-chart-2  flex ">
        TODAY'S FORECAST 
        </p>
      </div>     
     <div className="">
        <div className=" flex justify-between items-center ">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs">Today</p></div>
            <div className="flex justify-between items-center">
                <div ><img src={solnce} alt="" className="w-12" /></div>
                <div><p className="text-white ml-2 ">Sunny</p></div>
            </div>
            <div className="items-center flex justify-center">
                <p className="text-white flex items-center text-xs " >36</p>
                <p className="text-white flex items-center text-xs" >/</p>
                <p className="text-white flex items-center text-xs text-chart-1" >22</p>
              </div>
        </div>
        <Separator className="my-3 bg-chart-1 " />
        <div className=" flex justify-between items-center ">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs mr-3">Tue</p></div>
            <div className="flex justify-between items-center">
                <div ><img src={solnce} alt="" className="w-12" /></div>
                <div><p className="text-white ml-2 ">Sunny</p></div>
            </div>
            <div className="items-center flex justify-center">
                <p className="text-white flex items-center text-xs " >37</p>
                <p className="text-white flex items-center text-xs" >/</p>
                <p className="text-white flex items-center text-xs text-chart-1" >21</p>
              </div>
        </div>
        
        <Separator className="my-3 bg-chart-1 " />
        <div className=" flex justify-between items-center ">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs mr-1">Wed</p></div>
            <div className="flex justify-between items-center">
                <div ><img src={solnce} alt="" className="w-12" /></div>
                <div><p className="text-white ml-2 ">Sunny</p></div>
            </div>
            <div className="items-center flex justify-center">
                <p className="text-white flex items-center text-xs " >37</p>
                <p className="text-white flex items-center text-xs" >/</p>
                <p className="text-white flex items-center text-xs text-chart-1" >21</p>
              </div>
        </div>
        <Separator className="my-3 bg-chart-1 " />
        <div className=" flex justify-between items-center ">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs mr-3">Thu</p></div>
            <div className="flex justify-between items-center">
                <div ><img src={oblako } alt="" className="w-12" /></div>
                <div><p className="text-white ml-2 ">Cloudy</p></div>
            </div>
            <div className="items-center flex justify-center">
                <p className="text-white flex items-center text-xs " >37</p>
                <p className="text-white flex items-center text-xs" >/</p>
                <p className="text-white flex items-center text-xs text-chart-1" >21</p>
              </div>
        </div>
        <Separator className="my-3 bg-chart-1 " />
        <div className=" flex justify-between items-center">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs mr-4">Fri</p></div>
            <div className="flex justify-between items-center">
                <div ><img src={oblako} alt="" className="w-12" /></div>
                <div><p className="text-white ml-2 ">Cloudy</p></div>
            </div>
            <div className="items-center flex justify-center">
                <p className="text-white flex items-center text-xs " >37</p>
                <p className="text-white flex items-center text-xs" >/</p>
                <p className="text-white flex items-center text-xs text-chart-1" >21</p>
              </div>
        </div>
        <Separator className="my-3 bg-chart-1 " />
        <div className=" flex justify-between items-center ">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs mr-1">Sat</p></div>
            <div className="flex justify-between items-center">
                <div ><img src={sundojd} alt="" className="w-12" /></div>
                <div><p className="text-white ml-2 ">Rainy</p></div>
            </div>
            <div className="items-center flex justify-center">
                <p className="text-white flex items-center text-xs " >37</p>
                <p className="text-white flex items-center text-xs" >/</p>
                <p className="text-white flex items-center text-xs text-chart-1" >21</p>
              </div>
        </div>
        <Separator className="my-3 bg-chart-1 " />
        <div className=" flex justify-between items-center ">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs">Sun</p></div>
            <div className="flex justify-between items-center">
                <div className=""><img src={storm} alt="" className="w-12" /></div>
                <div><p className="text-white ml-2 ">Storm</p></div>
            </div>
            <div className="items-center flex justify-center mb">
                <p className="text-white flex items-center text-xs " >37</p>
                <p className="text-white flex items-center text-xs" >/</p>
                <p className="text-white flex items-center text-xs text-chart-1" >21</p>
              </div>
        </div>
        </div>
      
    </div>
  )
}