import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, MapPin, Calendar, Heart, Sparkles } from "lucide-react"

export function PlanningSteps() {
  const steps = [
    {
      icon: MapPin,
      title: "Choose Destination",
      description: "Select where you want to explore in India",
      completed: true,
    },
    {
      icon: Calendar,
      title: "Set Dates & Details",
      description: "Pick your travel dates and group size",
      completed: true,
    },
    {
      icon: Heart,
      title: "Share Interests",
      description: "Tell us what you love to do",
      completed: false,
    },
    {
      icon: Sparkles,
      title: "AI Magic",
      description: "Get your personalized itinerary",
      completed: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading font-bold text-lg">How It Works</CardTitle>
        <CardDescription>Simple steps to your perfect trip</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {step.completed ? (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <IconComponent className="h-4 w-4 text-primary" />
                    <h4 className="font-medium text-sm">{step.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
