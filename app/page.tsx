import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative border-b">
        <div className="container grid md:grid-cols-2 gap-6 py-12 md:py-24">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Our digital agency from any service provided
            </h1>
            <p className="text-muted-foreground">
              We help ambitious businesses like yours generate more profits by building awareness, driving web traffic,
              connecting with customers, and growing overall sales.
            </p>
            <Button className="rounded-none bg-black text-white">
              GET STARTED
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Digital agency team"
              width={800}
              height={600}
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <Plus className="h-6 w-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-b py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of digital marketing services to help your business grow
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <Link href="/services/seo-services" className="group">
              <div className="text-center space-y-3 p-6 border transition-all duration-300 hover:shadow-md">
                <div className="mx-auto h-16 w-16 flex items-center justify-center border rounded-full">
                  <Image src="/placeholder.svg?height=32&width=32" alt="SEO Services" width={32} height={32} />
                </div>
                <h3 className="font-medium group-hover:underline">SEO SERVICES</h3>
                <p className="text-muted-foreground text-sm">Improve your search engine rankings and visibility</p>
              </div>
            </Link>
            <Link href="/services/ppc-services" className="group">
              <div className="text-center space-y-3 p-6 border transition-all duration-300 hover:shadow-md">
                <div className="mx-auto h-16 w-16 flex items-center justify-center border rounded-full">
                  <Image src="/placeholder.svg?height=32&width=32" alt="PPC Services" width={32} height={32} />
                </div>
                <h3 className="font-medium group-hover:underline">PPC SERVICES</h3>
                <p className="text-muted-foreground text-sm">Drive targeted traffic with pay-per-click advertising</p>
              </div>
            </Link>
            <Link href="/services/affiliate-services" className="group">
              <div className="text-center space-y-3 p-6 border transition-all duration-300 hover:shadow-md">
                <div className="mx-auto h-16 w-16 flex items-center justify-center border rounded-full">
                  <Image src="/placeholder.svg?height=32&width=32" alt="Affiliate Services" width={32} height={32} />
                </div>
                <h3 className="font-medium group-hover:underline">AFFILIATE SERVICES</h3>
                <p className="text-muted-foreground text-sm">Expand your reach with strategic affiliate partnerships</p>
              </div>
            </Link>
            <Link href="/services/content-services" className="group">
              <div className="text-center space-y-3 p-6 border transition-all duration-300 hover:shadow-md">
                <div className="mx-auto h-16 w-16 flex items-center justify-center border rounded-full">
                  <Image src="/placeholder.svg?height=32&width=32" alt="Content Services" width={32} height={32} />
                </div>
                <h3 className="font-medium group-hover:underline">CONTENT SERVICES</h3>
                <p className="text-muted-foreground text-sm">Engage your audience with compelling content</p>
              </div>
            </Link>
            <Link href="/services/social-media-services" className="group">
              <div className="text-center space-y-3 p-6 border transition-all duration-300 hover:shadow-md">
                <div className="mx-auto h-16 w-16 flex items-center justify-center border rounded-full">
                  <Image src="/placeholder.svg?height=32&width=32" alt="Social Media Services" width={32} height={32} />
                </div>
                <h3 className="font-medium group-hover:underline">SOCIAL MEDIA SERVICES</h3>
                <p className="text-muted-foreground text-sm">Build your brand presence across social platforms</p>
              </div>
            </Link>
            <Link href="/services/marketing" className="group">
              <div className="text-center space-y-3 p-6 border transition-all duration-300 hover:shadow-md">
                <div className="mx-auto h-16 w-16 flex items-center justify-center border rounded-full">
                  <Image src="/placeholder.svg?height=32&width=32" alt="Marketing" width={32} height={32} />
                </div>
                <h3 className="font-medium group-hover:underline">MARKETING</h3>
                <p className="text-muted-foreground text-sm">Comprehensive marketing strategies for your business</p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Button asChild className="rounded-none bg-black text-white">
              <Link href="/services">VIEW ALL SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Unlock revenue through digital excellence</h2>
              <p className="text-muted-foreground">We help ambitious businesses like yours generate more profits</p>
              <Button variant="outline" className="rounded-none mt-4" asChild>
                <Link href="/about">LEARN MORE</Link>
              </Button>
            </div>
            <div className="space-y-6 md:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold">95%</h3>
                  <p className="text-muted-foreground">Client satisfaction rate</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">80+</h3>
                  <p className="text-muted-foreground">Projects completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">15+</h3>
                  <p className="text-muted-foreground">Years of experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">25+</h3>
                  <p className="text-muted-foreground">Awards received</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-b py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Team working together"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold">We're your extended team</h2>
              <p className="text-muted-foreground">
                Our team of experts works as an extension of your business, understanding your goals and delivering
                results that matter.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Dedicated project managers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Expert developers and designers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Regular progress updates</span>
                </li>
              </ul>
              <Button className="rounded-none bg-black text-white w-fit mt-4" asChild>
                <Link href="/about">MEET OUR TEAM</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="border-b py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest from our blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and industry news to keep you informed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/digital-marketing-trends" className="group">
              <div className="border overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Digital Marketing Trends"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">April 20, 2023</p>
                  <h3 className="font-bold text-xl mb-2 group-hover:underline">Digital Marketing Trends for 2023</h3>
                  <p className="text-muted-foreground">
                    Explore the latest trends shaping the digital marketing landscape this year.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/blog/seo-best-practices" className="group">
              <div className="border overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="SEO Best Practices"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">March 15, 2023</p>
                  <h3 className="font-bold text-xl mb-2 group-hover:underline">SEO Best Practices for 2023</h3>
                  <p className="text-muted-foreground">
                    Learn the most effective SEO strategies to improve your website's visibility.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/blog/social-media-strategy" className="group">
              <div className="border overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Social Media Strategy"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">February 28, 2023</p>
                  <h3 className="font-bold text-xl mb-2 group-hover:underline">
                    Building an Effective Social Media Strategy
                  </h3>
                  <p className="text-muted-foreground">
                    Tips and tricks for creating a social media strategy that drives engagement.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Button asChild className="rounded-none bg-black text-white">
              <Link href="/blog">VIEW ALL POSTS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">GET IN TOUCH</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Contact us today for a free consultation.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <Button className="w-full rounded-none bg-black text-white py-6" asChild>
              <Link href="/contact">
                CONTACT US NOW
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
