import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from client communication to campaign execution.",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to deliver cutting-edge solutions for our clients.",
    },
    {
      title: "Transparency",
      description: "We believe in open, honest communication with our clients about strategies and results.",
    },
    {
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact our clients' bottom line.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg opacity-80">
              We're a team of digital experts passionate about helping businesses grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Founded in 2008, CodeVibeCo began as a small web design agency with a big vision: to help businesses
                harness the power of digital to achieve extraordinary growth.
              </p>
              <p className="text-lg mb-4">
                Over the years, we've evolved into a full-service digital agency, expanding our services to include SEO,
                PPC, content marketing, social media management, and more. Throughout our journey, our mission has
                remained the same: to deliver exceptional results that drive our clients' success.
              </p>
              <p className="text-lg">
                Today, we're proud to work with businesses of all sizes across various industries, helping them navigate
                the ever-changing digital landscape and achieve their goals.
              </p>
            </div>
            <div>
              <Image
                src="/team.png"
                alt="CodeVibeCo office"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border bg-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To empower businesses with innovative digital strategies that drive growth, build brand authority, and
                create meaningful connections with their audience.
              </p>
            </div>
            <div className="p-8 border bg-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the leading digital agency known for delivering exceptional results, fostering innovation, and
                setting new standards in the digital marketing industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 border text-center">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/team-2.png"
                alt="Team collaboration"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose CodeVibeCo?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Proven Results</h3>
                    <p>
                      We've helped hundreds of businesses achieve significant growth through our data-driven digital
                      strategies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Tailored Approach</h3>
                    <p>
                      We develop custom strategies based on your unique business goals, target audience, and industry
                      landscape.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Transparent Communication</h3>
                    <p>
                      We believe in open, honest communication and provide regular updates and detailed reporting on
                      your campaigns.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Continuous Innovation</h3>
                    <p>
                      We stay ahead of industry trends and continuously refine our strategies to ensure optimal
                      performance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve its digital marketing goals and drive sustainable
            growth.
          </p>
          <Button asChild className="rounded-none bg-black text-white">
            <Link href="/contact">
              CONTACT US
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
