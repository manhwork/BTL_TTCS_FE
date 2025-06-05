"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import http from "@/service/http";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    const [bookings, setBookings] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const fetchBookings = async () => {
            setLoading(true);
            try {
                const response = await http.get(
                    `/tours/bookings/${user?.email}`
                );

                setBookings(response.data.data.hits);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);

    const formatDate = (date: string) => {
        return format(new Date(date), "dd/MM/yyyy", { locale: vi });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };

    const handlePayment = async (bookingId: string) => {
        console.log("Handling payment for booking ID:", bookingId);
        const res = await http.post(`/payment/create-payment-url/${bookingId}`);
        window.location.href = res.data;
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
                        <TabsContent value="all" className="space-y-4">
                            {bookings.map((booking) => (
                                <Card key={booking._id}>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Link
                                                    href={`/tours/${booking.tour_id._id}`}
                                                >
                                                    <CardTitle color="primary">
                                                        {booking.tour_id.title}
                                                    </CardTitle>
                                                </Link>
                                                <CardDescription>
                                                    Đặt ngày:{" "}
                                                    {formatDate(
                                                        booking?.created_at
                                                    )}
                                                </CardDescription>
                                            </div>
                                            {booking.status === "pending" ? (
                                                <Badge variant="warning">
                                                    Chờ xác nhận
                                                </Badge>
                                            ) : (
                                                <>
                                                    <Badge variant="default">
                                                        Đã thanh toán
                                                    </Badge>
                                                </>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <p className="text-sm text-muted-foreground">
                                                    Ngày khởi hành:{" "}
                                                    {formatDate(
                                                        booking.start_date
                                                    )}
                                                </p>
                                                {/* <p className="text-sm text-muted-foreground">
                                                    Ngày kết thúc:{" "}
                                                    {formatDate(
                                                        booking.endDate
                                                    )}
                                                </p> */}
                                                <p className="text-sm text-muted-foreground">
                                                    Số người:{" "}
                                                    {booking.number_of_people}
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-sm font-medium">
                                                    Tổng tiền:{" "}
                                                    {formatPrice(
                                                        booking.total_price
                                                    )}
                                                </p>
                                                {/* {booking.status ===
                                                    "confirmed" && (
                                                    <Button
                                                        variant="outline"
                                                        className="w-full"
                                                    >
                                                        Xem chi tiết
                                                    </Button>
                                                )} */}
                                                {booking.status ===
                                                    "pending" && (
                                                    <Button
                                                        variant="default"
                                                        className="w-full"
                                                        onClick={(e) =>
                                                            handlePayment(
                                                                booking._id
                                                            )
                                                        }
                                                    >
                                                        Thanh toán
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
}
