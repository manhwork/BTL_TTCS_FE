"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-b from-ocean-50 to-background" />
                    <div className="container relative px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Về TravelEase
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Chúng tôi là nền tảng du lịch hàng đầu, kết
                                    nối du khách với những trải nghiệm du lịch
                                    tuyệt vời nhất.
                                </p>
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000"
                                    alt="About TravelEase"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Globe className="h-12 w-12 text-ocean-600" />
                                        <h3 className="text-xl font-bold">
                                            Sứ mệnh
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Mang đến những trải nghiệm du lịch
                                            đáng nhớ và ý nghĩa cho mọi du khách
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Heart className="h-12 w-12 text-ocean-600" />
                                        <h3 className="text-xl font-bold">
                                            Giá trị cốt lõi
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Chất lượng, uy tín và sự hài lòng
                                            của khách hàng là ưu tiên hàng đầu
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Shield className="h-12 w-12 text-ocean-600" />
                                        <h3 className="text-xl font-bold">
                                            Cam kết
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Đảm bảo an toàn và chất lượng cho
                                            mọi chuyến đi
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Users className="h-12 w-12 text-ocean-600" />
                                        <h3 className="text-xl font-bold">
                                            Đội ngũ
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Đội ngũ chuyên nghiệp, nhiệt tình và
                                            giàu kinh nghiệm
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-12 md:py-24 bg-ocean-50">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter">
                                    Câu chuyện của chúng tôi
                                </h2>
                                <p className="text-muted-foreground md:text-lg">
                                    TravelEase được thành lập với mong muốn mang
                                    đến những trải nghiệm du lịch tuyệt vời cho
                                    mọi người. Chúng tôi tin rằng mỗi chuyến đi
                                    đều là một cơ hội để khám phá, học hỏi và
                                    tạo ra những kỷ niệm đáng nhớ.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    Với đội ngũ chuyên nghiệp và nhiệt tình,
                                    chúng tôi cam kết mang đến những dịch vụ
                                    chất lượng cao, đảm bảo sự hài lòng của
                                    khách hàng trong mọi chuyến đi.
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild>
                                        <Link href="/tours">Khám phá tour</Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link href="/contact">Liên hệ</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"
                                    alt="Our Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Đội ngũ của chúng tôi
                            </h2>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                                Gặp gỡ những người đứng sau TravelEase - đội ngũ
                                chuyên nghiệp và nhiệt tình
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
                            {[
                                {
                                    name: "Nguyễn Văn A",
                                    role: "CEO & Founder",
                                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
                                },
                                {
                                    name: "Trần Thị B",
                                    role: "Head of Operations",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
                                },
                                {
                                    name: "Lê Văn C",
                                    role: "Tour Manager",
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
                                },
                                {
                                    name: "Phạm Thị D",
                                    role: "Customer Service",
                                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
                                },
                            ].map((member, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="relative h-32 w-32 overflow-hidden rounded-full">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="font-bold">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
