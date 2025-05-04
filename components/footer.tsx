import Link from "next/link"
import { Facebook, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Yunus Inspire</h3>
            <p className="text-sm">Empowering the minds of Bangladesh, one dream at a time.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm hover:underline">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-sm hover:underline">
                  Discussion Board
                </Link>
              </li>
              <li>
                <Link href="/community#events" className="text-sm hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/community#success-stories" className="text-sm hover:underline">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-secondary" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-secondary" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6 hover:text-secondary" />
              </Link>
            </div>
            <p className="text-sm">Email: support@yunusinspire.org</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm">© 2025 Yunus Inspire. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
