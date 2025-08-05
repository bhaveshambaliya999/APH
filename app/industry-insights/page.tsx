import type { Metadata } from "next"
import { generateMetadata as getMetadata } from "@/lib/metadata"
import IndustryClientPage from "./client-page"

export const metadata: Metadata = getMetadata("/industry-insights")

export default function IndustryInsights() {
  return (
    <>
      <div className="page-header">
        <h1>Industry Insights</h1>
        <p>
          Stay ahead of the curve with our expert-driven insights into the latest trends, innovations, and best
          practices across various industries. Gain valuable knowledge to navigate challenges and unlock new
          opportunities for your business growth.
        </p>
      </div>
      <IndustryClientPage />
    </>
  )
}
