import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div>
        <footer className="bg-muted p-6 md:py-12">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold text-primary">Company</h3>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              About Us
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Our Team
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Careers
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-primary">Courses</h3>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Web Development
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Data Science
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Design
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Marketing
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-primary">Resources</h3>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Blog
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Community
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Support
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-primary">Legal</h3>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Privacy Policy
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Terms of Service
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-primary">Contact</h3>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Support
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Sales
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Press
            </Link>
            <Link to="#" className="text-primary hover:text-primary-foreground" >
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
