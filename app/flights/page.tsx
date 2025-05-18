import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Filter, Search, Plane } from "lucide-react";
import Link from "next/link";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function FlightsPage() {
    const flights = [
        {
            id: 1,
            airline: "Global Airways",
            flightNumber: "GA1234",
            departure: {
                city: "New York",
                airport: "JFK",
                time: "08:00",
            },
            arrival: {
                city: "London",
                airport: "LHR",
                time: "20:00",
            },
            duration: "7h 00m",
            stops: 0,
            price: 599,
            featured: true,
        },
        {
            id: 2,
            airline: "Pacific Airlines",
            flightNumber: "PA5678",
            departure: {
                city: "Los Angeles",
                airport: "LAX",
                time: "10:30",
            },
            arrival: {
                city: "Tokyo",
                airport: "HND",
                time: "14:30",
            },
            duration: "12h 00m",
            stops: 1,
            price: 899,
            featured: false,
        },
        {
            id: 3,
            airline: "Euro Express",
            flightNumber: "EE9012",
            departure: {
                city: "Paris",
                airport: "CDG",
                time: "14:15",
            },
            arrival: {
                city: "Rome",
                airport: "FCO",
                time: "16:30",
            },
            duration: "2h 15m",
            stops: 0,
            price: 199,
            featured: false,
        },
        {
            id: 4,
            airline: "Southern Cross",
            flightNumber: "SC3456",
            departure: {
                city: "Sydney",
                airport: "SYD",
                time: "19:45",
            },
            arrival: {
                city: "Singapore",
                airport: "SIN",
                time: "01:15",
            },
            duration: "8h 30m",
            stops: 0,
            price: 499,
            featured: false,
        },
        {
            id: 5,
            airline: "Mountain Air",
            flightNumber: "MA7890",
            departure: {
                city: "Denver",
                airport: "DEN",
                time: "07:20",
            },
            arrival: {
                city: "Mexico City",
                airport: "MEX",
                time: "11:45",
            },
            duration: "4h 25m",
            stops: 1,
            price: 349,
            featured: false,
        },
        {
            id: 6,
            airline: "Island Hopper",
            flightNumber: "IH1234",
            departure: {
                city: "Honolulu",
                airport: "HNL",
                time: "09:00",
            },
            arrival: {
                city: "Fiji",
                airport: "NAN",
                time: "15:30",
            },
            duration: "6h 30m",
            stops: 0,
            price: 649,
            featured: false,
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-1">
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Find Your Flight
                                </h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Search for flights to destinations around
                                    the world
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">Filters</h3>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-sm"
                                        >
                                            Reset
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="search">Search</Label>
                                        <div className="relative">
                                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="search"
                                                type="search"
                                                placeholder="Search flights..."
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Airlines</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="global-airways" />
                                            <Label
                                                htmlFor="global-airways"
                                                className="font-normal"
                                            >
                                                Global Airways
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="pacific-airlines" />
                                            <Label
                                                htmlFor="pacific-airlines"
                                                className="font-normal"
                                            >
                                                Pacific Airlines
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="euro-express" />
                                            <Label
                                                htmlFor="euro-express"
                                                className="font-normal"
                                            >
                                                Euro Express
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="southern-cross" />
                                            <Label
                                                htmlFor="southern-cross"
                                                className="font-normal"
                                            >
                                                Southern Cross
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="mountain-air" />
                                            <Label
                                                htmlFor="mountain-air"
                                                className="font-normal"
                                            >
                                                Mountain Air
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Stops</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="nonstop" />
                                            <Label
                                                htmlFor="nonstop"
                                                className="font-normal"
                                            >
                                                Nonstop
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="1-stop" />
                                            <Label
                                                htmlFor="1-stop"
                                                className="font-normal"
                                            >
                                                1 Stop
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="2-stops" />
                                            <Label
                                                htmlFor="2-stops"
                                                className="font-normal"
                                            >
                                                2+ Stops
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Departure Time</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="early-morning" />
                                            <Label
                                                htmlFor="early-morning"
                                                className="font-normal"
                                            >
                                                Early Morning (12am - 6am)
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="morning" />
                                            <Label
                                                htmlFor="morning"
                                                className="font-normal"
                                            >
                                                Morning (6am - 12pm)
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="afternoon" />
                                            <Label
                                                htmlFor="afternoon"
                                                className="font-normal"
                                            >
                                                Afternoon (12pm - 6pm)
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="evening" />
                                            <Label
                                                htmlFor="evening"
                                                className="font-normal"
                                            >
                                                Evening (6pm - 12am)
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label>Price Range</Label>
                                        <span className="text-sm text-muted-foreground">
                                            $100 - $1000
                                        </span>
                                    </div>
                                    <Slider
                                        defaultValue={[100, 1000]}
                                        min={0}
                                        max={2000}
                                        step={50}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label>Duration</Label>
                                        <span className="text-sm text-muted-foreground">
                                            0h - 24h
                                        </span>
                                    </div>
                                    <Slider
                                        defaultValue={[0, 24]}
                                        min={0}
                                        max={48}
                                        step={1}
                                    />
                                </div>
                                <Button className="w-full">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Apply Filters
                                </Button>
                            </div>
                            <div className="md:w-3/4">
                                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                                    <div className="mb-4 sm:mb-0">
                                        <p className="text-muted-foreground">
                                            Showing {flights.length} flights
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Label
                                            htmlFor="sort"
                                            className="whitespace-nowrap"
                                        >
                                            Sort by:
                                        </Label>
                                        <Select>
                                            <SelectTrigger
                                                id="sort"
                                                className="w-[180px]"
                                            >
                                                <SelectValue placeholder="Price: Low to High" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="price-low">
                                                    Price: Low to High
                                                </SelectItem>
                                                <SelectItem value="price-high">
                                                    Price: High to Low
                                                </SelectItem>
                                                <SelectItem value="duration">
                                                    Duration
                                                </SelectItem>
                                                <SelectItem value="departure">
                                                    Departure Time
                                                </SelectItem>
                                                <SelectItem value="arrival">
                                                    Arrival Time
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {flights.map((flight) => (
                                        <Card
                                            key={flight.id}
                                            className="overflow-hidden"
                                        >
                                            <CardContent className="p-6">
                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 items-center">
                                                    <div>
                                                        <div className="font-medium">
                                                            {flight.airline}
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {
                                                                flight.flightNumber
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                                        <div className="text-center">
                                                            <div className="text-xl font-bold">
                                                                {
                                                                    flight
                                                                        .departure
                                                                        .time
                                                                }
                                                            </div>
                                                            <div className="text-sm font-medium">
                                                                {
                                                                    flight
                                                                        .departure
                                                                        .city
                                                                }
                                                            </div>
                                                            <div className="text-xs text-muted-foreground">
                                                                {
                                                                    flight
                                                                        .departure
                                                                        .airport
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <div className="text-xs text-muted-foreground">
                                                                {
                                                                    flight.duration
                                                                }
                                                            </div>
                                                            <div className="relative w-24 md:w-32">
                                                                <div className="absolute inset-0 flex items-center">
                                                                    <div className="w-full border-t border-dashed"></div>
                                                                </div>
                                                                <div className="relative flex justify-center">
                                                                    <div className="bg-background px-2">
                                                                        <Plane className="h-4 w-4 rotate-90" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-xs text-muted-foreground">
                                                                {flight.stops ===
                                                                0
                                                                    ? "Nonstop"
                                                                    : `${
                                                                          flight.stops
                                                                      } stop${
                                                                          flight.stops >
                                                                          1
                                                                              ? "s"
                                                                              : ""
                                                                      }`}
                                                            </div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-xl font-bold">
                                                                {
                                                                    flight
                                                                        .arrival
                                                                        .time
                                                                }
                                                            </div>
                                                            <div className="text-sm font-medium">
                                                                {
                                                                    flight
                                                                        .arrival
                                                                        .city
                                                                }
                                                            </div>
                                                            <div className="text-xs text-muted-foreground">
                                                                {
                                                                    flight
                                                                        .arrival
                                                                        .airport
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <div className="text-xl font-bold">
                                                            ${flight.price}
                                                        </div>
                                                        <Button
                                                            asChild
                                                            size="sm"
                                                            className="mt-2"
                                                        >
                                                            <Link
                                                                href={`/flights/${flight.id}`}
                                                            >
                                                                Select
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#"
                                                    isActive
                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext href="#" />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
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
