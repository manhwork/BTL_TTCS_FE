"use client"

import { useCart } from "@/context/cart-context"
import { CartItemCard } from "@/components/cart/cart-item-card"
import { CartSummary } from "@/components/cart/cart-summary"
import { EmptyCart } from "@/components/cart/empty-cart"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartPage() {
  const { items, getCartCount } = useCart()
  const cartCount = getCartCount()

  if (cartCount === 0) {
    return <EmptyCart />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Your Cart ({cartCount} {cartCount === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <CartSummary />
          <Button className="w-full mt-4" size="lg" asChild>
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
