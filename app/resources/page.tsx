import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { FileText, Video, Code } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const faqs = [
    {
      question: "How do I access the courses?",
      answer:
        "All courses are available online through our platform. Simply create an account, navigate to the Courses page, and click on the course you want to start.",
    },
    {
      question: "Are the courses really free?",
      answer:
        "Yes, all courses on Yunus Inspire are completely free. Our mission is to provide quality education to all Bangladeshi students without financial barriers.",
    },
    {
      question: "Can I download materials for offline use?",
      answer: "Yes, most course materials are available as downloadable PDFs that you can access offline.",
    },
    {
      question: "How do I get help if I'm stuck?",
      answer:
        "You can post your questions in our community forum where other students and mentors can help you. We also have regular online office hours with instructors.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, upon successful completion of a course, you will receive a digital certificate that you can share on your resume or social media profiles.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Learning Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access a variety of learning tools and materials to enhance your educational journey.
          </p>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="code-editor" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="code-editor">Code Editor</TabsTrigger>
              <TabsTrigger value="video-tutorials">Video Tutorials</TabsTrigger>
              <TabsTrigger value="downloadable">Downloadable PDFs</TabsTrigger>
            </TabsList>

            <TabsContent value="code-editor" className="p-4 border rounded-lg">
              <div className="text-center mb-8">
                <Code className="h-12 w-12 mx-auto text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Interactive Code Editor</h2>
                <p className="max-w-2xl mx-auto mb-6">
                  Practice your coding skills with our interactive code editor. Write, run, and debug your code directly
                  in your browser.
                </p>
                <Button size="lg">Launch Code Editor</Button>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                <p className="text-gray-500">Code editor preview will appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="video-tutorials" className="space-y-6">
              <div className="text-center mb-8">
                <Video className="h-12 w-12 mx-auto text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Video Tutorials</h2>
                <p className="max-w-2xl mx-auto">
                  Watch step-by-step video tutorials to enhance your learning experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((video) => (
                  <Card key={video} className="overflow-hidden">
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>Video Tutorial {video}</CardTitle>
                      <CardDescription>Learn about important concept {video}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Watch Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="downloadable" className="space-y-6">
              <div className="text-center mb-8">
                <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Downloadable PDFs</h2>
                <p className="max-w-2xl mx-auto">
                  Access and download comprehensive study guides and reference materials.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "HTML Cheat Sheet",
                  "Python Quick Reference",
                  "Git Commands Guide",
                  "Data Science Fundamentals",
                  "JavaScript Basics",
                  "CSS Styling Guide",
                  "Database Design Principles",
                  "React Components Guide",
                ].map((pdf, index) => (
                  <Card key={index} className="flex items-center p-4">
                    <FileText className="h-8 w-8 text-primary mr-4" />
                    <div className="flex-grow">
                      <h3 className="font-medium">{pdf}</h3>
                      <p className="text-sm text-gray-500">PDF Document</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with other students and mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Ask questions, share your progress, and collaborate with peers.</p>
                <Button asChild>
                  <Link href="/community">Visit Forum</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coding Challenges</CardTitle>
                <CardDescription>Test your skills with practical problems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Solve real-world coding challenges to improve your programming skills.</p>
                <Button asChild>
                  <Link href="/resources/challenges">Try Challenges</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project Ideas</CardTitle>
                <CardDescription>Build your portfolio with guided projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Find inspiration and guidance for your next coding project.</p>
                <Button asChild>
                  <Link href="/resources/projects">Explore Projects</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
