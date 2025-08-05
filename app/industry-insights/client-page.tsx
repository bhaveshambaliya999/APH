"use client"

import Link from "next/link"
import Image from "next/image"

export default function IndustryClientPage() {
  const blogs = [
    {
      id: 1,
      title: "The Indian Perfume Market A Blend of Heritage and Modernity",
      image: "/images/blog-1.jpg",
      description:
        "The Indian perfume market is a fascinating mix of tradition and modernity, deeply rooted in the country’s cultural heritage. With a history that dates back thousands of years, perfumery in India has evolved into a thriving industry that reflects both its rich past and innovative future.",
    },
    {
      id: 2,
      title: "Exploring Different Types of Perfumes and Their Applications",
      image: "/images/blog-2.jpg",
      description:
        "Perfumes are more than just fragrances; they are a reflection of personal style, mood, and occasion. With a variety of types available, each perfume has unique characteristics and applications suited to different needs and preferences. Understanding these categories can help you make the right choice for every moment",
    },
    {
      id: 3,
      title: "Natural and Synthetic Ingredients in Perfume",
      image: "/images/blog-3.jpg",
      description:
        "The art of perfumery revolves around blending various ingredients to create captivating scents. These ingredients, derived from both natural and synthetic sources, form the backbone of the fragrance industry, each bringing unique qualities to the final product.",
    },
  ]

  return (
    <div className="industry-laboratory">
      <section className="industry py-space">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="industry-card">
                  <div className="industry-img">
                    <Image src={blog.image || "/placeholder.svg"} alt={blog.title} width={400} height={220} />
                  </div>
                  <div className="industry-body">
                    <div className="fra-title">{blog.title}</div>
                    <div className="fra-text">{blog.description}</div>
                    <Link
                      href={`/industry-insights/${blog.title.replace(/\s+/g, "-").toLowerCase()}`}
                      className="btn btn-primary"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
