import type React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Header } from "@/components/header"

// Mock next/link
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe("Header Component", () => {
  it("renders the logo and navigation items", () => {
    render(<Header />)

    // Check if logo is rendered
    expect(screen.getByText("Yunus Inspire")).toBeInTheDocument()

    // Check if navigation items are rendered
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About Us")).toBeInTheDocument()
    expect(screen.getByText("Courses")).toBeInTheDocument()
    expect(screen.getByText("Resources")).toBeInTheDocument()
    expect(screen.getByText("Community")).toBeInTheDocument()
    expect(screen.getByText("Contact Us")).toBeInTheDocument()

    // Check if CTA button is rendered
    expect(screen.getByText("Get Started")).toBeInTheDocument()
  })

  it("toggles mobile menu when menu button is clicked", () => {
    render(<Header />)

    // Mobile menu should not be visible initially
    expect(screen.queryByText("Home")).toBeInTheDocument()

    // Get the menu button (it has an aria-label)
    const menuButton = screen.getByLabelText("Open Menu")

    // Click the menu button
    fireEvent.click(menuButton)

    // Mobile menu should now be visible
    expect(screen.getAllByText("Home").length).toBe(2) // One in desktop nav, one in mobile nav

    // Close button should now be visible
    const closeButton = screen.getByLabelText("Close Menu")

    // Click the close button
    fireEvent.click(closeButton)

    // Mobile menu should be hidden again
    expect(screen.getAllByText("Home").length).toBe(1) // Only in desktop nav
  })
})
