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
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Clock, Filter, MapPin, Search, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function ToursPage() {
    const tours = [
        {
            id: 1,
            title: "Santorini Island Hopping Adventure",
            location: "Greece",
            duration: "7 days",
            groupSize: "Max 12",
            rating: 4.9,
            reviews: 128,
            price: 1299,
            image: "/placeholder.svg?height=300&width=500&text=Santorini",
            featured: true,
            category: "Adventure",
        },
        {
            id: 2,
            title: "Bali Cultural Experience",
            location: "Indonesia",
            duration: "10 days",
            groupSize: "Max 10",
            rating: 4.8,
            reviews: 96,
            price: 1499,
            image: "/placeholder.svg?height=300&width=500&text=Bali",
            featured: false,
            category: "Cultural",
        },
        {
            id: 3,
            title: "Japan Cherry Blossom Tour",
            location: "Japan",
            duration: "12 days",
            groupSize: "Max 15",
            rating: 4.9,
            reviews: 152,
            price: 2799,
            image: "/placeholder.svg?height=300&width=500&text=Japan",
            featured: false,
            category: "Cultural",
        },
        {
            id: 4,
            title: "Machu Picchu Trek",
            location: "Peru",
            duration: "8 days",
            groupSize: "Max 8",
            rating: 4.7,
            reviews: 89,
            price: 1899,
            image: "/placeholder.svg?height=300&width=500&text=Machu+Picchu",
            featured: false,
            category: "Adventure",
        },
        {
            id: 5,
            title: "Safari in Serengeti",
            location: "Tanzania",
            duration: "6 days",
            groupSize: "Max 6",
            rating: 4.9,
            reviews: 112,
            price: 3299,
            image: "/placeholder.svg?height=300&width=500&text=Serengeti",
            featured: false,
            category: "Wildlife",
        },
        {
            id: 6,
            title: "Amalfi Coast Culinary Tour",
            location: "Italy",
            duration: "5 days",
            groupSize: "Max 10",
            rating: 4.8,
            reviews: 76,
            price: 1699,
            image: "/placeholder.svg?height=300&width=500&text=Amalfi",
            featured: false,
            category: "Food & Wine",
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
                                    Explore Our Tours
                                </h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Discover our handpicked selection of tours
                                    and travel experiences around the world
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
                                                placeholder="Search tours..."
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Categories</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="adventure" />
                                            <Label
                                                htmlFor="adventure"
                                                className="font-normal"
                                            >
                                                Adventure
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="cultural" />
                                            <Label
                                                htmlFor="cultural"
                                                className="font-normal"
                                            >
                                                Cultural
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="wildlife" />
                                            <Label
                                                htmlFor="wildlife"
                                                className="font-normal"
                                            >
                                                Wildlife
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="food-wine" />
                                            <Label
                                                htmlFor="food-wine"
                                                className="font-normal"
                                            >
                                                Food & Wine
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="luxury" />
                                            <Label
                                                htmlFor="luxury"
                                                className="font-normal"
                                            >
                                                Luxury
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Destinations</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="All destinations" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                All destinations
                                            </SelectItem>
                                            <SelectItem value="europe">
                                                Europe
                                            </SelectItem>
                                            <SelectItem value="asia">
                                                Asia
                                            </SelectItem>
                                            <SelectItem value="africa">
                                                Africa
                                            </SelectItem>
                                            <SelectItem value="north-america">
                                                North America
                                            </SelectItem>
                                            <SelectItem value="south-america">
                                                South America
                                            </SelectItem>
                                            <SelectItem value="oceania">
                                                Oceania
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Duration</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Any duration" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="any">
                                                Any duration
                                            </SelectItem>
                                            <SelectItem value="1-3">
                                                1-3 days
                                            </SelectItem>
                                            <SelectItem value="4-7">
                                                4-7 days
                                            </SelectItem>
                                            <SelectItem value="8-14">
                                                8-14 days
                                            </SelectItem>
                                            <SelectItem value="15+">
                                                15+ days
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label>Price Range</Label>
                                        <span className="text-sm text-muted-foreground">
                                            $500 - $5000
                                        </span>
                                    </div>
                                    <Slider
                                        defaultValue={[500, 5000]}
                                        min={0}
                                        max={10000}
                                        step={100}
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
                                            Showing {tours.length} tours
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
                                                <SelectValue placeholder="Recommended" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="recommended">
                                                    Recommended
                                                </SelectItem>
                                                <SelectItem value="price-low">
                                                    Price: Low to High
                                                </SelectItem>
                                                <SelectItem value="price-high">
                                                    Price: High to Low
                                                </SelectItem>
                                                <SelectItem value="rating">
                                                    Rating
                                                </SelectItem>
                                                <SelectItem value="duration">
                                                    Duration
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {tours.map((tour) => (
                                        <Card
                                            key={tour.id}
                                            className="overflow-hidden h-full flex flex-col"
                                        >
                                            <div className="relative h-48">
                                                <Image
                                                    src={
                                                        tour.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={tour.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {tour.featured && (
                                                    <Badge className="absolute top-4 right-4 bg-primary">
                                                        Featured
                                                    </Badge>
                                                )}
                                                <Badge
                                                    className="absolute top-4 left-4"
                                                    variant="secondary"
                                                >
                                                    {tour.category}
                                                </Badge>
                                            </div>
                                            <CardContent className="p-4 flex-1">
                                                <div className="flex items-center gap-1 mb-2">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="font-medium">
                                                        {tour.rating}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm">
                                                        ({tour.reviews} reviews)
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold mb-2">
                                                    {tour.title}
                                                </h3>
                                                <div className="grid gap-2 text-sm">
                                                    <div className="flex items-center text-muted-foreground">
                                                        <MapPin className="mr-1 h-4 w-4" />
                                                        <span>
                                                            {tour.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-muted-foreground">
                                                        <Clock className="mr-1 h-4 w-4" />
                                                        <span>
                                                            {tour.duration}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-muted-foreground">
                                                        <Users className="mr-1 h-4 w-4" />
                                                        <span>
                                                            {tour.groupSize}
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0 flex items-center justify-between">
                                                <div>
                                                    <span className="text-lg font-bold">
                                                        ${tour.price}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm">
                                                        {" "}
                                                        / person
                                                    </span>
                                                </div>
                                                <Button asChild size="sm">
                                                    <Link
                                                        href={`/tours/${tour.id}`}
                                                    >
                                                        View Details
                                                    </Link>
                                                </Button>
                                            </CardFooter>
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
