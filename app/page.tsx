"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
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
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    CalendarIcon,
    MapPin,
    Plane,
    Hotel,
    Globe,
    Search,
    ArrowRight,
} from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FeaturedDestinations } from "@/components/featured-destinations";
import { PopularTours } from "@/components/popular-tours";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
    const [date, setDate] = useState<Date>();

    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-1">
                <section className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
                    <div className="relative h-[800px]">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                                        Khám Phá Hành Trình Hoàn Hảo Của Bạn
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-white md:text-xl">
                                        Khám phá thế giới với những trải nghiệm
                                        du lịch được chọn lọc, lịch trình cá
                                        nhân hóa và các ưu đãi độc quyền.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
                        <div className="container px-4 md:px-6">
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-0">
                                    <Tabs
                                        defaultValue="tours"
                                        className="w-full"
                                    >
                                        <TabsList className="grid w-full grid-cols-3 gap-4 rounded-none rounded-t-lg h-14">
                                            <TabsTrigger
                                                value="tours"
                                                className="data-[state=active]:bg-background rounded-tl-lg"
                                            >
                                                <Globe className="mr-2 h-4 w-4" />
                                                Tour
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="hotels"
                                                className="data-[state=active]:bg-background"
                                            >
                                                <Hotel className="mr-2 h-4 w-4" />
                                                Khách Sạn
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="flights"
                                                className="data-[state=active]:bg-background"
                                            >
                                                <Plane className="mr-2 h-4 w-4" />
                                                Chuyến Bay
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent
                                            value="tours"
                                            className="p-6"
                                        >
                                            <div className="grid gap-4 md:grid-cols-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Điểm Đến
                                                    </label>
                                                    <Input placeholder="Bạn muốn đi đâu?" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Ngày
                                                    </label>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={
                                                                    "outline"
                                                                }
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
                                                                    : "Chọn ngày"}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0">
                                                            <Calendar
                                                                mode="single"
                                                                selected={date}
                                                                onSelect={
                                                                    setDate
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Số Người
                                                    </label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Số người đi" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1">
                                                                1 Người
                                                            </SelectItem>
                                                            <SelectItem value="2">
                                                                2 Người
                                                            </SelectItem>
                                                            <SelectItem value="3">
                                                                3 Người
                                                            </SelectItem>
                                                            <SelectItem value="4">
                                                                4 Người
                                                            </SelectItem>
                                                            <SelectItem value="5+">
                                                                5+ Người
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex items-end">
                                                    <Button className="w-full">
                                                        <Search className="mr-2 h-4 w-4" />
                                                        Tìm chuyến đi
                                                    </Button>
                                                </div>
                                            </div>
                                        </TabsContent>
                                        <TabsContent
                                            value="hotels"
                                            className="p-6"
                                        >
                                            <div className="grid gap-4 md:grid-cols-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Điểm Đến
                                                    </label>
                                                    <Input placeholder="Tên thành phố hoặc khách sạn" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Nhận Phòng / Trả Phòng
                                                    </label>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={
                                                                    "outline"
                                                                }
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
                                                                    : "Chọn ngày"}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0">
                                                            <Calendar
                                                                mode="single"
                                                                selected={date}
                                                                onSelect={
                                                                    setDate
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Khách & Phòng
                                                    </label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn số khách và phòng" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1-1">
                                                                1 Khách, 1 Phòng
                                                            </SelectItem>
                                                            <SelectItem value="2-1">
                                                                2 Khách, 1 Phòng
                                                            </SelectItem>
                                                            <SelectItem value="2-2">
                                                                2 Khách, 2 Phòng
                                                            </SelectItem>
                                                            <SelectItem value="4-2">
                                                                4 Khách, 2 Phòng
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex items-end">
                                                    <Button className="w-full">
                                                        <Search className="mr-2 h-4 w-4" />
                                                        Tìm khách sạn
                                                    </Button>
                                                </div>
                                            </div>
                                        </TabsContent>
                                        <TabsContent
                                            value="flights"
                                            className="p-6"
                                        >
                                            <div className="grid gap-4 md:grid-cols-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Đi Từ
                                                    </label>
                                                    <Input placeholder="Thành phố hoặc sân bay khởi hành" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Đến
                                                    </label>
                                                    <Input placeholder="Thành phố hoặc sân bay đến" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Ngày Khởi Hành
                                                    </label>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={
                                                                    "outline"
                                                                }
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
                                                                    : "Chọn ngày"}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0">
                                                            <Calendar
                                                                mode="single"
                                                                selected={date}
                                                                onSelect={
                                                                    setDate
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                                <div className="flex items-end">
                                                    <Button className="w-full">
                                                        <Search className="mr-2 h-4 w-4" />
                                                        Tìm chuyến bay
                                                    </Button>
                                                </div>
                                            </div>
                                        </TabsContent>
                                        <TabsContent
                                            value="planner"
                                            className="p-6"
                                        >
                                            <div className="grid gap-4 md:grid-cols-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Điểm Đến
                                                    </label>
                                                    <Input placeholder="Bạn muốn đi đâu?" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Thời Gian Du Lịch
                                                    </label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn thời gian" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="weekend">
                                                                Cuối Tuần (2-3
                                                                ngày)
                                                            </SelectItem>
                                                            <SelectItem value="week">
                                                                Một Tuần (5-7
                                                                ngày)
                                                            </SelectItem>
                                                            <SelectItem value="twoweeks">
                                                                Hai Tuần (12-14
                                                                ngày)
                                                            </SelectItem>
                                                            <SelectItem value="month">
                                                                Một Tháng (28-30
                                                                ngày)
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Ngân Sách
                                                    </label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn ngân sách" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="budget">
                                                                Tiết Kiệm
                                                            </SelectItem>
                                                            <SelectItem value="moderate">
                                                                Trung Bình
                                                            </SelectItem>
                                                            <SelectItem value="luxury">
                                                                Cao Cấp
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex items-end">
                                                    <Button className="w-full">
                                                        <Search className="mr-2 h-4 w-4" />
                                                        Plan My Trip
                                                    </Button>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-24 mt-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Điểm Đến Nổi Bật
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Khám phá những điểm đến tuyệt đẹp được chọn
                                    lọc từ khắp nơi trên thế giới
                                </p>
                            </div>
                        </div>
                        <FeaturedDestinations />
                    </div>
                </section>

                <section className="py-24 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Tour Phổ Biến
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Khám phá những trải nghiệm du lịch được đặt
                                    nhiều nhất và đánh giá cao
                                </p>
                            </div>
                        </div>
                        <PopularTours />
                    </div>
                </section>

                <section className="py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Lập Kế Hoạch Tour Thông Minh với AI
                                    </h2>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Để AI tiên tiến của chúng tôi tạo lịch
                                        trình hoàn hảo dựa trên sở thích, ngân
                                        sách và phong cách du lịch của bạn.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        href="/planner"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Try AI Planner
                                    </Link>
                                    <Link
                                        href="/how-it-works"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Cách Hoạt Động
                                    </Link>
                                </div>
                                <ul className="grid gap-2 py-4">
                                    <li className="flex items-center gap-2">
                                        <Badge
                                            variant="outline"
                                            className="rounded-full"
                                        >
                                            ✓
                                        </Badge>
                                        <span className="text-sm">
                                            Đề xuất tour được cá nhân hóa
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge
                                            variant="outline"
                                            className="rounded-full"
                                        >
                                            ✓
                                        </Badge>
                                        <span className="text-sm">
                                            Tạo lịch trình thông minh với AI
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge
                                            variant="outline"
                                            className="rounded-full"
                                        >
                                            ✓
                                        </Badge>
                                        <span className="text-sm">
                                            Tính năng tối ưu hóa ngân sách
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge
                                            variant="outline"
                                            className="rounded-full"
                                        >
                                            ✓
                                        </Badge>
                                        <span className="text-sm">
                                            Thông tin địa phương và địa điểm ẩn
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-[420px] overflow-hidden rounded-xl">
                                <Image
                                    src="/placeholder.svg?height=420&width=600"
                                    alt="AI Tour Planner"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Khách Hàng Nói Gì Về Chúng Tôi
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Đọc những đánh giá từ khách hàng hài lòng
                                    của chúng tôi
                                </p>
                            </div>
                        </div>
                        <Testimonials />
                    </div>
                </section>

                <section className="py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Từ Blog Du Lịch Của Chúng Tôi
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Khám phá mẹo du lịch, hướng dẫn và cảm hứng
                                    từ các chuyên gia của chúng tôi
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                            {[1, 2, 3].map((i) => (
                                <Card key={i} className="overflow-hidden">
                                    <div className="relative h-48">
                                        <Image
                                            src={`/placeholder.svg?height=200&width=400&text=Blog+${i}`}
                                            alt={`Blog post ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span>15/05/2023</span>
                                            <span>•</span>
                                            <span>Mẹo Du Lịch</span>
                                        </div>
                                        <CardTitle className="line-clamp-2">
                                            {i === 1 &&
                                                "10 Địa Điểm Ẩn ở Đông Nam Á Bạn Phải Ghé Thăm"}
                                            {i === 2 &&
                                                "Cách Đóng Gói Hành Lý Chuyên Nghiệp: Mẹo Du Lịch Cần Thiết"}
                                            {i === 3 &&
                                                "Hướng Dẫn Tối Ưu Du Lịch Châu Âu Tiết Kiệm"}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-2">
                                            {i === 1 &&
                                                "Khám phá những điểm đến ít người biết ở Đông Nam Á mang đến trải nghiệm chân thực, tránh xa đám đông du khách."}
                                            {i === 2 &&
                                                "Mẹo đóng gói hành lý từ chuyên gia giúp bạn du lịch nhẹ nhàng và hiệu quả cho mọi loại hành trình."}
                                            {i === 3 &&
                                                "Học cách khám phá Châu Âu với ngân sách tiết kiệm mà không ảnh hưởng đến trải nghiệm."}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Link
                                            href={`/blog/post-${i}`}
                                            className="inline-flex items-center text-sm font-medium text-primary"
                                        >
                                            Read More
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link
                                href="/blog"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                View All Articles
                            </Link>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>
            {/* <Footer /> */}
        </div>
    );
}
