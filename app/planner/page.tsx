"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    CalendarIcon,
    Clock,
    MapPin,
    Plane,
    Hotel,
    Utensils,
    Ticket,
    Coffee,
    Sparkles,
    Star,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function PlannerPage() {
    const [date, setDate] = useState<Date>();

    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-1">
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    AI-Powered Smart Tour Planner
                                </h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Let our advanced AI create the perfect
                                    itinerary based on your preferences, budget,
                                    and travel style
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_2fr]">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Create Your Perfect Trip
                                    </CardTitle>
                                    <CardDescription>
                                        Fill in your preferences and our AI will
                                        generate a personalized itinerary
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Destination
                                        </label>
                                        <Input placeholder="Where do you want to go?" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Start Date
                                            </label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !date &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date
                                                            ? format(
                                                                  date,
                                                                  "PPP"
                                                              )
                                                            : "Pick a date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Duration
                                            </label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select duration" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="weekend">
                                                        Weekend (2-3 days)
                                                    </SelectItem>
                                                    <SelectItem value="week">
                                                        Week (5-7 days)
                                                    </SelectItem>
                                                    <SelectItem value="twoweeks">
                                                        Two Weeks (12-14 days)
                                                    </SelectItem>
                                                    <SelectItem value="month">
                                                        Month (28-30 days)
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Travelers
                                        </label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Number of travelers" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">
                                                    Solo Traveler
                                                </SelectItem>
                                                <SelectItem value="2">
                                                    Couple
                                                </SelectItem>
                                                <SelectItem value="family">
                                                    Family with Kids
                                                </SelectItem>
                                                <SelectItem value="friends">
                                                    Group of Friends
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Travel Style
                                        </label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select travel style" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="adventure">
                                                    Adventure & Outdoor
                                                </SelectItem>
                                                <SelectItem value="cultural">
                                                    Cultural & Historical
                                                </SelectItem>
                                                <SelectItem value="relaxation">
                                                    Relaxation & Wellness
                                                </SelectItem>
                                                <SelectItem value="food">
                                                    Food & Culinary
                                                </SelectItem>
                                                <SelectItem value="luxury">
                                                    Luxury & Premium
                                                </SelectItem>
                                                <SelectItem value="budget">
                                                    Budget & Backpacking
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Budget
                                            </label>
                                            <span className="text-sm text-muted-foreground">
                                                $1,500
                                            </span>
                                        </div>
                                        <Slider
                                            defaultValue={[1500]}
                                            min={500}
                                            max={10000}
                                            step={100}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Special Interests (Optional)
                                        </label>
                                        <Textarea placeholder="Tell us about your interests, dietary restrictions, accessibility needs, etc." />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Generate Itinerary
                                    </Button>
                                </CardFooter>
                            </Card>
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Your Personalized Itinerary
                                        </CardTitle>
                                        <CardDescription>
                                            A custom travel plan created just
                                            for you
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Tabs defaultValue="overview">
                                            <TabsList className="grid w-full grid-cols-4">
                                                <TabsTrigger value="overview">
                                                    Overview
                                                </TabsTrigger>
                                                <TabsTrigger value="day-by-day">
                                                    Day by Day
                                                </TabsTrigger>
                                                <TabsTrigger value="map">
                                                    Map
                                                </TabsTrigger>
                                                <TabsTrigger value="booking">
                                                    Booking
                                                </TabsTrigger>
                                            </TabsList>
                                            <TabsContent
                                                value="overview"
                                                className="space-y-4 pt-4"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="relative h-20 w-20 rounded-md overflow-hidden">
                                                        <Image
                                                            src="/placeholder.svg?height=80&width=80&text=Paris"
                                                            alt="Paris"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold">
                                                            Paris Explorer
                                                        </h3>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <MapPin className="mr-1 h-4 w-4" />
                                                            <span>
                                                                Paris, France
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <Clock className="mr-1 h-4 w-4" />
                                                            <span>7 days</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Separator />
                                                <div>
                                                    <h4 className="font-medium mb-2">
                                                        Trip Summary
                                                    </h4>
                                                    <p className="text-muted-foreground">
                                                        Experience the magic of
                                                        Paris with this 7-day
                                                        itinerary that combines
                                                        iconic landmarks, hidden
                                                        gems, and authentic
                                                        local experiences. From
                                                        the Eiffel Tower to
                                                        charming Montmartre,
                                                        this trip offers a
                                                        perfect balance of
                                                        culture, cuisine, and
                                                        relaxation.
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <Card>
                                                        <CardHeader className="p-4">
                                                            <CardTitle className="text-sm">
                                                                Estimated Budget
                                                            </CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="p-4 pt-0">
                                                            <div className="text-2xl font-bold">
                                                                $1,850
                                                            </div>
                                                            <p className="text-xs text-muted-foreground">
                                                                Per person
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader className="p-4">
                                                            <CardTitle className="text-sm">
                                                                Best Time to
                                                                Visit
                                                            </CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="p-4 pt-0">
                                                            <div className="text-lg font-medium">
                                                                April - June
                                                            </div>
                                                            <p className="text-xs text-muted-foreground">
                                                                September -
                                                                October
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">
                                                        Highlights
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <Badge
                                                                variant="outline"
                                                                className="rounded-full"
                                                            >
                                                                ✓
                                                            </Badge>
                                                            <span className="text-sm">
                                                                Eiffel Tower
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Badge
                                                                variant="outline"
                                                                className="rounded-full"
                                                            >
                                                                ✓
                                                            </Badge>
                                                            <span className="text-sm">
                                                                Louvre Museum
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Badge
                                                                variant="outline"
                                                                className="rounded-full"
                                                            >
                                                                ✓
                                                            </Badge>
                                                            <span className="text-sm">
                                                                Notre-Dame
                                                                Cathedral
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Badge
                                                                variant="outline"
                                                                className="rounded-full"
                                                            >
                                                                ✓
                                                            </Badge>
                                                            <span className="text-sm">
                                                                Montmartre
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Badge
                                                                variant="outline"
                                                                className="rounded-full"
                                                            >
                                                                ✓
                                                            </Badge>
                                                            <span className="text-sm">
                                                                Seine River
                                                                Cruise
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Badge
                                                                variant="outline"
                                                                className="rounded-full"
                                                            >
                                                                ✓
                                                            </Badge>
                                                            <span className="text-sm">
                                                                Versailles
                                                                Palace
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                            <TabsContent
                                                value="day-by-day"
                                                className="space-y-4 pt-4"
                                            >
                                                <div className="space-y-4">
                                                    {[1, 2, 3].map((day) => (
                                                        <Card key={day}>
                                                            <CardHeader className="p-4">
                                                                <CardTitle className="text-lg">
                                                                    Day {day}:{" "}
                                                                    {day === 1
                                                                        ? "Arrival & Eiffel Tower"
                                                                        : day ===
                                                                          2
                                                                        ? "Louvre & Seine"
                                                                        : "Montmartre & Sacré-Cœur"}
                                                                </CardTitle>
                                                            </CardHeader>
                                                            <CardContent className="p-4 pt-0 space-y-4">
                                                                <div className="space-y-2">
                                                                    <div className="flex items-start gap-2">
                                                                        <Coffee className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                                                        <div>
                                                                            <h5 className="font-medium">
                                                                                Morning
                                                                            </h5>
                                                                            <p className="text-sm text-muted-foreground">
                                                                                {day ===
                                                                                1
                                                                                    ? "Arrive at Charles de Gaulle Airport. Check in to your hotel and freshen up."
                                                                                    : day ===
                                                                                      2
                                                                                    ? "Visit the Louvre Museum early to avoid crowds. Don't miss the Mona Lisa and Venus de Milo."
                                                                                    : "Explore the charming neighborhood of Montmartre. Visit Place du Tertre to see artists at work."}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-start gap-2">
                                                                        <Utensils className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                                                        <div>
                                                                            <h5 className="font-medium">
                                                                                Afternoon
                                                                            </h5>
                                                                            <p className="text-sm text-muted-foreground">
                                                                                {day ===
                                                                                1
                                                                                    ? "Have lunch at a local café. Visit the Eiffel Tower and enjoy panoramic views of Paris."
                                                                                    : day ===
                                                                                      2
                                                                                    ? "Lunch at Café Marly with views of the Louvre Pyramid. Stroll through Tuileries Garden."
                                                                                    : "Lunch at a traditional bistro. Visit the magnificent Sacré-Cœur Basilica."}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-start gap-2">
                                                                        <Ticket className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                                                        <div>
                                                                            <h5 className="font-medium">
                                                                                Evening
                                                                            </h5>
                                                                            <p className="text-sm text-muted-foreground">
                                                                                {day ===
                                                                                1
                                                                                    ? "Dinner at a restaurant near the Seine. Optional: Eiffel Tower light show at night."
                                                                                    : day ===
                                                                                      2
                                                                                    ? "Take a sunset cruise on the Seine River. Dinner at a traditional French restaurant."
                                                                                    : "Enjoy dinner and a show at the famous Moulin Rouge (optional)."}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                    <Button
                                                        variant="outline"
                                                        className="w-full"
                                                    >
                                                        View All 7 Days
                                                    </Button>
                                                </div>
                                            </TabsContent>
                                            <TabsContent
                                                value="map"
                                                className="pt-4"
                                            >
                                                <div className="relative h-[400px] w-full rounded-md overflow-hidden bg-muted">
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <p className="text-muted-foreground">
                                                            Interactive map
                                                            would be displayed
                                                            here
                                                        </p>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                            <TabsContent
                                                value="booking"
                                                className="space-y-4 pt-4"
                                            >
                                                <div className="grid gap-4">
                                                    <Card>
                                                        <CardHeader className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                <Plane className="h-5 w-5" />
                                                                <CardTitle className="text-lg">
                                                                    Flights
                                                                </CardTitle>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="p-4 pt-0">
                                                            <p className="text-sm text-muted-foreground mb-4">
                                                                Recommended
                                                                flights based on
                                                                your
                                                                preferences:
                                                            </p>
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center">
                                                                    <div>
                                                                        <div className="font-medium">
                                                                            New
                                                                            York
                                                                            (JFK)
                                                                            to
                                                                            Paris
                                                                            (CDG)
                                                                        </div>
                                                                        <div className="text-sm text-muted-foreground">
                                                                            Air
                                                                            France,
                                                                            Nonstop
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <div className="font-medium">
                                                                            $650
                                                                        </div>
                                                                        <div className="text-sm text-muted-foreground">
                                                                            Round
                                                                            trip
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Button
                                                                className="w-full mt-4"
                                                                variant="outline"
                                                            >
                                                                View Flight
                                                                Options
                                                            </Button>
                                                        </CardContent>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                <Hotel className="h-5 w-5" />
                                                                <CardTitle className="text-lg">
                                                                    Accommodations
                                                                </CardTitle>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="p-4 pt-0">
                                                            <p className="text-sm text-muted-foreground mb-4">
                                                                Recommended
                                                                hotels based on
                                                                your
                                                                preferences:
                                                            </p>
                                                            <div className="space-y-4">
                                                                <div className="flex gap-4">
                                                                    <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                                                                        <Image
                                                                            src="/placeholder.svg?height=64&width=64&text=Hotel"
                                                                            alt="Hotel"
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="font-medium">
                                                                            Hôtel
                                                                            Le
                                                                            Marais
                                                                        </div>
                                                                        <div className="text-sm text-muted-foreground">
                                                                            Le
                                                                            Marais,
                                                                            Central
                                                                            Paris
                                                                        </div>
                                                                        <div className="flex items-center gap-1 mt-1">
                                                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                                            <span className="text-xs text-muted-foreground ml-1">
                                                                                (245
                                                                                reviews)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <div className="font-medium">
                                                                            $180
                                                                        </div>
                                                                        <div className="text-xs text-muted-foreground">
                                                                            per
                                                                            night
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Button
                                                                className="w-full mt-4"
                                                                variant="outline"
                                                            >
                                                                View Hotel
                                                                Options
                                                            </Button>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                                <Button className="w-full">
                                                    Book Complete Package
                                                </Button>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>
                                <div className="flex flex-col gap-2">
                                    <Button variant="outline">
                                        Save Itinerary
                                    </Button>
                                    <Button variant="outline">
                                        Share Itinerary
                                    </Button>
                                    <Button variant="outline">
                                        Download PDF
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
