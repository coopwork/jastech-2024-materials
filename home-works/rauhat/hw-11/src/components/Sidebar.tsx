import { Button } from "@/components/ui/button"
import { Cloud, Map, Settings, Menu, Wind } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
    return (
        <div className="fixed left-3 top-0 h-full w-16 bg-background border-r flex flex-col items-center py-4 space-y-8">
            <Button variant="ghost" size="icon" className="bg-primary/10 text-primary">
                <Wind className="w-6 h-6" />
            </Button>

            <nav className="flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center">
                    <Button variant="ghost" size="icon" className="bg-primary/10 text-primary">
                        <Cloud className="w-5 h-5" />
                    </Button>
                    <span className="text-xs mt-1">Weather</span>
                </div>
                <Separator className="w-8" />
                <div className="flex flex-col items-center">
                    <Button variant="ghost" size="icon">
                        <Menu className="w-5 h-5" />
                    </Button>
                    <span className="text-xs mt-1">Cities</span>
                </div>
                <div className="flex flex-col items-center">
                    <Button variant="ghost" size="icon">
                        <Map className="w-5 h-5" />
                    </Button>
                    <span className="text-xs mt-1">Map</span>
                </div>
                <div className="flex flex-col items-center">
                    <Button variant="ghost" size="icon">
                        <Settings className="w-5 h-5" />
                    </Button>
                    <span className="text-xs mt-1">Settings</span>
                </div>
            </nav>
        </div>
    )
}

