"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { SuccessModal } from "./success-modal";
import { createBooking, BookingTourRequest } from "@/service/tours";
import { toast } from "sonner";
import http from "@/service/http";
import { useAuth } from "@/contexts/AuthContext";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourTitle: string;
    tourPrice: number;
    travelers: number;
    date?: Date;
    tourId: string;
}

export function BookingModal({
    isOpen,
    onClose,
    tourTitle,
    tourPrice,
    travelers,
    date,
    tourId,
}: BookingModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        note: "",
        additionalRequest: "",
    });

    const { user } = useAuth();

    console.log("tourPrice", tourPrice);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [bookingId, setBookingId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        const res = await http.post(`/payment/create-payment-url/${bookingId}`);
        window.location.href = res.data;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            const bookingData: BookingTourRequest = {
                tour_id: tourId,
                start_date: date
                    ? date.toISOString().split("T")[0]
                    : new Date().toISOString().split("T")[0],
                number_of_people: travelers,
                contact_info: {
                    name: user?.fullName ?? formData.fullName,
                    phone: formData.phone,
                    email: user?.email ?? formData.email,
                },
                note: formData.note,
                total_price: tourPrice * travelers,
            };

            console.log("Booking data:", bookingData);

            const res = await createBooking(bookingData);
            setBookingId(res.data._id);

            // Đóng modal đặt tour
            onClose();

            // Hiển thị modal thành công
            setIsSuccessModalOpen(true);

            // Reset form data
            setFormData({
                fullName: "",
                phone: "",
                email: "",
                note: "",
                additionalRequest: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Có lỗi xảy ra khi đặt tour. Vui lòng thử lại sau.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseSuccessModal = () => {
        setIsSuccessModalOpen(false);
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Yêu cầu đặt tour</DialogTitle>
                        <DialogDescription>
                            Vui lòng điền thông tin để chúng tôi có thể liên hệ
                            với bạn
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto px-2">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Họ và tên</Label>
                                <Input
                                    id="fullName"
                                    placeholder="Nhập họ và tên"
                                    value={user?.fullName ?? formData.fullName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            fullName: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Số điện thoại</Label>
                                <Input
                                    id="phone"
                                    placeholder="Nhập số điện thoại"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Nhập email"
                                    value={user?.email ?? formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="note">Ghi chú</Label>
                                <Textarea
                                    id="note"
                                    placeholder="Nhập ghi chú (nếu có)"
                                    value={formData.note}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            note: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="additionalRequest">
                                    Yêu cầu thêm
                                </Label>
                                <Textarea
                                    id="additionalRequest"
                                    placeholder="Nhập yêu cầu thêm (nếu có)"
                                    value={formData.additionalRequest}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            additionalRequest: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="font-medium">
                                    Thông tin tour:
                                </div>
                                <div>Tour: {tourTitle}</div>
                                <div>
                                    Ngày khởi hành:{" "}
                                    {date
                                        ? new Date(date).toLocaleDateString(
                                              "vi-VN"
                                          )
                                        : "Chưa chọn"}
                                </div>
                                <div>Số khách: {travelers}</div>
                                <div>
                                    Tổng tiền:{" "}
                                    {(tourPrice * travelers).toLocaleString(
                                        "vi-VN"
                                    )}{" "}
                                    VND
                                </div>
                            </div>
                        </form>
                    </div>
                    <DialogFooter className="mt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Hủy
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            onClick={handleSubmit}
                        >
                            {isLoading ? "Đang xử lý..." : "Gửi yêu cầu"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={handleCloseSuccessModal}
                onPayment={handlePayment}
            />
        </>
    );
}
