import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, CloudLightning } from "lucide-react"
import type { WeekForecast } from "../types/weather"

interface WeekForecastProps {
    forecast: WeekForecast[]
}

export function WeekForecast({ forecast }: WeekForecastProps) {
    const getIcon = (condition: string) => {
        switch (condition.toLowerCase()) {
            case "sunny":
                return <Sun className="w-6 h-6 text-yellow-500" />
            case "cloudy":
                return <Cloud className="w-6 h-6 text-muted-foreground" />
            case "rainy":
                return <CloudRain className="w-6 h-6 text-blue-500" />
            case "storm":
                return <CloudLightning className="w-6 h-6 text-yellow-500" />
            default:
                return <Sun className="w-6 h-6 text-yellow-500" />
        }
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">7-DAY FORECAST</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {forecast.map((day) => (
                        <div key={day.day} className="flex items-center justify-between py-2">
                            <span className="text-base font-medium w-16">{day.day}</span>
                            {getIcon(day.condition)}
                            <span className="text-base text-muted-foreground flex-grow ml-6">{day.condition}</span>
                            <span className="text-base font-medium">
                {day.temp.high}°/{day.temp.low}°
              </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

