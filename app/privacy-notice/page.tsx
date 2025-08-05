import type { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as getMetadata } from "@/lib/metadata"

export const metadata: Metadata = getMetadata("/privacy-notice")

export default function PrivacyNotice() {
  return (
    <>
      <div className="page-header">
        <h1>Privacy Notice for Artisanal Parfum House</h1>
        <p>
          Thank you for choosing to be part of our community at Artisanal Parfum House ("we", "us", "our"). We are
          committed to protecting your personal information and your right to privacy. If you have any questions or
          concerns about this privacy notice, or our practices with regard to your personal information, please contact
          us at{" "}
          <a className="privacy-link" href="mailto:hello@artisanalparfumhouse.com">
            <span>hello@artisanalparfumhouse.com</span>
          </a>
          .
        </p>
      </div>

      <section className="container py-padding">
        <p>
          When you visit our website{" "}
          <Link className="privacy-link" href="https://www.artisanalparfumhouse.com" target="_blank">
            <span>artisanalparfumhouse.com</span>
          </Link>{" "}
          (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we
          appreciate that you are trusting us with your personal information. We take your privacy very seriously. In
          this privacy notice, we seek to explain to you as clearly as possible what information we collect, how we use
          it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it
          is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use
          of our Services immediately.
        </p>

        <p>
          This privacy notice applies to all information collected through our Services (which, as described above,
          includes our Website), as well as any related services, sales, marketing, or events.
        </p>
        <h4>
          We process your information for purposes based on legitimate business interests, the fulfillment of our
          contract with you, compliance with our legal obligations, and/or your consent.
        </h4>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below. We
          process your personal information for these purposes in reliance on our legitimate business interests, in
          order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
          obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
        </p>

        <p>We use the information we collect or receive:</p>
        <ul>
          <li>
            <b>Fulfill and manage your orders</b>: We may use your information to fulfill and manage your orders and
            payments.
          </li>
          <li>
            <b>Administer prize draws and competitions</b>: We may use your information to administer prize draws and
            competitions when you elect to participate in our competitions.
          </li>
          <li>
            <b>Deliver and facilitate delivery of services to the user</b>: We may use your information to provide you
            with the requested service.
          </li>
          <li>
            <b>To respond to user inquiries/offer support to users</b>: We may use your information to respond to your
            inquiries and solve any potential issues you might have with the use of our Services.
          </li>

          <li>
            <b>To send you marketing and promotional communications</b>: partners may use the personal information you
            send to us for our marketing purposes, if this is in accordance with your marketing preferences. For
            example, when expressing an interest in obtaining information about us or our Website, subscribing to
            marketing, or otherwise contacting us, we will collect personal information from you. You can opt-out of our
            marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).
          </li>
        </ul>

        <h4>
          We only share information with your consent, to comply with laws, to provide you with services, to protect
          your rights, or to fulfill business obligations.
        </h4>
        <p>We may process or share your data that we hold based on the following legal basis:</p>
        <ul>
          <li>
            <b>Consent</b>: We may process your data if you have given us specific consent to use your personal
            information for a specific purpose.
          </li>
          <li>
            <b>Legitimate Interests</b>:We may process your data when it is reasonably necessary to achieve our
            legitimate business interests.
          </li>
          <li>
            <b>Performance of a Contract</b>: Where we have entered into a contract with you, we may process your
            personal information to fulfill the terms of our contract.
          </li>
          <li>
            <b>Legal Obligations</b>: We may disclose your information where we are legally required to do so in order
            to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process,
            such as in response to a court order or a subpoena (including in response to public authorities to meet
            national security or law enforcement requirements).
          </li>

          <li>
            <b>Vital Interests</b>: We may disclose your information where we believe it is necessary to investigate,
            prevent, or take action regarding potential violations of our policies, suspected fraud, situations
            involving potential threats to the safety of any person and illegal activities, or as evidence in litigation
            in which we are involved.
          </li>
        </ul>
        <p>
          More specifically, we may need to process your data or share your personal information in the following
          situations:
        </p>
        <ul>
          <li>
            <b>Business Transfers</b>: We may share or transfer your information in connection with, or during
            negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
          <li>
            <b>Affiliates</b>:We may share your information with our affiliates, in which case we will require those
            affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint
            venture partners, or other companies that we control or that are under common control with us.
          </li>
          <li>
            <b>Business Partners</b>: We may share your information with our business partners to offer you certain
            products, services, or promotions.
          </li>
        </ul>
        <h4>We may transfer, store, and process your information in countries other than your own.</h4>
        <p>
          Our servers are located in [Insert Country/Region]. If you are accessing our Website from outside, please be
          aware that your information may be transferred to, stored, and processed by us in our facilities and by those
          third parties with whom we may share your personal information, in [Insert Countries/Regions]. If you are a
          resident in the European Economic Area, then these countries may not necessarily have data protection laws or
          other similar laws as comprehensive as those in your country. We will, however, take all necessary measures to
          protect your personal information in accordance with this privacy notice and applicable law.
        </p>

        <h4>
          We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice
          unless otherwise required by law.
        </h4>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this
          privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or
          other legal requirements). No purpose in this notice will require us to keep your personal information for
          longer than necessary.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your personal information, we will either delete
          or anonymize such information, or, if this is not possible (for example, because your personal information has
          been stored in backup archives), we will securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>

        <h4>We do not knowingly collect data from or market to children under 18 years of age.</h4>
        <p>
          We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you
          represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such
          minor dependent’s use of the Website. If we learn that personal information from users under the age of 18 has
          been collected, we will deactivate the account and take reasonable measures to promptly delete such data from
          our records. If you become aware of any data we may have collected from children under age 18, please contact
          us at{" "}
          <a className="privacy-link" href="mailto:hello@artisanalparfumhouse.com">
            <span>hello@artisanalparfumhouse.com</span>
          </a>
        </p>

        <h4>You may review, change, or terminate your account at any time.</h4>
        <p>
          f you are a resident in the European Economic Area and you believe we are unlawfully processing your personal
          information, you also have the right to complain to your local data protection supervisory authority. You can
          find their contact details here: EC Data Protection Authorities.
        </p>
        <p>
          If you are a resident of Switzerland, the contact details for the data protection authorities are available
          here: Swiss Data Protection Authorities.
        </p>

        <h4>We will update this notice as necessary to stay compliant with relevant laws.</h4>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated by an updated
          "Revised" date, and the updated version will be effective as soon as it is accessible. If we make material
          changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by
          directly sending you a notification. We encourage you to review this privacy notice frequently to be informed
          of how we are protecting your information.
        </p>
        <p>
          If you have questions or comments about this notice, you may email us at{" "}
          <a className="privacy-link" href="mailto:hello@artisanalparfumhouse.com">
            <span>hello@artisanalparfumhouse.com</span>
          </a>{" "}
          or by post to: Artisanal Parfum House [Pitruchhaya, Sanghavi Corporate Park, Govandi Station Rd, near Satyam
          Corporate Park, Deonar, Govandi East, Mumbai, Maharashtra 400088, India]
        </p>

        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal
          information we collect from you, change that information, or delete it in some circumstances. To request to
          review, update, or delete your personal information, please email a request to{" "}
          <a className="privacy-link" href="mailto:hello@artisanalparfumhouse.com">
            <span>hello@artisanalparfumhouse.com</span>
          </a>
          . We will respond to your request within 30 days.
        </p>
      </section>
    </>
  )
}
