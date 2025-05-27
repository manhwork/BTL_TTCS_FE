"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ResList } from "@/service/http";
import { getTours, getToursCategories } from "@/service/tours";
import {
    Clock,
    Filter,
    Loader2,
    MapPin,
    Search,
    Star,
    Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useDebounce from "@/app/hooks/useDebounce";

export default function ToursPage() {
    const [data, setData] = useState<ResList>({
        hits: [],
        pagination: {
            totalRows: 0,
            totalPages: 0,
        },
    });

    const [categories, setCategories] = useState<ResList>({});
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [params, setParams] = useState({});

    const debouncedSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);
            const res = await getTours(params);
            const categoriesRes = await getToursCategories();
            setData(res);
            setCategories(categoriesRes);
            setLoading(false);
        };
        fetchTours();
    }, [params]);

    useEffect(() => {
        setParams({
            ...params,
            keyword: debouncedSearchValue,
            field: "title",
        });
    }, [debouncedSearchValue]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSort = (value: string) => {
        console.log(value);

        switch (value) {
            case "recommended":
                setParams({
                    ...params,
                    sortBy: "",
                    sortType: "",
                });
                break;
            case "price-asc":
                setParams({
                    ...params,
                    sortBy: "price",
                    sortType: "asc",
                });
                break;
            case "price-desc":
                setParams({
                    ...params,
                    sortBy: "price",
                    sortType: "desc",
                });
                break;
            case "average_rating-desc":
                setParams({
                    ...params,
                    sortBy: "average_rating",
                    sortType: "desc",
                });
                break;
            case "average_rating-asc":
                setParams({
                    ...params,
                    sortBy: "average_rating",
                    sortType: "asc",
                });
                break;
            case "duration_days-desc":
                setParams({
                    ...params,
                    sortBy: "duration_days",
                    sortType: "desc",
                });
                break;
            case "duration_days-asc":
                setParams({
                    ...params,
                    sortBy: "duration_days",
                    sortType: "asc",
                });
                break;
        }
    };

    const handleCategory = (categoryId: string) => {
        console.log(categoryId);

        // setParams({
        //     ...params,
        //     category_id: e.currentTarget.id,
        // });
    };
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Khám phá các tour du lịch của chúng tôi
                                </h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Khám phá bộ sưu tập các tour du lịch và trải
                                    nghiệm du lịch được chúng tôi tuyển chọn kỹ
                                    lưỡng trên khắp thế giới
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
                                                placeholder="Search tours..."
                                                className="pl-8"
                                                onChange={handleSearch}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Danh mục</Label>
                                    <div className="space-y-2">
                                        {categories.hits?.map((category) => (
                                            <div
                                                className="flex items-center space-x-2"
                                                key={category._id}
                                                onClick={() =>
                                                    handleCategory(category._id)
                                                }
                                            >
                                                <Checkbox id={category._id} />
                                                <Label
                                                    htmlFor={category._id}
                                                    className="font-normal"
                                                >
                                                    {category.title}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Điểm đến</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="All destinations" />
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
                                                Châu Mỹ
                                            </SelectItem>
                                            <SelectItem value="south-america">
                                                Châu Mỹ Latinh
                                            </SelectItem>
                                            <SelectItem value="oceania">
                                                Châu Úc
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Thời gian</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Any duration" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="any">
                                                Bất kỳ thời gian
                                            </SelectItem>
                                            <SelectItem value="1-3">
                                                1-3 ngày
                                            </SelectItem>
                                            <SelectItem value="4-7">
                                                4-7 ngày
                                            </SelectItem>
                                            <SelectItem value="8-14">
                                                8-14 ngày
                                            </SelectItem>
                                            <SelectItem value="15+">
                                                15+ ngày
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label>Khoảng giá</Label>
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
                                    Áp dụng bộ lọc
                                </Button>
                            </div>
                            <div className="md:w-3/4">
                                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                                    <div className="mb-4 sm:mb-0">
                                        <p className="text-muted-foreground">
                                            Hiển thị {data.hits.length} chuyến
                                            đi
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Label
                                            htmlFor="sort"
                                            className="whitespace-nowrap"
                                        >
                                            Sắp xếp theo:
                                        </Label>
                                        <Select onValueChange={handleSort}>
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
                                                <SelectItem value="price-asc">
                                                    Giá: Thấp đến Cao
                                                </SelectItem>
                                                <SelectItem value="price-desc">
                                                    Giá: Cao đến Thấp
                                                </SelectItem>
                                                <SelectItem value="average_rating-desc">
                                                    Đánh giá: Cao đến Thấp
                                                </SelectItem>
                                                <SelectItem value="average_rating-asc">
                                                    Đánh giá: Thấp đến Cao
                                                </SelectItem>
                                                <SelectItem value="duration_days-desc">
                                                    Thời gian chuyến đi: Cao đến
                                                    Thấp
                                                </SelectItem>
                                                <SelectItem value="duration_days-asc">
                                                    Thời gian chuyến đi: Thấp
                                                    đến Cao
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                {loading ? (
                                    <div className="flex justify-center items-center h-full">
                                        <Loader2 className="animate-spin" />
                                    </div>
                                ) : (
                                    <div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {data.hits.map((tour) => (
                                                <Link
                                                    href={`/tours/${tour._id}`}
                                                    key={tour._id}
                                                >
                                                    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                                        <div className="relative h-48">
                                                            <Image
                                                                src={
                                                                    // tour.images[0] ||
                                                                    "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/9/1155741/Du-Lich-Vinh-Ha-Long-01.jpg"
                                                                }
                                                                alt={tour.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                            {tour.discount >
                                                                0 && (
                                                                <Badge className="absolute top-4 right-4 bg-primary">
                                                                    Giảm{" "}
                                                                    {
                                                                        tour.discount
                                                                    }
                                                                    %
                                                                </Badge>
                                                            )}
                                                            <Badge
                                                                className="absolute top-4 left-4"
                                                                variant="secondary"
                                                            >
                                                                {
                                                                    tour
                                                                        .category_id
                                                                        ?.title
                                                                }
                                                            </Badge>
                                                        </div>
                                                        <CardContent className="p-4 flex-1">
                                                            <div className="flex items-center gap-1 mb-2">
                                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                <span className="font-medium">
                                                                    {tour.average_rating ||
                                                                        0}
                                                                </span>
                                                                <span className="text-muted-foreground text-sm">
                                                                    (
                                                                    {
                                                                        tour
                                                                            .reviews
                                                                            .length
                                                                    }{" "}
                                                                    đánh giá)
                                                                </span>
                                                            </div>
                                                            <h3 className="text-lg font-bold mb-2">
                                                                {tour.title}
                                                            </h3>
                                                            <div className="grid gap-2 text-sm">
                                                                <div className="flex items-center text-muted-foreground">
                                                                    <MapPin className="mr-1 h-4 w-4" />
                                                                    <span>
                                                                        {
                                                                            tour.code
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center text-muted-foreground">
                                                                    <Clock className="mr-1 h-4 w-4" />
                                                                    <span>
                                                                        {
                                                                            tour.duration_days
                                                                        }{" "}
                                                                        ngày
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center text-muted-foreground">
                                                                    <Users className="mr-1 h-4 w-4" />
                                                                    <span>
                                                                        Còn{" "}
                                                                        {
                                                                            tour.stock
                                                                        }{" "}
                                                                        chỗ
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                        <CardFooter className="p-4 pt-0 flex items-center justify-between">
                                                            <div>
                                                                <span className="text-lg font-bold">
                                                                    {tour.price.toLocaleString(
                                                                        "vi-VN"
                                                                    )}
                                                                    đ
                                                                </span>
                                                                {tour.discount >
                                                                    0 && (
                                                                    <span className="text-muted-foreground text-sm line-through ml-2">
                                                                        {(
                                                                            tour.price *
                                                                            (1 +
                                                                                tour.discount /
                                                                                    100)
                                                                        ).toLocaleString(
                                                                            "vi-VN"
                                                                        )}
                                                                        đ
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </CardFooter>
                                                    </Card>
                                                </Link>
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
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
