"use client";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { getTours } from "@/service/tours";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchTour() {
    const [input, setInput] = useState("");
    const [debouncedInput] = useDebounce(input, 1000);
    const [tours, setTours] = useState<any[]>([]);

    useEffect(() => {
        const fetchTours = async () => {
            const data = await getTours({
                keyword: input,
                field: "title",
            });
            setTours(data.hits || []);
            console.log(tours);
        };
        fetchTours();
    }, [input]);

    return (
        <div className=" mx-auto w-full p-4  relative">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Tìm kiếm tour
            </h2>
            <Input
                placeholder="Bạn muốn đi đâu?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full"
            />
            {input && (
                <div className="absolute left-0 right-0 bg-white border rounded-lg shadow-lg mt-1 z-10 max-h-[600px] w-[800px] overflow-y-auto">
                    {tours.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4 p-4">
                            {tours.map((tour) => (
                                <Link
                                    key={tour._id}
                                    href={`/tours/${tour._id}`}
                                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className=" gap-4 p-4">
                                        <div className="relative w-[200px] h-[150px] flex-shrink-0">
                                            <Image
                                                src={
                                                    tour.images?.[0] ||
                                                    "/placeholder.svg"
                                                }
                                                alt={tour.title}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold line-clamp-1">
                                                    {tour.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{tour.location}</span>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="text-lg font-bold text-primary">
                                                    {new Intl.NumberFormat(
                                                        "vi-VN",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        }
                                                    ).format(tour.price)}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Giá cho 1 người
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 text-center text-muted-foreground">
                            Không tìm thấy tour phù hợp
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
