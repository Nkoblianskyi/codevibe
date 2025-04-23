'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState("")

  const posts = [
    {
      title: "Digital Marketing Trends for 2025",
      slug: "digital-marketing-trends",
      excerpt: "Explore the latest trends shaping the digital marketing landscape this year.",
      date: "April 20, 2023",
      image: "/digital.png",
    },
    {
      title: "SEO Best Practices for 2025",
      slug: "seo-best-practices",
      excerpt: "Learn the most effective SEO strategies to improve your website's visibility.",
      date: "March 15, 2023",
      image: "/seo-2.png",
    },
    {
      title: "Building an Effective Social Media Strategy",
      slug: "social-media-strategy",
      excerpt: "Tips and tricks for creating a social media strategy that drives engagement.",
      date: "February 28, 2023",
      image: "/social-2.png",
    },
    {
      title: "The Power of Content Marketing",
      slug: "content-marketing-power",
      excerpt: "How content marketing can transform your business and drive sustainable growth.",
      date: "January 22, 2025",
      image: "/power.png",
    },
    {
      title: "PPC Advertising: A Beginner's Guide",
      slug: "ppc-beginners-guide",
      excerpt: "Everything you need to know to get started with pay-per-click advertising.",
      date: "December 10, 2025",
      image: "/ppc.png",
    },
    {
      title: "Email Marketing Strategies That Convert",
      slug: "email-marketing-strategies",
      excerpt: "Proven email marketing tactics to increase open rates and conversions.",
      date: "November 5, 2025",
      image: "/email.png",
    },
  ]

  return (
    <>
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg opacity-80">
              Insights, tips, and industry news to help you stay ahead in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="border overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="font-bold text-xl mb-2 group-hover:underline">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated with the latest industry insights and news. We promise not to spam your inbox!
          </p>

          {subscribed ? (
            <p className="text-green-600 font-medium text-lg transition-opacity duration-500">
              ✅ Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubscribed(true)
                setEmail("")
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" className="rounded-none bg-black text-white">
                SUBSCRIBE
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
