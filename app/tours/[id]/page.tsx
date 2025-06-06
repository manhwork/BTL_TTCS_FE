"use client";

import { BookingModal } from "@/components/booking-modal";
import { RelatedTours } from "@/components/related-tours";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { getTour } from "@/service/tours";
import { format } from "date-fns";
import { CalendarIcon, CalendarPlus2Icon as CalendarIcon2, Clock, Heart, Loader2, MapPin, Share2, Star, Users, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { getCookie } from "@/lib/cookies";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import http from "@/service/http";

export const getLobelTransportation = (transportation: string) => {
    switch (transportation) {
        case "car":
            return "Xe hơi";
        case "boat":
            return "Thuyền";
        case "plane":
            return "Máy bay";
        case "train":
            return "Tàu hỏa";
        case "bus":
            return "Xe bus";
        case "motorcycle":
            return "Xe máy";
        case "bicycle":
            return "Xe đạp";

        default:
            return transportation;
    }
};

interface Review {
    _id: string;
    tour_id: string;
    user_id: {
        _id: string;
        avatar: string;
    };
    rating: number;
    comment: string;
    images: string[];
    is_approved: boolean;
    deleted: boolean;
    created_at: string;
    updated_at: string;
}

interface ReviewResponse {
    code: number;
    message: string;
    data: {
        hits: Review[];
        pagination: {
            totalRows: number;
            totalPages: number;
        };
    };
}

interface Tour {
    _id: string;
    title: string;
    code: string;
    category_id: {
        _id: string;
        title: string;
    };
    images: string[];
    price: number;
    discount: number;
    information: string;
    schedule: string;
    duration_days: number;
    stock: number;
    transportation: string;
    status: string;
    position: number;
    average_rating: number;
    reviews: Review[];
    deleted: boolean;
    created_at: string;
    updated_at: string;
    slug: string;
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
    const { id } = use(params);
    const [date, setDate] = useState<Date>();
    const [travelers, setTravelers] = useState("2");
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [data, setData] = useState<Tour | null>(null);
    const [loading, setLoading] = useState(true);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [mainImage, setMainImage] = useState<string>();
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [userReview, setUserReview] = useState<Review | null>(null);
    const [selectedRating, setSelectedRating] = useState(editingReview?.rating || 5);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const res = await http.get<ReviewResponse>(`/tours/reviews/${id}`);
                setReviews(res.data.data.hits);
                const userReview = res.data.data.hits.find((review: Review) => review.user_id._id === getCookie("userId"));
                setUserReview(userReview || null);
            } catch (error) {
                console.error("Error fetching reviews:", error);
                toast.error("Không thể tải đánh giá");
            }
        };
        fetchComment();
    }, [id]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getTour(id);

                console.log("[TourDetailPage] response", response);
                if (isMounted) {
                    setData(response);
                    setMainImage(response.images[0]);
                }
            } catch (error) {
                console.error("Error fetching tour:", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [id]);

    const handleAddReview = async (review: { rating: number; comment: string }) => {
        try {
            await http.post(`/tours/reviews/create`, {
                rating: review.rating,
                comment: review.comment,
                tour_id: id,
            });
            toast.success("Thêm đánh giá thành công!");
            setIsReviewModalOpen(false);
            // Refresh reviews
            const res = await http.get<ReviewResponse>(`/tours/reviews/${id}`);
            setReviews(res.data.data.hits);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Thêm đánh giá thất bại!");
        }
    };

    const handleEditReview = async (review: { rating: number; comment: string }) => {
        try {
            await http.post(`/tours/reviews/create`, {
                rating: review.rating,
                comment: review.comment,
                tour_id: id,
            });
            toast.success("Sửa đánh giá thành công!");
            setIsReviewModalOpen(false);
            setEditingReview(null);
            // Refresh reviews
            const res = await http.get<ReviewResponse>(`/tours/reviews/${id}`);
            setReviews(res.data.data.hits);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Sửa đánh giá thất bại!");
        }
    };

    const handleDeleteReview = async (reviewId: string) => {
        try {
            await http.delete(`/tours/reviews/${reviewId}`);
            toast.success("Xóa đánh giá thành công!");
            // Refresh reviews
            const res = await http.get<ReviewResponse>(`/tours/reviews/${id}`);
            setReviews(res.data.data.hits);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Xóa đánh giá thất bại!");
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader2 className="animate-spin" />
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex justify-center items-center h-full">
                <div className="text-2xl font-bold">Tour not found</div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="py-6 md:py-8">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
                            {/* Left Column - Tour Details */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Link href="/tours" className="text-sm text-muted-foreground hover:text-primary">
                                            Tours
                                        </Link>
                                        <span className="text-sm text-muted-foreground">/</span>
                                        <span className="text-sm font-medium">{data.title}</span>
                                    </div>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.title}</h1>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-medium">{data.average_rating}</span>
                                            <span className="text-muted-foreground">({data.reviews.length} đánh giá)</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="mr-1 h-4 w-4" />
                                            <span>{data.category_id.title}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Clock className="mr-1 h-4 w-4" />
                                            <span>{data.duration_days} ngày</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Users className="mr-1 h-4 w-4" />
                                            <span>Số chỗ: {data.stock}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Gallery */}
                                <div className="space-y-2">
                                    <div className="relative aspect-video overflow-hidden rounded-lg">
                                        <Image src={mainImage || "/placeholder.svg"} alt={data.title} fill className="object-cover" priority />
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {data.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className={cn(
                                                    "relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2",
                                                    mainImage === image ? "border-primary" : "border-transparent"
                                                )}
                                                onClick={() => setMainImage(image)}
                                            >
                                                <Image src={image || "/placeholder.svg"} alt={`${data.title} ${index + 1}`} fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tour Content Tabs */}
                                <Tabs defaultValue="overview" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                                        <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
                                    </TabsList>

                                    {/* Overview Tab */}
                                    <TabsContent value="overview" className="space-y-6 pt-4">
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-bold">Tổng quan tour</h2>
                                            <p className="text-muted-foreground">{data.information}</p>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">Lịch trình</CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <p>{data.schedule}</p>
                                                </CardContent>
                                            </Card>

                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">Phương tiện di chuyển</CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <p>{getLobelTransportation(data.transportation)}</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* Reviews Tab */}
                                    <TabsContent value="reviews" className="space-y-6 pt-4">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-bold">Đánh giá từ khách hàng</h2>
                                            {!userReview && <Button onClick={() => setIsReviewModalOpen(true)}>Viết đánh giá</Button>}
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                                            <Card>
                                                <CardContent className="p-6">
                                                    <div className="space-y-4">
                                                        <div className="text-center">
                                                            <div className="text-5xl font-bold">{(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0).toFixed(1)}</div>
                                                            <div className="flex justify-center gap-1 my-2">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                                ))}
                                                            </div>
                                                            <div className="text-muted-foreground">Dựa trên {reviews.length} đánh giá</div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <div className="space-y-4">
                                                {reviews.map((review) => (
                                                    <Card key={review._id}>
                                                        <CardContent className="p-6">
                                                            <div className="flex items-start gap-4">
                                                                <Avatar>
                                                                    <AvatarImage src={review.user_id.avatar || "/placeholder.svg"} alt="User avatar" />
                                                                    <AvatarFallback>U</AvatarFallback>
                                                                </Avatar>
                                                                <div className="space-y-2 flex-1">
                                                                    <div className="flex items-center justify-between">
                                                                        <div>
                                                                            <div className="font-medium">User {review.user_id._id.slice(-4)}</div>
                                                                            <div className="text-sm text-muted-foreground">{new Date(review.created_at).toLocaleDateString("vi-VN")}</div>
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                            <div className="flex items-center">
                                                                                {[...Array(5)].map((_, i) => (
                                                                                    <Star key={i} className={cn("h-4 w-4", i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted")} />
                                                                                ))}
                                                                            </div>
                                                                            {review.user_id._id === getCookie("userId") && (
                                                                                <div className="flex items-center gap-2">
                                                                                    <Button
                                                                                        variant="ghost"
                                                                                        size="icon"
                                                                                        onClick={() => {
                                                                                            setEditingReview(review);
                                                                                            setIsReviewModalOpen(true);
                                                                                        }}
                                                                                    >
                                                                                        <Pencil className="h-4 w-4" />
                                                                                    </Button>
                                                                                    <Button variant="ghost" size="icon" onClick={() => handleDeleteReview(review._id)}>
                                                                                        <Trash2 className="h-4 w-4" />
                                                                                    </Button>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-muted-foreground">{review.comment}</p>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                {/* Related Tours */}
                                <div className="space-y-4">
                                    <RelatedTours currentTourId={params.id} category={data?.category_id.title} />
                                </div>
                            </div>

                            {/* Right Column - Booking */}
                            <div className="space-y-6">
                                <Card className=" top-24">
                                    <CardHeader>
                                        <CardTitle>Đặt tour này</CardTitle>
                                        <CardDescription>Chọn ngày khởi hành và số lượng khách</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-muted-foreground line-through">{data.price.toLocaleString("vi-VN")} VND</div>
                                            <div>
                                                <span className="text-3xl font-bold">{(data.price * (1 - data.discount / 100)).toLocaleString("vi-VN")} VND</span>
                                                <span className="text-muted-foreground"> / người</span>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Ngày khởi hành</label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : "Chọn ngày"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus disabled={(date) => date < new Date()} />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Số lượng khách</label>
                                            <Input type="number" value={travelers} onChange={(e) => setTravelers(e.target.value)} />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Giá tour (mỗi người)</span>
                                                <span>{(data.price * (1 - data.discount / 100)).toLocaleString("vi-VN")} VND</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Khách</span>
                                                <span>x {travelers}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between font-medium">
                                                <span>Tổng cộng</span>
                                                <span>{(data.price * (1 - data.discount / 100) * Number.parseInt(travelers)).toLocaleString("vi-VN")} VND</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-4 ">
                                            <Button variant="outline" className="w-full bg-primary text-white" onClick={() => setIsBookingModalOpen(true)}>
                                                Yêu cầu đặt
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Cần hỗ trợ?</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <CalendarIcon2 className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Đặt chỗ linh hoạt</div>
                                                <div className="text-sm text-muted-foreground">Hủy miễn phí trước 30 ngày khởi hành</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <Users className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Hướng dẫn viên chuyên nghiệp</div>
                                                <div className="text-sm text-muted-foreground">Hướng dẫn viên địa phương, nói tiếng Anh với kiến thức sâu rộng</div>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full">
                                            Liên hệ chúng tôi
                                        </Button>
                                    </CardContent>
                                </Card>

                                <BookingModal
                                    isOpen={isBookingModalOpen}
                                    onClose={() => setIsBookingModalOpen(false)}
                                    tourTitle={data.title}
                                    tourPrice={data.price * (1 - data.discount / 100)}
                                    travelers={Number(travelers)}
                                    date={date}
                                    tourId={data._id}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Review Modal */}
            <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{editingReview ? "Sửa đánh giá" : "Viết đánh giá"}</DialogTitle>
                    </DialogHeader>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const comment = formData.get("comment") as string;
                            if (editingReview) {
                                handleEditReview({
                                    rating: selectedRating,
                                    comment,
                                });
                            } else {
                                handleAddReview({
                                    rating: selectedRating,
                                    comment,
                                });
                            }
                        }}
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <Label>Đánh giá của bạn</Label>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Button key={i} type="button" variant="ghost" size="icon" onClick={() => setSelectedRating(i + 1)}>
                                        <Star className={cn("h-5 w-5", i < selectedRating ? "fill-yellow-400 text-yellow-400" : "text-muted")} />
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="comment">Nhận xét của bạn</Label>
                            <Textarea id="comment" name="comment" defaultValue={editingReview?.comment} required />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setIsReviewModalOpen(false);
                                    setEditingReview(null);
                                    setSelectedRating(0);
                                }}
                            >
                                Hủy
                            </Button>
                            <Button type="submit" disabled={selectedRating === 0}>
                                {editingReview ? "Cập nhật" : "Gửi đánh giá"}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
