import { Separator } from "@/components/ui/separator"  
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const CardTodayForecast = () => {
    return (
        <div className="col-start-2 row-start-3">
      
            <Card className="h-full flex flex-col justify-around">
                <CardHeader className="justify-start p-6 "><p className="text-[10px] text-muted-foreground font-bold">
                    TODAY'S FORECAST</p>
                </CardHeader>
                <CardContent className="px-10 flex flex-row justify-between mb-5 h-32">
        
                <div className="flex flex-col justify-between ">
                    <p className="self-center text-xs text-muted-foreground">6:00 AM</p>
                    <img  src="./img/cloud.png" alt="" className=" h-12"></img>
                    <p className="self-center text-lg font-bold">25&deg;</p>
                </div>
                <Separator orientation="vertical" className="h-30"/>
                <div className="flex flex-col justify-between ">
                    <p className="self-center text-xs text-muted-foreground">9:00 AM</p>
                    <img  src="./img/cloud_sun.png" alt="" className=" h-12"></img>
                    <p className="self-center text-lg font-bold">28&deg;</p>
                </div>
                <Separator orientation="vertical" className="h-30"/>
                <div className="flex flex-col justify-between ">
                    <p className="self-center text-xs text-muted-foreground">12:00 PM</p>
                    <img  src="./img/sun.png" alt="" className=" h-12"></img>
                    <p className="self-center text-lg font-bold">33&deg;</p>
                </div>
                <Separator orientation="vertical" className="h-30"/>
                <div className="flex flex-col justify-between ">
                    <p className="self-center text-xs text-muted-foreground">3:00 PM</p>
                    <img  src="./img/sun.png" alt="" className=" h-12"></img>
                    <p className="self-center text-lg font-bold">34&deg;</p>
                </div>
                <Separator orientation="vertical" className="h-30"/>
                <div className="flex flex-col justify-between ">
                    <p className="self-center text-xs text-muted-foreground">6:00 PM</p>
                    <img  src="./img/sun.png" alt="" className=" h-12"></img>
                    <p className="self-center text-lg  font-bold">32&deg;</p>
                </div>
                <Separator orientation="vertical" className="h-30"/>
                <div className="flex flex-col justify-between ">
                    <p className="self-center text-xs text-muted-foreground">9:00 PM</p>
                    <img  src="./img/cloud_sun.png" alt="" className=" h-12"></img>
                    <p className="self-center text-lg  font-bold">30&deg;</p>
                </div>
        
            
                </CardContent>
        
            </Card>
        </div>
    )}

    export default CardTodayForecast