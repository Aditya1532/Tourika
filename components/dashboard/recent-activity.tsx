import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "booking",
      title: "Goa Beach Resort",
      description: "Booking confirmed for Dec 15-20, 2024",
      status: "confirmed",
      date: "2 days ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: 2,
      type: "planning",
      title: "Himachal Pradesh Trek",
      description: "AI itinerary generated for mountain adventure",
      status: "draft",
      date: "5 days ago",
      icon: MapPin,
      color: "text-primary",
    },
    {
      id: 3,
      type: "reminder",
      title: "Visa Application",
      description: "Complete visa application for international trip",
      status: "pending",
      date: "1 week ago",
      icon: AlertCircle,
      color: "text-orange-500",
    },
    {
      id: 4,
      type: "completed",
      title: "Kerala Backwaters",
      description: "Trip completed - Rate your experience",
      status: "review",
      date: "2 weeks ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
      case "draft":
        return <Badge variant="secondary">Draft</Badge>
      case "pending":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Pending</Badge>
      case "review":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Review</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-heading font-bold text-lg">Recent Activity</CardTitle>
            <CardDescription>Your latest bookings, plans, and updates</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="bg-transparent">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-border transition-colors"
              >
                <div className={`p-2 rounded-lg bg-muted/50 ${activity.color}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm truncate">{activity.title}</h4>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-2">{activity.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
