import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Globe, Twitter } from "lucide-react";
import Link from "next/link";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-1 flex items-center justify-center py-12">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto grid w-full max-w-md gap-6">
                        <div className="flex flex-col gap-2 text-center">
                            <Link
                                href="/"
                                className="mx-auto flex items-center gap-2"
                            >
                                <Globe className="h-6 w-6" />
                                <span className="font-bold">TravelEase</span>
                            </Link>
                            <h1 className="text-3xl font-bold">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your information to create an account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">
                                        First name
                                    </Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm-password">
                                    Confirm Password
                                </Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm font-normal"
                                >
                                    I agree to the{" "}
                                    <Link
                                        href="/terms"
                                        className="text-primary underline-offset-4 hover:underline"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-primary underline-offset-4 hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </Label>
                            </div>
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <Separator className="w-full" />
                            <div className="absolute bg-background px-2 text-xs text-muted-foreground">
                                OR CONTINUE WITH
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" className="w-full">
                                <Facebook className="mr-2 h-4 w-4" />
                                Facebook
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Github className="mr-2 h-4 w-4" />
                                Github
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Twitter className="mr-2 h-4 w-4" />
                                Twitter
                            </Button>
                        </div>
                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-primary underline-offset-4 hover:underline"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
