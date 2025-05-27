"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/cart-context";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    // Listen for scroll events to update header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/60"
                    : "bg-transparent"
            }`}
        >
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="border-r-ocean-200"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-ocean-700">
                                    Menu
                                </SheetTitle>
                                <SheetDescription>
                                    Navigate through our travel offerings
                                </SheetDescription>
                            </SheetHeader>
                            <nav className="grid gap-4 py-6">
                                <Link
                                    href="/"
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/tours"
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
                                >
                                    Tours
                                </Link>
                                <Link
                                    href="/hotels"
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
                                >
                                    Hotels
                                </Link>
                                <Link
                                    href="/flights"
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
                                >
                                    Flights
                                </Link>
                                <Link
                                    href="/planner"
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
                                >
                                    AI Planner
                                </Link>
                                <Link
                                    href="/blog"
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/contact"
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
                                >
                                    Contact
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center gap-2 group">
                        <Globe className="h-6 w-6 text-ocean-600 group-hover:text-ocean-700 transition-colors" />
                        <span className="font-bold text-lg bg-gradient-to-r from-ocean-700 to-ocean-500 bg-clip-text text-transparent">
                            TravelEase
                        </span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium transition-colors hover:text-ocean-600"
                    >
                        Home
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Link href="/tours">
                                <Button
                                    variant="link"
                                    className="p-0 text-sm font-medium"
                                >
                                    Tours
                                </Button>
                            </Link>
                        </DropdownMenuTrigger>
                        {/* <DropdownMenuContent
                            align="center"
                            className="w-48 border-ocean-100"
                        >
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/tours/adventure"
                                    className="hover:text-ocean-700"
                                >
                                    Adventure Tours
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/tours/cultural"
                                    className="hover:text-ocean-700"
                                >
                                    Cultural Tours
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/tours/luxury"
                                    className="hover:text-ocean-700"
                                >
                                    Luxury Tours
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/tours/family"
                                    className="hover:text-ocean-700"
                                >
                                    Family Tours
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent> */}
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Link href="/hotels">
                                <Button
                                    variant="link"
                                    className="p-0 text-sm font-medium"
                                >
                                    Hotels
                                </Button>
                            </Link>
                        </DropdownMenuTrigger>
                        {/* <DropdownMenuContent
                            align="center"
                            className="w-48 border-ocean-100"
                        >
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/hotels/luxury"
                                    className="hover:text-ocean-700"
                                >
                                    Luxury Hotels
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/hotels/boutique"
                                    className="hover:text-ocean-700"
                                >
                                    Boutique Hotels
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/hotels/budget"
                                    className="hover:text-ocean-700"
                                >
                                    Budget Hotels
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/hotels/resorts"
                                    className="hover:text-ocean-700"
                                >
                                    Resorts
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent> */}
                    </DropdownMenu>
                    <Link
                        href="/flights"
                        className="text-sm font-medium transition-colors hover:text-ocean-600"
                    >
                        Flights
                    </Link>
                    <Link
                        href="/planner"
                        className="text-sm font-medium transition-colors hover:text-ocean-600"
                    >
                        AI Planner
                    </Link>
                    <Link
                        href="/blog"
                        className="text-sm font-medium transition-colors hover:text-ocean-600"
                    >
                        Blog
                    </Link>
                </nav>
                {/* <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-foreground hover:text-ocean-600 hover:bg-ocean-50"
                    >
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-foreground hover:text-ocean-600 hover:bg-ocean-50 relative"
                        asChild
                    >
                        <Link href="/cart">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-sunset-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-gentle">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-foreground hover:text-ocean-600 hover:bg-ocean-50"
                            >
                                <User className="h-5 w-5" />
                                <span className="sr-only">Account</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-56 border-ocean-100"
                        >
                            <DropdownMenuLabel className="text-ocean-700">
                                My Account
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-ocean-100" />
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/login"
                                    className="hover:text-ocean-700 cursor-pointer"
                                >
                                    Login
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/register"
                                    className="hover:text-ocean-700 cursor-pointer"
                                >
                                    Register
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-ocean-100" />
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/profile"
                                    className="hover:text-ocean-700 cursor-pointer"
                                >
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/bookings"
                                    className="hover:text-ocean-700 cursor-pointer"
                                >
                                    My Bookings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/wishlist"
                                    className="hover:text-ocean-700 cursor-pointer"
                                >
                                    Wishlist
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div> */}
            </div>
        </header>
    );
}
