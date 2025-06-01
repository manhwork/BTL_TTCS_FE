"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { getCookie, removeCookie } from "@/lib/cookies";
import { Globe, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { getCartCount } = useCart();
    const cartCount = getCartCount();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    // Listen for scroll events to update header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Kiểm tra trạng thái đăng nhập khi component mount
    useEffect(() => {
        const accessToken = getCookie("accessToken");
        console.log("accessToken", accessToken);
        setIsLoggedIn(!!accessToken);
    }, []);

    const handleLogout = () => {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        setIsLoggedIn(false);
        toast.success("Đăng xuất thành công!");
        router.push("/");
    };

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
                    </DropdownMenu>
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
                    <Link
                        href="/about"
                        className="text-sm font-medium transition-colors hover:text-ocean-600"
                    >
                        About
                    </Link>
                </nav>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-foreground hover:text-ocean-600 hover:bg-ocean-50 relative"
                        asChild
                    ></Button>
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
                            {isLoggedIn ? (
                                <>
                                    <DropdownMenuLabel className="text-ocean-700">
                                        Tài khoản của tôi
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-ocean-100" />
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/profile"
                                            className="hover:text-ocean-700 cursor-pointer"
                                        >
                                            Thông tin cá nhân
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/bookings"
                                            className="hover:text-ocean-700 cursor-pointer"
                                        >
                                            Đặt chỗ của tôi
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/wishlist"
                                            className="hover:text-ocean-700 cursor-pointer"
                                        >
                                            Danh sách yêu thích
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-ocean-100" />
                                    <DropdownMenuItem
                                        onClick={handleLogout}
                                        className="hover:text-ocean-700 cursor-pointer"
                                    >
                                        Đăng xuất
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuLabel className="text-ocean-700">
                                        Tài khoản
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-ocean-100" />
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/login"
                                            className="hover:text-ocean-700 cursor-pointer"
                                        >
                                            Đăng nhập
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/register"
                                            className="hover:text-ocean-700 cursor-pointer"
                                        >
                                            Đăng ký
                                        </Link>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
