"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Calendar,
  Clock,
  Heart,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [commentName, setCommentName] = useState("")
  const [commentEmail, setCommentEmail] = useState("")
  const [saveInfo, setSaveInfo] = useState(false)

  // In a real app, you would fetch this data based on the ID
  const post = {
    id: params.id,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt:
      "Discover lesser-known destinations in Southeast Asia that offer authentic experiences away from the tourist crowds.",
    content: `
      <p>Southeast Asia has long been a favorite destination for travelers seeking beautiful beaches, rich cultural experiences, and delicious cuisine. While places like Bali, Bangkok, and Angkor Wat attract millions of visitors each year, there are still many hidden gems waiting to be discovered.</p>
      
      <p>In this article, we'll take you off the beaten path to explore ten lesser-known destinations in Southeast Asia that offer authentic experiences away from the tourist crowds.</p>
      
      <h2>1. Kampot, Cambodia</h2>
      
      <p>Nestled along the Praek Tuek Chhu river in southern Cambodia, Kampot is a charming riverside town known for its colonial architecture, laid-back atmosphere, and world-famous pepper plantations. Unlike the bustling streets of Siem Reap or Phnom Penh, Kampot offers a glimpse into a more relaxed way of life.</p>
      
      <p>Don't miss the opportunity to take a sunset river cruise, explore the abandoned French hill station at Bokor Mountain, or sample the region's renowned pepper at one of the many local farms.</p>
      
      <h2>2. Pai, Thailand</h2>
      
      <p>Tucked away in the mountains of northern Thailand, Pai is a small town that has become a haven for travelers seeking a more bohemian experience. With its stunning mountain scenery, hot springs, and vibrant night market, Pai offers a welcome respite from Thailand's more touristy destinations.</p>
      
      <p>Rent a motorbike to explore the surrounding countryside, where you'll find waterfalls, canyons, and traditional hill tribe villages. Don't forget to sample the town's excellent food scene, which ranges from authentic Thai cuisine to international favorites.</p>
      
      <h2>3. Mawlamyine, Myanmar</h2>
      
      <p>Once the capital of British Burma, Mawlamyine is a port city with a rich history and stunning colonial architecture. Located on the eastern bank of the Thanlwin River, the city offers panoramic views from its hilltop pagodas and a glimpse into Myanmar's diverse cultural heritage.</p>
      
      <p>Visit the Kyaikthanlan Pagoda, which inspired Rudyard Kipling's famous poem "Mandalay," explore the nearby Ogre Island to see traditional handicraft workshops, or simply wander the streets to admire the well-preserved colonial buildings.</p>
      
      <h2>4. Con Dao Islands, Vietnam</h2>
      
      <p>While Vietnam's Halong Bay and Phu Quoc Island draw large crowds, the Con Dao archipelago remains relatively untouched. This group of 16 islands offers pristine beaches, crystal-clear waters, and some of the best diving and snorkeling in Vietnam.</p>
      
      <p>Once home to a notorious prison during French colonial rule, Con Dao now boasts a national park that protects rare wildlife, including sea turtles that nest on the islands' beaches. The main island, Con Son, features a small town with colonial buildings and a relaxed atmosphere that feels worlds away from Vietnam's bustling cities.</p>
      
      <h2>5. Siquijor, Philippines</h2>
      
      <p>Known locally as the "Island of Fire," Siquijor is shrouded in mystery and folklore. This small island in the Central Visayas region of the Philippines is famous for its healing rituals, shamans, and traditional medicine practitioners.</p>
      
      <p>Beyond its mystical reputation, Siquijor boasts white-sand beaches, enchanting waterfalls, and excellent diving opportunities. Visit the 400-year-old Balete tree, take a dip in the three-tiered Cambugahay Falls, or explore the island's marine sanctuaries teeming with colorful coral and fish.</p>
      
      <h2>6. Hsipaw, Myanmar</h2>
      
      <p>Located in Myanmar's northern Shan State, Hsipaw is a small town that serves as a gateway to trekking adventures in the surrounding hills. The journey to Hsipaw itself is an experience, as many travelers arrive via the famous Gokteik Viaduct, a colonial-era railway bridge that spans a deep gorge.</p>
      
      <p>Once in Hsipaw, you can explore the town's morning market, where various ethnic groups come to trade goods, or embark on multi-day treks to remote Shan villages where traditional ways of life continue largely unchanged by modern influences.</p>
      
      <h2>7. Koh Rong Samloem, Cambodia</h2>
      
      <p>While neighboring Koh Rong has developed into a party destination, Koh Rong Samloem remains a peaceful paradise with powdery white beaches and turquoise waters. Located off the coast of Sihanoukville, this island offers a true escape from the modern world.</p>
      
      <p>With limited electricity (often only available in the evenings), no ATMs, and minimal Wi-Fi, Koh Rong Samloem forces visitors to disconnect and embrace island life. Spend your days snorkeling in crystal-clear waters, hiking through the jungle interior, or simply relaxing in a hammock with a good book.</p>
      
      <h2>8. Phonsavan, Laos</h2>
      
      <p>The capital of Xieng Khouang province in northeastern Laos, Phonsavan is best known as the gateway to the mysterious Plain of Jars. This archaeological landscape is scattered with thousands of stone jars, some dating back to the Iron Age, whose original purpose remains debated by scholars.</p>
      
      <p>Beyond the ancient jars, the region offers insight into the devastating impact of the Secret War, during which Laos became the most heavily bombed country per capita in history. Visit the MAG (Mines Advisory Group) Information Centre to learn about ongoing efforts to clear unexploded ordnance from the countryside.</p>
      
      <h2>9. Maumere, Indonesia</h2>
      
      <p>Located on the island of Flores in eastern Indonesia, Maumere offers a glimpse into a less-visited part of the archipelago. Once a major diving destination before a 1992 earthquake damaged many of the reefs, the area has seen coral regrowth and a return of marine life.</p>
      
      <p>Use Maumere as a base to explore traditional villages where ancient animist beliefs blend with Catholicism, visit the striking tri-colored Kelimutu crater lakes, or take a boat trip to nearby islands with pristine beaches and excellent snorkeling.</p>
      
      <h2>10. Koh Lipe, Thailand</h2>
      
      <p>Often described as the "Maldives of Thailand," Koh Lipe is a small island in the Andaman Sea near the Malaysian border. Despite growing in popularity, it still offers a more relaxed alternative to Thailand's major island destinations.</p>
      
      <p>With no cars or motorbikes, the island maintains a peaceful atmosphere. Three main beaches offer different vibes: Sunrise Beach for stunning views, Pattaya Beach for convenience to shops and restaurants, and Sunset Beach for a more secluded experience. The surrounding waters are part of the Tarutao National Marine Park, ensuring excellent snorkeling and diving opportunities.</p>
      
      <h2>Conclusion</h2>
      
      <p>Southeast Asia's hidden gems offer travelers the chance to experience the region's natural beauty, rich cultural heritage, and warm hospitality away from the crowds. Whether you're seeking pristine beaches, mountain adventures, or cultural immersion, these lesser-known destinations provide authentic experiences that capture the true essence of Southeast Asia.</p>
      
      <p>As these places gradually appear on more travelers' radars, consider visiting sooner rather than later to experience their unspoiled charm. Just remember to travel responsibly, respect local customs, and help preserve these special places for future generations to enjoy.</p>
    `,
    publishedAt: "May 15, 2023",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      role: "Travel Writer",
      bio: "Sarah is an avid traveler who has visited over 50 countries across 6 continents. She specializes in off-the-beaten-path destinations and sustainable travel.",
      avatar: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    categories: ["Travel Tips", "Southeast Asia", "Hidden Gems"],
    tags: [
      "Cambodia",
      "Thailand",
      "Myanmar",
      "Vietnam",
      "Philippines",
      "Indonesia",
      "Laos",
      "Beaches",
      "Culture",
      "Adventure",
    ],
    featuredImage: "/placeholder.svg?height=600&width=1200&text=Southeast+Asia+Hidden+Gems",
    images: [
      {
        url: "/placeholder.svg?height=400&width=600&text=Kampot+Cambodia",
        alt: "Riverside view in Kampot, Cambodia",
        caption: "The peaceful riverside in Kampot, Cambodia offers stunning sunset views.",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Pai+Thailand",
        alt: "Mountain scenery in Pai, Thailand",
        caption: "The lush mountain landscape surrounding Pai, Thailand.",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Con+Dao+Vietnam",
        alt: "Beach at Con Dao Islands, Vietnam",
        caption: "Pristine beaches and crystal-clear waters at Con Dao Islands, Vietnam.",
      },
    ],
    likes: 124,
    comments: [
      {
        id: 1,
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
        date: "May 16, 2023",
        content:
          "Great article! I visited Koh Rong Samloem last year and it was absolutely magical. The bioluminescent plankton at night was an unforgettable experience. I'd add that it's best to bring enough cash as there are no ATMs on the island.",
      },
      {
        id: 2,
        name: "Emma Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40&text=ER",
        date: "May 17, 2023",
        content:
          "I've been to Pai and can confirm it's a hidden gem! The Pai Canyon is breathtaking at sunset and the hot springs are so relaxing. One tip: the road from Chiang Mai to Pai is very winding (762 curves!), so take motion sickness pills if you're prone to car sickness.",
      },
      {
        id: 3,
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40&text=DW",
        date: "May 20, 2023",
        content:
          "Thanks for highlighting some lesser-known places! I'm planning a trip to Southeast Asia next year and will definitely add some of these to my itinerary. Any recommendations on the best time of year to visit these places?",
      },
    ],
    relatedPosts: [
      {
        id: 201,
        title: "How to Pack Like a Pro: Essential Travel Tips",
        excerpt: "Expert packing tips to help you travel light and efficiently for any type of journey.",
        image: "/placeholder.svg?height=200&width=300&text=Packing+Tips",
        publishedAt: "May 10, 2023",
      },
      {
        id: 202,
        title: "The Ultimate Guide to Budget Travel in Southeast Asia",
        excerpt: "Learn how to explore Southeast Asia on a budget without compromising on experiences.",
        image: "/placeholder.svg?height=200&width=300&text=Budget+Travel",
        publishedAt: "April 28, 2023",
      },
      {
        id: 203,
        title: "Top 5 Street Foods You Must Try in Southeast Asia",
        excerpt: "A culinary journey through the vibrant street food scenes across Southeast Asia.",
        image: "/placeholder.svg?height=200&width=300&text=Street+Food",
        publishedAt: "June 2, 2023",
      },
    ],
  }

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the comment to your backend
    alert("Comment submitted! In a real app, this would be saved to a database.")
    setCommentText("")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground">Hidden Gems in Southeast Asia</span>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Post Header */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <Badge key={index} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">{post.author.role}</div>
                  </div>
                </div>

                <Separator orientation="vertical" className="h-6" />

                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post.publishedAt}</span>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
              {/* Main Content */}
              <div className="space-y-8">
                {/* Post Content */}
                <div className="max-w-3xl prose prose-lg dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Image Gallery */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Photo Gallery</h3>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {post.images.map((image, index) => (
                      <div key={index} className="space-y-2">
                        <div className="relative aspect-video overflow-hidden rounded-lg">
                          <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                        </div>
                        <p className="text-sm text-muted-foreground">{image.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge variant="outline" className="hover:bg-secondary">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share and Like */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Share:</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Share via Email</span>
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    className={cn(isLiked && "text-red-500")}
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={cn("mr-2 h-4 w-4", isLiked && "fill-red-500")} />
                    <span>{isLiked ? post.likes + 1 : post.likes} likes</span>
                  </Button>
                </div>

                <Separator />

                {/* Author Bio */}
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback className="text-lg">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                      <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                      <Button variant="outline" size="sm">
                        View All Posts
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Post Navigation */}
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href={`/blog/${Number.parseInt(params.id) - 1}`}
                    className={cn(
                      "p-4 rounded-lg border hover:bg-muted transition-colors",
                      Number.parseInt(params.id) <= 1 && "pointer-events-none opacity-50",
                    )}
                  >
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <ArrowLeft className="mr-1 h-4 w-4" />
                      <span>Previous Post</span>
                    </div>
                    <div className="font-medium line-clamp-2">How to Pack Like a Pro: Essential Travel Tips</div>
                  </Link>

                  <Link
                    href={`/blog/${Number.parseInt(params.id) + 1}`}
                    className="p-4 rounded-lg border hover:bg-muted transition-colors text-right"
                  >
                    <div className="flex items-center justify-end text-sm text-muted-foreground mb-2">
                      <span>Next Post</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                    <div className="font-medium line-clamp-2">
                      The Ultimate Guide to Budget Travel in Southeast Asia
                    </div>
                  </Link>
                </div>

                <Separator />

                {/* Comments */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Comments ({post.comments.length})</h3>
                    <Button variant="ghost" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Join the discussion</span>
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="p-4 rounded-lg border">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.name} />
                            <AvatarFallback>
                              {comment.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">{comment.name}</div>
                              <div className="text-sm text-muted-foreground">{comment.date}</div>
                            </div>
                            <p className="text-muted-foreground">{comment.content}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <Button variant="ghost" size="sm" className="h-auto p-0">
                                Reply
                              </Button>
                              <Button variant="ghost" size="sm" className="h-auto p-0">
                                Like
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comment Form */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
                      <form onSubmit={submitComment} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="comment">Your Comment</Label>
                          <Textarea
                            id="comment"
                            placeholder="Share your thoughts..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            required
                            className="min-h-[120px]"
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              value={commentName}
                              onChange={(e) => setCommentName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Your email"
                              value={commentEmail}
                              onChange={(e) => setCommentEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="save-info"
                            checked={saveInfo}
                            onCheckedChange={(checked) => setSaveInfo(!!checked)}
                          />
                          <Label htmlFor="save-info" className="text-sm font-normal">
                            Save my name and email for the next time I comment
                          </Label>
                        </div>

                        <Button type="submit">Post Comment</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback className="text-lg">
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-bold mb-1">{post.author.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.author.role}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Follow
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Related Posts</h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                        <div className="flex gap-4 group">
                          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{relatedPost.publishedAt}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Categories</h3>
                  <div className="space-y-2">
                    {post.categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                      >
                        <span>{category}</span>
                        <Badge variant="secondary">12</Badge>
                      </Link>
                    ))}
                    <Link
                      href="/blog/categories"
                      className="flex items-center text-sm text-primary hover:underline mt-2"
                    >
                      View All Categories
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge variant="outline" className="hover:bg-secondary">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                    <p className="text-primary-foreground/80 mb-4">
                      Get the latest travel tips and inspiration delivered to your inbox.
                    </p>
                    <form className="space-y-2">
                      <Input
                        placeholder="Your email address"
                        type="email"
                        required
                        className="bg-primary-foreground text-foreground"
                      />
                      <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                        Subscribe
                      </Button>
                    </form>
                    <p className="text-xs text-primary-foreground/70 mt-2">
                      By subscribing, you agree to our Privacy Policy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
