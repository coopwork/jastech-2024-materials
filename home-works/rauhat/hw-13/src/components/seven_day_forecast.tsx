import { Separator } from "@/components/ui/separator"  
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const SevenDayForecast = () => {
    return (
        <div className="row-span-3 col-start-3 row-start-2 h-full">
            <Card className="h-full  ">
                <CardHeader className="justify-between px-7 pt-6">
                    <p className="text-[10px] font-semibold text-muted-foreground">7-DAY FORECAST</p>
                </CardHeader>

                <CardContent className="px-8 text-[.8rem] ">
                    <div>
                        <div className="flex flex-row justify-between items-center my-3 ">
                            <p className="text-muted-foreground w-6">Today</p>
                        <div className="flex flex-row gap-4 items-center justify-center ">
                        <img  src="./img/sun.png" alt="" className=" h-12 w-12"></img>
                        <p>Sunny</p>
                        </div>
                            <div className="flex flex-row "><p>36</p>/<p className="text-muted-foreground">22</p></div>
                        </div>
                    </div>
                <Separator />

                    <div>
                        <div className="flex flex-row justify-between items-center my-4 ">
                            <p className="text-muted-foreground w-6">Tue</p>
                            <div className="flex flex-row gap-4 items-center justify-center  ">
                            <img  src="./img/sun.png" alt="" className=" h-12 w-12"></img>
                            <p>Sunny</p>
                            </div>
                            <div className="flex flex-row ">
                                <p>37</p>/<p className="text-muted-foreground">21</p>
                            </div>
                        </div>
                    </div>
            <div>
            <Separator />
        <div className="flex flex-row justify-between items-center my-4 ">
        <p className="text-muted-foreground w-6">Wed</p>
        <div className="flex flex-row gap-4 items-center justify-center  ">
        <img  src="./img/sun.png" alt="" className=" h-12 w-12"></img>
        <p>Sunny</p>
        </div>
        <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
        </div>
        </div>
        <Separator />

        <div>

        <div className="flex flex-row justify-between items-center my-4 ">
        <p className="text-muted-foreground w-6">Thu</p>
        <div className="flex flex-row gap-4 items-center justify-center  ">
        <img  src="./img/cloud.png" alt="" className=" h-12 w-12"></img>
        <p>Cloudy</p>
        </div>
        <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
        </div>
        </div>
        <Separator />

        <div>

        <div className="flex flex-row justify-between items-center my-4 ">
        <p className="text-muted-foreground w-6">Fri</p>
        <div className="flex flex-row gap-4 items-center justify-center  ">
        <img  src="./img/cloud.png" alt="" className=" h-12 w-12"></img>
        <p>Cloudy</p>
        </div>
        <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
        </div>
        </div>
        <Separator />

        <div>

        <div className="flex flex-row justify-between items-center my-4 ">
        <p className="text-muted-foreground w-6">Sat</p>
        <div className="flex flex-row gap-4 items-center justify-center  ">
        <img  src="./img/rain.png" alt="" className=" h-12 w-12"></img>
        <p>Rainy</p>
        </div>
        <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
        </div>
        </div>
        <Separator />

        <div>

        <div className="flex flex-row justify-between items-center my-4 ">
        <p className="text-muted-foreground w-6">Sun</p>
        <div className="flex flex-row gap-4 items-center justify-center  ">
        <img  src="./img/storm.png" alt="" className=" h-12 w-12"></img>
        <p>Storm</p>
        </div>
        <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
        </div>
        </div>



            </CardContent>

            </Card>


        </div>
    )}

    export default SevenDayForecast