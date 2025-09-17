import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Calendar, MessageCircle, CreditCard, MapPin, Plane, Hotel } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: Plus,
      title: "Plan New Trip",
      description: "Start AI-powered trip planning",
      color: "bg-primary text-primary-foreground hover:bg-primary/90",
    },
    {
      icon: Search,
      title: "Explore Destinations",
      description: "Browse popular places",
      color: "bg-accent text-accent-foreground hover:bg-accent/90",
    },
    {
      icon: Calendar,
      title: "My Bookings",
      description: "View upcoming trips",
      color: "bg-muted text-muted-foreground hover:bg-muted/80",
    },
    {
      icon: MessageCircle,
      title: "AI Assistant",
      description: "Get travel help 24/7",
      color: "bg-primary text-primary-foreground hover:bg-primary/90",
    },
  ]

  const quickBooking = [
    { icon: Plane, label: "Flights", color: "text-primary" },
    { icon: Hotel, label: "Hotels", color: "text-accent" },
    { icon: MapPin, label: "Activities", color: "text-chart-3" },
    { icon: CreditCard, label: "Travel Insurance", color: "text-chart-4" },
  ]

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg">Quick Actions</CardTitle>
          <CardDescription>Get started with your next adventure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {actions.map((action) => {
              const IconComponent = action.icon
              return (
                <Button
                  key={action.title}
                  variant="outline"
                  className={`h-auto p-4 flex flex-col items-center gap-2 text-center bg-transparent hover:${action.color.split(" ")[0]} hover:text-white transition-all`}
                >
                  <IconComponent className="h-5 w-5" />
                  <div>
                    <div className="font-medium text-xs">{action.title}</div>
                    <div className="text-xs opacity-70">{action.description}</div>
                  </div>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Booking */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg">Quick Booking</CardTitle>
          <CardDescription>Book travel essentials instantly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {quickBooking.map((item) => {
              const IconComponent = item.icon
              return (
                <Button key={item.label} variant="ghost" className="w-full justify-start gap-3 h-auto py-3">
                  <IconComponent className={`h-5 w-5 ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
