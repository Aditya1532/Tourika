import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, BarChart3, Calendar, Database } from "lucide-react"

export function DataExports() {
  const reports = [
    {
      title: "Monthly Tourism Report",
      description: "Comprehensive monthly analytics",
      format: "PDF",
      size: "2.4 MB",
      lastUpdated: "2 hours ago",
      icon: FileText,
    },
    {
      title: "Regional Performance Data",
      description: "State-wise tourism metrics",
      format: "Excel",
      size: "1.8 MB",
      lastUpdated: "1 day ago",
      icon: BarChart3,
    },
    {
      title: "Seasonal Trends Analysis",
      description: "Historical seasonal patterns",
      format: "CSV",
      size: "856 KB",
      lastUpdated: "3 days ago",
      icon: Calendar,
    },
    {
      title: "Raw Tourism Database",
      description: "Complete dataset for analysis",
      format: "JSON",
      size: "12.5 MB",
      lastUpdated: "1 week ago",
      icon: Database,
    },
  ]

  const quickExports = [
    { label: "Current Month Summary", format: "PDF" },
    { label: "Top 10 Destinations", format: "Excel" },
    { label: "Revenue Breakdown", format: "CSV" },
  ]

  return (
    <div className="space-y-6">
      {/* Data Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            Data Reports
          </CardTitle>
          <CardDescription>Download detailed tourism analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report, index) => {
              const IconComponent = report.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                  <div className="flex items-start gap-3">
                    <IconComponent className="h-4 w-4 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{report.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{report.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {report.format}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Exports */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-bold text-lg">Quick Exports</CardTitle>
          <CardDescription>Generate reports instantly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {quickExports.map((export_, index) => (
              <Button key={index} variant="outline" className="w-full justify-between bg-transparent" size="sm">
                <span className="text-sm">{export_.label}</span>
                <Badge variant="secondary" className="text-xs">
                  {export_.format}
                </Badge>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
