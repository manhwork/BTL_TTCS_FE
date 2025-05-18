"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format, addDays } from "date-fns"
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
  MapPin,
  Star,
  Heart,
  Share2,
  Wifi,
  Coffee,
  Utensils,
  Dumbbell,
  PocketIcon as Pool,
  Car,
  PawPrint,
  Snowflake,
  Tv,
  Check,
  Info,
  Building,
  BedDouble,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const [dateRange, setDateRange] = useState<{
    from: Date
    to?: Date
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  })
  const [guests, setGuests] = useState("2")
  const [rooms, setRooms] = useState("1")
  const [isWishlisted, setIsWishlisted] = useState(false)

  // In a real app, you would fetch this data based on the ID
  const hotel = {
    id: params.id,
    name: "Grand Luxury Resort & Spa",
    description:
      "Perched on the cliffs of Santorini with breathtaking views of the caldera, Grand Luxury Resort & Spa offers an unforgettable luxury experience. This 5-star resort features elegant suites, world-class dining, a stunning infinity pool, and a full-service spa. Immerse yourself in the beauty of Santorini while enjoying impeccable service and amenities designed for the most discerning travelers.",
    location: "Oia, Santorini, Greece",
    rating: 4.9,
    reviews: 328,
    price: 299,
    discount: 399,
    images: [
      "/placeholder.svg?height=600&width=800&text=Luxury+Resort+1",
      "/placeholder.svg?height=600&width=800&text=Luxury+Resort+2",
      "/placeholder.svg?height=600&width=800&text=Luxury+Resort+3",
      "/placeholder.svg?height=600&width=800&text=Luxury+Resort+4",
      "/placeholder.svg?height=600&width=800&text=Luxury+Resort+5",
      "/placeholder.svg?height=600&width=800&text=Luxury+Resort+6",
    ],
    featured: true,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-4 w-4" /> },
      { name: "Breakfast Included", icon: <Coffee className="h-4 w-4" /> },
      { name: "Restaurant", icon: <Utensils className="h-4 w-4" /> },
      { name: "Fitness Center", icon: <Dumbbell className="h-4 w-4" /> },
      { name: "Swimming Pool", icon: <Pool className="h-4 w-4" /> },
      { name: "Free Parking", icon: <Car className="h-4 w-4" /> },
      { name: "Pet Friendly", icon: <PawPrint className="h-4 w-4" /> },
      { name: "Air Conditioning", icon: <Snowflake className="h-4 w-4" /> },
      { name: "Flat-screen TV", icon: <Tv className="h-4 w-4" /> },
    ],
    rooms: [
      {
        id: 1,
        name: "Deluxe Room with Caldera View",
        description: "Elegant room with a private balcony offering stunning views of the caldera and Aegean Sea.",
        size: "35 m²",
        occupancy: "2 adults",
        bedType: "1 King Bed",
        price: 299,
        discount: 399,
        amenities: ["Sea View", "Balcony", "Air Conditioning", "Free WiFi", "Minibar", "Safe", "Flat-screen TV"],
        image: "/placeholder.svg?height=300&width=500&text=Deluxe+Room",
        availability: "Available",
      },
      {
        id: 2,
        name: "Junior Suite with Private Pool",
        description: "Spacious suite featuring a private plunge pool and terrace with panoramic sea views.",
        size: "50 m²",
        occupancy: "2 adults",
        bedType: "1 King Bed",
        price: 499,
        discount: 599,
        amenities: [
          "Private Pool",
          "Sea View",
          "Terrace",
          "Air Conditioning",
          "Free WiFi",
          "Minibar",
          "Safe",
          "Flat-screen TV",
        ],
        image: "/placeholder.svg?height=300&width=500&text=Junior+Suite",
        availability: "Limited",
      },
      {
        id: 3,
        name: "Honeymoon Suite with Jacuzzi",
        description: "Romantic suite with a private outdoor jacuzzi, perfect for couples and honeymooners.",
        size: "60 m²",
        occupancy: "2 adults",
        bedType: "1 King Bed",
        price: 599,
        discount: 699,
        amenities: [
          "Outdoor Jacuzzi",
          "Sea View",
          "Terrace",
          "Air Conditioning",
          "Free WiFi",
          "Minibar",
          "Safe",
          "Flat-screen TV",
        ],
        image: "/placeholder.svg?height=300&width=500&text=Honeymoon+Suite",
        availability: "Available",
      },
      {
        id: 4,
        name: "Two-Bedroom Family Suite",
        description: "Spacious suite with two bedrooms, ideal for families or groups traveling together.",
        size: "80 m²",
        occupancy: "4 adults",
        bedType: "1 King Bed + 2 Twin Beds",
        price: 699,
        discount: 799,
        amenities: [
          "Sea View",
          "Balcony",
          "Air Conditioning",
          "Free WiFi",
          "Minibar",
          "Safe",
          "Flat-screen TV",
          "Separate Living Area",
        ],
        image: "/placeholder.svg?height=300&width=500&text=Family+Suite",
        availability: "Sold Out",
      },
    ],
    policies: {
      checkIn: "From 3:00 PM",
      checkOut: "Until 11:00 AM",
      cancellation:
        "Free cancellation up to 7 days before check-in. Cancellations made within 7 days of check-in are subject to a one-night charge.",
      children: "Children of all ages are welcome. Children under 6 stay free when using existing bedding.",
      pets: "Pets are allowed on request. Charges may apply.",
      payment: "We accept all major credit cards. A valid credit card is required to guarantee the reservation.",
    },
    reviews: [
      {
        id: 1,
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40&text=JW",
        date: "July 15, 2023",
        rating: 5,
        comment:
          "Absolutely stunning hotel with breathtaking views of the caldera. The infinity pool is even more beautiful than in the pictures. Staff was incredibly attentive and the breakfast was amazing. Our room was spacious, clean, and had the most comfortable bed. Worth every penny for a special occasion!",
      },
      {
        id: 2,
        name: "Sophia Chen",
        avatar: "/placeholder.svg?height=40&width=40&text=SC",
        date: "June 28, 2023",
        rating: 4,
        comment:
          "Beautiful property with excellent service. The views are spectacular and the pool area is perfect for relaxing. Rooms are well-appointed and very comfortable. Only giving 4 stars because the restaurant was a bit overpriced for the quality, but there are plenty of dining options nearby.",
      },
      {
        id: 3,
        name: "David Miller",
        avatar: "/placeholder.svg?height=40&width=40&text=DM",
        date: "August 2, 2023",
        rating: 5,
        comment:
          "This hotel exceeded all expectations. The location is perfect - close enough to walk to restaurants and shops but far enough to be peaceful. The staff remembered our names and preferences from day one. The spa treatments were exceptional and the private dinner on our terrace was the highlight of our trip. Can't wait to return!",
      },
    ],
    nearbyAttractions: [
      {
        name: "Oia Castle",
        distance: "0.5 km",
        description: "Famous sunset viewpoint",
      },
      {
        name: "Ammoudi Bay",
        distance: "0.8 km",
        description: "Scenic port with seafood restaurants",
      },
      {
        name: "Blue Dome Churches",
        distance: "1.2 km",
        description: "Iconic Santorini landmarks",
      },
    ],
    relatedHotels: [
      {
        id: 201,
        name: "Cliffside Boutique Hotel",
        location: "Fira, Santorini",
        price: 249,
        image: "/placeholder.svg?height=200&width=300&text=Cliffside+Hotel",
        rating: 4.7,
      },
      {
        id: 202,
        name: "Aegean View Suites",
        location: "Imerovigli, Santorini",
        price: 329,
        image: "/placeholder.svg?height=200&width=300&text=Aegean+Suites",
        rating: 4.8,
      },
      {
        id: 203,
        name: "Volcano View Resort",
        location: "Akrotiri, Santorini",
        price: 279,
        image: "/placeholder.svg?height=200&width=300&text=Volcano+Resort",
        rating: 4.6,
      },
    ],
  }

  const [mainImage, setMainImage] = useState(hotel.images[0])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              {/* Left Column - Hotel Details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Link href="/hotels" className="text-sm text-muted-foreground hover:text-primary">
                      Hotels
                    </Link>
                    <span className="text-sm text-muted-foreground">/</span>
                    <Link
                      href="/hotels?location=santorini"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Santorini
                    </Link>
                    <span className="text-sm text-muted-foreground">/</span>
                    <span className="text-sm font-medium">{hotel.name}</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{hotel.name}</h1>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-muted-foreground">({hotel.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{hotel.location}</span>
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
                      alt={hotel.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {hotel.images.map((image, index) => (
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
                          alt={`${hotel.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hotel Content Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="rooms">Rooms</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="policies">Policies</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="space-y-6 pt-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Hotel Overview</h2>
                      <p className="text-muted-foreground">{hotel.description}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Key Amenities</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="grid grid-cols-2 gap-4">
                            {hotel.amenities.slice(0, 6).map((amenity, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1.5 rounded-full">{amenity.icon}</div>
                                <span className="text-sm">{amenity.name}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Location Highlights</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-4">
                          <div className="relative h-32 w-full rounded-md overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center bg-muted">
                              <p className="text-sm text-muted-foreground">Map would be displayed here</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Nearby Attractions:</h4>
                            <ul className="space-y-2">
                              {hotel.nearbyAttractions.map((attraction, index) => (
                                <li key={index} className="flex justify-between text-sm">
                                  <span>{attraction.name}</span>
                                  <span className="text-muted-foreground">{attraction.distance}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Rooms Tab */}
                  <TabsContent value="rooms" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Available Room Types</h2>
                    <div className="space-y-6">
                      {hotel.rooms.map((room) => (
                        <Card key={room.id} className="overflow-hidden">
                          <div className="grid md:grid-cols-[300px_1fr] gap-4">
                            <div className="relative h-48 md:h-full">
                              <Image
                                src={room.image || "/placeholder.svg"}
                                alt={room.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6 flex flex-col">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="text-xl font-bold">{room.name}</h3>
                                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                                    <div className="flex items-center gap-1">
                                      <Building className="h-4 w-4" />
                                      <span>{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <BedDouble className="h-4 w-4" />
                                      <span>{room.bedType}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Users className="h-4 w-4" />
                                      <span>{room.occupancy}</span>
                                    </div>
                                  </div>
                                </div>
                                <Badge
                                  variant={
                                    room.availability === "Available"
                                      ? "outline"
                                      : room.availability === "Limited"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                >
                                  {room.availability}
                                </Badge>
                              </div>

                              <p className="text-muted-foreground text-sm mb-4">{room.description}</p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {room.amenities.slice(0, 5).map((amenity, index) => (
                                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                                    <Check className="h-3 w-3" />
                                    <span>{amenity}</span>
                                  </Badge>
                                ))}
                                {room.amenities.length > 5 && (
                                  <Badge variant="outline">+{room.amenities.length - 5} more</Badge>
                                )}
                              </div>

                              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                <div>
                                  <div className="text-muted-foreground line-through text-sm">${room.discount}</div>
                                  <div>
                                    <span className="text-2xl font-bold">${room.price}</span>
                                    <span className="text-muted-foreground"> / night</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground">Includes taxes and fees</div>
                                </div>
                                <Button disabled={room.availability === "Sold Out"}>
                                  {room.availability === "Sold Out" ? "Sold Out" : "Select Room"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Amenities Tab */}
                  <TabsContent value="amenities" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Hotel Amenities</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">General</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            {hotel.amenities.slice(0, 3).map((amenity, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1.5 rounded-full">{amenity.icon}</div>
                                <span>{amenity.name}</span>
                              </li>
                            ))}
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>24-hour Front Desk</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Concierge Service</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Wellness</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Full-service Spa</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Massage Services</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Sauna</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Hot Tub</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Yoga Classes</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Food & Drink</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Restaurant</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Bar/Lounge</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Room Service</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Breakfast Available</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                              <span>Special Diet Menus</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Policies Tab */}
                  <TabsContent value="policies" className="space-y-6 pt-4">
                    <h2 className="text-2xl font-bold">Hotel Policies</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Check-in & Check-out</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-2">
                          <div className="flex justify-between">
                            <span>Check-in Time</span>
                            <span className="font-medium">{hotel.policies.checkIn}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Check-out Time</span>
                            <span className="font-medium">{hotel.policies.checkOut}</span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-2">
                            Early check-in and late check-out available upon request and subject to availability.
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Cancellation Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{hotel.policies.cancellation}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Children & Extra Beds</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{hotel.policies.children}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Pets</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{hotel.policies.pets}</p>
                        </CardContent>
                      </Card>

                      <Card className="sm:col-span-2">
                        <CardHeader>
                          <CardTitle className="text-lg">Payment Information</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{hotel.policies.payment}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Reviews Tab */}
                  <TabsContent value="reviews" className="space-y-6 pt-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Guest Reviews</h2>
                      <Button>Write a Review</Button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-5xl font-bold">{hotel.rating}</div>
                              <div className="flex justify-center gap-1 my-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <div className="text-muted-foreground">Based on {hotel.reviews} reviews</div>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">Cleanliness</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[95%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">9.5</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">Comfort</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[90%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">9.0</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">Location</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[100%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">10.0</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">Service</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[95%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">9.5</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium min-w-[100px]">Value</div>
                                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 bg-yellow-400 w-[85%]" />
                                </div>
                                <div className="text-sm text-muted-foreground min-w-[40px]">8.5</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="space-y-4">
                        {hotel.reviews.map((review) => (
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

                {/* Related Hotels */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Similar Hotels</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.relatedHotels.map((relatedHotel) => (
                      <Card key={relatedHotel.id} className="overflow-hidden h-full flex flex-col">
                        <div className="relative h-40">
                          <Image
                            src={relatedHotel.image || "/placeholder.svg"}
                            alt={relatedHotel.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4 flex-1">
                          <h3 className="font-bold">{relatedHotel.name}</h3>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>{relatedHotel.location}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{relatedHotel.rating}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <span className="font-bold">${relatedHotel.price}</span>
                              <span className="text-muted-foreground text-sm"> / night</span>
                            </div>
                            <Button asChild size="sm">
                              <Link href={`/hotels/${relatedHotel.id}`}>View</Link>
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
                    <CardTitle>Book Your Stay</CardTitle>
                    <CardDescription>Select your dates and room preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground line-through">${hotel.discount}</div>
                      <div>
                        <span className="text-3xl font-bold">${hotel.price}</span>
                        <span className="text-muted-foreground"> / night</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Check-in / Check-out</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange?.from ? (
                              dateRange.to ? (
                                <>
                                  {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(dateRange.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Select dates</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={dateRange?.from}
                            selected={dateRange}
                            onSelect={setDateRange as any}
                            numberOfMonths={2}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Guests</label>
                        <Select value={guests} onValueChange={setGuests}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5 Guests</SelectItem>
                            <SelectItem value="6">6 Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Rooms</label>
                        <Select value={rooms} onValueChange={setRooms}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select rooms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Room</SelectItem>
                            <SelectItem value="2">2 Rooms</SelectItem>
                            <SelectItem value="3">3 Rooms</SelectItem>
                            <SelectItem value="4">4 Rooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Special Requests (Optional)</label>
                      <Textarea placeholder="Any special requests or preferences?" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Room Rate (per night)</span>
                        <span>${hotel.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Nights</span>
                        <span>
                          {dateRange.to
                            ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))
                            : 1}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Rooms</span>
                        <span>x {rooms}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Taxes & Fees</span>
                        <span>
                          $
                          {(
                            hotel.price *
                            Number.parseInt(rooms) *
                            (dateRange.to
                              ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))
                              : 1) *
                            0.15
                          ).toFixed(2)}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>
                          $
                          {(
                            hotel.price *
                            Number.parseInt(rooms) *
                            (dateRange.to
                              ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))
                              : 1) *
                            1.15
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button className="w-full">Book Now</Button>
                    <Button variant="outline" className="w-full">
                      Check Availability
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
                        <div className="font-medium">Free Cancellation</div>
                        <div className="text-sm text-muted-foreground">On most rooms up to 7 days before arrival</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Best Price Guarantee</div>
                        <div className="text-sm text-muted-foreground">Find it cheaper and we'll match the price</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Contact Hotel
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
