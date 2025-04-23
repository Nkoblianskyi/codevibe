import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      title: "SEO SERVICES",
      description: "Improve your search engine rankings and visibility with our comprehensive SEO services.",
      slug: "seo-services",
      icon: "/seo.png",
    },
    {
      title: "PPC SERVICES",
      description: "Drive targeted traffic and increase conversions with our expert PPC management.",
      slug: "ppc-services",
      icon: "/collab-bro.png",
    },
    {
      title: "AFFILIATE SERVICES",
      description: "Expand your reach and increase sales through strategic affiliate partnerships.",
      slug: "affiliate-services",
      icon: "/social.png",
    },
    {
      title: "CONTENT SERVICES",
      description: "Engage your audience with compelling, SEO-optimized content that converts.",
      slug: "content-services",
      icon: "/content.png",
    },
    {
      title: "SOCIAL MEDIA SERVICES",
      description: "Build your brand presence and engage with your audience across social platforms.",
      slug: "social-media-services",
      icon: "/affiliate.png",
    },
    {
      title: "MARKETING",
      description: "Comprehensive marketing strategies tailored to your business goals and target audience.",
      slug: "marketing",
      icon: "/marketing.png",
    },
  ]

  return (
    <>
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg opacity-80">
              We offer a comprehensive range of digital marketing services to help your business grow and succeed
              online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <div className="border p-8 h-full transition-all duration-300 hover:shadow-md">
                  <div className="mb-6 h-16 w-16 flex items-center justify-center border rounded-full">
                    <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:underline">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" className="rounded-none">
                    LEARN MORE
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-12 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Services?</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Data-Driven Approach</h3>
                    <p className="text-muted-foreground">We base our strategies on solid data and analytics.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      Custom strategies designed for your specific business needs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Transparent Reporting</h3>
                    <p className="text-muted-foreground">Clear, regular reports on your campaign performance.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">Experienced professionals dedicated to your success.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/our-service.png"
                alt="Our services"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can help your business grow.
          </p>
          <Button asChild className="rounded-none bg-black text-white">
            <Link href="/contact">CONTACT US</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
