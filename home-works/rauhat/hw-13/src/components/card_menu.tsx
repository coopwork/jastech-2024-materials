
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IconClasses } from "../constants/icons-class.ts";

const SideCard = () => {
    return (
      <div className="row-span-4   ">
<Card className=" h-full justify-self-center hidden sm:block">
    <CardHeader>
    <div className="bg-bodybackground p-2 justify-self-center w-fit m-3 rounded-xl mb-10">
        <img src="./icons/wind.svg" alt="wind" />
    </div>
    </CardHeader>
          <CardContent >
          <div className={IconClasses[3]} >
          <div className={IconClasses[1]}>
          <img src="./icons/weather.svg" alt="weather" />
          </div>
          <p className={IconClasses[2]}>Weather</p>
          </div>
          <div className={IconClasses[0]} >
          <div className={IconClasses[1]}>
          <img src="./icons/cities.svg" alt="cities" />
          </div>
          <p className={IconClasses[2]}>Cities</p>
          </div>
          <div className={IconClasses[0]} >
          <div className={IconClasses[1]}>
          <img src="./icons/map.svg" alt="map" />
          </div>
          <p className={IconClasses[2]}>Map</p>
          </div>
          <div className={IconClasses[0]} >
          <div className={IconClasses[1]}>
          <img src="./icons/settings.svg" alt="settings" />
          </div>
          <p className={IconClasses[2]}>Settings</p>
          </div>
          </CardContent>
</Card>
 </div>
    )}

    export default SideCard