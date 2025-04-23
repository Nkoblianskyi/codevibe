import Link from "next/link"

import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">CodeVibeCo</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              A full-service digital agency specializing in helping businesses grow online.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo-services" className="text-muted-foreground hover:text-foreground">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/ppc-services" className="text-muted-foreground hover:text-foreground">
                  PPC Services
                </Link>
              </li>
              <li>
                <Link href="/services/affiliate-services" className="text-muted-foreground hover:text-foreground">
                  Affiliate Services
                </Link>
              </li>
              <li>
                <Link href="/services/content-services" className="text-muted-foreground hover:text-foreground">
                  Content Services
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-services" className="text-muted-foreground hover:text-foreground">
                  Social Media Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Václavské náměstí 12, 110 00 Prague, Czech Republic</li>
              <li className="text-muted-foreground">info@codevibeco.com</li>
              <li className="text-muted-foreground">+420 123 456 789</li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="pt-8 flex flex-col md:flex-row justify-between text-muted-foreground text-sm">
          <p>© {currentYear} CodeVibeCo. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
