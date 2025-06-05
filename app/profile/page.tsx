"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCookie } from "@/lib/cookies";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

interface UserProfile {
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
    role: string;
    status: string;
}

export default function ProfilePage() {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState<UserProfile>({
        fullName: "",
        email: "",
        phone: "",
        avatar: "",
        role: "",
        status: "",
    });

    const { user } = useAuth();

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            // TODO: Gọi API cập nhật thông tin
            toast.success("Cập nhật thông tin thành công!");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Cập nhật thất bại!");
        } finally {
            setLoading(false);
        }
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
                        <h1 className="text-3xl font-bold">
                            Thông tin cá nhân
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Quản lý thông tin cá nhân và tài khoản của bạn
                        </p>
                    </div>

                    <Tabs defaultValue="profile" className="space-y-6">
                        {/* <TabsList> */}
                        {/* <TabsTrigger value="profile">
                                Thông tin cá nhân
                            </TabsTrigger> */}
                        {/* <TabsTrigger value="security">Bảo mật</TabsTrigger>
                            <TabsTrigger value="bookings">
                                Đặt chỗ của tôi
                            </TabsTrigger> */}
                        {/* </TabsList> */}

                        <TabsContent value="profile">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Thông tin cá nhân</CardTitle>
                                    <CardDescription>
                                        Cập nhật thông tin cá nhân của bạn
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleUpdateProfile}
                                        className="space-y-4"
                                    >
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName">
                                                    Họ và tên
                                                </Label>
                                                <Input
                                                    id="fullName"
                                                    value={user?.fullName}
                                                    onChange={(e) =>
                                                        setProfile({
                                                            ...profile,
                                                            fullName:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={user?.email}
                                                    // disabled
                                                />
                                            </div>
                                            {/* <div className="space-y-2">
                                                <Label htmlFor="phone">
                                                    Số điện thoại
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={profile.phone}
                                                    onChange={(e) =>
                                                        setProfile({
                                                            ...profile,
                                                            phone: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            </div> */}
                                            <div className="space-y-2">
                                                <Label htmlFor="role">
                                                    Vai trò
                                                </Label>
                                                <Input
                                                    id="role"
                                                    value={user?.role}
                                                    // disabled
                                                />
                                            </div>
                                        </div>
                                        {/* <Button
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading
                                                ? "Đang xử lý..."
                                                : "Cập nhật thông tin"}
                                        </Button> */}
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="security">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Bảo mật</CardTitle>
                                    <CardDescription>
                                        Cập nhật mật khẩu và cài đặt bảo mật
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="current-password">
                                                Mật khẩu hiện tại
                                            </Label>
                                            <Input
                                                id="current-password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="new-password">
                                                Mật khẩu mới
                                            </Label>
                                            <Input
                                                id="new-password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="confirm-password">
                                                Xác nhận mật khẩu mới
                                            </Label>
                                            <Input
                                                id="confirm-password"
                                                type="password"
                                            />
                                        </div>
                                        <Button type="submit">
                                            Cập nhật mật khẩu
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="bookings">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Đặt chỗ của tôi</CardTitle>
                                    <CardDescription>
                                        Xem và quản lý các đặt chỗ của bạn
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center py-8">
                                        <p className="text-muted-foreground">
                                            Chưa có đặt chỗ nào
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
}
