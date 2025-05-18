import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Facebook,
    Globe,
    Instagram,
    Twitter,
    Youtube,
    MapPin,
    Mail,
    Phone,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-background to-ocean-50 dark:from-background">
            <div className="container px-4 md:px-6 py-16">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <Globe className="h-6 w-6 text-ocean-600 group-hover:text-ocean-700 transition-colors" />
                            <span className="font-bold text-lg bg-gradient-to-r from-ocean-700 to-ocean-500 bg-clip-text text-transparent">
                                TravelEase
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Discover the world with our curated travel
                            experiences, personalized itineraries, and exclusive
                            deals.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-ocean-600 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-ocean-600 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-ocean-600 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-ocean-600 transition-colors"
                            >
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-ocean-700 dark:text-ocean-400">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/press"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-ocean-700 dark:text-ocean-400">
                            Destinations
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/destinations/europe"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Europe
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/destinations/asia"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Asia
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/destinations/africa"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Africa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/destinations/north-america"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    North America
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/destinations/south-america"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    South America
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/destinations/oceania"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Oceania
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-ocean-700 dark:text-ocean-400">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/help"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/accessibility"
                                    className="text-muted-foreground hover:text-ocean-600 transition-colors"
                                >
                                    Accessibility
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4 sm:col-span-2 md:col-span-1">
                        <h3 className="text-sm font-medium text-ocean-700 dark:text-ocean-400">
                            Subscribe
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to our newsletter for travel tips and
                            exclusive offers.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Email address"
                                type="email"
                                className="max-w-[220px] border-ocean-200 focus-visible:ring-ocean-500"
                            />
                            <Button
                                type="submit"
                                size="sm"
                                className="bg-ocean-600 hover:bg-ocean-700 text-white"
                            >
                                Subscribe
                            </Button>
                        </div>
                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 text-ocean-500" />
                                <span>123 Travel Street, City, Country</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-ocean-500" />
                                <span>contact@travelease.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 text-ocean-500" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-ocean-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} TravelEase. All rights
                        reserved.
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <Link
                            href="/terms"
                            className="hover:text-ocean-600 transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/privacy"
                            className="hover:text-ocean-600 transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/cookies"
                            className="hover:text-ocean-600 transition-colors"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
