"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentResult() {
    const searchParams = useSearchParams();
    const status = searchParams.get("status");
    const bookingId = searchParams.get("bookingId");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (status === "paid") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Thanh toán thành công!</h1>
                    <p className="text-gray-600 mb-6">Cảm ơn bạn đã đặt tour với chúng tôi. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500">
                            Mã đặt tour: <span className="font-medium">{bookingId}</span>
                        </p>
                        <div className="flex flex-col gap-3">
                            <Link href="/">
                                <Button className="w-full">Về trang chủ</Button>
                            </Link>
                            {/* <Link href="/my-bookings">
                                <Button variant="outline" className="w-full">
                                    Xem đơn đặt tour của tôi
                                </Button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Có lỗi xảy ra</h1>
                <p className="text-gray-600 mb-6">Đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại sau.</p>
                <Link href="/">
                    <Button className="w-full">Về trang chủ</Button>
                </Link>
            </div>
        </div>
    );
}
