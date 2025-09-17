import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { TripRecommendations } from "@/components/dashboard/trip-recommendations"
import { UserPreferences } from "@/components/dashboard/user-preferences"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DashboardHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <TripRecommendations />
              <RecentActivity />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <QuickActions />
              <UserPreferences />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
