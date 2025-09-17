import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, Plane, Heart, ArrowRight, Sparkles } from "lucide-react"

export function TripRecommendations() {
  const recommendations = [
    {
      id: 1,
      title: "Spiritual Journey to Rishikesh",
      location: "Rishikesh, Uttarakhand",
      duration: "5 Days",
      price: "₹18,500",
      rating: 4.8,
      image: "/rishikesh-ganges-yoga.jpg",
      tags: ["Spiritual", "Adventure", "Yoga"],
      match: 95,
      description: "Experience yoga, meditation, and river rafting in the yoga capital of the world.",
      highlights: ["Ganga Aarti", "White Water Rafting", "Yoga Sessions", "Temple Visits"],
    },
    {
      id: 2,
      title: "Royal Heritage of Udaipur",
      location: "Udaipur, Rajasthan",
      duration: "4 Days",
      price: "₹32,000",
      rating: 4.9,
      image: "/udaipur-city-palace-lake.jpg",
      tags: ["Heritage", "Luxury", "Culture"],
      match: 88,
      description: "Explore magnificent palaces, serene lakes, and royal architecture.",
      highlights: ["City Palace", "Lake Pichola", "Jagdish Temple", "Saheliyon Ki Bari"],
    },
    {
      id: 3,
      title: "Backwaters & Spice Gardens",
      location: "Alleppey, Kerala",
      duration: "6 Days",
      price: "₹24,000",
      rating: 4.7,
      image: "/alleppey-backwaters-houseboat.jpg",
      tags: ["Nature", "Relaxation", "Houseboat"],
      match: 82,
      description: "Cruise through tranquil backwaters and explore aromatic spice plantations.",
      highlights: ["Houseboat Stay", "Spice Gardens", "Ayurvedic Spa", "Traditional Cuisine"],
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-2">
            <Sparkles className="inline h-6 w-6 text-primary mr-2" />
            AI Recommendations
          </h2>
          <p className="text-muted-foreground">Personalized trips based on your preferences and travel history</p>
        </div>
        <Button variant="outline" className="bg-transparent">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
        {recommendations.map((trip) => (
          <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/3 aspect-video md:aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center opacity-80"></div>
                </div>
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{trip.match}% Match</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                      {trip.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{trip.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{trip.rating}</span>
                    </div>
                    <div className="font-heading font-bold text-lg text-primary">{trip.price}</div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{trip.description}</p>

                {/* Trip Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>2 Travelers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Plane className="h-4 w-4" />
                    <span>Flights Included</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {trip.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Trip Highlights:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {trip.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button className="flex-1">Book Now</Button>
                  <Button variant="outline" className="bg-transparent">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
