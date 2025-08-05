"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner" // Using sonner for toasts

// This would be your server action or API call
async function sendContactMail(formData: FormData) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." }
  }

  // Replace with your actual API endpoint or Server Action call
  // const response = await fetch('/api/send-mail', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ a: 'SendMailArtisanalParfumHouse', SITDeveloper: '1', name, email, message }),
  // });
  // const data = await response.json();
  // return data;

  return { success: true, message: "Message sent Successfully." }
}

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget
    const data = new FormData(form)

    const result = await sendContactMail(data)

    if (result.success) {
      toast.success(result.message)
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } else {
      toast.error(result.message)
    }
    setIsSubmitting(false)
  }

  return (
    <div className="contact-form">
      <h2>Send us a message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleOnChange}
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            name="message"
            onChange={handleOnChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          value={isSubmitting ? "Sending..." : "Submit Message"}
          className="btn btn-primary"
          disabled={isSubmitting}
        />
      </form>
    </div>
  )
}
