import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Users } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const discussionTopics = [
    {
      title: "How to start with React Hooks?",
      author: "Rahim Ahmed",
      replies: 12,
      category: "React",
      time: "2 hours ago",
    },
    {
      title: "Best practices for Python data structures",
      author: "Fatima Khan",
      replies: 8,
      category: "Python",
      time: "1 day ago",
    },
    {
      title: "Struggling with CSS Grid layout",
      author: "Kamal Hassan",
      replies: 15,
      category: "CSS",
      time: "3 days ago",
    },
    {
      title: "How to deploy a Next.js app?",
      author: "Nusrat Jahan",
      replies: 6,
      category: "Next.js",
      time: "1 week ago",
    },
  ]

  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "May 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      description: "Learn the fundamentals of web development in this interactive workshop.",
    },
    {
      title: "Coding Challenge: Algorithm Battle",
      date: "June 2, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      description: "Test your algorithm skills in this friendly competition.",
    },
    {
      title: "Career in Tech: Panel Discussion",
      date: "June 20, 2025",
      time: "3:00 PM - 4:30 PM",
      location: "Online",
      description: "Industry experts share insights about tech careers in Bangladesh.",
    },
  ]

  const successStories = [
    {
      name: "Tasnim Rahman",
      role: "Frontend Developer",
      company: "Tech Solutions BD",
      image: "/placeholder.svg?height=200&width=200&text=TR",
      story:
        "After completing the HTML, CSS, and JavaScript courses, I landed my first job as a frontend developer. The practical projects helped me build a strong portfolio.",
    },
    {
      name: "Imran Hossain",
      role: "Data Analyst",
      company: "Data Insights",
      image: "/placeholder.svg?height=200&width=200&text=IH",
      story:
        "The data science course gave me the skills I needed to transition from a marketing role to a data analyst position. The community support was invaluable during my journey.",
    },
    {
      name: "Sabina Akter",
      role: "Full Stack Developer",
      company: "Global Tech",
      image: "/placeholder.svg?height=200&width=200&text=SA",
      story:
        "I started with zero coding knowledge. After completing multiple courses and building projects with guidance from mentors, I now work as a full stack developer.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Community</h1>
          <p className="text-xl max-w-3xl mx-auto">Connect, collaborate, and grow with fellow learners and mentors.</p>
        </div>
      </section>

      {/* Discussion Board */}
      <section className="py-16" id="discussion-board">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Discussion Board</h2>
            <Button>Start New Discussion</Button>
          </div>
          <div className="space-y-4">
            {discussionTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${topic.author.charAt(0)}`} />
                        <AvatarFallback>{topic.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link href="#" className="text-lg font-semibold hover:text-primary">
                          {topic.title}
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <span>{topic.author}</span>
                          <span>•</span>
                          <span>{topic.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{topic.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {topic.replies}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Discussions</Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50" id="events">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {event.date}, {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Users className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16" id="success-stories">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={story.image || "/placeholder.svg"} />
                      <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-gray-500">
                      {story.role} at {story.company}
                    </p>
                    <div className="mt-4">
                      <p className="italic">"{story.story}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with thousands of students, share your journey, and learn together.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-secondary hover:text-primary">
            <Link href="/register">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
