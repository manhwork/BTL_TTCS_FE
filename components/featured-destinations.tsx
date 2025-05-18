import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
      image: "/placeholder.svg?height=400&width=600&text=Santorini",
      featured: true,
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      image: "/placeholder.svg?height=400&width=600&text=Bali",
      featured: false,
    },
    {
      id: 3,
      name: "Kyoto",
      country: "Japan",
      image: "/placeholder.svg?height=400&width=600&text=Kyoto",
      featured: false,
    },
    {
      id: 4,
      name: "Machu Picchu",
      country: "Peru",
      image: "/placeholder.svg?height=400&width=600&text=Machu+Picchu",
      featured: false,
    },
    {
      id: 5,
      name: "Amalfi Coast",
      country: "Italy",
      image: "/placeholder.svg?height=400&width=600&text=Amalfi+Coast",
      featured: false,
    },
    {
      id: 6,
      name: "Serengeti",
      country: "Tanzania",
      image: "/placeholder.svg?height=400&width=600&text=Serengeti",
      featured: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {destinations.map((destination) => (
        <Link key={destination.id} href={`/destinations/${destination.id}`}>
          <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-ocean-100 group">
            <div className="relative h-64">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {destination.featured && (
                <Badge className="absolute top-4 right-4 bg-sunset-500 hover:bg-sunset-600">Featured</Badge>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-4 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-ocean-600 transition-colors">{destination.name}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 text-ocean-500" />
                    <span>{destination.country}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
