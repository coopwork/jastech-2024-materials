import { Separator } from "@/components/ui/separator"
import { WiCloud, WiDaySunny, WiDaySunnyOvercast, WiThermometer, WiRaindrop, WiStrongWind, WiRain, WiThunderstorm } from 'weather-icons-react';
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import './App.css'


function App() {

  return (
    <>
      
     <div className="flex justify-center items-center w-full h-screen bg-gray-500">
  <div className="flex gap-4 p-4 bg-slate-900 rounded-3xl w-[1040px] h-[655px]">
    
            <div className="flex justify-end"><Card className="bg-slate-700 h-[620px] w-[70px] border-none rounded-3xl flex-col justify-start items-center text-center">
              <div>   
                <CardHeader className="w-20 text-center mb-6"><img src="./img/wind.png" alt="wind" className="h-8"/></CardHeader>
                 <CardContent className="text-center p-0"> <img src="./img/weather.svg" alt="wind" className="inline-block"/><p className="mb-4 text-sm text-slate-200">Weather</p>
                  <img src="./img/list.svg" alt="list" className="inline-block"/><p className="mb-4 text-sm text-slate-400">Cities</p>
                  <img src="./img/map.svg" alt="map" className="inline-block ml-2"/><p className="mb-4 text-sm text-slate-400">Map</p>
                  <img src="./img/settings.svg" alt="settings" className="inline-block"/><p className="mb-4 text-sm text-slate-400">Settings</p>
                  </CardContent>
              </div>
               </Card>
              
              </div>
{/* SEARCH */}
  <div><Input className="bg-slate-700  w-[575px] border-none rounded-xl" placeholder="Search for cities"></Input>

{/* MADRID */}
  
        <div className="flex justify-between pb-0 pl-8 h-[190px]">
          <div>
          <h1 className="text-slate-200 font-semibold text-3xl pt-4 pb-2">Madrid</h1>
      <p className="text-slate-400 text-sm">Chance of rain: 0%</p>
      <h1 className="text-5xl text-slate-200 pt-12 font-semibold">31°</h1>
          </div>
           <WiDaySunny size={200} color='yellow' fill="yellow"/>
            {/* <img className="" src="./img/sun-madrid.svg" alt="sun" /> */}
            
            
    </div>

{/* TODAYS FORECAST */}
  <Card className="bg-slate-700 w-[575px] h-[190px] border-none rounded-3xl mb-4 pt-4 pl-6">
    <p className="text-slate-400 text-xs font-bold">TODAY'S FORECAST</p>
    <div className='flex text-center w-20 mt-4'>

      <div><p className='text-slate-400 font-bold text-xs mb-2'>6:00AM</p>
            <WiCloud size={52} color='gray' />
          <p className='text-slate-100 text-xl font-bold'>25°</p>
      
      </div>
      <Separator orientation="vertical" className="mx-5 bg-slate-600 w-[2px] rounded-3xl h-[100]" />
      <div><p className='text-slate-400 font-bold text-xs mb-2'>9:00AM</p>
            <WiDaySunnyOvercast size={52} color='lightyellow' />
          <p className='text-slate-100 text-xl font-bold'>28°</p>
      
      </div>
      <Separator orientation="vertical" className="mx-5 bg-slate-600 w-[2px] rounded-3xl h-[100]" />
      <div><p className='text-slate-400 font-bold text-xs mb-2'>12:00PM</p>
            <WiDaySunny size={52} color='yellow' />
          <p className='text-slate-100 text-xl font-bold'>33°</p>
      
      </div>
      <Separator orientation="vertical" className="mx-5 bg-slate-600 w-[2px] rounded-3xl h-[100]" />
      <div><p className='text-slate-400 font-bold text-xs mb-2'>3:00PM</p>
            <WiDaySunny size={52} color='yellow' />
          <p className='text-slate-100 text-xl font-bold'>31°</p>
      
      </div>
      <Separator orientation="vertical" className="mx-5 bg-slate-600 w-[2px] rounded-3xl h-[100]" />
      <div><p className='text-slate-400 font-bold text-xs mb-2'>6:00PM</p>
            <WiCloud size={52} color='gray' />
          <p className='text-slate-100 text-xl font-bold'>34°</p>
      
      </div>
      <Separator orientation="vertical" className="mx-5 bg-slate-600 w-[2px] rounded-3xl h-[100]" />
      <div><p className='text-slate-400 font-bold text-xs mb-2'>9:00PM</p>
            <WiCloud size={52} color='gray' />
          <p className='text-slate-100 text-xl font-bold'>34°</p>
      
      </div>
         </div>
    
  </Card>



{/* AIR CONDITIONS */}

  <Card className="bg-slate-700 w-[575px] h-[190px] border-none rounded-3xl pt-4 pl-6">
    
    <div className="flex justify-between items-center pr-7">
      <p className="text-slate-400 text-xs font-bold">AIR CONDITIONS</p>
      <Button variant={"secondary"} className="rounded-3xl bg-blue-500 h-7 text-white">See more</Button>

    </div>
    <div className="flex justify-between w-[75%]">
      <div>
    <div className="text-slate-400 text-base pl-6">
        <div className="mb-4"><p className="relative">
  <WiThermometer size={30} color="darkgray" className="absolute -left-8 top-0" />
  Real Feel
</p>

        <p className="text-slate-100 text-2xl font-bold">30°</p>
        </div>
    </div>
    <div className="text-slate-400 text-base pl-6">
        <div><p className="relative">
  <WiRaindrop size={30} color="darkgray" className="absolute -left-8 top-0" />
  Chance of Rain
</p>

        <p className="text-slate-100 text-2xl font-bold">0%</p>
        </div>
    </div>
    </div>

<div>
    <div className="text-slate-400 text-base pl-6 mb-4">
        <div><p className="relative">
  <WiStrongWind size={30} color="darkgray" className="absolute -left-8 top-0" />
  Wind
</p>

        <p className="text-slate-100 text-2xl font-bold">0.2 km/h</p>
        </div>
    </div>
    <div className="text-slate-400 text-base pl-6">
        <div><p className="relative">
  <WiDaySunny size={30} color="darkgray" className="absolute -left-8 top-0" />
  UV Index
</p>

        <p className="text-slate-100 text-2xl font-bold">3</p>
        </div>
    </div>
    </div>

    </div>
  </Card>
  </div>


  <Card className="bg-slate-700 h-[566px] w-[320px] border-none rounded-3xl mt-[3.5rem] text-slate-400">
    <div className="pl-7 pt-4">
      <p className="text-slate-400 text-xs font-bold">7-DAY FORECAST</p>
      <div className="flex  items-center mt-4">
        <div className="flex justify-between w-[80%] items-center"><p className="text-sm">Today</p> <WiDaySunny size={40} color='yellow' /></div>
        <div className="flex w-[100%] items-center text-sm"><p className="mr-[2.5rem] text-slate-100 font-bold text-sm">Sunny</p>
        <p className=" text-slate-100 font-bold">36</p><p>/22</p></div>
      </div>
      <Separator className=" bg-slate-600 w-[17rem] rounded-3xl mt-[1.2rem]" />
      <div className="flex  items-center mt-4">
        <div className="flex justify-between w-[80%] items-center"><p className="text-sm">Tue</p> <WiDaySunny size={40} color='yellow' /></div>
        <div className="flex w-[100%] items-center text-sm"><p className="mr-[2.5rem] text-slate-100 font-bold text-sm">Sunny</p>
        <p className=" text-slate-100 font-bold">37</p><p>/21</p></div>
      </div>
      <Separator className=" bg-slate-600 w-[17rem] rounded-3xl mt-[1.2rem]" />
      <div className="flex  items-center mt-4">
        <div className="flex justify-between w-[80%] items-center"><p className="text-sm">Wed</p> <WiDaySunny size={40} color='yellow' /></div>
        <div className="flex w-[100%] items-center text-sm"><p className="mr-[2.5rem] text-slate-100 font-bold text-sm">Sunny</p>
        <p className=" text-slate-100 font-bold">36</p><p>/22</p></div>
      </div>
      <Separator className=" bg-slate-600 w-[17rem] rounded-3xl mt-[1.2rem]" />
      <div className="flex  items-center mt-4">
        <div className="flex justify-between w-[80%] items-center"><p className="text-sm">Thu</p> <WiCloud size={40} color='gray' /></div>
        <div className="flex w-[100%] items-center text-sm"><p className="mr-[2.5rem] text-slate-100 font-bold text-sm">Cloudy</p>
        <p className=" text-slate-100 font-bold">36</p><p>/22</p></div>
      </div>
      <Separator className=" bg-slate-600 w-[17rem] rounded-3xl mt-[1.2rem]" />
      <div className="flex  items-center mt-4">
        <div className="flex justify-between w-[80%] items-center"><p className="text-sm">Fri</p> <WiCloud size={40} color='gray' /></div>
        <div className="flex w-[100%] items-center text-sm"><p className="mr-[2.5rem] text-slate-100 font-bold text-sm">Cloudy</p>
        <p className=" text-slate-100 font-bold">36</p><p>/22</p></div>
      </div>
      <Separator className=" bg-slate-600 w-[17rem] rounded-3xl mt-[1.2rem]" />
      <div className="flex  items-center mt-4">
        <div className="flex justify-between w-[80%] items-center"><p className="text-sm">Sat</p> <WiRain size={40} color='lightblue' /></div>
        <div className="flex w-[100%] items-center text-sm"><p className="mr-[2.5rem] text-slate-100 font-bold text-sm">Rainy</p>
        <p className=" text-slate-100 font-bold">36</p><p>/22</p></div>
      </div>
      <Separator className=" bg-slate-600 w-[17rem] rounded-3xl mt-[1.2rem]" />
      <div className="flex  items-center mt-4">
        <div className="flex justify-between w-[80%] items-center"><p className="text-sm">Sun</p> <WiThunderstorm size={40} color='orange' /></div>
        <div className="flex w-[100%] items-center text-sm"><p className="mr-[2.5rem] text-slate-100 font-bold text-sm">Storm</p>
        <p className=" text-slate-100 font-bold">36</p><p>/22</p></div>
      </div>
      
    </div>
  </Card>
</div> 

</div>
    </>
  )
}

export default App
