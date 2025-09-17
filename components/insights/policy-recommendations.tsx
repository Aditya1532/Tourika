import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, Clock, DollarSign } from "lucide-react"

export function PolicyRecommendations() {
  const recommendations = [
    {
      title: "Infrastructure Investment",
      priority: "high",
      impact: "₹2,500 Cr potential revenue",
      timeline: "12-18 months",
      description: "Upgrade transportation networks in emerging destinations",
      actions: ["Road connectivity", "Airport expansion", "Digital infrastructure"],
    },
    {
      title: "Sustainable Tourism Framework",
      priority: "medium",
      impact: "30% visitor growth",
      timeline: "6-12 months",
      description: "Implement eco-friendly tourism guidelines",
      actions: ["Green certification", "Waste management", "Carbon footprint tracking"],
    },
    {
      title: "Digital Tourism Platform",
      priority: "high",
      impact: "25% booking efficiency",
      timeline: "3-6 months",
      description: "Unified booking and information system",
      actions: ["Mobile app", "Real-time updates", "Multi-language support"],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Policy Recommendations
        </CardTitle>
        <CardDescription>AI-generated suggestions for tourism development</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-medium text-sm">{rec.title}</h4>
                <Badge
                  variant={rec.priority === "high" ? "default" : "secondary"}
                  className={`text-xs ${rec.priority === "high" ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {rec.priority} priority
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{rec.description}</p>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-xs">
                  <DollarSign className="h-3 w-3 text-green-600" />
                  <span className="text-green-700 font-medium">{rec.impact}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{rec.timeline}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium">Key Actions:</p>
                <div className="flex flex-wrap gap-1">
                  {rec.actions.map((action) => (
                    <Badge key={action} variant="outline" className="text-xs">
                      {action}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full mt-4" size="sm">
          View Detailed Report <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
