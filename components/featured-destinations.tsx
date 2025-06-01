import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
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
    images: string[];
    featured: boolean;
}

export function FeaturedDestinations() {
    const [destinations, setDestinations] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await getTours({ limit: 6 });
                setDestinations(response.hits || []);
            } catch (error) {
                console.error("Error fetching featured destinations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
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
            {destinations.map((destination) => (
                <Link key={destination._id} href={`/tours/${destination._id}`}>
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-ocean-100 group">
                        <div className="relative h-64">
                            <Image
                                src={
                                    destination.images[0] || "/placeholder.svg"
                                }
                                alt={destination.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {destination.featured && (
                                <Badge className="absolute top-4 right-4 bg-sunset-500 hover:bg-sunset-600">
                                    Nổi bật
                                </Badge>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardContent className="p-4 relative">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-ocean-600 transition-colors">
                                        {destination.title}
                                    </h3>
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="mr-1 h-4 w-4 text-ocean-500" />
                                        <span>
                                            {destination.category_id?.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
