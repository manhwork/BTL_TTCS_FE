"use client";
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
import { useState, useEffect } from "react";
import { getHotels } from "@/service/hotels";

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
}

interface PaginationData {
    totalRows: number;
    totalPages: number;
}

interface HotelResponse {
    hits: Hotel[];
    pagination: PaginationData;
}

export default function HotelsPage() {
    const [data, setData] = useState<Hotel[]>([]);
    const [pagination, setPagination] = useState<PaginationData>({
        totalRows: 0,
        totalPages: 0,
    });
    const [params, setParams] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await getHotels(params);
            if (response) {
                setData(response.hits || []);
                setPagination({
                    totalRows: response.pagination?.totalRows || 0,
                    totalPages: response.pagination?.totalPages || 0,
                });
            }
        };
        fetchData();
    }, [params]);

    const getAmenityIcon = (amenity: string) => {
        switch (amenity) {
            case "Wifi miễn phí":
                return <Wifi className="h-4 w-4" />;
            case "Bữa sáng":
                return <Coffee className="h-4 w-4" />;
            case "Nhà hàng":
                return <Utensils className="h-4 w-4" />;
            case "Phòng tập gym":
                return <Dumbbell className="h-4 w-4" />;
            default:
                return null;
        }
    };

    const getAmenities = (hotel: Hotel) => {
        const amenities = ["Wifi miễn phí"];
        if (hotel.parking_included) {
            amenities.push("Bãi đỗ xe miễn phí");
        }
        return amenities;
    };

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Tìm Nơi Lưu Trú Hoàn Hảo
                                </h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Khám phá các lựa chọn khách sạn, khu nghỉ
                                    dưỡng và chỗ ở trên khắp thế giới
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">Bộ lọc</h3>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-sm"
                                        >
                                            Đặt lại
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="search">Tìm kiếm</Label>
                                        <div className="relative">
                                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="search"
                                                type="search"
                                                placeholder="Tìm khách sạn..."
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Loại chỗ ở</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="hotel" />
                                            <Label
                                                htmlFor="hotel"
                                                className="font-normal"
                                            >
                                                Khách sạn
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="resort" />
                                            <Label
                                                htmlFor="resort"
                                                className="font-normal"
                                            >
                                                Khu nghỉ dưỡng
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="villa" />
                                            <Label
                                                htmlFor="villa"
                                                className="font-normal"
                                            >
                                                Biệt thự
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="apartment" />
                                            <Label
                                                htmlFor="apartment"
                                                className="font-normal"
                                            >
                                                Căn hộ
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="boutique" />
                                            <Label
                                                htmlFor="boutique"
                                                className="font-normal"
                                            >
                                                Khách sạn boutique
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Tiện nghi</Label>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="wifi" />
                                            <Label
                                                htmlFor="wifi"
                                                className="font-normal"
                                            >
                                                Wifi miễn phí
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="breakfast" />
                                            <Label
                                                htmlFor="breakfast"
                                                className="font-normal"
                                            >
                                                Bao gồm bữa sáng
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="pool" />
                                            <Label
                                                htmlFor="pool"
                                                className="font-normal"
                                            >
                                                Hồ bơi
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="parking" />
                                            <Label
                                                htmlFor="parking"
                                                className="font-normal"
                                            >
                                                Bãi đỗ xe miễn phí
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="pet-friendly" />
                                            <Label
                                                htmlFor="pet-friendly"
                                                className="font-normal"
                                            >
                                                Cho phép thú cưng
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Điểm đến</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Tất cả điểm đến" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                Tất cả điểm đến
                                            </SelectItem>
                                            <SelectItem value="europe">
                                                Châu Âu
                                            </SelectItem>
                                            <SelectItem value="asia">
                                                Châu Á
                                            </SelectItem>
                                            <SelectItem value="africa">
                                                Châu Phi
                                            </SelectItem>
                                            <SelectItem value="north-america">
                                                Bắc Mỹ
                                            </SelectItem>
                                            <SelectItem value="south-america">
                                                Nam Mỹ
                                            </SelectItem>
                                            <SelectItem value="oceania">
                                                Châu Đại Dương
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Xếp hạng sao</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Mọi xếp hạng" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="any">
                                                Mọi xếp hạng
                                            </SelectItem>
                                            <SelectItem value="5">
                                                5 sao
                                            </SelectItem>
                                            <SelectItem value="4">
                                                4+ sao
                                            </SelectItem>
                                            <SelectItem value="3">
                                                3+ sao
                                            </SelectItem>
                                            <SelectItem value="2">
                                                2+ sao
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label>Khoảng giá (mỗi đêm)</Label>
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
                                    Áp dụng bộ lọc
                                </Button>
                            </div>
                            <div className="md:w-3/4">
                                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                                    <div className="mb-4 sm:mb-0">
                                        <p className="text-muted-foreground">
                                            Hiển thị {data.length} khách sạn
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Label
                                            htmlFor="sort"
                                            className="whitespace-nowrap"
                                        >
                                            Sắp xếp theo:
                                        </Label>
                                        <Select>
                                            <SelectTrigger
                                                id="sort"
                                                className="w-[180px]"
                                            >
                                                <SelectValue placeholder="Đề xuất" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="recommended">
                                                    Đề xuất
                                                </SelectItem>
                                                <SelectItem value="price-low">
                                                    Giá: Thấp đến cao
                                                </SelectItem>
                                                <SelectItem value="price-high">
                                                    Giá: Cao đến thấp
                                                </SelectItem>
                                                <SelectItem value="rating">
                                                    Đánh giá
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {data.map((hotel) => (
                                        <Card
                                            key={hotel._id}
                                            className="overflow-hidden h-full flex flex-col"
                                        >
                                            <div className="relative h-48">
                                                <Image
                                                    src="/placeholder.svg?height=300&width=500&text=Hotel"
                                                    alt={hotel.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {hotel.position <= 3 && (
                                                    <Badge className="absolute top-4 right-4 bg-primary">
                                                        Nổi bật
                                                    </Badge>
                                                )}
                                            </div>
                                            <CardContent className="p-4 flex-1">
                                                <div className="flex items-center gap-1 mb-2">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="font-medium">
                                                        {hotel.average_rating ||
                                                            0}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold mb-2">
                                                    {hotel.name}
                                                </h3>
                                                <div className="flex items-center text-muted-foreground mb-4">
                                                    <MapPin className="mr-1 h-4 w-4" />
                                                    <span>
                                                        {hotel.city},{" "}
                                                        {hotel.country}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {getAmenities(hotel).map(
                                                        (amenity) => (
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
                                                        )
                                                    )}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0 flex items-center justify-between">
                                                <div>
                                                    <span className="text-lg font-bold">
                                                        {hotel.total_rooms}{" "}
                                                        phòng
                                                    </span>
                                                </div>
                                                <Button asChild size="sm">
                                                    <Link
                                                        href={`/hotels/${hotel._id}`}
                                                    >
                                                        Xem chi tiết
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
        </div>
    );
}
