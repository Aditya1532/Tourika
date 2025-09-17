import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InsightsHeader } from "@/components/insights/insights-header"
import { TourismMetrics } from "@/components/insights/tourism-metrics"
import { RegionalAnalytics } from "@/components/insights/regional-analytics"
import { TrendAnalysis } from "@/components/insights/trend-analysis"
import { PolicyRecommendations } from "@/components/insights/policy-recommendations"
import { DataExports } from "@/components/insights/data-exports"

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <InsightsHeader />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              <TourismMetrics />
              <RegionalAnalytics />
              <TrendAnalysis />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <PolicyRecommendations />
              <DataExports />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
