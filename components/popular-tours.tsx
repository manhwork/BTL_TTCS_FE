import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PopularTours() {
  const tours = [
    {
      id: 1,
      title: "Santorini Island Hopping Adventure",
      location: "Greece",
      duration: "7 days",
      groupSize: "Max 12",
      rating: 4.9,
      reviews: 128,
      price: 1299,
      image: "/placeholder.svg?height=300&width=500&text=Santorini",
      featured: true,
    },
    {
      id: 2,
      title: "Bali Cultural Experience",
      location: "Indonesia",
      duration: "10 days",
      groupSize: "Max 10",
      rating: 4.8,
      reviews: 96,
      price: 1499,
      image: "/placeholder.svg?height=300&width=500&text=Bali",
      featured: false,
    },
    {
      id: 3,
      title: "Japan Cherry Blossom Tour",
      location: "Japan",
      duration: "12 days",
      groupSize: "Max 15",
      rating: 4.9,
      reviews: 152,
      price: 2799,
      image: "/placeholder.svg?height=300&width=500&text=Japan",
      featured: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {tours.map((tour) => (
        <Card
          key={tour.id}
          className="overflow-hidden h-full flex flex-col border-ocean-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
        >
          <div className="relative h-48">
            <Image
              src={tour.image || "/placeholder.svg"}
              alt={tour.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {tour.featured && (
              <Badge className="absolute top-4 right-4 bg-sunset-500 hover:bg-sunset-600">Featured</Badge>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <CardContent className="p-4 flex-1">
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-sand-400 text-sand-400" />
              <span className="font-medium">{tour.rating}</span>
              <span className="text-muted-foreground text-sm">({tour.reviews} reviews)</span>
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-ocean-600 transition-colors">{tour.title}</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4 text-ocean-500" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4 text-ocean-500" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-1 h-4 w-4 text-ocean-500" />
                <span>{tour.groupSize}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between border-t border-ocean-50 mt-auto">
            <div>
              <span className="text-lg font-bold text-ocean-700">${tour.price}</span>
              <span className="text-muted-foreground text-sm"> / person</span>
            </div>
            <Button asChild size="sm" className="bg-ocean-600 hover:bg-ocean-700 text-white">
              <Link href={`/tours/${tour.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
