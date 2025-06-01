"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCookie } from "@/lib/cookies";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

interface Booking {
    id: string;
    tourId: string;
    tourName: string;
    tourImage: string;
    startDate: string;
    endDate: string;
    numberOfPeople: number;
    totalPrice: number;
    status: "pending" | "confirmed" | "cancelled" | "completed";
    createdAt: string;
}

export default function BookingsPage() {
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        // Kiểm tra đăng nhập
        const accessToken = getCookie("accessToken");
        if (!accessToken) {
            window.location.href = "/login";
            return;
        }

        // TODO: Gọi API lấy danh sách đặt tour
        // Tạm thời dùng dữ liệu mẫu
        setBookings([
            {
                id: "1",
                tourId: "1",
                tourName: "Tour Du lịch Đà Nẵng - Hội An 3N2Đ",
                tourImage:
                    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
                startDate: "2024-04-01",
                endDate: "2024-04-03",
                numberOfPeople: 2,
                totalPrice: 5000000,
                status: "confirmed",
                createdAt: "2024-03-15",
            },
            {
                id: "2",
                tourId: "2",
                tourName: "Tour Du lịch Nha Trang 4N3Đ",
                tourImage:
                    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
                startDate: "2024-05-01",
                endDate: "2024-05-04",
                numberOfPeople: 4,
                totalPrice: 12000000,
                status: "pending",
                createdAt: "2024-03-20",
            },
        ]);
    }, []);

    const getStatusBadge = (status: Booking["status"]) => {
        const statusMap = {
            pending: { label: "Chờ xác nhận", variant: "warning" },
            confirmed: { label: "Đã xác nhận", variant: "success" },
            cancelled: { label: "Đã hủy", variant: "destructive" },
            completed: { label: "Hoàn thành", variant: "default" },
        };
        const { label, variant } = statusMap[status];
        return <Badge variant={variant as any}>{label}</Badge>;
    };

    const formatDate = (date: string) => {
        return format(new Date(date), "dd/MM/yyyy", { locale: vi });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 container py-12">
                <div className="mx-auto max-w-4xl">
                    <div className="flex flex-col gap-2 mb-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 w-fit"
                        >
                            <Globe className="h-6 w-6" />
                            <span className="font-bold">TravelEase</span>
                        </Link>
                        <h1 className="text-3xl font-bold">Đặt tour của tôi</h1>
                        <p className="text-sm text-muted-foreground">
                            Xem và quản lý các tour đã đặt
                        </p>
                    </div>

                    <Tabs defaultValue="all" className="space-y-6">
                        <TabsList>
                            <TabsTrigger value="all">Tất cả</TabsTrigger>
                            <TabsTrigger value="pending">
                                Chờ xác nhận
                            </TabsTrigger>
                            <TabsTrigger value="confirmed">
                                Đã xác nhận
                            </TabsTrigger>
                            <TabsTrigger value="completed">
                                Hoàn thành
                            </TabsTrigger>
                            <TabsTrigger value="cancelled">Đã hủy</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="space-y-4">
                            {bookings.map((booking) => (
                                <Card key={booking.id}>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle>
                                                    {booking.tourName}
                                                </CardTitle>
                                                <CardDescription>
                                                    Đặt ngày:{" "}
                                                    {formatDate(
                                                        booking.createdAt
                                                    )}
                                                </CardDescription>
                                            </div>
                                            {getStatusBadge(booking.status)}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <p className="text-sm text-muted-foreground">
                                                    Ngày khởi hành:{" "}
                                                    {formatDate(
                                                        booking.startDate
                                                    )}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Ngày kết thúc:{" "}
                                                    {formatDate(
                                                        booking.endDate
                                                    )}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Số người:{" "}
                                                    {booking.numberOfPeople}
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-sm font-medium">
                                                    Tổng tiền:{" "}
                                                    {formatPrice(
                                                        booking.totalPrice
                                                    )}
                                                </p>
                                                {booking.status ===
                                                    "confirmed" && (
                                                    <Button
                                                        variant="outline"
                                                        className="w-full"
                                                    >
                                                        Xem chi tiết
                                                    </Button>
                                                )}
                                                {booking.status ===
                                                    "pending" && (
                                                    <Button
                                                        variant="destructive"
                                                        className="w-full"
                                                    >
                                                        Hủy đặt tour
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </TabsContent>

                        <TabsContent value="pending" className="space-y-4">
                            {bookings
                                .filter(
                                    (booking) => booking.status === "pending"
                                )
                                .map((booking) => (
                                    <Card key={booking.id}>
                                        {/* Tương tự như trên */}
                                    </Card>
                                ))}
                        </TabsContent>

                        <TabsContent value="confirmed" className="space-y-4">
                            {bookings
                                .filter(
                                    (booking) => booking.status === "confirmed"
                                )
                                .map((booking) => (
                                    <Card key={booking.id}>
                                        {/* Tương tự như trên */}
                                    </Card>
                                ))}
                        </TabsContent>

                        <TabsContent value="completed" className="space-y-4">
                            {bookings
                                .filter(
                                    (booking) => booking.status === "completed"
                                )
                                .map((booking) => (
                                    <Card key={booking.id}>
                                        {/* Tương tự như trên */}
                                    </Card>
                                ))}
                        </TabsContent>

                        <TabsContent value="cancelled" className="space-y-4">
                            {bookings
                                .filter(
                                    (booking) => booking.status === "cancelled"
                                )
                                .map((booking) => (
                                    <Card key={booking.id}>
                                        {/* Tương tự như trên */}
                                    </Card>
                                ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
}
