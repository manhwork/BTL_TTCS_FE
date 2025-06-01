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

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourTitle: string;
    tourPrice: number;
    travelers: number;
    date?: Date;
}

export function BookingModal({
    isOpen,
    onClose,
    tourTitle,
    tourPrice,
    travelers,
    date,
}: BookingModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        note: "",
        additionalRequest: "",
    });
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // TODO: Xử lý gửi form
            console.log("Form data:", formData);

            // Đóng modal đặt tour
            onClose();

            // Hiển thị modal thành công
            setIsSuccessModalOpen(true);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleCloseSuccessModal = () => {
        setIsSuccessModalOpen(false);
        // Reset form data
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            note: "",
            additionalRequest: "",
        });
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Yêu cầu đặt tour</DialogTitle>
                        <DialogDescription>
                            Vui lòng điền thông tin để chúng tôi có thể liên hệ
                            với bạn
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Họ và tên</Label>
                            <Input
                                id="fullName"
                                placeholder="Nhập họ và tên"
                                value={formData.fullName}
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
                                value={formData.email}
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
                            <div className="font-medium">Thông tin tour:</div>
                            <div>Tour: {tourTitle}</div>
                            <div>
                                Ngày khởi hành:{" "}
                                {date
                                    ? new Date(date).toLocaleDateString("vi-VN")
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
                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onClose}
                            >
                                Hủy
                            </Button>
                            <Button type="submit">Gửi yêu cầu</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={handleCloseSuccessModal}
            />
        </>
    );
}
