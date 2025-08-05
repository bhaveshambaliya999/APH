import type { Metadata } from "next"
import { generateMetadata as getMetadata } from "@/lib/metadata"
import OurServicesClient from "./client-page"

export const metadata: Metadata = getMetadata("/our-service")

export default function OurServices() {
  return (
    <>
      <div className="page-header">
        <h1>Our services</h1>
        <p>
          At Artisanal Parfum House, we offer a wide range of services to meet your fragrance needs, from sourcing
          premium raw materials to creating bespoke marketing solutions.
        </p>
      </div>
      <OurServicesClient />
    </>
  )
}
