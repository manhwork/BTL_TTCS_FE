"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getGemini } from "@/service/getGemini";
import { Clock, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Tour {
    _id: string;
    title: string;
    code: string;
    images: string[];
    price: number;
    discount: number;
    information: string;
    schedule: string;
    duration_days: number;
    stock: number;
    transportation: string;
    average_rating: number;
    is_featured?: boolean;
}

export default function PlannerPage() {
    const [date, setDate] = useState<Date>();
    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [budget, setBudget] = useState(3000);
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);
    const [tourResults, setTourResults] = useState<Tour[]>([]);
    const { toast } = useToast();

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await getGemini.recommendTour({
                destination,
                duration,
                budget: `${budget / 1000} triệu`,
                note,
            });

            setTourResults(response.tours);
            toast({
                title: "Thành công",
                description: "Đã tìm thấy các tour phù hợp với yêu cầu của bạn",
            });
        } catch (error) {
            toast({
                title: "Lỗi",
                description: "Có lỗi xảy ra khi tìm kiếm tour",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };

    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-1">
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lập Kế Hoạch Du Lịch Thông Minh với AI</h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Để AI tiên tiến của chúng tôi tạo lịch trình hoàn hảo dựa trên sở thích, ngân sách và phong cách du lịch của bạn.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_2fr]">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tạo Chuyến Đi Lý Tưởng Của Bạn</CardTitle>
                                    <CardDescription>Điền thông tin mong muốn và AI của chúng tôi sẽ tạo lịch trình cá nhân hóa cho bạn.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Điểm đến</label>
                                        <Input placeholder="Bạn muốn đi đâu?" value={destination} onChange={(e) => setDestination(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Thời lượng</label>
                                        <Select value={duration} onValueChange={setDuration}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Chọn thời lượng" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1 ngày">1 ngày</SelectItem>
                                                <SelectItem value="2 ngày">2 ngày</SelectItem>
                                                <SelectItem value="3 ngày">3 ngày</SelectItem>
                                                <SelectItem value="4 ngày">4 ngày</SelectItem>
                                                <SelectItem value="5 ngày">5 ngày</SelectItem>
                                                <SelectItem value="1 tuần">1 tuần</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ngân sách (triệu đồng)</label>
                                            <span className="text-sm text-muted-foreground">{budget / 1000} triệu</span>
                                        </div>
                                        <Slider value={[budget]} onValueChange={(value) => setBudget(value[0])} min={1000} max={10000} step={100} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ghi chú thêm</label>
                                        <Textarea
                                            placeholder="Hãy cho chúng tôi biết về sở thích, yêu cầu ăn kiêng, nhu cầu hỗ trợ đặc biệt, v.v."
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" onClick={handleSubmit} disabled={loading}>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        {loading ? "Đang tìm kiếm..." : "Tìm tour phù hợp"}
                                    </Button>
                                </CardFooter>
                            </Card>
                            <div className="space-y-6">
                                {loading ? (
                                    <div className="flex items-center justify-center h-[400px]">
                                        <p className="text-muted-foreground">Đang tìm kiếm tour phù hợp...</p>
                                    </div>
                                ) : tourResults.length > 0 ? (
                                    <div className="space-y-4">
                                        {tourResults.map((tour) => (
                                            <Card key={tour._id}>
                                                <CardHeader>
                                                    <div className="flex items-start gap-4">
                                                        <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                                                            <Image src={tour.images[0]} alt={tour.title} fill className="object-cover" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <CardTitle>{tour.title}</CardTitle>
                                                            <CardDescription>{tour.information}</CardDescription>
                                                            <div className="flex items-center gap-2 mt-2">
                                                                <Badge variant="outline">{tour.code}</Badge>
                                                                <Badge variant="outline">{tour.transportation}</Badge>
                                                                {tour.is_featured && <Badge variant="secondary">Tour nổi bật</Badge>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-4">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <h4 className="font-medium mb-2">Thông tin tour</h4>
                                                                <div className="space-y-2">
                                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                                        <Clock className="mr-2 h-4 w-4" />
                                                                        <span>{tour.duration_days} ngày</span>
                                                                    </div>
                                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                                        <MapPin className="mr-2 h-4 w-4" />
                                                                        <span>{tour.information}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-medium mb-2">Giá tour</h4>
                                                                <div className="flex items-baseline gap-2">
                                                                    <div className="text-2xl font-bold">{formatPrice(tour.price)}</div>
                                                                    {tour.discount > 0 && <div className="text-sm text-muted-foreground line-through">{formatPrice(tour.price + tour.discount)}</div>}
                                                                </div>
                                                                <p className="text-sm text-muted-foreground">Giá trên đã bao gồm thuế và phí</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium mb-2">Lịch trình</h4>
                                                            <div className="space-y-2">
                                                                {tour.schedule.split(" - ").map((item, idx) => (
                                                                    <div key={idx} className="flex items-start gap-2">
                                                                        <Badge variant="outline" className="rounded-full">
                                                                            ✓
                                                                        </Badge>
                                                                        <span className="text-sm">{item}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Link href={`/tours/${tour._id}`}>
                                                        <Button className="w-full">Đặt tour ngay</Button>
                                                    </Link>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-[400px]">
                                        <p className="text-muted-foreground">Nhập thông tin và nhấn "Tìm tour phù hợp" để xem kết quả</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
