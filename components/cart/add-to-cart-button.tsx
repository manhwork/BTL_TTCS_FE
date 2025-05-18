"use client"

import { useState } from "react"
import { useCart, type CartItem } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface AddToCartButtonProps {
  item: Omit<CartItem, "quantity">
  className?: string
}

export function AddToCartButton({ item, className }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)

    // Add item to cart with quantity 1
    addItem({ ...item, quantity: 1 })

    // Show toast notification
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 3000,
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding} className={className}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
