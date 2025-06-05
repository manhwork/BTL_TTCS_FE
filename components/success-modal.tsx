"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPayment: () => void;
}

export function SuccessModal({ isOpen, onClose, onPayment }: SuccessModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <CheckCircle2 className="h-16 w-16 text-green-500" />
                        </motion.div>
                        <DialogTitle className="text-center text-2xl">Gửi yêu cầu thành công!</DialogTitle>
                        <DialogDescription className="text-center">Bạn đã gửi yêu cầu đặt tour thành công. Vui lòng kiểm tra thông tin gửi qua email.</DialogDescription>
                    </div>
                </DialogHeader>

                <DialogFooter className="sm:justify-center">
                    <Button onClick={onPayment}>Thanh toán</Button>
                </DialogFooter>
                <DialogFooter className="sm:justify-center">
                    <Button onClick={onClose}>Đóng</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
