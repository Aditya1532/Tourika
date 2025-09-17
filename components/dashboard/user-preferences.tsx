import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Settings, TrendingUp } from "lucide-react"

export function UserPreferences() {
  const preferences = [
    { category: "Adventure", percentage: 85, color: "bg-primary" },
    { category: "Culture", percentage: 70, color: "bg-accent" },
    { category: "Relaxation", percentage: 60, color: "bg-chart-3" },
    { category: "Food", percentage: 90, color: "bg-chart-4" },
    { category: "Nature", percentage: 75, color: "bg-chart-5" },
  ]

  const interests = ["Yoga", "Photography", "Hiking", "Local Cuisine", "Heritage Sites", "Wildlife"]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-heading font-bold text-lg">Your Preferences</CardTitle>
            <CardDescription>Based on your travel history and interests</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Travel Style */}
        <div>
          <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Travel Style
          </h4>
          <div className="space-y-3">
            {preferences.map((pref) => (
              <div key={pref.category}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{pref.category}</span>
                  <span className="text-muted-foreground">{pref.percentage}%</span>
                </div>
                <Progress value={pref.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h4 className="font-medium text-sm mb-3">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Badge key={interest} variant="secondary" className="text-xs">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <h4 className="font-medium text-sm mb-2">Preferred Budget</h4>
          <div className="text-2xl font-heading font-bold text-primary mb-1">₹15,000 - ₹35,000</div>
          <p className="text-xs text-muted-foreground">Per person for 5-day trips</p>
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          Update Preferences
        </Button>
      </CardContent>
    </Card>
  )
}
