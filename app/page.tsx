import type { Metadata } from "next"
import { generateMetadata as getMetadata } from "@/lib/metadata"
import ClientPage from "./ClientPage"

export const metadata: Metadata = getMetadata("/")

export default function Home() {
  return <ClientPage />
}
