"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for services
const serviceData: Record<string, { title: string; description: string; additional?: string; additional1?: string }> = {
  "custom-scent": {
    title: "Custom scent creations",
    description: `
      Artisanal Parfum House stands as one of India's most modern and well-equipped fragrance houses, offering a bespoke experience for clients to create their unique signature scents tailored for retail and e-commerce markets. Our global network of highly skilled perfumers ensures exceptional craftsmanship at every stage of the process. From sourcing the finest raw materials to crafting compelling narratives around each fragrance, we manage it all with precision and artistry.`,
    additional: `
      With an extensive collection of both natural and synthetic ingredients, we possess the versatility to create fragrances that transcend boundaries, catering to diverse olfactory preferences and market demands. Every creation reflects our commitment to innovation, quality, and sophistication, making us a trusted partner for transforming ideas into captivating fragrances. At Artisanal Parfum House, we don't just create scents—we craft timeless experiences that resonate and inspire.`,
  },
  "in-house-library": {
    title: "Exclusive in-house library",
    description: `
      At Artisanal Parfum House, we have meticulously studied the Indian and GCC fragrance markets to better understand the needs of our small-pack buyers. In response, we offer an extensive collection of fine fragrances, developed through years of expertise and innovation, designed specifically to cater to their unique requirements.`,
    additional: `
      Our comprehensive online portal and dedicated support system ensure a seamless onboarding process, enabling small-pack buyers to explore and select from a diverse range of inspirational creations. These expertly crafted fragrances are ideal for retail stores and small businesses looking to provide high-quality, captivating scents to their customers.`,
    additional1: `
      With a commitment to excellence and adaptability, Artisanal Parfum House strives to empower small businesses with access to world-class fragrances. By combining our modern infrastructure with a deep understanding of market trends, we continue to serve as a trusted partner for growing businesses in the fragrance industry.`,
  },
  "bottles-caps-components": {
    title: "Bottles, caps and components",
    description: `
      At Artisanal Parfum House, we stock premium-quality glass bottles, caps, and atomizers sourced from India and China, featuring the latest trending designs. Unlike conventional traders and wholesalers, we offer a low MOQ of just 500 units, enabling individuals, enterprises, and businesses to create unique, custom-designed bottles for their perfume brands.`,
    additional: `
      Our inventory includes some of the finest glass bottles and high-quality caps and atomizers available, catering to various dosages and mechanisms. With a focus on excellence and versatility, we provide tailored solutions for all types of brands, ensuring every client achieves their vision with precision and style.`,
  },
  "boxing-and-packaging": {
    title: "Boxing and packaging",
    description: `
      At Artisanal Parfum House, we offer comprehensive in-house boxing and packaging solutions for all types of perfume brands. From 6ml roll-on bottles to 100ml eau de parfums, we provide a wide range of boxes in various shapes and sizes to meet diverse client needs.`,
    additional: `
      Our dedicated team is committed to innovation, constantly introducing modern and creative packaging options to elevate brand presentation. Additionally, our in-house design team collaborates closely with clients to develop exceptional designs and branding concepts tailored to their vision. We ensure every brand receives the finest packaging solutions to stand out in the competitive market.`,
  },
}

// Mock phone code data
const phoneCodeData = [
  { value: "", label: "Phone Code" },
  { value: "91", label: "91 - India" },
  { value: "852", label: "852 - Hong Kong" },
  { value: "971", label: "971 - UAE" },
  { value: "973", label: "973 - Bahrain" },
  { value: "33", label: "33 - France" },
  { value: "41", label: "41 - Switzerland" },
  { value: "90", label: "90 - Turkey" },
  { value: "60", label: "60 - Malaysia" },
]

type ServiceDetailsPageProps = {
  params: {
    slug: string
  }
}

