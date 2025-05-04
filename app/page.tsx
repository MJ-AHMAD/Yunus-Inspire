import { Hero } from "@/components/hero"
import { FeatureCard } from "@/components/feature-card"
import { Book, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Yunus Inspire?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Free Quality Education"
              description="Access comprehensive courses in programming, technology, and innovation at no cost."
              icon={Book}
            />
            <FeatureCard
              title="Interactive Learning Tools"
              description="Practice with our code editors, quizzes, and hands-on projects to reinforce your learning."
              icon={Lightbulb}
            />
            <FeatureCard
              title="Community Support"
              description="Join a network of students and mentors to collaborate, learn, and grow together."
              icon={Users}
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                To inspire and enable Bangladeshi students through free, accessible resources in technology, ensuring
                every learner can unlock their potential and contribute meaningfully to a prosperous and equitable
                society.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Students learning together"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Choose from our range of courses to kickstart your learning journey!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["HTML Basics", "Python for Beginners", "GitHub Essentials", "Data Science Intro"].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{course}</h3>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/courses">View Course</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning with Yunus Inspire.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-secondary hover:text-primary">
            <Link href="/courses">Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
