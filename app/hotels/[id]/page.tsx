"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
import { getHotel } from "@/service/hotels";
import { addDays, format } from "date-fns";
import {
    CalendarIcon,
    Car,
    Check,
    Dumbbell,
    Heart,
    Info,
    MapPin,
    PocketIcon as Pool,
    Share2,
    Snowflake,
    Star,
    Utensils,
    Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Hotel {
    _id: string;
    slug: string;
    name: string;
    description: string;
    category: string;
    parking_included: boolean;
    street_address: string;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    lat: number;
    lon: number;
    status: string;
    total_rooms: number;
    average_rating: number;
    position: number;
    check_in_time: string;
    check_out_time: string;
    images: string[];
}

export default function HotelDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [dateRange, setDateRange] = useState<{
        from: Date;
        to?: Date;
    }>({
        from: new Date(),
        to: addDays(new Date(), 5),
    });
    const [guests, setGuests] = useState("2");
    const [rooms, setRooms] = useState("1");
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState<string>("/placeholder.svg");

    useEffect(() => {
        const fetchHotel = async () => {
            const response = await getHotel(id);
            if (response) {
                setHotel(response);
                if (response.images && response.images.length > 0) {
                    setMainImage(response.images[0]);
                }
            }
        };
        fetchHotel();
    }, [id]);

    if (!hotel) {
        return <div>Loading...</div>;
    }

    const getAmenities = () => {
        const amenities = [
            { name: "Wifi miễn phí", icon: <Wifi className="h-4 w-4" /> },
            { name: "Bãi đỗ xe", icon: <Car className="h-4 w-4" /> },
            { name: "Nhà hàng", icon: <Utensils className="h-4 w-4" /> },
            { name: "Hồ bơi", icon: <Pool className="h-4 w-4" /> },
            { name: "Phòng tập gym", icon: <Dumbbell className="h-4 w-4" /> },
            { name: "Điều hòa", icon: <Snowflake className="h-4 w-4" /> },
        ];
        return amenities;
    };

    const getNearbyAttractions = () => {
        return [
            { name: "Bãi biển", distance: "100m" },
            { name: "Trung tâm mua sắm", distance: "500m" },
            { name: "Nhà hàng", distance: "200m" },
            { name: "Sân bay", distance: "5km" },
        ];
    };

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="py-6 md:py-8">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
                            {/* Left Column - Hotel Details */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href="/hotels"
                                            className="text-sm text-muted-foreground hover:text-primary"
                                        >
                                            Khách sạn
                                        </Link>
                                        <span className="text-sm text-muted-foreground">
                                            /
                                        </span>
                                        <Link
                                            href={`/hotels?location=${hotel.city}`}
                                            className="text-sm text-muted-foreground hover:text-primary"
                                        >
                                            {hotel.city}
                                        </Link>
                                        <span className="text-sm text-muted-foreground">
                                            /
                                        </span>
                                        <span className="text-sm font-medium">
                                            {hotel.name}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        {hotel.name}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-medium">
                                                {hotel.average_rating}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="mr-1 h-4 w-4" />
                                            <span>
                                                {hotel.city}, {hotel.country}
                                            </span>
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
                                                    Thêm vào yêu thích
                                                </span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <Share2 className="h-4 w-4" />
                                                <span className="sr-only">
                                                    Chia sẻ
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Gallery */}
                                <div className="space-y-2">
                                    <div className="relative aspect-video overflow-hidden rounded-lg">
                                        <Image
                                            src={mainImage}
                                            alt={hotel.name}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    {hotel.images &&
                                        hotel.images.length > 0 && (
                                            <div className="grid grid-cols-6 gap-2">
                                                {hotel.images.map(
                                                    (image, index) => (
                                                        <div
                                                            key={index}
                                                            className={cn(
                                                                "relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2",
                                                                mainImage ===
                                                                    image
                                                                    ? "border-primary"
                                                                    : "border-transparent"
                                                            )}
                                                            onClick={() =>
                                                                setMainImage(
                                                                    image
                                                                )
                                                            }
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${
                                                                    hotel.name
                                                                } ${index + 1}`}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>

                                {/* Hotel Content Tabs */}
                                <Tabs
                                    defaultValue="overview"
                                    className="w-full"
                                >
                                    <TabsList className="grid w-full grid-cols-5">
                                        <TabsTrigger value="overview">
                                            Tổng quan
                                        </TabsTrigger>
                                        <TabsTrigger value="rooms">
                                            Phòng
                                        </TabsTrigger>
                                        <TabsTrigger value="amenities">
                                            Tiện nghi
                                        </TabsTrigger>
                                        <TabsTrigger value="policies">
                                            Chính sách
                                        </TabsTrigger>
                                        <TabsTrigger value="reviews">
                                            Đánh giá
                                        </TabsTrigger>
                                    </TabsList>

                                    {/* Overview Tab */}
                                    <TabsContent
                                        value="overview"
                                        className="space-y-6 pt-4"
                                    >
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-bold">
                                                Tổng quan về khách sạn
                                            </h2>
                                            <p className="text-muted-foreground">
                                                {hotel.description}
                                            </p>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">
                                                        Tiện nghi chính
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {getAmenities().map(
                                                            (
                                                                amenity,
                                                                index
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex items-center gap-2"
                                                                >
                                                                    <div className="bg-primary/10 p-1.5 rounded-full">
                                                                        {
                                                                            amenity.icon
                                                                        }
                                                                    </div>
                                                                    <span className="text-sm">
                                                                        {
                                                                            amenity.name
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">
                                                        Địa điểm nổi bật
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0 space-y-4">
                                                    <div className="relative h-32 w-full rounded-md overflow-hidden">
                                                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                                            <p className="text-sm text-muted-foreground">
                                                                Bản đồ sẽ hiển
                                                                thị ở đây
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium text-sm">
                                                            Địa điểm gần đó:
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {getNearbyAttractions().map(
                                                                (
                                                                    attraction,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex justify-between text-sm"
                                                                    >
                                                                        <span>
                                                                            {
                                                                                attraction.name
                                                                            }
                                                                        </span>
                                                                        <span className="text-muted-foreground">
                                                                            {
                                                                                attraction.distance
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* Policies Tab */}
                                    <TabsContent
                                        value="policies"
                                        className="space-y-6 pt-4"
                                    >
                                        <h2 className="text-2xl font-bold">
                                            Chính sách khách sạn
                                        </h2>
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">
                                                        Giờ nhận/trả phòng
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0 space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>
                                                            Giờ nhận phòng
                                                        </span>
                                                        <span className="font-medium">
                                                            {format(
                                                                new Date(
                                                                    hotel.check_in_time
                                                                ),
                                                                "HH:mm"
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>
                                                            Giờ trả phòng
                                                        </span>
                                                        <span className="font-medium">
                                                            {format(
                                                                new Date(
                                                                    hotel.check_out_time
                                                                ),
                                                                "HH:mm"
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-muted-foreground mt-2">
                                                        Nhận phòng sớm và trả
                                                        phòng muộn có sẵn theo
                                                        yêu cầu và tùy thuộc vào
                                                        tình trạng phòng.
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>

                            {/* Right Column - Booking */}
                            <div className="space-y-6">
                                <Card className=" top-24">
                                    <CardHeader>
                                        <CardTitle>Đặt phòng</CardTitle>
                                        <CardDescription>
                                            Chọn ngày và loại phòng
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Ngày nhận/trả phòng
                                            </label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className="w-full justify-start text-left font-normal"
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {dateRange?.from ? (
                                                            dateRange.to ? (
                                                                <>
                                                                    {format(
                                                                        dateRange.from,
                                                                        "dd/MM/yyyy"
                                                                    )}{" "}
                                                                    -{" "}
                                                                    {format(
                                                                        dateRange.to,
                                                                        "dd/MM/yyyy"
                                                                    )}
                                                                </>
                                                            ) : (
                                                                format(
                                                                    dateRange.from,
                                                                    "dd/MM/yyyy"
                                                                )
                                                            )
                                                        ) : (
                                                            <span>
                                                                Chọn ngày
                                                            </span>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className="w-auto p-0"
                                                    align="start"
                                                >
                                                    <Calendar
                                                        initialFocus
                                                        mode="range"
                                                        defaultMonth={
                                                            dateRange?.from
                                                        }
                                                        selected={dateRange}
                                                        onSelect={
                                                            setDateRange as any
                                                        }
                                                        numberOfMonths={2}
                                                        disabled={(date) =>
                                                            date < new Date()
                                                        }
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Số khách
                                                </label>
                                                <Select
                                                    value={guests}
                                                    onValueChange={setGuests}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Chọn số khách" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">
                                                            1 khách
                                                        </SelectItem>
                                                        <SelectItem value="2">
                                                            2 khách
                                                        </SelectItem>
                                                        <SelectItem value="3">
                                                            3 khách
                                                        </SelectItem>
                                                        <SelectItem value="4">
                                                            4 khách
                                                        </SelectItem>
                                                        <SelectItem value="5">
                                                            5 khách
                                                        </SelectItem>
                                                        <SelectItem value="6">
                                                            6 khách
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Số phòng
                                                </label>
                                                <Select
                                                    value={rooms}
                                                    onValueChange={setRooms}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Chọn số phòng" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">
                                                            1 phòng
                                                        </SelectItem>
                                                        <SelectItem value="2">
                                                            2 phòng
                                                        </SelectItem>
                                                        <SelectItem value="3">
                                                            3 phòng
                                                        </SelectItem>
                                                        <SelectItem value="4">
                                                            4 phòng
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Yêu cầu đặc biệt (Tùy chọn)
                                            </label>
                                            <Textarea placeholder="Bất kỳ yêu cầu hoặc sở thích đặc biệt nào?" />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Giá phòng (mỗi đêm)</span>
                                                <span>
                                                    ${hotel.total_rooms}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Số đêm</span>
                                                <span>
                                                    {dateRange.to
                                                        ? Math.ceil(
                                                              (dateRange.to.getTime() -
                                                                  dateRange.from.getTime()) /
                                                                  (1000 *
                                                                      60 *
                                                                      60 *
                                                                      24)
                                                          )
                                                        : 1}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Số phòng</span>
                                                <span>x {rooms}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Thuế & Phí</span>
                                                <span>
                                                    $
                                                    {(
                                                        hotel.total_rooms *
                                                        Number.parseInt(rooms) *
                                                        (dateRange.to
                                                            ? Math.ceil(
                                                                  (dateRange.to.getTime() -
                                                                      dateRange.from.getTime()) /
                                                                      (1000 *
                                                                          60 *
                                                                          60 *
                                                                          24)
                                                              )
                                                            : 1) *
                                                        0.15
                                                    ).toFixed(2)}
                                                </span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between font-medium">
                                                <span>Tổng cộng</span>
                                                <span>
                                                    $
                                                    {(
                                                        hotel.total_rooms *
                                                        Number.parseInt(rooms) *
                                                        (dateRange.to
                                                            ? Math.ceil(
                                                                  (dateRange.to.getTime() -
                                                                      dateRange.from.getTime()) /
                                                                      (1000 *
                                                                          60 *
                                                                          60 *
                                                                          24)
                                                              )
                                                            : 1) *
                                                        1.15
                                                    ).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-2">
                                        <Button className="w-full">
                                            Đặt ngay
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Kiểm tra tình trạng phòng
                                        </Button>
                                    </CardFooter>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Cần giúp đỡ?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <Info className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    Hủy miễn phí
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Hủy miễn phí cho hầu hết các
                                                    phòng đến 7 ngày trước khi
                                                    đến
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <Check className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    Giá tốt nhất
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Tìm giá rẻ hơn và chúng tôi
                                                    sẽ đối sánh giá
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Liên hệ khách sạn
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
