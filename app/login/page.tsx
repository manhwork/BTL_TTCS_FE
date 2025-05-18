import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Globe, Twitter } from "lucide-react";
import Link from "next/link";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function LoginPage() {
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
                            <h1 className="text-3xl font-bold">Welcome back</h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email and password to sign in to your
                                account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm text-primary underline-offset-4 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <Label
                                    htmlFor="remember"
                                    className="text-sm font-normal"
                                >
                                    Remember me
                                </Label>
                            </div>
                            <Button type="submit" className="w-full">
                                Sign In
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
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="text-primary underline-offset-4 hover:underline"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
