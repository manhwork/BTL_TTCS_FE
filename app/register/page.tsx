"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Globe, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { register } from "@/service/register";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        avatar: "",
        role_id: "staff", // Mặc định là user
        status: "active", // Mặc định là active
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Kiểm tra mật khẩu
        if (formData.password !== formData.confirmPassword) {
            toast.error("Mật khẩu xác nhận không khớp!");
            return;
        }

        try {
            setLoading(true);
            await register(
                formData.fullName,
                formData.email,
                formData.password,
                formData.confirmPassword,
                formData.phone,
                formData.avatar,
                formData.role_id,
                formData.status
            );

            toast.success("Đăng ký thành công!");
            // Chuyển hướng về trang đăng nhập
            window.location.href = "/login";
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Đăng ký thất bại!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-1 flex items-center justify-center py-12">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto grid w-full max-w-md gap-6">
                        <div className="flex flex-col gap-2 text-center">
                            <Link
                                href="/"
                                className="mx-auto flex items-center gap-2"
                            >
                                <Globe className="h-6 w-6" />
                                <span className="font-bold">TravelEase</span>
                            </Link>
                            <h1 className="text-3xl font-bold">
                                Tạo tài khoản
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Nhập thông tin của bạn để tạo tài khoản
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="fullName">Họ và tên</Label>
                                <Input
                                    id="fullName"
                                    placeholder="Nguyễn Văn A"
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
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
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
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Số điện thoại</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="0123456789"
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
                            {/* <div className="grid gap-2">
                                <Label htmlFor="avatar">Avatar URL</Label>
                                <Input
                                    id="avatar"
                                    type="text"
                                    placeholder="https://example.com/avatar.jpg"
                                    value={formData.avatar}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            avatar: e.target.value,
                                        })
                                    }
                                />
                            </div> */}
                            <div className="grid gap-2">
                                <Label htmlFor="password">Mật khẩu</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm-password">
                                    Xác nhận mật khẩu
                                </Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" required />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm font-normal"
                                >
                                    Tôi đồng ý với{" "}
                                    <Link
                                        href="/terms"
                                        className="text-primary underline-offset-4 hover:underline"
                                    >
                                        Điều khoản dịch vụ
                                    </Link>{" "}
                                    và{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-primary underline-offset-4 hover:underline"
                                    >
                                        Chính sách bảo mật
                                    </Link>
                                </Label>
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading ? "Đang xử lý..." : "Đăng ký"}
                            </Button>
                        </form>
                        <div className="relative flex items-center justify-center">
                            <Separator className="w-full" />
                            <div className="absolute bg-background px-2 text-xs text-muted-foreground">
                                HOẶC TIẾP TỤC VỚI
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" className="w-full">
                                <Facebook className="mr-2 h-4 w-4" />
                                Facebook
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Github className="mr-2 h-4 w-4" />
                                Github
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Twitter className="mr-2 h-4 w-4" />
                                Twitter
                            </Button>
                        </div>
                        <div className="text-center text-sm">
                            Đã có tài khoản?{" "}
                            <Link
                                href="/login"
                                className="text-primary underline-offset-4 hover:underline"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
