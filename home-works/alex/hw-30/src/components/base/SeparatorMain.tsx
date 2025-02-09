import { Separator } from "@/components/ui/separator"
import oblako from "../images/oblako.svg"
import oblakosol from "../images/oblakosol.svg"
import solnce2 from "../images/SunContent.png"
 
export function SeparatorMain() {
  return (
    <div>
      <div className="space-y-1 flex items-center w-[575px] mb-3" >
               <p className="text-xs text-chart-2 ml-6 flex ">
        TODAY'S FORECAST 
        </p>
      </div>
 
      <div className="flex h-[105px] items-center space-x-4 text-sm ml-4">
        
        <div className="max-w-[100px] ml-[15px]">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs">6:00 AM</p></div>
            <div ><img src={oblako} alt="" className="h-14 w-14" /></div>
            <div className="items-center flex justify-center"><p className="text-white flex items-center font-bold" >25°</p></div>
        </div>
        
        <Separator orientation="vertical" className="bg-chart-1 h-[100px] "/>        
        <div className="max-w-[100px]">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs">09:00 AM</p></div>
            <div ><img src={oblakosol} alt="" className="h-14 w-14"  /></div>
            <div className="items-center flex justify-center"><p className="text-white flex items-center font-bold" >28°</p></div>
        </div>
        
        <Separator orientation="vertical" className="bg-chart-1 h-[100px]" />
        <div className="max-w-[100px]">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs">12:00 PM</p></div>
            <div ><img src={solnce2} alt="" className="h-14 w-14"  /></div>
            <div className="items-center flex justify-center"><p className="text-white flex items-center font-bold" >33°</p></div>
        </div>
        <Separator orientation="vertical"  className="bg-chart-1 h-[100px]"/>
        <div className="max-w-[100px]">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs">3:00 PM</p></div>
            <div ><img src={solnce2} alt="" className="h-14 w-14" /></div>
            <div className="items-center flex justify-center"><p className="text-white flex items-center font-bold" >34°</p></div>
        </div>
        <Separator orientation="vertical" className="bg-chart-1 h-[100px]"/>
        <div className="max-w-[100px]">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs" >6:00 PM</p></div>
            <div ><img src={solnce2} alt=""  className="h-14 w-14" /></div>
            <div className="items-center flex justify-center"><p className="text-white flex items-center font-bold" >32°</p></div>
        </div>
        <Separator orientation="vertical" className="bg-chart-1 h-[100px]"/>
        <div className="max-w-[100px]">
            <div><p className="flex justify-center text-chart-2 font-bold text-xs">9:00 AM</p></div>
            <div ><img src={oblakosol} alt=""  className="h-14 w-14" /></div>
            <div className="items-center flex justify-center"><p className="text-white flex items-center font-bold" >30°</p></div>
        </div>
        
      </div>
    </div>
  )
}