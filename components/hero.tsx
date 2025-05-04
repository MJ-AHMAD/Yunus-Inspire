import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container relative py-20 md:py-32 flex flex-col items-center text-center space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          Empowering the minds of Bangladesh, one dream at a time
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Free access to quality educational resources in technology, programming, and innovation for all Bangladeshi
          students.
        </p>
        <Button size="lg" asChild className="bg-white text-primary hover:bg-secondary hover:text-primary">
          <Link href="/courses">Get Started for Free</Link>
        </Button>
      </div>
    </div>
  )
}
