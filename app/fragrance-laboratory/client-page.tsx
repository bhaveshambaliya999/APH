"use client"

import Image from "next/image"

export default function FragranceLaboratoryClient() {
  return (
    <div className="fragrance-laboratory">
      <section className="offerings py-space">
        <div className="container">
          <div className="offering-body">
            <div className="offering-left">
              <div className="mb-4 offer-title">
                <h2>What we offer</h2>
              </div>
              <div className="offering-item">
                <div className="offering-row">
                  <div>
                    <div className="title">Research & development</div>
                    <p>
                      {" "}
                      Continuous exploration of new scent profiles and formulations to keep your brand ahead of market
                      trends.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="offering-item">
                <div className="offering-row">
                  <div>
                    <div className="title">Quality control</div>
                    <p>
                      {" "}
                      Rigorous testing and evaluation processes to ensure each fragrance meets our high standards before
                      it reaches the market.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="offering-right">
              <Image src="/images/What-We-Offer.jpg" alt="Fragrance laboratory" width={600} height={400} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
