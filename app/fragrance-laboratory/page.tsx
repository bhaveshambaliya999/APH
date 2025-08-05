import type { Metadata } from "next"
import { generateMetadata as getMetadata } from "@/lib/metadata"
import FragranceLaboratoryClient from "./client-page"

export const metadata: Metadata = getMetadata("/fragrance-laboratory")

export default function FragranceLaboratory() {
  return (
    <>
      <div className="page-header">
        <h1>Fragrance laboratory</h1>
        <p>
          Our state-of-the-art fragrance laboratory is where the magic happens. Equipped with cutting-edge technology
          and a vast array of the world’s best raw materials, our skilled perfumers transform creative concepts into
          captivating scents.
        </p>
      </div>
      <FragranceLaboratoryClient />
    </>
  )
}
