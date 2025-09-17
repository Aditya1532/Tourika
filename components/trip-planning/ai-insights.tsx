import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Calendar, DollarSign, Lightbulb } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Peak Season Alert",
      description: "December is peak season for Goa. Consider booking early for better rates.",
      type: "warning",
    },
    {
      icon: DollarSign,
      title: "Budget Tip",
      description: "Traveling in groups of 4+ can save up to 30% on accommodation costs.",
      type: "tip",
    },
    {
      icon: Calendar,
      title: "Festival Season",
      description: "Your dates coincide with local festivals - perfect for cultural experiences!",
      type: "info",
    },
  ]

  const popularChoices = [
    { label: "Kerala Backwaters", percentage: 85 },
    { label: "Rajasthan Heritage", percentage: 78 },
    { label: "Goa Beaches", percentage: 72 },
    { label: "Himachal Mountains", percentage: 65 },
  ]

  return (
    <div className="space-y-6">
      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            AI Insights
          </CardTitle>
          <CardDescription>Smart recommendations based on your inputs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const IconComponent = insight.icon
              return (
                <div key={index} className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-start gap-3">
                    <IconComponent className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{insight.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{insight.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Popular Choices */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Popular This Month
          </CardTitle>
          <CardDescription>What other travelers are choosing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularChoices.map((choice, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{choice.label}</span>
                <Badge variant="secondary" className="text-xs">
                  {choice.percentage}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
