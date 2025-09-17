import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertTriangle, Clock, Target, DollarSign } from "lucide-react"

export function TrendAnalysis() {
  const emergingTrends = [
    {
      title: "Sustainable Tourism Growth",
      description: "45% increase in eco-friendly accommodation bookings",
      impact: "high",
      trend: "up",
      category: "Environmental",
    },
    {
      title: "Digital Payment Adoption",
      description: "78% of tourists now prefer cashless transactions",
      impact: "medium",
      trend: "up",
      category: "Technology",
    },
    {
      title: "Solo Travel Surge",
      description: "Solo travelers increased by 32% in rural destinations",
      impact: "medium",
      trend: "up",
      category: "Demographics",
    },
    {
      title: "Luxury Segment Decline",
      description: "15% drop in high-end resort bookings",
      impact: "medium",
      trend: "down",
      category: "Market",
    },
  ]

  const challenges = [
    {
      title: "Infrastructure Bottlenecks",
      description: "Transportation capacity issues in popular hill stations",
      severity: "high",
      status: "active",
      timeline: "Immediate attention needed",
    },
    {
      title: "Seasonal Overcrowding",
      description: "Peak season visitor management in coastal areas",
      severity: "medium",
      status: "monitoring",
      timeline: "Plan for next season",
    },
    {
      title: "Digital Divide",
      description: "Limited internet connectivity affecting rural tourism",
      severity: "medium",
      status: "in-progress",
      timeline: "6-month improvement plan",
    },
  ]

  const opportunities = [
    {
      title: "Wellness Tourism Expansion",
      description: "Growing demand for yoga and Ayurveda experiences",
      potential: "₹450 Cr market opportunity",
      timeframe: "Next 2 years",
    },
    {
      title: "Adventure Sports Development",
      description: "Untapped potential in northeastern states",
      potential: "₹280 Cr market opportunity",
      timeframe: "Next 3 years",
    },
    {
      title: "Cultural Heritage Digitization",
      description: "Virtual tours and AR experiences for monuments",
      potential: "₹150 Cr market opportunity",
      timeframe: "Next 18 months",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Emerging Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Emerging Tourism Trends
          </CardTitle>
          <CardDescription>Key patterns shaping the tourism landscape</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergingTrends.map((trend, index) => {
              const TrendIcon = trend.trend === "up" ? TrendingUp : TrendingDown
              return (
                <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm">{trend.title}</h4>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={trend.impact === "high" ? "default" : "secondary"}
                        className={`text-xs ${
                          trend.impact === "high"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {trend.impact} impact
                      </Badge>
                      <TrendIcon className={`h-4 w-4 ${trend.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{trend.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {trend.category}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Key Challenges
            </CardTitle>
            <CardDescription>Issues requiring policy attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-3 rounded-lg border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm">{challenge.title}</h4>
                    <Badge variant={challenge.severity === "high" ? "destructive" : "secondary"} className="text-xs">
                      {challenge.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{challenge.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{challenge.timeline}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {challenge.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Growth Opportunities
            </CardTitle>
            <CardDescription>Potential areas for development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="p-3 rounded-lg border border-border/50 bg-green-50/50">
                  <h4 className="font-medium text-sm mb-2">{opportunity.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{opportunity.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3 text-green-600" />
                      <span className="text-xs font-medium text-green-700">{opportunity.potential}</span>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                      {opportunity.timeframe}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
