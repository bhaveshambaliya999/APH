import type { Metadata } from "next"
import { generateMetadata as getMetadata } from "@/lib/metadata"
import AboutUsClientPage from "./about-us-client" // Import the new client component

export const metadata: Metadata = getMetadata("/about-us")

export default function AboutUsPage() {
  return (
    <>
      <div className="page-header">
        <h1>About us</h1>
        <p>Discover who we are, our mission, and what drives us.</p>
      </div>
      <AboutUsClientPage /> {/* Render the new client component */}
    </>
  )
}
