import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-ocean-700 via-ocean-600 to-ocean-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subscribe to Our Newsletter</h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-ocean-50">
              Get the latest travel tips, exclusive offers, and inspiration delivered straight to your inbox.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-white/90 text-foreground border-none focus-visible:ring-2 focus-visible:ring-white"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-sunset-500 hover:bg-sunset-600 text-white border-none"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-ocean-50">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
