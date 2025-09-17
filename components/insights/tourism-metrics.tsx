import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, MapPin, Plane, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function TourismMetrics() {
  const metrics = [
    {
      title: "Total Visitors",
      value: "2.4M",
      change: "+12.5%",
      trend: "up",
      description: "Monthly tourist arrivals",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Tourism Revenue",
      value: "₹1,850 Cr",
      change: "+8.3%",
      trend: "up",
      description: "Monthly tourism earnings",
      icon: DollarSign,
      color: "text-accent",
    },
    {
      title: "Average Stay",
      value: "4.2 Days",
      change: "-2.1%",
      trend: "down",
      description: "Average duration per visit",
      icon: MapPin,
      color: "text-chart-3",
    },
    {
      title: "International Visitors",
      value: "340K",
      change: "+15.7%",
      trend: "up",
      description: "Foreign tourist arrivals",
      icon: Plane,
      color: "text-chart-4",
    },
  ]

  const topDestinations = [
    { name: "Rajasthan", visitors: "485K", growth: "+14.2%" },
    { name: "Kerala", visitors: "392K", growth: "+11.8%" },
    { name: "Goa", visitors: "356K", growth: "+9.5%" },
    { name: "Himachal Pradesh", visitors: "298K", growth: "+16.3%" },
    { name: "Uttarakhand", visitors: "267K", growth: "+7.9%" },
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div>
        <h2 className="font-heading font-bold text-2xl mb-4">Key Tourism Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => {
            const IconComponent = metric.icon
            const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight
            return (
              <Card key={metric.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`h-8 w-8 ${metric.color}`} />
                    <Badge
                      variant={metric.trend === "up" ? "default" : "secondary"}
                      className={`${
                        metric.trend === "up"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }`}
                    >
                      <TrendIcon className="h-3 w-3 mr-1" />
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-2xl">{metric.value}</h3>
                    <p className="text-sm font-medium">{metric.title}</p>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Top Destinations */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg">Top Performing Destinations</CardTitle>
          <CardDescription>States with highest visitor growth this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topDestinations.map((destination, index) => (
              <div key={destination.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{destination.name}</h4>
                    <p className="text-sm text-muted-foreground">{destination.visitors} visitors</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {destination.growth}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
