import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in digital marketing, Sarah founded CodeVibeCo with a vision to help businesses achieve sustainable growth through innovative digital strategies.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Michael leads our technical team, bringing 12 years of experience in web development and a passion for creating seamless digital experiences.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emma Rodriguez",
      position: "Creative Director",
      bio: "Emma's creative vision has shaped countless successful campaigns. She specializes in brand identity and visual storytelling.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      position: "Head of SEO",
      bio: "David is an SEO expert with a proven track record of helping businesses achieve top rankings and increase organic traffic.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

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
                src="/placeholder.svg?height=600&width=800"
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

      {/* Our Team Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Our talented team of digital experts is passionate about helping businesses succeed online. With diverse
            skills and extensive experience, we work together to deliver exceptional results for our clients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.position}</p>
                  <p>{member.bio}</p>
                </div>
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
                src="/placeholder.svg?height=600&width=800"
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

      {/* Clients & Partners Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Clients & Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white border">
                <Image
                  src={`/placeholder.svg?height=80&width=120&text=Client+${index + 1}`}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
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
