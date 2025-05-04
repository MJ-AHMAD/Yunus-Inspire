import type React from "react"
import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/footer"

// Mock next/link
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe("Footer Component", () => {
  it("renders the footer with all sections", () => {
    render(<Footer />)

    // Check if logo is rendered
    expect(screen.getByText("Yunus Inspire")).toBeInTheDocument()

    // Check if quick links section is rendered
    expect(screen.getByText("Quick Links")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About Us")).toBeInTheDocument()
    expect(screen.getByText("Courses")).toBeInTheDocument()
    expect(screen.getByText("Resources")).toBeInTheDocument()

    // Check if community section is rendered
    expect(screen.getByText("Community")).toBeInTheDocument()
    expect(screen.getByText("Discussion Board")).toBeInTheDocument()
    expect(screen.getByText("Events")).toBeInTheDocument()
    expect(screen.getByText("Success Stories")).toBeInTheDocument()

    // Check if connect section is rendered
    expect(screen.getByText("Connect With Us")).toBeInTheDocument()
    expect(screen.getByText("Email: support@yunusinspire.org")).toBeInTheDocument()

    // Check if copyright is rendered
    expect(screen.getByText("© 2025 Yunus Inspire. All Rights Reserved.")).toBeInTheDocument()
  })

  it("renders social media links", () => {
    render(<Footer />)

    // Check if social media links are rendered with correct attributes
    const linkedinLink = screen.getByLabelText("LinkedIn")
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com")
    expect(linkedinLink).toHaveAttribute("target", "_blank")
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer")

    const facebookLink = screen.getByLabelText("Facebook")
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com")

    const youtubeLink = screen.getByLabelText("YouTube")
    expect(youtubeLink).toHaveAttribute("href", "https://youtube.com")
  })
})
