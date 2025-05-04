import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      title: "Empowerment",
      description: "We believe in empowering students with knowledge and skills to shape their own future.",
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical conduct.",
    },
    {
      title: "Collaboration",
      description: "We foster a collaborative environment where students learn from each other and grow together.",
    },
    {
      title: "Sustainability",
      description: "We are committed to creating sustainable solutions for long-term educational impact.",
    },
    {
      title: "Innovation",
      description: "We encourage innovative thinking and creative problem-solving approaches.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About Yunus Inspire</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Inspired by the legacy of Nobel Laureate Professor Muhammad Yunus, we are on a mission to transform
            education in Bangladesh.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg">To empower Bangladeshi students with knowledge, technology, and innovation.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-lg">To inspire a generation of leaders and innovators for a brighter Bangladesh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Segment */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden">
                <img src="/placeholder.svg?height=600&width=800" alt="Dr. Muhammad Yunus" className="w-full h-auto" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Inspiration</h2>
                <blockquote className="text-xl italic border-l-4 border-primary pl-4 mb-6">
                  "To me, poor people are like bonsai trees. When you plant the best seed in a tiny flower pot, you get
                  a tiny tree. The seed is not defective, the soil is not defective, it is the flower pot that is too
                  small. Society has put poor people in too small a pot."
                </blockquote>
                <p className="text-right font-semibold">- Dr. Muhammad Yunus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            We are a dedicated team of educators, technologists, and innovators committed to making quality education
            accessible to all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Team Member ${member}`}
                  alt={`Team Member ${member}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
                  <p className="text-gray-500 mb-4">Position</p>
                  <p className="text-sm">Dedicated to empowering students through education and technology.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
