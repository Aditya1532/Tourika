import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TripPlanningForm } from "@/components/trip-planning/trip-planning-form"
import { PlanningSteps } from "@/components/trip-planning/planning-steps"
import { AIInsights } from "@/components/trip-planning/ai-insights"

export default function PlanTripPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading font-black text-3xl md:text-5xl text-balance mb-4">
              Plan Your Perfect <span className="text-primary">Indian Adventure</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Let our AI create a personalized itinerary based on your preferences, budget, and travel style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <TripPlanningForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <PlanningSteps />
              <AIInsights />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
