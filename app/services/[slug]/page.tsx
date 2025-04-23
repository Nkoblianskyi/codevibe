import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

// Define the service data
const services = {
  "seo-services": {
    title: "SEO Services",
    description: "Improve your search engine rankings and visibility with our comprehensive SEO services.",
    longDescription:
      "Our SEO services are designed to improve your website's visibility in search engine results, driving more organic traffic and increasing your online presence. We use a combination of on-page optimization, technical SEO, content strategy, and link building to help your website rank higher in search results.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Comprehensive website audit",
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO improvements",
      "Content optimization",
      "Link building",
      "Local SEO",
      "Regular performance reporting",
    ],
  },
  "ppc-services": {
    title: "PPC Services",
    description: "Drive targeted traffic and increase conversions with our expert PPC management.",
    longDescription:
      "Our PPC services help you maximize your advertising budget by creating targeted campaigns that reach your ideal customers at the right time. We manage campaigns across Google Ads, Bing Ads, and social media platforms to drive qualified traffic to your website and increase conversions.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Campaign strategy and planning",
      "Keyword research and selection",
      "Ad copywriting and design",
      "Landing page optimization",
      "Bid management",
      "A/B testing",
      "Conversion tracking",
      "Performance analysis and reporting",
    ],
  },
  "affiliate-services": {
    title: "Affiliate Services",
    description: "Expand your reach and increase sales through strategic affiliate partnerships.",
    longDescription:
      "Our affiliate marketing services help you build and manage a network of partners who promote your products or services in exchange for a commission. We handle everything from affiliate recruitment to program management, helping you expand your reach and increase sales without upfront costs.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Affiliate program setup and management",
      "Partner recruitment and onboarding",
      "Commission structure optimization",
      "Promotional material creation",
      "Performance tracking",
      "Affiliate relationship management",
      "Fraud prevention",
      "Regular reporting and analysis",
    ],
  },
  "content-services": {
    title: "Content Services",
    description: "Engage your audience with compelling, SEO-optimized content that converts.",
    longDescription:
      "Our content services provide you with high-quality, engaging content that resonates with your target audience and supports your marketing goals. From blog posts and articles to social media content and email newsletters, we create content that drives traffic, engages readers, and converts visitors into customers.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Content strategy development",
      "Blog posts and articles",
      "Website copy",
      "Product descriptions",
      "Email newsletters",
      "Social media content",
      "Ebooks and whitepapers",
      "Case studies and testimonials",
    ],
  },
  "social-media-services": {
    title: "Social Media Services",
    description: "Build your brand presence and engage with your audience across social platforms.",
    longDescription:
      "Our social media services help you build and maintain a strong presence on the platforms where your audience spends their time. We develop and implement strategies that increase brand awareness, engage your followers, and drive traffic to your website, ultimately supporting your business goals.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Social media strategy development",
      "Profile setup and optimization",
      "Content creation and curation",
      "Community management",
      "Paid social advertising",
      "Influencer partnerships",
      "Analytics and reporting",
      "Social listening and reputation management",
    ],
  },
  marketing: {
    title: "Marketing",
    description: "Comprehensive marketing strategies tailored to your business goals and target audience.",
    longDescription:
      "Our marketing services provide a holistic approach to promoting your business online. We develop and implement comprehensive strategies that combine various digital marketing channels to achieve your business goals, whether that's increasing brand awareness, generating leads, or driving sales.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Marketing strategy development",
      "Brand positioning",
      "Market research",
      "Competitive analysis",
      "Channel selection and optimization",
      "Campaign planning and execution",
      "Performance measurement",
      "Continuous optimization",
    ],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-lg opacity-80">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">{service.longDescription}</p>
              <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-1 text-black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="rounded-none bg-black text-white mt-8" asChild>
                <Link href="/contact">
                  GET STARTED
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our {service.title}?</h2>
            <p className="text-lg mb-8">
              We combine industry expertise, data-driven strategies, and a client-focused approach to deliver
              exceptional results.
            </p>
            <Button asChild className="rounded-none bg-black text-white">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(services)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, serviceData]) => (
                <Link key={slug} href={`/services/${slug}`} className="group">
                  <div className="border p-6 h-full transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4 group-hover:underline">{serviceData.title}</h3>
                    <p className="text-muted-foreground mb-6">{serviceData.description}</p>
                    <span className="text-sm font-medium flex items-center">
                      LEARN MORE
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
