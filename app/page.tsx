"use client";

import { FeaturedDestinations } from "@/components/featured-destinations";
import { Newsletter } from "@/components/newsletter";
import { PopularTours } from "@/components/popular-tours";
import { Testimonials } from "@/components/testimonials";
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
import { Input } from "@/components/ui/input";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarIcon,
    CreditCard,
    Globe,
    Headphones,
    Search,
    Shield,
    ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [date, setDate] = useState<Date>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            easing: "ease-in-out",
            offset: 100,
            delay: 0,
            anchorPlacement: "top-bottom",
            disable: "mobile",
        });
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2 },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold"
                >
                    Loading...
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex min-h-screen flex-col"
        >
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-20 flex items-center justify-center"
                    >
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-2"
                                >
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                                        Khám Phá Hành Trình Hoàn Hảo Của Bạn
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-white md:text-xl">
                                        Khám phá thế giới với những trải nghiệm
                                        du lịch được chọn lọc, lịch trình cá
                                        nhân hóa và các ưu đãi độc quyền.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2"
                    >
                        <div className="container px-4 md:px-6">
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-0">
                                    <Tabs
                                        defaultValue="tours"
                                        className="w-full"
                                    >
                                        <TabsList className="grid w-full grid-cols-1 gap-4 rounded-none rounded-t-lg h-14">
                                            <TabsTrigger
                                                value="tours"
                                                className="data-[state=active]:bg-background rounded-tl-lg"
                                            >
                                                <Globe className="mr-2 h-4 w-4" />
                                                Tour
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
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </section>

                <section
                    className="py-24 mt-24 bg-gradient-to-b from-background to-muted"
                    data-aos="fade-up"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                >
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex flex-col items-start justify-center space-y-4"
                                >
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                            Điểm Đến Nổi Bật
                                        </h2>
                                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Khám phá những điểm đến tuyệt đẹp
                                            được chọn lọc từ khắp nơi trên thế
                                            giới
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <iframe
                                    src="https://lottie.host/embed/d3469af0-8574-43e0-92a9-8f2d904cd177/QFZ4boVeLU.lottie"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FeaturedDestinations />
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 bg-muted" data-aos="fade-up">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center space-y-4 text-center"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Tour Phổ Biến
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Khám phá những trải nghiệm du lịch được đặt
                                    nhiều nhất và đánh giá cao
                                </p>
                            </div>
                        </motion.div>
                        <PopularTours />
                    </div>
                </section>

                <section className="py-24" data-aos="fade-up">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center space-y-4 text-center"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Tại Sao Chọn Chúng Tôi?
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Chúng tôi cam kết mang đến trải nghiệm du
                                    lịch tốt nhất cho bạn
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8"
                        >
                            {[
                                {
                                    icon: <Shield className="h-8 w-8" />,
                                    title: "An Toàn & Đáng Tin Cậy",
                                    description:
                                        "Đảm bảo an toàn tuyệt đối cho mọi hành trình của bạn",
                                },
                                {
                                    icon: <CreditCard className="h-8 w-8" />,
                                    title: "Giá Tốt Nhất",
                                    description:
                                        "Cam kết giá tốt nhất thị trường với nhiều ưu đãi hấp dẫn",
                                },
                                {
                                    icon: <Headphones className="h-8 w-8" />,
                                    title: "Hỗ Trợ 24/7",
                                    description:
                                        "Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ bạn mọi lúc",
                                },
                                {
                                    icon: <ThumbsUp className="h-8 w-8" />,
                                    title: "Hài Lòng 100%",
                                    description:
                                        "Cam kết hoàn tiền nếu bạn không hài lòng với dịch vụ",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="text-center h-full">
                                        <CardHeader>
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                                className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                                            >
                                                {item.icon}
                                            </motion.div>
                                            <CardTitle className="mt-4">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 bg-muted" data-aos="fade-up">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center space-y-4 text-center"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Khách Hàng Nói Gì Về Chúng Tôi
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Đọc những đánh giá từ khách hàng hài lòng
                                    của chúng tôi
                                </p>
                            </div>
                        </motion.div>
                        <Testimonials />
                    </div>
                </section>

                <section className="py-24" data-aos="fade-up">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center space-y-4 text-center"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Từ Blog Du Lịch Của Chúng Tôi
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Khám phá mẹo du lịch, hướng dẫn và cảm hứng
                                    từ các chuyên gia của chúng tôi
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8"
                        >
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="overflow-hidden h-full">
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
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center mt-8"
                        >
                            <Link
                                href="/blog"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                View All Articles
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Newsletter />
            </main>
            {/* <Footer /> */}
        </motion.div>
    );
}
