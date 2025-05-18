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
import {
    Filter,
    MapPin,
    Search,
    Star,
    Wifi,
    Coffee,
    Utensils,
    Dumbbell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function HotelsPage() {
    const hotels = [
        {
            id: 1,
            name: "Grand Luxury Resort & Spa",
            location: "Santorini, Greece",
            rating: 4.9,
            reviews: 328,
            price: 299,
            image: "/placeholder.svg?height=300&width=500&text=Luxury+Resort",
            featured: true,
            amenities: [
                "Free WiFi",
                "Breakfast",
                "Restaurant",
                "Fitness Center",
            ],
        },
        {
            id: 2,
            name: "Oceanview Boutique Hotel",
            location: "Bali, Indonesia",
            rating: 4.7,
            reviews: 196,
            price: 149,
            image: "/placeholder.svg?height=300&width=500&text=Boutique+Hotel",
            featured: false,
            amenities: ["Free WiFi", "Pool", "Restaurant", "Spa"],
        },
        {
            id: 3,
            name: "Cherry Blossom Inn",
            location: "Kyoto, Japan",
            rating: 4.8,
            reviews: 252,
            price: 179,
            image: "/placeholder.svg?height=300&width=500&text=Cherry+Blossom+Inn",
            featured: false,
            amenities: ["Free WiFi", "Breakfast", "Garden", "Tea Ceremony"],
        },
        {
            id: 4,
            name: "Mountain View Lodge",
            location: "Cusco, Peru",
            rating: 4.6,
            reviews: 189,
            price: 129,
            image: "/placeholder.svg?height=300&width=500&text=Mountain+Lodge",
            featured: false,
            amenities: ["Free WiFi", "Breakfast", "Restaurant", "Tours"],
        },
        {
            id: 5,
            name: "Safari Luxury Camp",
            location: "Serengeti, Tanzania",
            rating: 4.9,
            reviews: 112,
            price: 399,
            image: "/placeholder.svg?height=300&width=500&text=Safari+Camp",
            featured: false,
            amenities: ["All-Inclusive", "Safari Tours", "Restaurant", "Pool"],
        },
        {
            id: 6,
            name: "Amalfi Seaside Hotel",
            location: "Amalfi Coast, Italy",
            rating: 4.8,
            reviews: 176,
            price: 219,
            image: "/placeholder.svg?height=300&width=500&text=Amalfi+Hotel",
            featured: false,
            amenities: ["Free WiFi", "Breakfast", "Restaurant", "Beach Access"],
        },
    ];

    const getAmenityIcon = (amenity: string) => {
        switch (amenity) {
            case "Free WiFi":
                return <Wifi className="h-4 w-4" />;
            case "Breakfast":
                return <Coffee className="h-4 w-4" />;
            case "Restaurant":
                return <Utensils className="h-4 w-4" />;
            case "Fitness Center":
                return <Dumbbell className="h-4 w-4" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-1">
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Find Your Perfect Stay
                                </h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Browse our selection of hotels, resorts, and
                                    accommodations around the world
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
                                                placeholder="Search hotels..."
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Property Type</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="hotel" />
                                            <Label
                                                htmlFor="hotel"
                                                className="font-normal"
                                            >
                                                Hotel
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="resort" />
                                            <Label
                                                htmlFor="resort"
                                                className="font-normal"
                                            >
                                                Resort
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="villa" />
                                            <Label
                                                htmlFor="villa"
                                                className="font-normal"
                                            >
                                                Villa
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="apartment" />
                                            <Label
                                                htmlFor="apartment"
                                                className="font-normal"
                                            >
                                                Apartment
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="boutique" />
                                            <Label
                                                htmlFor="boutique"
                                                className="font-normal"
                                            >
                                                Boutique
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Amenities</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="wifi" />
                                            <Label
                                                htmlFor="wifi"
                                                className="font-normal"
                                            >
                                                Free WiFi
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="breakfast" />
                                            <Label
                                                htmlFor="breakfast"
                                                className="font-normal"
                                            >
                                                Breakfast Included
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="pool" />
                                            <Label
                                                htmlFor="pool"
                                                className="font-normal"
                                            >
                                                Swimming Pool
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="parking" />
                                            <Label
                                                htmlFor="parking"
                                                className="font-normal"
                                            >
                                                Free Parking
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="pet-friendly" />
                                            <Label
                                                htmlFor="pet-friendly"
                                                className="font-normal"
                                            >
                                                Pet Friendly
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
                                    <Label>Star Rating</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Any rating" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="any">
                                                Any rating
                                            </SelectItem>
                                            <SelectItem value="5">
                                                5 Stars
                                            </SelectItem>
                                            <SelectItem value="4">
                                                4+ Stars
                                            </SelectItem>
                                            <SelectItem value="3">
                                                3+ Stars
                                            </SelectItem>
                                            <SelectItem value="2">
                                                2+ Stars
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label>Price Range (per night)</Label>
                                        <span className="text-sm text-muted-foreground">
                                            $50 - $500
                                        </span>
                                    </div>
                                    <Slider
                                        defaultValue={[50, 500]}
                                        min={0}
                                        max={1000}
                                        step={10}
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
                                            Showing {hotels.length} hotels
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
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {hotels.map((hotel) => (
                                        <Card
                                            key={hotel.id}
                                            className="overflow-hidden h-full flex flex-col"
                                        >
                                            <div className="relative h-48">
                                                <Image
                                                    src={
                                                        hotel.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={hotel.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {hotel.featured && (
                                                    <Badge className="absolute top-4 right-4 bg-primary">
                                                        Featured
                                                    </Badge>
                                                )}
                                            </div>
                                            <CardContent className="p-4 flex-1">
                                                <div className="flex items-center gap-1 mb-2">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="font-medium">
                                                        {hotel.rating}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm">
                                                        ({hotel.reviews}{" "}
                                                        reviews)
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold mb-2">
                                                    {hotel.name}
                                                </h3>
                                                <div className="flex items-center text-muted-foreground mb-4">
                                                    <MapPin className="mr-1 h-4 w-4" />
                                                    <span>
                                                        {hotel.location}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {hotel.amenities
                                                        .slice(0, 4)
                                                        .map((amenity) => (
                                                            <Badge
                                                                key={amenity}
                                                                variant="outline"
                                                                className="flex items-center gap-1"
                                                            >
                                                                {getAmenityIcon(
                                                                    amenity
                                                                )}
                                                                <span>
                                                                    {amenity}
                                                                </span>
                                                            </Badge>
                                                        ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0 flex items-center justify-between">
                                                <div>
                                                    <span className="text-lg font-bold">
                                                        ${hotel.price}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm">
                                                        {" "}
                                                        / night
                                                    </span>
                                                </div>
                                                <Button asChild size="sm">
                                                    <Link
                                                        href={`/hotels/${hotel.id}`}
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
