import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyCart() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-muted rounded-full p-6">
          <ShoppingCart className="h-12 w-12 text-muted-foreground" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Looks like you haven't added anything to your cart yet. Explore our tours, hotels, and flights to find your
        perfect travel experience.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/tours">Explore Tours</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/hotels">Browse Hotels</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/flights">Find Flights</Link>
        </Button>
      </div>
    </div>
  )
}
