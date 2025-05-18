import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      rating: 5,
      text: "The AI Planner created the perfect itinerary for our family trip to Italy. It saved us hours of research and the local recommendations were spot on!",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
      rating: 5,
      text: "I was skeptical about using an AI to plan my trip, but I was blown away by the results. The personalized recommendations matched my travel style perfectly.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "London, UK",
      avatar: "/placeholder.svg?height=40&width=40&text=ER",
      rating: 4,
      text: "The hotel booking process was seamless and the customer service was exceptional when we needed to make last-minute changes to our reservation.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {testimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          className="h-full border-ocean-100 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
        >
          <div className="absolute -right-6 -top-6 text-ocean-50 opacity-20 group-hover:opacity-30 transition-opacity">
            <Quote className="h-24 w-24" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-sand-400 text-sand-400" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="mb-6 text-muted-foreground italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="border-2 border-ocean-100">
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback className="bg-ocean-100 text-ocean-700">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-ocean-700">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
