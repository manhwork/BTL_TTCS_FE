"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Plane,
  Clock,
  Calendar,
  Luggage,
  Info,
  Check,
  Coffee,
  Wifi,
  Tv,
  Utensils,
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FlightDetailPage({ params }: { params: { id: string } }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedClass, setSelectedClass] = useState("economy")
  const [selectedPassengers, setSelectedPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  })
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [selectedBaggage, setSelectedBaggage] = useState("standard")
  const [selectedMeals, setSelectedMeals] = useState<string[]>([])

  // In a real app, you would fetch this data based on the ID
  const flight = {
    id: params.id,
    airline: "Global Airways",
    flightNumber: "GA1234",
    aircraft: "Boeing 787-9 Dreamliner",
    departure: {
      city: "New York",
      airport: "John F. Kennedy International Airport",
      code: "JFK",
      terminal: "Terminal 4",
      gate: "Gate B12",
      date: "June 15, 2023",
      time: "08:00",
    },
    arrival: {
      city: "London",
      airport: "Heathrow Airport",
      code: "LHR",
      terminal: "Terminal 5",
      gate: "Gate A7",
      date: "June 15, 2023",
      time: "20:00",
    },
    duration: "7h 00m",
    distance: "3,461 miles",
    stops: 0,
    onTimePerformance: "92%",
    classes: [
      {
        name: "Economy",
        value: "economy",
        price: 599,
        discount: 699,
        seatsAvailable: 48,
        features: ["Standard Seat", "1 Carry-on Bag", "Meal Service", "In-flight Entertainment"],
        image: "/placeholder.svg?height=150&width=300&text=Economy+Class",
      },
      {
        name: "Premium Economy",
        value: "premium_economy",
        price: 999,
        discount: 1199,
        seatsAvailable: 24,
        features: ["Extra Legroom", "2 Checked Bags", "Priority Boarding", "Enhanced Meal Service", "Amenity Kit"],
        image: "/placeholder.svg?height=150&width=300&text=Premium+Economy",
      },
      {
        name: "Business",
        value: "business",
        price: 2499,
        discount: 2899,
        seatsAvailable: 12,
        features: [
          "Lie-flat Seat",
          "Lounge Access",
          "Priority Check-in",
          "Premium Dining",
          "Amenity Kit",
          "Fast-track Security",
        ],
        image: "/placeholder.svg?height=150&width=300&text=Business+Class",
      },
    ],
    baggage: [
      {
        name: "Standard",
        value: "standard",
        description: "1 carry-on bag (8kg) + 1 checked bag (23kg)",
        price: 0,
      },
      {
        name: "Extra",
        value: "extra",
        description: "1 carry-on bag (8kg) + 2 checked bags (23kg each)",
        price: 60,
      },
      {
        name: "Premium",
        value: "premium",
        description: "1 carry-on bag (8kg) + 3 checked bags (23kg each)",
        price: 120,
      },
    ],
    meals: [
      {
        name: "Standard Meal",
        value: "standard",
        description: "Included with your ticket",
        price: 0,
      },
      {
        name: "Vegetarian",
        value: "vegetarian",
        description: "Vegetarian meal option",
        price: 0,
      },
      {
        name: "Premium Dining",
        value: "premium",
        description: "Enhanced meal with premium ingredients",
        price: 25,
      },
      {
        name: "Special Diet",
        value: "special",
        description: "Gluten-free, vegan, or other special diet options",
        price: 15,
      },
    ],
    amenities: [
      { name: "In-flight Entertainment", icon: <Tv className="h-4 w-4" /> },
      { name: "Wi-Fi Available", icon: <Wifi className="h-4 w-4" /> },
      { name: "Meal Service", icon: <Utensils className="h-4 w-4" /> },
      { name: "Beverage Service", icon: <Coffee className="h-4 w-4" /> },
    ],
    policies: {
      cancellation:
        "Free cancellation up to 24 hours before departure. Cancellations made within 24 hours of departure are subject to a fee.",
      changes:
        "Flight changes can be made up to 3 hours before departure, subject to fare difference and a change fee.",
      checkin: "Online check-in opens 24 hours before departure and closes 3 hours before departure.",
      baggage:
        "Baggage allowance depends on the fare class. Additional baggage can be purchased during booking or at the airport.",
    },
    relatedFlights: [
      {
        id: 301,
        airline: "Global Airways",
        flightNumber: "GA1236",
        departure: {
          city: "New York",
          code: "JFK",
          time: "14:30",
        },
        arrival: {
          city: "London",
          code: "LHR",
          time: "02:30",
        },
        duration: "7h 00m",
        stops: 0,
        price: 649,
      },
      {
        id: 302,
        airline: "British Air",
        flightNumber: "BA178",
        departure: {
          city: "New York",
          code: "JFK",
          time: "19:45",
        },
        arrival: {
          city: "London",
          code: "LHR",
          time: "07:45",
        },
        duration: "7h 00m",
        stops: 0,
        price: 629,
      },
      {
        id: 303,
        airline: "American Airlines",
        flightNumber: "AA100",
        departure: {
          city: "New York",
          code: "JFK",
          time: "21:00",
        },
        arrival: {
          city: "London",
          code: "LHR",
          time: "09:00",
        },
        duration: "7h 00m",
        stops: 0,
        price: 579,
      },
    ],
  }

  const getClassDetails = () => {
    return flight.classes.find((c) => c.value === selectedClass) || flight.classes[0]
  }

  const calculateTotal = () => {
    const classPrice = getClassDetails().price
    const passengersTotal = (selectedPassengers.adults + selectedPassengers.children) * classPrice
    const infantsTotal = selectedPassengers.infants * (classPrice * 0.1) // 10% of adult fare for infants

    const baggageOption = flight.baggage.find((b) => b.value === selectedBaggage)
    const baggageTotal = baggageOption
      ? baggageOption.price * (selectedPassengers.adults + selectedPassengers.children)
      : 0

    const mealsTotal = selectedMeals.reduce((total, mealValue) => {
      const meal = flight.meals.find((m) => m.value === mealValue)
      return total + (meal?.price || 0) * (selectedPassengers.adults + selectedPassengers.children)
    }, 0)

    return {
      subtotal: passengersTotal + infantsTotal,
      baggage: baggageTotal,
      meals: mealsTotal,
      taxes: (passengersTotal + infantsTotal) * 0.15, // 15% taxes and fees
      total: passengersTotal + infantsTotal + baggageTotal + mealsTotal + (passengersTotal + infantsTotal) * 0.15,
    }
  }

  const totals = calculateTotal()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              {/* Left Column - Flight Details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Link href="/flights" className="text-sm text-muted-foreground hover:text-primary">
                      Flights
                    </Link>
                    <span className="text-sm text-muted-foreground">/</span>
                    <span className="text-sm font-medium">
                      {flight.departure.city} to {flight.arrival.city}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {flight.departure.city} to {flight.arrival.city}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center text-muted-foreground">
                      <Plane className="mr-1 h-4 w-4" />
                      <span>
                        {flight.airline} {flight.flightNumber}
                      </span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{flight.departure.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{flight.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className={isWishlisted ? "text-red-500" : ""}
                      >
                        <Heart className={cn("h-4 w-4", isWishlisted && "fill-red-500")} />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Flight Route */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{flight.departure.time}</div>
                        <div className="text-lg font-medium">{flight.departure.code}</div>
                        <div className="text-sm text-muted-foreground">{flight.departure.city}</div>
                        <div className="text-xs text-muted-foreground mt-1">{flight.departure.terminal}</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-sm text-muted-foreground">{flight.duration}</div>
                        <div className="relative w-24 md:w-48 lg:w-64">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-dashed"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <div className="bg-background px-2">
                              <Plane className="h-5 w-5 rotate-90" />
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {flight.stops === 0 ? "Nonstop" : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{flight.distance}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{flight.arrival.time}</div>
                        <div className="text-lg font-medium">{flight.arrival.code}</div>
                        <div className="text-sm text-muted-foreground">{flight.arrival.city}</div>
                        <div className="text-xs text-muted-foreground mt-1">{flight.arrival.terminal}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      {flight.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          {amenity.icon}
                          <span>{amenity.name}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Flight Content Tabs */}
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="details">Flight Details</TabsTrigger>
                    <TabsTrigger value="classes">Fare Classes</TabsTrigger>
                    <TabsTrigger value="baggage">Baggage</TabsTrigger>
                    <TabsTrigger value="policies">Policies</TabsTrigger>
                  </TabsList>

                  {/* Details Tab */}
                  <TabsContent value="details" className="space-y-6 pt-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Flight Information</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Departure</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0 space-y-2">
                            <div className="flex justify-between">
                              <span>Date</span>
                              <span className="font-medium">{flight.departure.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Time</span>
                              <span className="font-medium">{flight.departure.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Airport</span>
                              <span className="font-medium">
                                {flight.departure.airport} ({flight.departure.code})
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Terminal</span>
                              <span className="font-medium">{flight.departure.terminal}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Gate</span>
                              <span className="font-medium">{flight.departure.gate}</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Arrival</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0 space-y-2">
                            <div className="flex justify-between">
                              <span>Date</span>
                              <span className="font-medium">{flight.arrival.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Time</span>
                              <span className="font-medium">{flight.arrival.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Airport</span>
                              <span className="font-medium">
                                {flight.arrival.airport} ({flight.arrival.code})
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Terminal</span>
                              <span className="font-medium">{flight.arrival.terminal}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Gate</span>
                              <span className="font-medium">{flight.arrival.gate}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Flight Details</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-2">
                          <div className="flex justify-between">
                            <span>Airline</span>
                            <span className="font-medium">{flight.airline}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Flight Number</span>
                            <span className="font-medium">{flight.flightNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Aircraft</span>
                            <span className="font-medium">{flight.aircraft}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration</span>
                            <span className="font-medium">{flight.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Distance</span>
                            <span className="font-medium">{flight.distance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>On-time Performance</span>
                            <span className="font-medium">{flight.onTimePerformance}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Classes Tab */}
                  <TabsContent value="classes" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Available Fare Classes</h2>
                    <div className="space-y-4">
                      {flight.classes.map((classOption) => (
                        <Card
                          key={classOption.value}
                          className={cn(
                            "overflow-hidden transition-all",
                            selectedClass === classOption.value && "ring-2 ring-primary",
                          )}
                        >
                          <div className="grid md:grid-cols-[200px_1fr] gap-4">
                            <div className="relative h-40 md:h-full">
                              <Image
                                src={classOption.image || "/placeholder.svg"}
                                alt={classOption.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6 flex flex-col">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="text-xl font-bold">{classOption.name}</h3>
                                  <div className="text-sm text-muted-foreground mt-1">
                                    {classOption.seatsAvailable} seats available
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-muted-foreground line-through text-sm">
                                    ${classOption.discount}
                                  </div>
                                  <div className="text-2xl font-bold">${classOption.price}</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 my-4">
                                {classOption.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-auto">
                                <Button
                                  variant={selectedClass === classOption.value ? "default" : "outline"}
                                  className="w-full md:w-auto"
                                  onClick={() => setSelectedClass(classOption.value)}
                                >
                                  {selectedClass === classOption.value ? "Selected" : "Select"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Baggage Tab */}
                  <TabsContent value="baggage" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Baggage Information</h2>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Baggage Allowance</CardTitle>
                          <CardDescription>Select your preferred baggage option</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <RadioGroup value={selectedBaggage} onValueChange={setSelectedBaggage} className="space-y-4">
                            {flight.baggage.map((option) => (
                              <div key={option.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`baggage-${option.value}`} />
                                <Label
                                  htmlFor={`baggage-${option.value}`}
                                  className="flex flex-1 justify-between cursor-pointer"
                                >
                                  <div>
                                    <span className="font-medium">{option.name}</span>
                                    <p className="text-sm text-muted-foreground">{option.description}</p>
                                  </div>
                                  <div className="font-medium">
                                    {option.price === 0 ? "Included" : `+$${option.price}`}
                                  </div>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Baggage Policies</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-4">
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="carry-on">
                              <AccordionTrigger>Carry-on Baggage</AccordionTrigger>
                              <AccordionContent>
                                <p className="text-muted-foreground">
                                  Each passenger is allowed one carry-on bag (max. 8kg, 55 x 40 x 20 cm) and one
                                  personal item (e.g., purse, laptop bag). Carry-on baggage must fit in the overhead bin
                                  or under the seat in front of you.
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="checked">
                              <AccordionTrigger>Checked Baggage</AccordionTrigger>
                              <AccordionContent>
                                <p className="text-muted-foreground">
                                  Checked baggage allowance varies by fare class. Each checked bag must not exceed 23kg
                                  and 158cm (length + width + height). Overweight or oversized baggage will incur
                                  additional fees.
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="restricted">
                              <AccordionTrigger>Restricted Items</AccordionTrigger>
                              <AccordionContent>
                                <p className="text-muted-foreground">
                                  Certain items are restricted or prohibited in carry-on and checked baggage, including
                                  but not limited to: liquids over 100ml in carry-on, dangerous goods, weapons, and
                                  perishable items. Please check with the airline for a complete list.
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Policies Tab */}
                  <TabsContent value="policies" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Flight Policies</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Cancellation Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{flight.policies.cancellation}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Changes Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{flight.policies.changes}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Check-in Information</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{flight.policies.checkin}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Baggage Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{flight.policies.baggage}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Related Flights */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Alternative Flights</h2>
                  <div className="space-y-4">
                    {flight.relatedFlights.map((relatedFlight) => (
                      <Card key={relatedFlight.id} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 items-center">
                            <div>
                              <div className="font-medium">{relatedFlight.airline}</div>
                              <div className="text-sm text-muted-foreground">{relatedFlight.flightNumber}</div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              <div className="text-center">
                                <div className="text-xl font-bold">{relatedFlight.departure.time}</div>
                                <div className="text-sm font-medium">{relatedFlight.departure.code}</div>
                                <div className="text-xs text-muted-foreground">{relatedFlight.departure.city}</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="text-xs text-muted-foreground">{relatedFlight.duration}</div>
                                <div className="relative w-24 md:w-32">
                                  <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-dashed"></div>
                                  </div>
                                  <div className="relative flex justify-center">
                                    <div className="bg-background px-2">
                                      <Plane className="h-4 w-4 rotate-90" />
                                    </div>
                                  </div>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {relatedFlight.stops === 0
                                    ? "Nonstop"
                                    : `${relatedFlight.stops} stop${relatedFlight.stops > 1 ? "s" : ""}`}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-xl font-bold">${relatedFlight.price}</div>
                                <Button asChild size="sm" className="mt-2">
                                  <Link href={`/flights/${relatedFlight.id}`}>Select</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking */}
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Book Your Flight</CardTitle>
                    <CardDescription>Customize your booking options</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground line-through">${getClassDetails().discount}</div>
                      <div>
                        <span className="text-3xl font-bold">${getClassDetails().price}</span>
                        <span className="text-muted-foreground"> / person</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Passengers</label>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm">Adults</div>
                          <div className="flex">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-r-none"
                              onClick={() =>
                                setSelectedPassengers({
                                  ...selectedPassengers,
                                  adults: Math.max(1, selectedPassengers.adults - 1),
                                })
                              }
                              disabled={selectedPassengers.adults <= 1}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                            <div className="flex-1 flex items-center justify-center border-y">
                              {selectedPassengers.adults}
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-l-none"
                              onClick={() =>
                                setSelectedPassengers({
                                  ...selectedPassengers,
                                  adults: Math.min(9, selectedPassengers.adults + 1),
                                })
                              }
                              disabled={selectedPassengers.adults >= 9}
                            >
                              <ChevronUp className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm">Children</div>
                          <div className="flex">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-r-none"
                              onClick={() =>
                                setSelectedPassengers({
                                  ...selectedPassengers,
                                  children: Math.max(0, selectedPassengers.children - 1),
                                })
                              }
                              disabled={selectedPassengers.children <= 0}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                            <div className="flex-1 flex items-center justify-center border-y">
                              {selectedPassengers.children}
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-l-none"
                              onClick={() =>
                                setSelectedPassengers({
                                  ...selectedPassengers,
                                  children: Math.min(8, selectedPassengers.children + 1),
                                })
                              }
                              disabled={selectedPassengers.children >= 8}
                            >
                              <ChevronUp className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm">Infants</div>
                          <div className="flex">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-r-none"
                              onClick={() =>
                                setSelectedPassengers({
                                  ...selectedPassengers,
                                  infants: Math.max(0, selectedPassengers.infants - 1),
                                })
                              }
                              disabled={selectedPassengers.infants <= 0}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                            <div className="flex-1 flex items-center justify-center border-y">
                              {selectedPassengers.infants}
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-l-none"
                              onClick={() =>
                                setSelectedPassengers({
                                  ...selectedPassengers,
                                  infants: Math.min(selectedPassengers.adults, selectedPassengers.infants + 1),
                                })
                              }
                              disabled={selectedPassengers.infants >= selectedPassengers.adults}
                            >
                              <ChevronUp className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Fare Class</label>
                      <div className="grid grid-cols-3 gap-2">
                        {flight.classes.map((classOption) => (
                          <Button
                            key={classOption.value}
                            variant={selectedClass === classOption.value ? "default" : "outline"}
                            className="h-auto py-2 px-3"
                            onClick={() => setSelectedClass(classOption.value)}
                          >
                            <div className="text-center">
                              <div className="font-medium">{classOption.name}</div>
                              <div className="text-sm">${classOption.price}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Baggage Options</label>
                      <Select value={selectedBaggage} onValueChange={setSelectedBaggage}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select baggage option" />
                        </SelectTrigger>
                        <SelectContent>
                          {flight.baggage.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.name} - {option.price === 0 ? "Included" : `+$${option.price}`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meal Preferences</label>
                      <div className="space-y-2">
                        {flight.meals.map((meal) => (
                          <div key={meal.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={`meal-${meal.value}`}
                              checked={selectedMeals.includes(meal.value)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedMeals([...selectedMeals, meal.value])
                                } else {
                                  setSelectedMeals(selectedMeals.filter((m) => m !== meal.value))
                                }
                              }}
                            />
                            <Label
                              htmlFor={`meal-${meal.value}`}
                              className="flex flex-1 justify-between cursor-pointer"
                            >
                              <div>
                                <span className="font-medium">{meal.name}</span>
                                <p className="text-xs text-muted-foreground">{meal.description}</p>
                              </div>
                              <div className="font-medium">{meal.price === 0 ? "Included" : `+$${meal.price}`}</div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Base Fare</span>
                        <span>${totals.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Baggage</span>
                        <span>${totals.baggage.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Meals</span>
                        <span>${totals.meals.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Taxes & Fees</span>
                        <span>${totals.taxes.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>${totals.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button className="w-full">Continue to Booking</Button>
                    <Button variant="outline" className="w-full">
                      Save for Later
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Info className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Flexible Booking</div>
                        <div className="text-sm text-muted-foreground">Change your flight with minimal fees</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Luggage className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Baggage Included</div>
                        <div className="text-sm text-muted-foreground">All fares include at least one bag</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Contact Airline
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
