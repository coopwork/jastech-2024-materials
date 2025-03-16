import { ThemeProvider } from "@/components/theme_switcher/theme-provider.tsx";
import Search_Input from "./components/search.tsx";
import SideCard from "./components/card_menu.tsx";
import CardCurrent from "./components/card_current.tsx";
import CardTodayForecast from "./components/card_today_forecast.tsx";
import AirConditions from "./components/air_conditions.tsx";
import SevenDayForecast from "./components/seven_day_forecast.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-center w-screen min-h-screen bg-bodybackground font-Rubik p-4 sm:p-6 md:p-10">
        <div className="rounded-3xl bg-mainbackground p-4 w-full max-w-5xl h-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_7fr_4fr] grid-rows-[auto_auto_auto_auto] gap-3 h-full">
            <SideCard />
            <Search_Input  />
            <CardCurrent />
            <CardTodayForecast  />
            <AirConditions  />
            <SevenDayForecast  />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
