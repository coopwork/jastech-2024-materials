import { Sidebar } from "./components/Sidebar"
import { WeatherDisplay } from "./components/WeatherDisplay"
import { WeekForecast } from "./components/WeekForecast"

const mockData = {
    city: "Madrid",
    currentTemp: 31,
    chanceOfRain: 0,
    hourlyForecast: [
        { time: "6:00 AM", temp: 25, icon: "cloud" },
        { time: "9:00 AM", temp: 28, icon: "cloud" },
        { time: "12:00 PM", temp: 33, icon: "sun" },
        { time: "3:00 PM", temp: 34, icon: "sun" },
        { time: "6:00 PM", temp: 32, icon: "sun" },
        { time: "9:00 PM", temp: 30, icon: "cloud" },
    ],
    conditions: {
        realFeel: 30,
        wind: "0.2 km/h",
        chanceOfRain: 0,
        uvIndex: 3,
    },
    weekForecast: [
        { day: "Today", condition: "Sunny", temp: { high: 36, low: 22 } },
        { day: "Tue", condition: "Sunny", temp: { high: 37, low: 21 } },
        { day: "Wed", condition: "Sunny", temp: { high: 37, low: 21 } },
        { day: "Thu", condition: "Cloudy", temp: { high: 37, low: 21 } },
        { day: "Fri", condition: "Cloudy", temp: { high: 37, low: 21 } },
        { day: "Sat", condition: "Rainy", temp: { high: 37, low: 21 } },
        { day: "Sun", condition: "Storm", temp: { high: 37, low: 21 } },
    ],
}

export default function App() {
    return (
        <div className="min-h-screen bg-background text-foreground flex overflow-hidden">
            <Sidebar />
            <div className="flex-1 ml-32 p-10 flex">
                <WeatherDisplay data={mockData} />
                <div className="ml-6 w-80">
                    <WeekForecast forecast={mockData.weekForecast} />
                </div>
            </div>
        </div>
    )
}

