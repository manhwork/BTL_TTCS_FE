"use client";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { getTour } from "@/service/tours";
import { format } from "date-fns";
import {
    CalendarIcon,
    CalendarPlus2Icon as CalendarIcon2,
    Clock,
    Heart,
    Loader2,
    MapPin,
    Share2,
    Star,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Review {
    _id: string;
    name: string;
    avatar?: string;
    date: string;
    rating: number;
    comment: string;
}

interface Tour {
    _id: string;
    title: string;
    code: string;
    category_id: {
        _id: string;
        title: string;
    };
    images: string[];
    price: number;
    discount: number;
    information: string;
    schedule: string;
    duration_days: number;
    stock: number;
    transportation: string;
    status: string;
    position: number;
    average_rating: number;
    reviews: Review[];
    deleted: boolean;
    created_at: string;
    updated_at: string;
    slug: string;
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
    const [date, setDate] = useState<Date>();
    const [travelers, setTravelers] = useState("2");
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [data, setData] = useState<Tour | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getTour(params.id);
                console.log("[TourDetailPage] response", response);
                if (isMounted) {
                    setData(response);
                }
            } catch (error) {
                console.error("Error fetching tour:", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader2 className="animate-spin" />
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex justify-center items-center h-full">
                <div className="text-2xl font-bold">Tour not found</div>
            </div>
        );
    }

    const [mainImage, setMainImage] = useState(data.images[0]);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-6 md:py-8">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
                            {/* Left Column - Tour Details */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href="/tours"
                                            className="text-sm text-muted-foreground hover:text-primary"
                                        >
                                            Tours
                                        </Link>
                                        <span className="text-sm text-muted-foreground">
                                            /
                                        </span>
                                        <Link
                                            href="/tours?category=island-hopping"
                                            className="text-sm text-muted-foreground hover:text-primary"
                                        >
                                            Island Hopping
                                        </Link>
                                        <span className="text-sm text-muted-foreground">
                                            /
                                        </span>
                                        <span className="text-sm font-medium">
                                            {data.title}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        {data.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-medium">
                                                {data.average_rating}
                                            </span>
                                            <span className="text-muted-foreground">
                                                ({data.reviews.length} reviews)
                                            </span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="mr-1 h-4 w-4" />
                                            <span>
                                                {data.category_id.title}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Clock className="mr-1 h-4 w-4" />
                                            <span>
                                                {data.duration_days} days
                                            </span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Users className="mr-1 h-4 w-4" />
                                            <span>Stock: {data.stock}</span>
                                        </div>
                                        <div className="flex items-center gap-2 ml-auto">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    setIsWishlisted(
                                                        !isWishlisted
                                                    )
                                                }
                                                className={
                                                    isWishlisted
                                                        ? "text-red-500"
                                                        : ""
                                                }
                                            >
                                                <Heart
                                                    className={cn(
                                                        "h-4 w-4",
                                                        isWishlisted &&
                                                            "fill-red-500"
                                                    )}
                                                />
                                                <span className="sr-only">
                                                    Add to wishlist
                                                </span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <Share2 className="h-4 w-4" />
                                                <span className="sr-only">
                                                    Share
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Gallery */}
                                <div className="space-y-2">
                                    <div className="relative aspect-video overflow-hidden rounded-lg">
                                        <Image
                                            src={
                                                mainImage || "/placeholder.svg"
                                            }
                                            alt={data.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {data.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className={cn(
                                                    "relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2",
                                                    mainImage === image
                                                        ? "border-primary"
                                                        : "border-transparent"
                                                )}
                                                onClick={() =>
                                                    setMainImage(image)
                                                }
                                            >
                                                <Image
                                                    src={
                                                        image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={`${data.title} ${
                                                        index + 1
                                                    }`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tour Content Tabs */}
                                <Tabs
                                    defaultValue="overview"
                                    className="w-full"
                                >
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="overview">
                                            Overview
                                        </TabsTrigger>
                                        <TabsTrigger value="reviews">
                                            Reviews
                                        </TabsTrigger>
                                    </TabsList>

                                    {/* Overview Tab */}
                                    <TabsContent
                                        value="overview"
                                        className="space-y-6 pt-4"
                                    >
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-bold">
                                                Tour Overview
                                            </h2>
                                            <p className="text-muted-foreground">
                                                {data.information}
                                            </p>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">
                                                        Tour Schedule
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <p>{data.schedule}</p>
                                                </CardContent>
                                            </Card>

                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">
                                                        Transportation
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <p>{data.transportation}</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* Reviews Tab */}
                                    <TabsContent
                                        value="reviews"
                                        className="space-y-6 pt-4"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-bold">
                                                Customer Reviews
                                            </h2>
                                            <Button>Write a Review</Button>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                                            <Card>
                                                <CardContent className="p-6">
                                                    <div className="space-y-4">
                                                        <div className="text-center">
                                                            <div className="text-5xl font-bold">
                                                                {
                                                                    data.average_rating
                                                                }
                                                            </div>
                                                            <div className="flex justify-center gap-1 my-2">
                                                                {[
                                                                    ...Array(5),
                                                                ].map(
                                                                    (_, i) => (
                                                                        <Star
                                                                            key={
                                                                                i
                                                                            }
                                                                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                                                        />
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="text-muted-foreground">
                                                                Based on{" "}
                                                                {
                                                                    data.reviews
                                                                        .length
                                                                }{" "}
                                                                reviews
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <div className="space-y-4">
                                                {data.reviews.map(
                                                    (review: any) => (
                                                        <Card key={review._id}>
                                                            <CardContent className="p-6">
                                                                <div className="flex items-start gap-4">
                                                                    <Avatar>
                                                                        <AvatarImage
                                                                            src={
                                                                                review.avatar ||
                                                                                "/placeholder.svg"
                                                                            }
                                                                            alt={
                                                                                review.name
                                                                            }
                                                                        />
                                                                        <AvatarFallback>
                                                                            {review.name
                                                                                .split(
                                                                                    " "
                                                                                )
                                                                                .map(
                                                                                    (
                                                                                        n: string
                                                                                    ) =>
                                                                                        n[0]
                                                                                )
                                                                                .join(
                                                                                    ""
                                                                                )}
                                                                        </AvatarFallback>
                                                                    </Avatar>
                                                                    <div className="space-y-2 flex-1">
                                                                        <div className="flex items-center justify-between">
                                                                            <div>
                                                                                <div className="font-medium">
                                                                                    {
                                                                                        review.name
                                                                                    }
                                                                                </div>
                                                                                <div className="text-sm text-muted-foreground">
                                                                                    {
                                                                                        review.date
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex items-center">
                                                                                {[
                                                                                    ...Array(
                                                                                        5
                                                                                    ),
                                                                                ].map(
                                                                                    (
                                                                                        _,
                                                                                        i
                                                                                    ) => (
                                                                                        <Star
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                            className={cn(
                                                                                                "h-4 w-4",
                                                                                                i <
                                                                                                    review.rating
                                                                                                    ? "fill-yellow-400 text-yellow-400"
                                                                                                    : "text-muted"
                                                                                            )}
                                                                                        />
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-muted-foreground">
                                                                            {
                                                                                review.comment
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    )
                                                )}

                                                <Button
                                                    variant="outline"
                                                    className="w-full"
                                                >
                                                    Load More Reviews
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                {/* Related Tours */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold">
                                        You Might Also Like
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {/* Related tours will be added later */}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Booking */}
                            <div className="space-y-6">
                                <Card className="sticky top-24">
                                    <CardHeader>
                                        <CardTitle>Book This Tour</CardTitle>
                                        <CardDescription>
                                            Select your preferred date and
                                            travelers
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-muted-foreground line-through">
                                                {data.price.toLocaleString(
                                                    "vi-VN"
                                                )}{" "}
                                                VND
                                            </div>
                                            <div>
                                                <span className="text-3xl font-bold">
                                                    {(
                                                        data.price *
                                                        (1 -
                                                            data.discount / 100)
                                                    ).toLocaleString(
                                                        "vi-VN"
                                                    )}{" "}
                                                    VND
                                                </span>
                                                <span className="text-muted-foreground">
                                                    {" "}
                                                    / person
                                                </span>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Departure Date
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
                                                            : "Select date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        initialFocus
                                                        disabled={(date) =>
                                                            date < new Date() ||
                                                            date >
                                                                new Date(
                                                                    2023,
                                                                    11,
                                                                    31
                                                                )
                                                        }
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Number of Travelers
                                            </label>
                                            <Select
                                                value={travelers}
                                                onValueChange={setTravelers}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select travelers" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">
                                                        1 Traveler
                                                    </SelectItem>
                                                    <SelectItem value="2">
                                                        2 Travelers
                                                    </SelectItem>
                                                    <SelectItem value="3">
                                                        3 Travelers
                                                    </SelectItem>
                                                    <SelectItem value="4">
                                                        4 Travelers
                                                    </SelectItem>
                                                    <SelectItem value="5">
                                                        5 Travelers
                                                    </SelectItem>
                                                    <SelectItem value="6">
                                                        6 Travelers
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Special Requests (Optional)
                                            </label>
                                            <Textarea placeholder="Any dietary requirements, accessibility needs, or special requests?" />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>
                                                    Tour Price (per person)
                                                </span>
                                                <span>
                                                    {(
                                                        data.price *
                                                        (1 -
                                                            data.discount / 100)
                                                    ).toLocaleString(
                                                        "vi-VN"
                                                    )}{" "}
                                                    VND
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Travelers</span>
                                                <span>x {travelers}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between font-medium">
                                                <span>Total</span>
                                                <span>
                                                    {(
                                                        data.price *
                                                        (1 -
                                                            data.discount /
                                                                100) *
                                                        Number.parseInt(
                                                            travelers
                                                        )
                                                    ).toLocaleString(
                                                        "vi-VN"
                                                    )}{" "}
                                                    VND
                                                </span>
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                20% deposit required:{" "}
                                                {(
                                                    data.price *
                                                    (1 - data.discount / 100) *
                                                    Number.parseInt(travelers) *
                                                    0.2
                                                ).toLocaleString("vi-VN")}{" "}
                                                VND
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-4 mt-6">
                                            <AddToCartButton
                                                item={{
                                                    id: data._id,
                                                    type: "tour",
                                                    name: data.title,
                                                    image: data.images[0],
                                                    price:
                                                        data.price *
                                                        (1 -
                                                            data.discount /
                                                                100),
                                                    duration: `${data.duration_days} days`,
                                                    location:
                                                        data.category_id.title,
                                                }}
                                                className="w-full"
                                            />
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                            >
                                                Book Now
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Need Help?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <CalendarIcon2 className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    Flexible Booking
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Free cancellation up to 30
                                                    days before departure
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <Users className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    Expert Guides
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Local, English-speaking
                                                    guides with deep knowledge
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Contact Us
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
