import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Download, Filter, Calendar } from "lucide-react"

export function InsightsHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="h-8 w-8 text-primary" />
          <h1 className="font-heading font-black text-3xl md:text-4xl">
            Tourism <span className="text-primary">Policy Insights</span>
          </h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Data-driven insights for tourism policymakers and stakeholders across India
        </p>
        <div className="flex items-center gap-2 mt-3">
          <Badge variant="secondary" className="text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            Last Updated: Dec 2024
          </Badge>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Live Data</Badge>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex items-center gap-3">
          <Select defaultValue="2024">
            <SelectTrigger className="w-32 bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-states">
            <SelectTrigger className="w-40 bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-states">All States</SelectItem>
              <SelectItem value="rajasthan">Rajasthan</SelectItem>
              <SelectItem value="kerala">Kerala</SelectItem>
              <SelectItem value="goa">Goa</SelectItem>
              <SelectItem value="himachal">Himachal Pradesh</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-background">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="bg-background">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
    </div>
  )
}
