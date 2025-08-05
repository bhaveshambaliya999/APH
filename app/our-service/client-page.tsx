"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OurServicesClient() {
  const router = useRouter()

  const handleLearnMore = (id: string) => {
    router.push(`/our-service/${id}`)
  }

  return (
    <div className="our-services">
      <div className="container py-padding">
        <section className="service-tab">
          <Tabs defaultValue="fragrance" className="w-full">
            <TabsList className="nav-tabs">
              <TabsTrigger value="fragrance" className="nav-item nav-link">
                Fragrance
              </TabsTrigger>
              <TabsTrigger value="packaging" className="nav-item nav-link">
                Packaging
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="nav-item nav-link">
                End to end manufacturing
              </TabsTrigger>
              <TabsTrigger value="marketing" className="nav-item nav-link">
                Marketing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fragrance" className="tab-content">
              <div className="service-section">
                <div className="fragrance-info">
                  <div className="fragrance-item">
                    <div className={`fragrance-inner`}>
                      <div className="box-img">
                        <div className="fragrance-img">
                          <Image
                            src="/images/Raw-Materials.jpg"
                            alt="Custom Scent Creations"
                            width={600}
                            height={400}
                          />
                        </div>
                        <div className="box-text">
                          <h3>Custom scent creations</h3>
                          <button className="btn btn-primary" onClick={() => handleLearnMore("custom-scent")}>
                            {" "}
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fragrance-item">
                    <div className={`fragrance-inner`}>
                      <div className="box-img">
                        <div className="fragrance-img">
                          <Image
                            src="/images/fragrance.jpg"
                            alt="Exclusive In-House Library"
                            width={600}
                            height={400}
                          />
                        </div>
                        <div className="box-text">
                          <h3>Exclusive in-house library</h3>
                          <button className="btn btn-primary" onClick={() => handleLearnMore("in-house-library")}>
                            {" "}
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="packaging" className="tab-content">
              <div className="service-section">
                <div className="fragrance-info">
                  <div className="fragrance-item">
                    <div className={`fragrance-inner`}>
                      <div className="box-img">
                        <div className="fragrance-img">
                          <Image
                            src="/images/Bottles-caps-perfume.webp"
                            alt="bottles, caps and components"
                            width={600}
                            height={400}
                          />
                        </div>
                        <div className="box-text">
                          <h3>Bottles, caps and components</h3>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleLearnMore("bottles-caps-components")}
                          >
                            {" "}
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fragrance-item">
                    <div className={`fragrance-inner`}>
                      <div className="box-img">
                        <div className="fragrance-img">
                          <Image
                            src="/images/Boxing-Perfume.webp"
                            alt="Boxing and packaging"
                            width={600}
                            height={400}
                          />
                        </div>
                        <div className="box-text">
                          <h3>Boxing and packaging</h3>
                          <button className="btn btn-primary" onClick={() => handleLearnMore("boxing-and-packaging")}>
                            {" "}
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="tab-content">
              <div className="row align-items-center">
                <div className="col-md-6 ">
                  <h2 className="tab-content-title">End to end manufacturing</h2>
                  <p>
                    Establish your presence in the fragrance industry with our state-of-the-art, end-to-end
                    manufacturing facilities at Artisanal Parfum House. From 6ml attar bottles and 100ml eau de parfums
                    to body mists and hair perfumes, we provide comprehensive solutions to meet your brand’s unique
                    requirements.
                  </p>
                  <p>
                    With advanced infrastructure and expertise, we specialize in crafting niche and designer perfume
                    brands, ensuring exceptional quality and precision at every step. Our facilities are designed to
                    support diverse product lines, empowering you to create a standout brand in the competitive market.
                    Trust us to bring your fragrance vision to life with unparalleled professionalism and excellence.
                  </p>
                </div>
                <div className="col-md-6 ">
                  <video autoPlay muted controls loop width="600">
                    <source src="/videos/manufacturing.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="service-step pt-3">
                  <div className="heading">
                    <h2 className="section-title">Get there in 5 steps</h2>
                  </div>
                  <div className="step-row">
                    <div className="step-box">
                      <div className="step-icon">
                        <div className="number">1</div>
                        <div className="step">Step</div>
                      </div>
                      <div className="step-title">Create your brand story / theme </div>
                    </div>
                    <div className="step-box">
                      <div className="step-icon">
                        <div className="number">2</div>
                        <div className="step">Step</div>
                      </div>
                      <div className="step-title">Choose your fragrances from our diverse library</div>
                    </div>
                    <div className="step-box">
                      <div className="step-icon">
                        <div className="number">3</div>
                        <div className="step">Step</div>
                      </div>
                      <div className="step-title">Develop your bottling and packaging </div>
                    </div>
                    <div className="step-box">
                      <div className="step-icon">
                        <div className="number">4</div>
                        <div className="step">Step</div>
                      </div>
                      <div className="step-title">Let us manufacture the final product</div>
                    </div>
                    <div className="step-box">
                      <div className="step-icon">
                        <div className="number">5</div>
                        <div className="step">Step</div>
                      </div>
                      <div className="step-title">Market with our inhouse team</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="tab-content">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="tab-content-title">Marketing</h2>
                  <div className="services-item">
                    <h3>Digital content</h3>
                    <ul>
                      <li>Stock photography</li>
                    </ul>
                    <h3>eCommerce</h3>
                    <ul>
                      <li>Website</li>
                      <li>Social media management</li>
                    </ul>
                    <h3>Promotional material</h3>
                    <ul>
                      <li>Sample vials (with postcard inserts)</li>
                      <li>Scent cards</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <Image src="/images/Scent-cards.png" alt="Marketing" width={600} height={400} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}
