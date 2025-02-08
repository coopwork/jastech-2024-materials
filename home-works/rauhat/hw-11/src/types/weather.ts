export interface WeatherData {
    city: string
    currentTemp: number
    chanceOfRain: number
    hourlyForecast: HourlyForecast[]
    conditions: {
        realFeel: number
        wind: string
        chanceOfRain: number
        uvIndex: number
    }
    weekForecast: WeekForecast[]
}

export interface HourlyForecast {
    time: string
    temp: number
    icon: string
}

export interface WeekForecast {
    day: string
    condition: string
    temp: {
        high: number
        low: number
    }
}

