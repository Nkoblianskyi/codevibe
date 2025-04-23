import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="rounded-none bg-black text-white">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    )
}
