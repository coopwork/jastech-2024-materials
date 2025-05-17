import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sun, Cloud, CloudRain, CloudLightning } from "lucide-react";

const WeatherDashboard = () => {
  const forecast = [
    { time: "6:00 AM", temp: 25, icon: <Cloud /> },
    { time: "9:00 AM", temp: 28, icon: <Sun className="opacity-50" /> },
    { time: "12:00 PM", temp: 33, icon: <Sun /> },
    { time: "3:00 PM", temp: 34, icon: <Sun /> },
    { time: "6:00 PM", temp: 32, icon: <Sun /> },
    { time: "9:00 PM", temp: 30, icon: <Cloud /> },
  ];

  const weeklyForecast = [
    { day: "Today", weather: "Sunny", icon: <Sun />, temp: "36/22" },
    { day: "Tue", weather: "Sunny", icon: <Sun />, temp: "37/21" },
    { day: "Wed", weather: "Sunny", icon: <Sun />, temp: "37/21" },
    { day: "Thu", weather: "Cloudy", icon: <Cloud />, temp: "37/21" },
    { day: "Fri", weather: "Cloudy", icon: <Cloud />, temp: "37/21" },
    { day: "Sat", weather: "Rainy", icon: <CloudRain />, temp: "37/21" },
    { day: "Sun", weather: "Storm", icon: <CloudLightning />, temp: "37/21" },
  ];

  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex">
      <aside className="w-20 bg-[#1e293b] flex flex-col items-center p-4 space-y-8">
        <Sun className="w-6 h-6" />
        <div className="w-5 h-5 bg-white rounded" />
        <div className="w-5 h-5 bg-white rounded" />
        <div className="w-5 h-5 bg-white rounded" />
      </aside>

      <main className="flex-1 p-6 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Input placeholder="Search for cities" className="mb-4 bg-[#1e293b] border-none text-white" />
          <Card className="bg-[#1e293b] mb-4">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl">Madrid</h2>
                  <p className="text-sm">Chance of rain: 0%</p>
                  <p className="text-5xl font-bold mt-2">31°</p>
                </div>
                <Sun className="w-20 h-20 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e293b] mb-4">
            <CardContent className="p-4 flex justify-between">
              {forecast.map((item, i) => (
                <div key={i} className="text-center">
                  <p>{item.time}</p>
                  <div className="flex justify-center mt-1">{item.icon}</div>
                  <p className="mt-1">{item.temp}°</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-[#1e293b]">
            <CardContent className="p-4">
              <p className="mb-2">AIR CONDITIONS</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Real Feel <span className="float-right">30°</span></div>
                <div>Wind <span className="float-right">0.2 km/h</span></div>
                <div>Chance of Rain <span className="float-right">0%</span></div>
                <div>UV Index <span className="float-right">3</span></div>
              </div>
              <button className="mt-4 text-blue-400 underline">See more</button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-[#1e293b]">
            <CardContent className="p-4">
              <p className="mb-4">7-DAY FORECAST</p>
              <ScrollArea className="h-[400px]">
                {weeklyForecast.map((day, i) => (
                  <div key={i} className="flex justify-between items-center mb-4">
                    <span>{day.day}</span>
                    <div className="flex items-center space-x-2">
                      {day.icon}
                      <span>{day.weather}</span>
                    </div>
                    <span>{day.temp}</span>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WeatherDashboard;
