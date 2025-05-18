"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  CalendarIcon,
  Clock,
  MapPin,
  Users,
  Star,
  Heart,
  Share2,
  CalendarPlus2Icon as CalendarIcon2,
  CheckCircle2,
  XCircle,
  Info,
  AlertCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date>()
  const [travelers, setTravelers] = useState("2")
  const [isWishlisted, setIsWishlisted] = useState(false)

  // In a real app, you would fetch this data based on the ID
  const tour = {
    id: params.id,
    title: "Santorini Island Hopping Adventure",
    description:
      "Experience the magic of the Greek Islands with our comprehensive Santorini Island Hopping Adventure. This carefully crafted 7-day journey takes you through the most beautiful islands of the Cyclades, with Santorini as your main destination. Explore whitewashed villages, swim in crystal-clear waters, witness breathtaking sunsets, and immerse yourself in authentic Greek culture and cuisine.",
    location: "Greece",
    duration: "7 days",
    groupSize: "Max 12",
    rating: 4.9,
    reviews: 128,
    price: 1299,
    discount: 1499,
    images: [
      "/placeholder.svg?height=600&width=800&text=Santorini+1",
      "/placeholder.svg?height=600&width=800&text=Santorini+2",
      "/placeholder.svg?height=600&width=800&text=Santorini+3",
      "/placeholder.svg?height=600&width=800&text=Santorini+4",
    ],
    featured: true,
    category: "Island Hopping",
    highlights: [
      "Explore the iconic blue-domed churches of Santorini",
      "Sail around the caldera on a luxury catamaran",
      "Visit the ancient ruins of Akrotiri",
      "Wine tasting at local vineyards",
      "Island hop to Naxos and Mykonos",
      "Authentic Greek cooking class",
      "Sunset dinner in Oia",
    ],
    included: [
      "6 nights accommodation",
      "Daily breakfast and selected meals",
      "Island ferry transfers",
      "Guided tours as per itinerary",
      "Entrance fees to attractions",
      "Local English-speaking guide",
      "Airport transfers",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Optional activities",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Santorini",
        description:
          "Arrive at Santorini Airport and transfer to your hotel in Fira. Enjoy a welcome dinner with views of the caldera as the sun sets over the Aegean Sea.",
        activities: [
          "Airport pickup and hotel transfer",
          "Check-in at your boutique hotel in Fira",
          "Welcome dinner at a traditional Greek taverna",
        ],
        accommodation: "Boutique Hotel in Fira",
      },
      {
        day: 2,
        title: "Santorini Highlights Tour",
        description:
          "Explore the highlights of Santorini, including the picturesque villages of Oia and Imerovigli. Visit the famous blue-domed churches and enjoy lunch with a view.",
        activities: [
          "Guided tour of Oia's iconic blue-domed churches",
          "Photo stops at panoramic viewpoints",
          "Lunch at a cliffside restaurant",
          "Visit to Imerovigli, the 'Balcony to the Aegean'",
        ],
        accommodation: "Boutique Hotel in Fira",
      },
      {
        day: 3,
        title: "Caldera Sailing & Hot Springs",
        description:
          "Sail around the caldera on a luxury catamaran. Swim in the hot springs, snorkel in crystal-clear waters, and enjoy a BBQ lunch onboard.",
        activities: [
          "Catamaran cruise around the caldera",
          "Swimming and snorkeling stops",
          "Visit to volcanic hot springs",
          "BBQ lunch onboard",
          "Sunset views from the water",
        ],
        accommodation: "Boutique Hotel in Fira",
      },
      {
        day: 4,
        title: "Ancient Akrotiri & Wine Tasting",
        description:
          "Visit the archaeological site of Akrotiri, often called the 'Prehistoric Pompeii'. In the afternoon, enjoy wine tasting at local vineyards.",
        activities: [
          "Guided tour of ancient Akrotiri",
          "Visit to the Red Beach",
          "Wine tasting at three prestigious vineyards",
          "Traditional Greek meze dinner",
        ],
        accommodation: "Boutique Hotel in Fira",
      },
      {
        day: 5,
        title: "Ferry to Naxos",
        description:
          "Take a morning ferry to Naxos, the largest of the Cyclades islands. Explore the charming old town and enjoy the beautiful beaches.",
        activities: [
          "Ferry transfer to Naxos",
          "Guided walking tour of Naxos Town",
          "Visit to the Temple of Apollo",
          "Free time at Agios Georgios Beach",
          "Dinner at a local taverna",
        ],
        accommodation: "Beachfront Hotel in Naxos",
      },
      {
        day: 6,
        title: "Naxos Exploration",
        description:
          "Discover the beauty of Naxos with a jeep safari to mountain villages, ancient marble quarries, and secluded beaches.",
        activities: [
          "Jeep safari to mountain villages",
          "Visit to ancient marble quarries",
          "Traditional lunch in a mountain village",
          "Swimming at secluded beaches",
          "Cooking class and farewell dinner",
        ],
        accommodation: "Beachfront Hotel in Naxos",
      },
      {
        day: 7,
        title: "Return to Santorini & Departure",
        description: "Return to Santorini by ferry and transfer to the airport for your departure flight.",
        activities: [
          "Ferry transfer back to Santorini",
          "Free time for last-minute shopping",
          "Transfer to Santorini Airport",
        ],
        accommodation: "N/A",
      },
    ],
    dates: [
      { id: 1, startDate: "Jun 15, 2023", endDate: "Jun 21, 2023", availability: "Available", price: 1299 },
      { id: 2, startDate: "Jul 10, 2023", endDate: "Jul 16, 2023", availability: "Limited", price: 1399 },
      { id: 3, startDate: "Aug 5, 2023", endDate: "Aug 11, 2023", availability: "Sold Out", price: 1499 },
      { id: 4, startDate: "Sep 12, 2023", endDate: "Sep 18, 2023", availability: "Available", price: 1299 },
      { id: 5, startDate: "Oct 8, 2023", endDate: "Oct 14, 2023", availability: "Available", price: 1199 },
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40&text=SJ",
        date: "May 15, 2023",
        rating: 5,
        comment:
          "This tour exceeded all my expectations! The itinerary was perfectly balanced with guided activities and free time. Our guide, Dimitri, was knowledgeable and passionate about Greek culture. The sunset in Oia was absolutely magical, and the sailing trip around the caldera was a highlight. Highly recommend!",
      },
      {
        id: 2,
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
        date: "April 28, 2023",
        rating: 4,
        comment:
          "Great tour overall! The accommodations were excellent and the itinerary well-planned. The only reason I'm not giving 5 stars is because the ferry to Naxos was delayed, which shortened our time there. Otherwise, it was an amazing experience and I would book with this company again.",
      },
      {
        id: 3,
        name: "Emma Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40&text=ER",
        date: "June 2, 2023",
        rating: 5,
        comment:
          "Absolutely fantastic tour! The Greek islands are stunning and this tour showed us the best of everything. The small group size made it feel personal, and our guide was exceptional. The cooking class was so much fun, and I've already recreated some of the dishes at home. Worth every penny!",
      },
    ],
    relatedTours: [
      {
        id: 101,
        title: "Mykonos & Santorini Luxury Escape",
        location: "Greece",
        duration: "8 days",
        price: 1899,
        image: "/placeholder.svg?height=200&width=300&text=Mykonos",
        rating: 4.8,
      },
      {
        id: 102,
        title: "Crete Cultural Explorer",
        location: "Greece",
        duration: "6 days",
        price: 1199,
        image: "/placeholder.svg?height=200&width=300&text=Crete",
        rating: 4.7,
      },
      {
        id: 103,
        title: "Athens & Peloponnese Discovery",
        location: "Greece",
        duration: "9 days",
        price: 1599,
        image: "/placeholder.svg?height=200&width=300&text=Athens",
        rating: 4.9,
      },
    ],
  }

  const [mainImage, setMainImage] = useState(tour.images[0])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              {/* Left Column - Tour Details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Link href="/tours" className="text-sm text-muted-foreground hover:text-primary">
                      Tours
                    </Link>
                    <span className="text-sm text-muted-foreground">/</span>
                    <Link
                      href="/tours?category=island-hopping"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Island Hopping
                    </Link>
                    <span className="text-sm text-muted-foreground">/</span>
                    <span className="text-sm font-medium">{tour.title}</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{tour.title}</h1>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tour.rating}</span>
                      <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="mr-1 h-4 w-4" />
                      <span>{tour.groupSize}</span>
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

                {/* Image Gallery */}
                <div className="space-y-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={mainImage || "/placeholder.svg"}
                      alt={tour.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {tour.images.map((image, index) => (
                      <div
                        key={index}
                        className={cn(
                          "relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2",
                          mainImage === image ? "border-primary" : "border-transparent",
                        )}
                        onClick={() => setMainImage(image)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${tour.title} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tour Content Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="dates">Dates & Prices</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="space-y-6 pt-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Tour Overview</h2>
                      <p className="text-muted-foreground">{tour.description}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Tour Highlights</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            {tour.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <div className="space-y-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">What's Included</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2">
                              {tour.included.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">What's Not Included</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2">
                              {tour.notIncluded.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Itinerary Tab */}
                  <TabsContent value="itinerary" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Day by Day Itinerary</h2>
                    <div className="space-y-6">
                      {tour.itinerary.map((day) => (
                        <Card key={day.day}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="rounded-full h-6 w-6 flex items-center justify-center p-0"
                              >
                                {day.day}
                              </Badge>
                              <span>
                                Day {day.day}: {day.title}
                              </span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground">{day.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-medium">Today's Activities:</h4>
                              <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                                {day.activities.map((activity, index) => (
                                  <li key={index}>{activity}</li>
                                ))}
                              </ul>
                            </div>
                            {day.accommodation && (
                              <div className="flex items-start gap-2">
                                <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-medium">Accommodation:</span> {day.accommodation}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Dates & Prices Tab */}
                  <TabsContent value="dates" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Available Departure Dates</h2>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <div className="grid grid-cols-4 p-4 font-medium border-b">
                          <div>Departure Date</div>
                          <div>End Date</div>
                          <div>Status</div>
                          <div className="text-right">Price</div>
                        </div>
                        <div className="divide-y">
                          {tour.dates.map((date) => (
                            <div key={date.id} className="grid grid-cols-4 p-4 items-center">
                              <div>{date.startDate}</div>
                              <div>{date.endDate}</div>
                              <div>
                                <Badge
                                  variant={
                                    date.availability === "Available"
                                      ? "outline"
                                      : date.availability === "Limited"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                >
                                  {date.availability}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <div className="font-bold">${date.price}</div>
                                <div className="text-sm text-muted-foreground">per person</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Group Discounts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span>Group of 4-6 people</span>
                            <span className="font-medium">5% off</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Group of 7-10 people</span>
                            <span className="font-medium">10% off</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Private group booking</span>
                            <span className="font-medium">Contact us</span>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="bg-muted p-4 rounded-lg flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium">Booking Information</p>
                          <p>
                            A 20% deposit is required to secure your booking. Full payment is due 60 days before
                            departure. Please read our cancellation policy before booking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Reviews Tab */}
                  <TabsContent value="reviews" className="space-y-6 pt-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Customer Reviews</h2>
                      <Button>Write a Review</Button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-5xl font-bold">{tour.rating}</div>
                              <div className="flex justify-center gap-1 my-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <div className="text-muted-foreground">Based on {tour.reviews} reviews</div>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">5 stars</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[85%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">85%</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">4 stars</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[10%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">10%</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">3 stars</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[5%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">5%</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">2 stars</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[0%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">0%</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">1 star</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[0%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">0%</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="space-y-4">
                        {tour.reviews.map((review) => (
                          <Card key={review.id}>
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <Avatar>
                                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                                  <AvatarFallback>
                                    {review.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="space-y-2 flex-1">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="font-medium">{review.name}</div>
                                      <div className="text-sm text-muted-foreground">{review.date}</div>
                                    </div>
                                    <div className="flex items-center">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={cn(
                                            "h-4 w-4",
                                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted",
                                          )}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-muted-foreground">{review.comment}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        <Button variant="outline" className="w-full">
                          Load More Reviews
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Related Tours */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">You Might Also Like</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.relatedTours.map((relatedTour) => (
                      <Card key={relatedTour.id} className="overflow-hidden h-full flex flex-col">
                        <div className="relative h-40">
                          <Image
                            src={relatedTour.image || "/placeholder.svg"}
                            alt={relatedTour.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4 flex-1">
                          <h3 className="font-bold">{relatedTour.title}</h3>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>{relatedTour.location}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{relatedTour.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{relatedTour.rating}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <div className="flex items-center justify-between w-full">
                            <div className="font-bold">${relatedTour.price}</div>
                            <Button asChild size="sm">
                              <Link href={`/tours/${relatedTour.id}`}>View</Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking */}
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Book This Tour</CardTitle>
                    <CardDescription>Select your preferred date and travelers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground line-through">${tour.discount}</div>
                      <div>
                        <span className="text-3xl font-bold">${tour.price}</span>
                        <span className="text-muted-foreground"> / person</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Departure Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date() || date > new Date(2023, 11, 31)}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Number of Travelers</label>
                      <Select value={travelers} onValueChange={setTravelers}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Traveler</SelectItem>
                          <SelectItem value="2">2 Travelers</SelectItem>
                          <SelectItem value="3">3 Travelers</SelectItem>
                          <SelectItem value="4">4 Travelers</SelectItem>
                          <SelectItem value="5">5 Travelers</SelectItem>
                          <SelectItem value="6">6 Travelers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Special Requests (Optional)</label>
                      <Textarea placeholder="Any dietary requirements, accessibility needs, or special requests?" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Tour Price (per person)</span>
                        <span>${tour.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Travelers</span>
                        <span>x {travelers}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>${tour.price * Number.parseInt(travelers)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        20% deposit required: ${(tour.price * Number.parseInt(travelers) * 0.2).toFixed(2)}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <div className="flex flex-col gap-4 mt-6">
                      <AddToCartButton
                        item={{
                          id: tour.id,
                          type: "tour",
                          name: tour.title,
                          image: tour.images[0],
                          price: tour.price,
                          duration: tour.duration,
                          location: tour.location,
                        }}
                        className="w-full"
                      />
                      <Button variant="outline" className="w-full">
                        Book Now
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <CalendarIcon2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Flexible Booking</div>
                        <div className="text-sm text-muted-foreground">
                          Free cancellation up to 30 days before departure
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Expert Guides</div>
                        <div className="text-sm text-muted-foreground">
                          Local, English-speaking guides with deep knowledge
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Contact Us
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
