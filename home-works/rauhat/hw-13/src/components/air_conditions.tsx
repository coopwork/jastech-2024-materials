


import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IconClasses } from "../constants/icons-class.ts";

const AirConditions = () => {
    return (
<div className="col-start-2 row-start-4">
      
      <Card className="h-full flex flex-col justify-around">
   <CardHeader className="justify-between px-6 pt-5">
     <p className="text-[10px] font-semibold text-muted-foreground">AIR CONDITIONS</p>
     
     <Button className="text-[10px] text-foreground px-3 py-1 rounded-xl bg-btnbackground size-fit" >See more</Button>

     </CardHeader>
         <CardContent className="px-10 flex flex-row gap-44 mb-5 h-32">

         <div className="flex flex-col justify-between">


             <div className="mb-6" >
                   <div className={IconClasses[4]} >
                   <img src="./icons/real_feel.svg" alt="real_feel" />
                   <p >Real feel</p>
                   </div>


                   <p className={IconClasses[5]}>30&deg;</p>
             </div>


             <div >

                 <div className={IconClasses[4]} >
                 <img src="./icons/chance_of_rain.svg" alt="chance_of_rain" />
                     <p>Chance of rain</p>
                 </div>
                  
                 
                   <p className={IconClasses[5]}>0%</p>
             </div>

         </div>
         
         <div > 
             <div className="mb-6">
                 <div className={IconClasses[4]} >
                 <img src="./icons/wind_small.svg" alt="wind_small" />
                   <p >Wind</p>
                   </div>
                   <p className={IconClasses[5]}>0.2 km/h</p>
             </div>

             <div>
                 <div className={IconClasses[4]} >
                   <img src="./icons/uv_index.svg" alt="uv_index" />
                   <p>UV index</p>
                   </div>

                   <p className={IconClasses[5]}>3</p>
             </div>

         </div>




      

     
         </CardContent>

       </Card>
   </div>
    )}

    export default AirConditions