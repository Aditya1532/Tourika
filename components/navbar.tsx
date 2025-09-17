"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, MapPin, Bell, User, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/plan-trip", label: "Plan Trip" },
    { href: "/insights", label: "Insights" },
  ]

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="font-heading font-black text-xl text-foreground">Tourika</span>
            <Badge variant="secondary" className="text-xs ml-2">
              AI-Powered
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs min-w-0 h-5">
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Traveler</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MapPin className="h-4 w-4 mr-2" />
                  My Trips
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-border pt-3 mt-3">
                <div className="flex items-center px-3 py-2 gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Traveler</div>
                    <div className="text-xs text-muted-foreground">traveler@example.com</div>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto relative">
                    <Bell className="h-4 w-4" />
                    <Badge variant="destructive" className="absolute -top-1 -right-1 px-1 py-0.5 text-xs min-w-0 h-4">
                      3
                    </Badge>
                  </Button>
                </div>

                <div className="space-y-1 mt-2">
                  <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    My Trips
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                    Settings
                  </Button>
                </div>

                <div className="flex flex-col space-y-2 px-3 py-3 border-t border-border mt-3">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
