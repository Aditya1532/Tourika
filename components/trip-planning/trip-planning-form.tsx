"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { MapPin, CalendarIcon, Users, DollarSign, Heart, Sparkles, ChevronRight, Loader2 } from "lucide-react"

export function TripPlanningForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [budget, setBudget] = useState([25000])
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const interests = [
    "Adventure Sports",
    "Cultural Heritage",
    "Spiritual Journey",
    "Wildlife Safari",
    "Beach Relaxation",
    "Mountain Trekking",
    "Food & Cuisine",
    "Photography",
    "Yoga & Wellness",
    "Shopping",
    "Nightlife",
    "Local Festivals",
  ]

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const handleGenerateTrip = async () => {
    setIsGenerating(true)
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
    // In a real app, this would redirect to results page
    alert("Trip generated! Check your dashboard for the personalized itinerary.")
  }

  const steps = [
    { number: 1, title: "Destination & Dates", description: "Where and when do you want to travel?" },
    { number: 2, title: "Travel Details", description: "Tell us about your group and preferences" },
    { number: 3, title: "Interests & Budget", description: "What do you love and how much to spend?" },
    { number: 4, title: "Generate Trip", description: "Let AI create your perfect itinerary" },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
        <CardTitle className="font-heading font-bold text-2xl">Trip Planning Form</CardTitle>
        <CardDescription>Fill in your preferences and let our AI create the perfect itinerary</CardDescription>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mt-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentStep >= step.number ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 h-0.5 mx-2 transition-colors ${
                    currentStep > step.number ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Step 1: Destination & Dates */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="destination" className="text-base font-medium mb-2 block">
                <MapPin className="inline h-4 w-4 mr-2" />
                Preferred Destination
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a state or region in India" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="kerala">Kerala</SelectItem>
                  <SelectItem value="goa">Goa</SelectItem>
                  <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                  <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                  <SelectItem value="anywhere">Surprise Me!</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block">
                  <CalendarIcon className="inline h-4 w-4 mr-2" />
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      {startDate ? format(startDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-base font-medium mb-2 block">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      {endDate ? format(endDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <Label htmlFor="flexibility" className="text-base font-medium mb-2 block">
                Date Flexibility
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="How flexible are your dates?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exact">Exact dates only</SelectItem>
                  <SelectItem value="few-days">±2-3 days flexible</SelectItem>
                  <SelectItem value="week">±1 week flexible</SelectItem>
                  <SelectItem value="month">±1 month flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Travel Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="travelers" className="text-base font-medium mb-2 block">
                  <Users className="inline h-4 w-4 mr-2" />
                  Number of Travelers
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="How many people?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Solo (1 person)</SelectItem>
                    <SelectItem value="2">Couple (2 people)</SelectItem>
                    <SelectItem value="3-4">Small Group (3-4 people)</SelectItem>
                    <SelectItem value="5-8">Large Group (5-8 people)</SelectItem>
                    <SelectItem value="9+">Big Group (9+ people)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="travel-style" className="text-base font-medium mb-2 block">
                  Travel Style
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your style?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget Backpacker</SelectItem>
                    <SelectItem value="mid-range">Comfortable Mid-range</SelectItem>
                    <SelectItem value="luxury">Luxury Experience</SelectItem>
                    <SelectItem value="mixed">Mix of Budget & Comfort</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="accommodation" className="text-base font-medium mb-2 block">
                Accommodation Preference
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Hotels", "Homestays", "Hostels", "Resorts"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <Label htmlFor={type} className="text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="transport" className="text-base font-medium mb-2 block">
                Transportation Preference
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="How do you prefer to travel?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flights">Flights (fastest)</SelectItem>
                  <SelectItem value="trains">Trains (scenic)</SelectItem>
                  <SelectItem value="car">Private Car/Taxi</SelectItem>
                  <SelectItem value="bus">Bus (budget-friendly)</SelectItem>
                  <SelectItem value="mixed">Mix of options</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 3: Interests & Budget */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-4 block">
                <Heart className="inline h-4 w-4 mr-2" />
                What interests you most? (Select all that apply)
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedInterests.includes(interest)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-sm font-medium text-center">{interest}</div>
                  </div>
                ))}
              </div>
              {selectedInterests.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm text-muted-foreground mb-2">Selected interests:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedInterests.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <Label className="text-base font-medium mb-4 block">
                <DollarSign className="inline h-4 w-4 mr-2" />
                Budget per person: ₹{budget[0].toLocaleString()}
              </Label>
              <Slider value={budget} onValueChange={setBudget} max={100000} min={5000} step={2500} className="w-full" />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>₹5,000</span>
                <span>₹1,00,000+</span>
              </div>
            </div>

            <div>
              <Label htmlFor="special-requests" className="text-base font-medium mb-2 block">
                Special Requests or Requirements
              </Label>
              <Textarea
                id="special-requests"
                placeholder="Any dietary restrictions, accessibility needs, or special occasions we should know about?"
                className="min-h-[100px]"
              />
            </div>
          </div>
        )}

        {/* Step 4: Generate Trip */}
        {currentStep === 4 && (
          <div className="text-center space-y-6">
            <div className="max-w-md mx-auto">
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Ready to Generate Your Trip!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI will analyze your preferences and create a personalized itinerary with the best destinations,
                activities, and accommodations for your perfect Indian adventure.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
              <h4 className="font-medium mb-3">Your Trip Summary:</h4>
              <div className="space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">
                    {startDate && endDate
                      ? `${Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days`
                      : "Not specified"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Budget:</span>
                  <span className="font-medium">₹{budget[0].toLocaleString()} per person</span>
                </div>
                <div className="flex justify-between">
                  <span>Interests:</span>
                  <span className="font-medium">{selectedInterests.length} selected</span>
                </div>
              </div>
            </div>

            <Button onClick={handleGenerateTrip} disabled={isGenerating} size="lg" className="text-lg px-8 py-3 h-auto">
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Your Perfect Trip...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate My Trip
                </>
              )}
            </Button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="bg-transparent"
          >
            Previous
          </Button>

          {currentStep < 4 ? (
            <Button onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}>
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
