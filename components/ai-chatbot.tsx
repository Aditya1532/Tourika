"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, MapPin, Calendar, DollarSign } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  suggestions?: string[]
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm your AI travel assistant for India. I can help you plan trips, find destinations, check weather, book accommodations, and answer any travel questions. How can I assist you today?",
      timestamp: new Date(),
      suggestions: [
        "Plan a 5-day trip to Kerala",
        "Best time to visit Rajasthan",
        "Budget for Goa vacation",
        "Adventure activities in Himachal",
      ],
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()

    let response = ""
    let suggestions: string[] = []

    if (lowerMessage.includes("kerala") || lowerMessage.includes("backwater")) {
      response =
        "Kerala is perfect for a peaceful getaway! I recommend visiting Alleppey for houseboat cruises, Munnar for tea gardens, and Kochi for cultural experiences. The best time is October to March. Would you like me to create a detailed itinerary?"
      suggestions = [
        "Create Kerala itinerary",
        "Kerala budget estimate",
        "Best Kerala homestays",
        "Kerala weather forecast",
      ]
    } else if (lowerMessage.includes("rajasthan") || lowerMessage.includes("desert")) {
      response =
        "Rajasthan offers incredible royal heritage! Visit Jaipur's palaces, Udaipur's lakes, Jodhpur's blue city, and Jaisalmer's golden fort. October to March is ideal weather. I can help plan your royal adventure!"
      suggestions = [
        "Rajasthan 7-day plan",
        "Palace hotels in Rajasthan",
        "Desert safari booking",
        "Rajasthan cultural tours",
      ]
    } else if (lowerMessage.includes("goa") || lowerMessage.includes("beach")) {
      response =
        "Goa is perfect for beaches and nightlife! North Goa has vibrant beaches like Baga and Calangute, while South Goa offers peaceful spots like Palolem. November to February is the best season. What type of Goa experience interests you?"
      suggestions = ["North vs South Goa", "Goa water sports", "Beach resorts in Goa", "Goa nightlife guide"]
    } else if (lowerMessage.includes("budget") || lowerMessage.includes("cost")) {
      response =
        "I can help estimate your travel budget! For a mid-range 5-day trip in India, expect ₹15,000-30,000 per person including accommodation, food, transport, and activities. Luxury trips can go up to ₹50,000+. What's your preferred budget range?"
      suggestions = ["Budget breakdown", "Money-saving tips", "Luxury vs budget travel", "Payment methods in India"]
    } else if (lowerMessage.includes("weather") || lowerMessage.includes("climate")) {
      response =
        "India has diverse climates! Currently, it's winter season (Dec-Feb) - perfect for most destinations. Hill stations are cold, beaches are pleasant, and plains are comfortable. Which destination's weather would you like to know about?"
      suggestions = ["Weather by month", "Best season for mountains", "Monsoon travel tips", "Winter destinations"]
    } else if (lowerMessage.includes("book") || lowerMessage.includes("reservation")) {
      response =
        "I can help you book flights, hotels, activities, and more! Our platform offers one-click booking with the best rates. You can also book train tickets, car rentals, and guided tours. What would you like to book?"
      suggestions = ["Book flights", "Hotel reservations", "Train tickets", "Activity bookings"]
    } else {
      response =
        "I'm here to help with all your India travel needs! I can assist with trip planning, destination recommendations, weather updates, bookings, cultural insights, and travel tips. What specific information are you looking for?"
      suggestions = ["Popular destinations", "Travel tips for India", "Cultural experiences", "Adventure activities"]
    }

    return {
      id: Date.now().toString(),
      type: "bot",
      content: response,
      timestamp: new Date(),
      suggestions,
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI processing delay
    setTimeout(() => {
      const botResponse = simulateBotResponse(inputMessage)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}>
        <CardHeader className="p-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-sm font-heading font-bold">Tourika AI Assistant</CardTitle>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Online • 24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[536px]">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "justify-end" : ""}`}>
                    {message.type === "bot" && (
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}

                    <div className={`max-w-[280px] ${message.type === "user" ? "order-first" : ""}`}>
                      <div
                        className={`p-3 rounded-lg text-sm leading-relaxed ${
                          message.type === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>

                      {message.suggestions && (
                        <div className="mt-2 space-y-1">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-xs h-7 bg-transparent hover:bg-primary/10 hover:text-primary border-primary/20"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}

                      <div className="text-xs text-muted-foreground mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>

                    {message.type === "user" && (
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-accent" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Quick Actions */}
            <div className="p-3 border-t border-border bg-muted/30">
              <div className="flex gap-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick("Plan a trip")}
                  className="text-xs bg-transparent"
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  Plan Trip
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick("Check weather")}
                  className="text-xs bg-transparent"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Weather
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick("Budget help")}
                  className="text-xs bg-transparent"
                >
                  <DollarSign className="h-3 w-3 mr-1" />
                  Budget
                </Button>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about traveling in India..."
                  className="flex-1 text-sm"
                />
                <Button onClick={handleSendMessage} size="sm" disabled={!inputMessage.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-muted-foreground mt-2 text-center">
                AI responses are simulated for demo purposes
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
