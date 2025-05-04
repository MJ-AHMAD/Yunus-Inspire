import { CourseCard } from "@/components/course-card"

export default function CoursesPage() {
  const courses = [
    {
      title: "HTML Basics",
      description:
        "Learn the fundamentals of web development with HTML. Build your first webpage and understand the structure of the web.",
      level: "Beginner" as const,
      duration: "4 weeks",
      slug: "html-basics",
    },
    {
      title: "Python for Beginners",
      description:
        "Unlock the power of programming with Python. Learn syntax, data structures, and build simple applications.",
      level: "Beginner" as const,
      duration: "6 weeks",
      slug: "python-beginners",
    },
    {
      title: "GitHub Essentials",
      description: "Collaborate and manage code effectively. Learn version control, branching, and team collaboration.",
      level: "Beginner" as const,
      duration: "3 weeks",
      slug: "github-essentials",
    },
    {
      title: "Data Science Intro",
      description:
        "Analyze data for actionable insights. Learn data visualization, basic statistics, and intro to machine learning.",
      level: "Intermediate" as const,
      duration: "8 weeks",
      slug: "data-science-intro",
    },
    {
      title: "JavaScript Fundamentals",
      description:
        "Add interactivity to your websites with JavaScript. Learn variables, functions, DOM manipulation, and more.",
      level: "Beginner" as const,
      duration: "6 weeks",
      slug: "javascript-fundamentals",
    },
    {
      title: "React Basics",
      description: "Build modern user interfaces with React. Learn components, state, props, and hooks.",
      level: "Intermediate" as const,
      duration: "8 weeks",
      slug: "react-basics",
    },
    {
      title: "Database Design",
      description:
        "Learn how to design and implement databases. Understand SQL, relationships, and database optimization.",
      level: "Intermediate" as const,
      duration: "5 weeks",
      slug: "database-design",
    },
    {
      title: "Mobile App Development",
      description: "Create mobile applications for Android and iOS using React Native.",
      level: "Advanced" as const,
      duration: "10 weeks",
      slug: "mobile-app-development",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose from our range of courses to kickstart your learning journey!
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                level={course.level}
                duration={course.duration}
                slug={course.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Recommended Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Web Development Path</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    1
                  </span>
                  <span>HTML Basics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    2
                  </span>
                  <span>CSS Fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    3
                  </span>
                  <span>JavaScript Fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    4
                  </span>
                  <span>React Basics</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Data Science Path</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    1
                  </span>
                  <span>Python for Beginners</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    2
                  </span>
                  <span>Database Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    3
                  </span>
                  <span>Data Science Intro</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    4
                  </span>
                  <span>Advanced Data Analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
