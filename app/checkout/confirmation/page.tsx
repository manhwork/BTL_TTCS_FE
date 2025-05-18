"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Download, Home } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
            <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-500" />
          </div>
          <h1 className="mt-4 text-3xl font-bold">Order Confirmed!</h1>
          <p className="mt-2 text-muted-foreground">Thank you for your purchase. Your order has been confirmed.</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Order Details</span>
              <span className="text-sm font-normal text-muted-foreground">{new Date().toLocaleDateString()}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Order Number</span>
              <span>{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Payment Status</span>
              <span className="text-green-600 dark:text-green-500">Paid</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Confirmation Email</span>
              <span>Sent to your email address</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You will receive a confirmation email with your order details and booking information. For tours and hotel
              bookings, you'll receive a separate email with your vouchers.
            </p>
            <p>If you have any questions about your booking, please contact our customer support team.</p>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#">
              <Download className="mr-2 h-4 w-4" />
              Download Receipt
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
