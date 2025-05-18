import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "10 Hidden Gems in Southeast Asia You Must Visit",
            excerpt:
                "Discover lesser-known destinations in Southeast Asia that offer authentic experiences away from the tourist crowds.",
            category: "Travel Tips",
            date: "May 15, 2023",
            image: "/placeholder.svg?height=300&width=500&text=Southeast+Asia",
            featured: true,
        },
        {
            id: 2,
            title: "How to Pack Like a Pro: Essential Travel Tips",
            excerpt:
                "Expert packing tips to help you travel light and efficiently for any type of journey.",
            category: "Travel Tips",
            date: "May 10, 2023",
            image: "/placeholder.svg?height=300&width=500&text=Packing+Tips",
            featured: false,
        },
        {
            id: 3,
            title: "The Ultimate Guide to Travel Booking",
            excerpt:
                "I've created a comprehensive travel booking website using Vite and React with all the requested features. The implementation includes:",
            category: "Travel Tips",
            date: "May 20, 2023",
            image: "/placeholder.svg?height=300&width=500&text=Travel+Booking",
            featured: true,
        },
    ];

    // ** rest of code here **

    return (
        <div>
            {/* <Header /> */}
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-10">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="bg-white">
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>
                                    {post.excerpt}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    width={500}
                                    height={300}
                                />
                            </CardContent>
                            <CardFooter>
                                <Badge variant="outline">{post.category}</Badge>
                                <span className="text-sm text-muted-foreground ml-auto">
                                    {post.date}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <Pagination className="mt-6">
                    <PaginationContent>
                        <PaginationPrevious>Previous</PaginationPrevious>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationEllipsis />
                        <PaginationItem>
                            <PaginationLink href="#">4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">5</PaginationLink>
                        </PaginationItem>
                        <PaginationNext>Next</PaginationNext>
                    </PaginationContent>
                </Pagination>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
