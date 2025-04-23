"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg opacity-80">
              Have a question or want to discuss a project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We look forward to
                hearing from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-none bg-black text-white w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-muted-foreground">Václavské náměstí 12, 110 00 Prague, Czech Republic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@codevibeco.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border p-4">
                <div className="aspect-video relative">
                  <Image
                    src="/write.png"
                    alt="Office location map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white border">
              <h3 className="font-bold text-xl mb-2">How quickly can you start on my project?</h3>
              <p className="text-muted-foreground">
                We typically begin new projects within 1-2 weeks of finalizing the agreement, depending on our current
                workload and the scope of your project.
              </p>
            </div>
            <div className="p-6 bg-white border">
              <h3 className="font-bold text-xl mb-2">What information do you need to provide a quote?</h3>
              <p className="text-muted-foreground">
                To provide an accurate quote, we need to understand your business goals, target audience, project scope,
                timeline, and budget expectations.
              </p>
            </div>
            <div className="p-6 bg-white border">
              <h3 className="font-bold text-xl mb-2">Do you offer ongoing support after project completion?</h3>
              <p className="text-muted-foreground">
                Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform
                optimally after launch.
              </p>
            </div>
            <div className="p-6 bg-white border">
              <h3 className="font-bold text-xl mb-2">What industries do you specialize in?</h3>
              <p className="text-muted-foreground">
                We have experience across various industries, including e-commerce, SaaS, healthcare, education,
                finance, and hospitality, among others.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
