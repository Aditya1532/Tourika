import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/5">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/beautiful-indian-landscape-taj-mahal-mountains.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-balance mb-6">
            Discover India <span className="text-primary">Smarter</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience AI-powered trip planning that creates personalized journeys through India's incredible
            destinations, optimized for your budget and preferences.
          </p>

          {/* Search Bar */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Where to?" className="pl-10 h-12" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="When?" className="pl-10 h-12" />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Travelers" className="pl-10 h-12" />
              </div>
              <Button size="lg" className="h-12 font-semibold">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3 h-auto">
              Start Planning Your Trip
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto bg-transparent">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>10,000+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>500+ Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>AI-Powered Planning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