export default function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { slug } = params
  const router = useRouter()

  const [interest, setInterest] = useState("")
  const [desc, setDesc] = useState("")
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    company_name: "",
    WorkEmail: "",
    mobile_code: "",
    website: "",
    inquiry_requirements: "",
  })
  const [selectedPhoneCode, setSelectedPhoneCode] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    if (name === "mobile_code") {
      const numericValue = value.replace(/\D/g, "")
      setFormData({ ...formData, [name]: numericValue })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const updatedFormData = {
      ...formData,
      remark: slug === "in-house-library" ? interest : desc,
      mobile_country_code: selectedPhoneCode,
      subject: service?.title || "Service Inquiry",
    }

    // Basic validation
    if (
      !updatedFormData.FirstName ||
      !updatedFormData.LastName ||
      !updatedFormData.WorkEmail ||
      !updatedFormData.company_name ||
      !updatedFormData.mobile_code ||
      !updatedFormData.remark ||
      !updatedFormData.mobile_country_code ||
      (slug === "in-house-library" || slug === "custom-scent"
        ? !updatedFormData.website
        : !updatedFormData.inquiry_requirements)
    ) {
      toast.error("All fields are required.")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would send updatedFormData to your backend
    console.log("Form submitted:", updatedFormData)

    const success = true // Simulate success for now

    if (success) {
      toast.success("Message sent Successfully.")
      setFormData({
        FirstName: "",
        LastName: "",
        company_name: "",
        WorkEmail: "",
        mobile_code: "",
        website: "",
        inquiry_requirements: "",
      })
      setInterest("")
      setDesc("")
      setSelectedPhoneCode("")
    } else {
      toast.error("Failed to send message. Please try again.")
    }
    setIsSubmitting(false)
  }

  const service = serviceData[slug]

  if (!service) {
    return <p>Service not found.</p>
  }

  return (
    <div className="fragrance-details">
      <div className="container py-space">
        <div className="row">
          <div className="col-12 mb-3">
            <Link className="BackToService" href="/our-service">
              Back to service
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="fragrance-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              {service.additional && <p>{service.additional}</p>}
              {service.additional1 && <p>{service.additional1}</p>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="fragrance-right">
              <div className="fragrance-title">
                <h3>We'll reach out to you with more details shortly!</h3>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-column">
                    <Label htmlFor="firstName" className="form-label">
                      First name
                    </Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="FirstName"
                      value={formData.FirstName}
                      onChange={handleOnChange}
                      placeholder="First name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-column">
                    <Label htmlFor="lastName" className="form-label">
                      Last name
                    </Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="LastName"
                      value={formData.LastName}
                      onChange={handleOnChange}
                      placeholder="Last name"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-column">
                    <Label htmlFor="company" className="form-label">
                      Company name
                    </Label>
                    <Input
                      type="text"
                      id="company"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleOnChange}
                      placeholder="Company name"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-column">
                    <Label htmlFor="email" className="form-label">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="WorkEmail"
                      value={formData.WorkEmail}
                      onChange={handleOnChange}
                      placeholder="Your email"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-column PhoneCode">
                    <Label htmlFor="phoneCode" className="form-label">
                      Phone code
                    </Label>
                    <Select value={selectedPhoneCode} onValueChange={setSelectedPhoneCode}>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Phone code" />
                      </SelectTrigger>
                      <SelectContent>
                        {phoneCodeData.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="form-column">
                    <Label htmlFor="contact" className="form-label">
                      Mobile
                    </Label>
                    <Input
                      type="tel"
                      id="contact"
                      name="mobile_code"
                      value={formData.mobile_code}
                      minLength={10}
                      maxLength={16}
                      onChange={handleOnChange}
                      placeholder="Your phone number"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-column">
                    <Label
                      htmlFor={
                        slug === "in-house-library" || slug === "custom-scent" ? "website" : "inquiry_requirements"
                      }
                      className="form-label"
                    >
                      {slug === "in-house-library" || slug === "custom-scent" ? "Website" : "Requirements"}
                    </Label>
                    <Input
                      type="text"
                      id={slug === "in-house-library" || slug === "custom-scent" ? "website" : "inquiry_requirements"}
                      name={slug === "in-house-library" || slug === "custom-scent" ? "website" : "inquiry_requirements"}
                      value={
                        slug === "in-house-library" || slug === "custom-scent"
                          ? formData.website
                          : formData.inquiry_requirements
                      }
                      onChange={handleOnChange}
                      placeholder={
                        slug === "in-house-library" || slug === "custom-scent" ? "Enter website" : "Enter requirements"
                      }
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                {slug === "in-house-library" && (
                  <div className="form-row">
                    <div className="form-column">
                      <Label htmlFor="Interested" className="form-label">
                        Interested in
                      </Label>
                      <Select value={interest} onValueChange={setInterest}>
                        <SelectTrigger className="form-input">
                          <SelectValue placeholder="--Select Interest--" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fragrances/bottles & caps">Fragrances/bottles & caps</SelectItem>
                          <SelectItem value="Branding and boxing">Branding and boxing</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                {slug !== "in-house-library" && (
                  <div className="form-row">
                    <div className="form-column">
                      <Label htmlFor="issue" className="form-label">
                        Description
                      </Label>
                      <Textarea
                        id="issue"
                        name="description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter description"
                        rows={3}
                        className="form-textarea"
                        required
                      ></Textarea>
                    </div>
                  </div>
                )}
                <Button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
