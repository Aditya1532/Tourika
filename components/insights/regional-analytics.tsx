import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp, Users, DollarSign } from "lucide-react"

export function RegionalAnalytics() {
  const regions = [
    {
      name: "North India",
      states: ["Rajasthan", "Himachal Pradesh", "Uttarakhand", "Delhi"],
      visitors: 1200000,
      revenue: 750,
      growth: 14.2,
      marketShare: 35,
      topAttraction: "Golden Triangle Circuit",
    },
    {
      name: "South India",
      states: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
      visitors: 980000,
      revenue: 620,
      growth: 11.8,
      marketShare: 28,
      topAttraction: "Kerala Backwaters",
    },
    {
      name: "West India",
      states: ["Goa", "Maharashtra", "Gujarat", "Rajasthan"],
      visitors: 750000,
      revenue: 480,
      growth: 9.5,
      marketShare: 22,
      topAttraction: "Goa Beaches",
    },
    {
      name: "East & Northeast",
      states: ["West Bengal", "Odisha", "Assam", "Sikkim"],
      visitors: 520000,
      revenue: 320,
      growth: 16.3,
      marketShare: 15,
      topAttraction: "Darjeeling Hills",
    },
  ]

  const seasonalTrends = [
    { month: "Oct", domestic: 85, international: 65 },
    { month: "Nov", domestic: 92, international: 78 },
    { month: "Dec", domestic: 100, international: 95 },
    { month: "Jan", domestic: 88, international: 82 },
    { month: "Feb", domestic: 75, international: 70 },
    { month: "Mar", domestic: 82, international: 88 },
  ]

  return (
    <div className="space-y-6">
      {/* Regional Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Regional Performance Analysis
          </CardTitle>
          <CardDescription>Tourism metrics by geographical regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <div key={region.name} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-heading font-bold text-lg">{region.name}</h4>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {region.growth}%
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Visitors:</span>
                      <span className="font-medium">{(region.visitors / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">Revenue:</span>
                      <span className="font-medium">₹{region.revenue}Cr</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Market Share</span>
                      <span className="font-medium">{region.marketShare}%</span>
                    </div>
                    <Progress value={region.marketShare} className="h-2" />
                  </div>

                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-1">Top Attraction:</p>
                    <p className="text-sm font-medium">{region.topAttraction}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {region.states.slice(0, 3).map((state) => (
                      <Badge key={state} variant="secondary" className="text-xs">
                        {state}
                      </Badge>
                    ))}
                    {region.states.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{region.states.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Seasonal Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg">Seasonal Tourism Trends</CardTitle>
          <CardDescription>Monthly visitor patterns (Oct 2024 - Mar 2025)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {seasonalTrends.map((trend) => (
              <div key={trend.month} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{trend.month} 2024</span>
                  <div className="flex gap-4 text-xs">
                    <span className="text-primary">Domestic: {trend.domestic}%</span>
                    <span className="text-accent">International: {trend.international}%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Progress value={trend.domestic} className="h-2" />
                  </div>
                  <div>
                    <Progress value={trend.international} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
