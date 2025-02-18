import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cloud, Sun, CloudRain, Search, Thermometer, Wind, Droplets, UmbrellaIcon as UVIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { WeatherData } from "../types/weather"

interface WeatherDisplayProps {
    data: WeatherData
}

export function WeatherDisplay({ data }: WeatherDisplayProps) {
    return (
        <div className="flex-1 bg-background">
            <div className="max-w-4xl space-y-4">
                {" "}
                {/* Reduced space-y-6 to space-y-4 */}
                {/* Search bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input className="pl-10 bg-secondary" placeholder="Search for cities" />
                </div>
                {/* City and current weather */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-4xl font-bold">{data.city}</h1>
                        <p className="text-muted-foreground">Chance of rain: {data.chanceOfRain}%</p>
                        <span className="text-7xl font-bold">{data.currentTemp}°</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Sun className="w-20 h-20 text-yellow-500" />

                    </div>
                </div>
                {/* Hourly forecast */}
                <Card className="w-full">
                    {" "}
                    {/* Added w-full */}
                    <CardHeader className="pb-2">
                        {" "}
                        {/* Reduced padding */}
                        <CardTitle className="text-sm font-medium text-muted-foreground">TODAY'S FORECAST</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                        {" "}
                        {/* Reduced padding */}
                        <div className="grid grid-cols-6 gap-6">
                            {" "}
                            {/* Increased gap */}
                            {data.hourlyForecast.map((hour) => (
                                <div key={hour.time} className="flex flex-col items-center space-y-2">
                                    <span className="text-sm text-muted-foreground">{hour.time}</span>
                                    {hour.icon === "sun" && <Sun className="w-10 h-10 text-yellow-500" />} {/* Increased icon size */}
                                    {hour.icon === "cloud" && <Cloud className="w-10 h-10 text-muted-foreground" />}
                                    {hour.icon === "rain" && <CloudRain className="w-10 h-10 text-blue-500" />}
                                    <span className="font-medium text-lg">{hour.temp}°</span> {/* Increased font size */}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                {/* Conditions */}
                <Card className="w-full">
                    {" "}
                    {/* Added w-full */}
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        {" "}
                        {/* Reduced padding */}
                        <CardTitle className="text-sm font-medium text-muted-foreground">AIR CONDITIONS</CardTitle>
                        <Button variant="secondary" size="sm" className="bg-blue-500 text-white hover:bg-blue-600">
                            See more
                        </Button>
                    </CardHeader>
                    <CardContent className="pt-4">
                        {" "}
                        {/* Adjusted padding */}
                        <div className="grid grid-cols-2 gap-8">
                            {" "}
                            {/* Increased gap */}
                            <div className="flex items-center space-x-4">
                                <Thermometer className="w-10 h-10 text-muted-foreground" /> {/* Increased icon size */}
                                <div>
                                    <p className="text-sm text-muted-foreground">Real Feel</p>
                                    <p className="text-2xl font-medium">{data.conditions.realFeel}°</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Wind className="w-10 h-10 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Wind</p>
                                    <p className="text-2xl font-medium">{data.conditions.wind}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Droplets className="w-10 h-10 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Chance of rain</p>
                                    <p className="text-2xl font-medium">{data.conditions.chanceOfRain}%</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <UVIcon className="w-10 h-10 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">UV Index</p>
                                    <p className="text-2xl font-medium">{data.conditions.uvIndex}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

