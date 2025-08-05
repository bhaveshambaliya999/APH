import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MainWrapper from "@/components/main-wrapper"
import { jsonLdSchema } from "@/lib/metadata"
import "./globals.css"
import "./icons.css"
import "../public/fonts/artisanal-parfum.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Artisanal Parfum House",
  description: "Crafting exquisite fragrances to elevate your senses",
  metadataBase: new URL("https://artisanalparfumhouse.com"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${lato.variable}`}>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  )
}
