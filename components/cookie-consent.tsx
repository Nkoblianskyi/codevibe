"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem("cookie-consent")

        // If no choice has been made yet, show the banner
        if (!cookieConsent) {
            // Small delay to prevent the banner from flashing on page load
            const timer = setTimeout(() => {
                setShowConsent(true)
            }, 1000)

            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setShowConsent(false)
    }

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined")
        setShowConsent(false)
        router.push("/cookie-policy")
    }

    if (!showConsent) {
        return null
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4 md:p-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <p className="mb-2 font-medium">We use cookies to enhance your experience</p>
                    <p className="text-sm text-muted-foreground">
                        By clicking "Accept", you agree to the storing of cookies on your device to enhance site navigation, analyze
                        site usage, and assist in our marketing efforts. View our{" "}
                        <Link href="/cookie-policy" className="underline font-medium">
                            Cookie Policy
                        </Link>{" "}
                        for more information.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="rounded-none min-w-[100px]" onClick={handleDecline}>
                        Decline
                    </Button>
                    <Button className="rounded-none bg-black text-white min-w-[100px]" onClick={handleAccept}>
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    )
}
