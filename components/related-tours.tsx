"use client";

import { getTours } from "@/service/tours";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface RelatedToursProps {
    currentTourId: string;
    category?: string;
}

export function RelatedTours({ currentTourId, category }: RelatedToursProps) {
    const [relatedTours, setRelatedTours] = useState<any[]>([]);

    useEffect(() => {
        const fetchRelatedTours = async () => {
            try {
                const data = await getTours({
                    category: category,
                    limit: 4, // Lấy 4 tour để đảm bảo có đủ 3 tour sau khi loại trừ
                });

                // Lọc bỏ tour hiện tại và lấy 3 tour đầu tiên
                const filteredTours =
                    data.hits
                        ?.filter((tour: any) => tour._id !== currentTourId)
                        .slice(0, 3) || [];

                setRelatedTours(filteredTours);
            } catch (error) {
                console.error("Error fetching related tours:", error);
            }
        };

        fetchRelatedTours();
    }, [currentTourId, category]);

    if (relatedTours.length === 0) return null;

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Có thể bạn cũng thích</h2>
            <div className="grid grid-cols-3 gap-4">
                {relatedTours.map((tour) => (
                    <Link
                        key={tour._id}
                        href={`/tours/${tour._id}`}
                        className="block"
                    >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-48">
                                <Image
                                    src={tour.images?.[0] || "/placeholder.svg"}
                                    alt={tour.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold line-clamp-1 mb-2">
                                    {tour.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4" />
                                    <span className="line-clamp-1">
                                        {tour.location}
                                    </span>
                                </div>
                                <div className="mt-2 text-lg font-bold text-primary">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(tour.price)}
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
