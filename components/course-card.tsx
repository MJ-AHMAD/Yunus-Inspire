import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  slug: string
}

export function CourseCard({ title, description, level, duration, slug }: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant={level === "Beginner" ? "default" : level === "Intermediate" ? "secondary" : "outline"}>
            {level}
          </Badge>
        </div>
        <CardDescription className="text-sm">{duration}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/courses/${slug}`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
