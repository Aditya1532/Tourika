import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  DollarSign,
  MousePointer,
  MessageCircle,
  TrendingUp,
  Home,
  Users,
  Palette,
  ArrowRight,
  Star,
  MapPin,
  Clock,
} from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Powered by AI
          </Badge>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-balance mb-6">
            Smart Travel Planning <span className="text-primary">Made Simple</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Experience the future of travel with our AI-powered platform that understands your preferences and creates
            perfect itineraries for your Indian adventure.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading font-bold text-lg">AI Trip Planner</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="leading-relaxed">
                Intelligent algorithms create personalized itineraries based on your interests, budget, and travel
                style.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="font-heading font-bold text-lg">Budget Optimizer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="leading-relaxed">
                Smart budget allocation ensures you get maximum value while staying within your financial limits.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MousePointer className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading font-bold text-lg">One-Click Booking</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="leading-relaxed">
                Seamlessly book flights, hotels, and experiences with our integrated booking system.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="font-heading font-bold text-lg">24/7 AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="leading-relaxed">
                Get instant answers and real-time support throughout your journey with our intelligent chatbot.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Travel Trends Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">Trending Destinations</h3>
              <p className="text-muted-foreground">Discover what's popular among travelers right now</p>
            </div>
            <Button variant="outline" className="hidden sm:flex bg-transparent">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 bg-[url('/kerala-backwaters-houseboat.jpg')] bg-cover bg-center opacity-80"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Kerala, India</span>
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Kerala Backwaters</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Experience serene houseboat cruises through palm-fringed canals and traditional villages.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <span className="text-sm text-muted-foreground">From ₹15,000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 bg-[url('/rajasthan-jaipur-palace.jpg')] bg-cover bg-center opacity-80"></div>
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Rajasthan, India</span>
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Royal Rajasthan</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Explore magnificent palaces, vibrant markets, and desert landscapes in the land of kings.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                  <span className="text-sm text-muted-foreground">From ₹25,000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 bg-[url('/goa-beaches-sunset.jpg')] bg-cover bg-center opacity-80"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  <Users className="w-3 h-3 mr-1" />
                  Hot Deal
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Goa, India</span>
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Goa Beaches</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Relax on pristine beaches, enjoy water sports, and experience vibrant nightlife.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                  <span className="text-sm text-muted-foreground">From ₹12,000</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Local Experiences Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">Local Experiences</h3>
              <p className="text-muted-foreground">Connect with authentic homestays, guides, and artisan shops</p>
            </div>
            <Button variant="outline" className="hidden sm:flex bg-transparent">
              Explore All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg">Homestays</h4>
                    <p className="text-sm text-muted-foreground">500+ verified hosts</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Stay with local families and experience authentic Indian hospitality and culture.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Browse Homestays
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg">Local Guides</h4>
                    <p className="text-sm text-muted-foreground">300+ expert guides</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Discover hidden gems with knowledgeable local guides who know the best spots.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Find Guides
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg">Artisan Shops</h4>
                    <p className="text-sm text-muted-foreground">200+ local artisans</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Shop authentic handicrafts, textiles, and artwork directly from skilled artisans.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Shop Local
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
