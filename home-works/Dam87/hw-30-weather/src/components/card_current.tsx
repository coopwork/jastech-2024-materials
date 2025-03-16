import { Card } from "@/components/ui/card";

const CardCurrent = () => {
    return (
        <div className="col-start-2 row-start-2 h-full ">
            <Card className="bg-mainbackground flex justify-between h-full items-center px-10 ">
                <div className="flex flex-col justify-between content-center h-full pb-5">
                    <div>
                        <p className="font-semibold text-3xl">Madrid</p>
                        <div className="flex flex-row justify-center"><p className="text-sm text-muted-foreground">Chance of rain:</p><p className="text-sm text-muted-foreground"> 0%</p></div>
                    </div>

                    <p className="text-5xl font-semibold">31&deg;</p>
                </div>

                <img src="./img/sun.png" alt="" className="content-center h-36"/>
            </Card>
        </div>
    )}

    export default CardCurrent