import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="font-heading font-black text-3xl md:text-4xl text-balance">
          Welcome back, <span className="text-primary">Traveler</span>
        </h1>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          Ready for your next adventure? Here are some personalized recommendations for you.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="bg-transparent">
          <Bell className="h-4 w-4 mr-2" />
          Notifications
          <Badge variant="destructive" className="ml-2 px-1.5 py-0.5 text-xs">
            3
          </Badge>
        </Button>
        <Button variant="outline" size="sm" className="bg-transparent">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New Trip
        </Button>
      </div>
    </div>
  )
}
