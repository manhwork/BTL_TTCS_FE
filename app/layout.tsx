import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/context/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
    title: "v0 App",
    description: "Created with v0",
    generator: "v0.dev",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <CartProvider>
                            <div className="flex min-h-screen flex-col">
                                <Header />
                                <main className="flex-1">{children}</main>
                                <Footer />
                            </div>
                            <Toaster />
                        </CartProvider>
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
