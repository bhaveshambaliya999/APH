import type { Metadata } from "next"

const darkLogo = "/images/logo_b.png"
const baseUrl = "https://artisanalparfumhouse.com"

export const metaConfig = {
  "/": {
    title: "Discover Unique Fragrance Stories | Artisanal Parfum House",
    description:
      "Explore artisanal parfumes made with care, elegance, and love. A scent journey that speaks to your soul, crafted for true fragrance lovers.",
    keywords:
      "luxury perfume, handcrafted perfumes, artisanal perfume, luxury fragrance, niche perfumery, bespoke packaging, french fragrance oils, artisanal parfum house, custom scent laboratory, luxury perfume for men, personalised perfume, aph, perfume manufacturing, perfume packaging",
    image: darkLogo,
  },
  "/about-us": {
    title: "About Us | Artisanal Parfum House",
    description:
      "Step into the story behind our perfumes—where passion, artistry, and nature unite to create scents that truly inspire and endure.",
    keywords:
      "artisanal perfume house, handcrafted luxury scents, sustainable perfumery, premium fragrance oils, bespoke perfumes, fragrance craftsmanship, legacy perfumery, about artisanal parfum house, aph",
    image: darkLogo,
  },
  "/our-service": {
    title: "Our Services | Artisanal Parfum House",
    description:
      "Discover our bespoke perfume services, crafted to match your taste and style—experience the luxury of truly personalized fragrance.",
    keywords:
      "fragrance development, perfume packaging, perfume manufacturing, scent branding, custom perfume services, end-to-end perfume solutions, luxury fragrance marketing, perfume bottle packaging, fragrance branding, artisanal parfum house services, fragrance industry",
    image: darkLogo,
  },
  "/fragrance-laboratory": {
    title: "Fragrance Laboratory | Artisanal Parfum House",
    description:
      "Step inside our fragrance lab to see how unique perfumes are born—from pure ingredients to artistic blending, it's where magic meets mastery.",
    keywords:
      "perfume lab, parfum lab, fragrance laboratory, perfume research and development, quality control in perfumery, custom fragrance lab, premium perfume formulation, perfumer services, artisanal parfum house lab",
    image: darkLogo,
  },
  "/industry-insights": {
    title: "Industry Insights | Artisanal Parfum House",
    description:
      "Stay updated with the latest perfume trends, expert insights, and innovations shaping the world of fine fragrances and artisanal perfumery.",
    keywords:
      "fragrance industry insights, perfume market trends, niche fragrance growth, sustainable perfumery trends, fragrance innovations, market analysis perfumes, fragrance industry blogs, artisanal parfum house",
    image: darkLogo,
  },
  "/contact-us": {
    title: "Contact Us | Artisanal Parfum House",
    description:
      "Have questions or need help finding your perfect scent? Reach out to our team—we're here to guide you on your fragrance journey.",
    keywords:
      "contact artisanal parfum house, bespoke fragrance inquiries, perfume packaging questions, manufacturing partnerships, fragrance lab contact, contact artisanal parfum lab, contact aph, artisanal parfum house",
    image: darkLogo,
  },
  "/privacy-notice": {
    title: "Privacy Notice | Artisanal Parfum House",
    description:
      "Learn how we protect your personal data and respect your privacy every step of the way—transparency and trust are our top priorities.",
    keywords:
      "privacy notice, data collection practices, user data usage, privacy rights, personal data protection, transparent privacy policy, data compliance, artisanal parfum house",
    image: darkLogo,
  },
  "/terms-conditions": {
    title: "Terms and Conditions | Artisanal Parfum House",
    description:
      "Read our terms and conditions to understand your rights, responsibilities, and how we ensure a safe, smooth experience on our perfume platform.",
    keywords:
      "terms and conditions, shipping policy, returns and refunds, user responsibilities, privacy policy, warranty disclaimer, service terms, artisanal parfum house",
    image: darkLogo,
  },
} as const

export function generateMetadata(pathname: string): Metadata {
  const config = metaConfig[pathname as keyof typeof metaConfig]

  if (!config) {
    // Generate dynamic metadata for unknown routes
    const segments = pathname.split("/").filter((segment) => segment)
    const skipSegments = ["products", "JEWEL", "type"]
    const relevantSegments = segments.filter((segment) => !skipSegments.includes(segment))

    const formatSegment = (segment: string) => {
      const cleanedSegment = segment.replace(/-pv\w+$/, "")
      return cleanedSegment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }

    const formattedSegments = relevantSegments.map((segment) => formatSegment(segment))
    const dynamicTitle = `${formattedSegments.join(" - ")} | Artisanal Parfum House`

    return {
      title: dynamicTitle,
      description:
        "Explore artisanal parfumes made with care, elegance, and love. A scent journey that speaks to your soul, crafted for true fragrance lovers.",
      keywords:
        "luxury perfume, handcrafted perfumes, artisanal perfume, luxury fragrance, niche perfumery, bespoke packaging, french fragrance oils, artisanal parfum house, custom scent laboratory, luxury perfume for men, personalised perfume, aph, perfume manufacturing, perfume packaging",
      openGraph: {
        title: dynamicTitle,
        description:
          "Explore artisanal parfumes made with care, elegance, and love. A scent journey that speaks to your soul, crafted for true fragrance lovers.",
        images: [darkLogo],
        url: `${baseUrl}${pathname}`,
      },
      twitter: {
        card: "summary_large_image",
        title: dynamicTitle,
        description:
          "Explore artisanal parfumes made with care, elegance, and love. A scent journey that speaks to your soul, crafted for true fragrance lovers.",
        images: [darkLogo],
      },
    }
  }

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      images: [config.image],
      url: `${baseUrl}${pathname}`,
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [config.image],
    },
  }
}

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Artisanal Parfum House",
  url: baseUrl,
  logo: `${baseUrl}${darkLogo}`,
  description:
    "Crafting exquisite fragrances to elevate your senses. Experience the essence of elegance and sophistication with every drop.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pitruchhaya, Sanghavi Corporate Park, Govandi Station Rd, near Satyam Corporate Park, Deonar",
    addressLocality: "Govandi East",
    addressRegion: "Mumbai",
    postalCode: "400088",
    addressCountry: "India",
  },
  telephone: "+91 7977177351",
  openingHours: ["Mo-Fr 09:00-18:00"],
}
