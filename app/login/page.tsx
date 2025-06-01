"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Globe, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { login } from "@/service/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setCookie } from "@/lib/cookies";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await login(formData.email, formData.password);

            // Lưu accessToken và refreshToken vào cookie
            setCookie("accessToken", response.data.accessToken, {
                expires: formData.remember ? 7 : 1,
            });

            setCookie("refreshToken", response.data.refreshToken, {
                expires: formData.remember ? 30 : 7, // Refresh token có thời hạn dài hơn
            });

            toast.success("Đăng nhập thành công!");
            // Chuyển hướng về trang chủ và reload trang
            window.location.href = "/";
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Đăng nhập thất bại!");
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
                                Chào mừng trở lại
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Nhập email và mật khẩu để đăng nhập vào tài
                                khoản của bạn
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="grid gap-4">
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
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Mật khẩu</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm text-primary underline-offset-4 hover:underline"
                                    >
                                        Quên mật khẩu?
                                    </Link>
                                </div>
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
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    checked={formData.remember}
                                    onCheckedChange={(checked) =>
                                        setFormData({
                                            ...formData,
                                            remember: checked as boolean,
                                        })
                                    }
                                />
                                <Label
                                    htmlFor="remember"
                                    className="text-sm font-normal"
                                >
                                    Ghi nhớ đăng nhập
                                </Label>
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading ? "Đang xử lý..." : "Đăng nhập"}
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
                            Chưa có tài khoản?{" "}
                            <Link
                                href="/register"
                                className="text-primary underline-offset-4 hover:underline"
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
