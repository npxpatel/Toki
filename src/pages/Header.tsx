import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MountainIcon } from "./Icons"

export default function Header() {
  return (
    <div><header className=" z-50 bg-background/80 backdrop-blur-sm">
    <div className="container flex h-16 items-center justify-between px-4 md:px-6">
      <Link to="#" className="flex items-center" >
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-medium text-primary">accerdian</span>
      </Link>
      <nav className="hidden space-x-4 md:flex">
        <Link to="#" className="text-sm font-medium text-primary hover:text-blue-800" >
          Courses
        </Link>
        <Link to="#" className="text-sm font-medium text-primary hover:text-blue-800" >
          Pricing
        </Link>
        <Link to="#" className="text-sm font-medium text-primary hover:text-blue-800" >
          About
        </Link>
        <Link to="#" className="text-sm font-medium text-primary hover:text-blue-800" >
          Contact
        </Link>
      </nav>
      <Button className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary">
        Get Started
      </Button>
    </div>
  </header></div>
  )
}


