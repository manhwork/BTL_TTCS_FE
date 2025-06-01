import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTours } from "@/service/tours";
import { Loader2 } from "lucide-react";

interface Tour {
    _id: string;
    title: string;
    category_id: {
        title: string;
    };
    duration_days: number;
    stock: number;
    average_rating: number;
    reviews: any[];
    price: number;
    discount: number;
    images: string[];
    featured: boolean;
}

export function PopularTours() {
    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await getTours({ limit: 3 });
                setTours(response.hits || []);
            } catch (error) {
                console.error("Error fetching popular tours:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-48">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {tours.map((tour) => (
                <Card
                    key={tour._id}
                    className="overflow-hidden h-full flex flex-col border-ocean-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                    <div className="relative h-48">
                        <Image
                            src={tour.images[0] || "/placeholder.svg"}
                            alt={tour.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {tour.featured && (
                            <Badge className="absolute top-4 right-4 bg-sunset-500 hover:bg-sunset-600">
                                Featured
                            </Badge>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4 flex-1">
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-sand-400 text-sand-400" />
                            <span className="font-medium">
                                {tour.average_rating}
                            </span>
                            <span className="text-muted-foreground text-sm">
                                ({tour.reviews.length} đánh giá)
                            </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-ocean-600 transition-colors">
                            {tour.title}
                        </h3>
                        <div className="grid gap-2 text-sm">
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="mr-1 h-4 w-4 text-ocean-500" />
                                <span>{tour.category_id?.title}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Clock className="mr-1 h-4 w-4 text-ocean-500" />
                                <span>{tour.duration_days} ngày</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Users className="mr-1 h-4 w-4 text-ocean-500" />
                                <span>Số chỗ: {tour.stock}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex items-center justify-between border-t border-ocean-50 mt-auto">
                        <div>
                            <span className="text-lg font-bold text-ocean-700">
                                {(
                                    tour.price *
                                    (1 - tour.discount / 100)
                                ).toLocaleString("vi-VN")}{" "}
                                VND
                            </span>
                            <span className="text-muted-foreground text-sm">
                                {" "}
                                / người
                            </span>
                        </div>
                        <Button
                            asChild
                            size="sm"
                            className="bg-ocean-600 hover:bg-ocean-700 text-white"
                        >
                            <Link href={`/tours/${tour._id}`}>
                                Xem chi tiết
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
