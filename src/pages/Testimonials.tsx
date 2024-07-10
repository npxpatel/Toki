import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <div>
      
      <section className="bg-muted py-6 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Hear from our satisfied students about their experience with our
              referral program.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 bg-card shadow-md">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-primary">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    Software Engineer
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-muted-foreground">
                "I've been using Acme Courses for a while now, and their\n
                referral program is fantastic. I've earned several rewards by\n
                referring my friends, and they've all been really happy with\n
                the courses too."
              </blockquote>
            </Card>
            <Card className="p-6 bg-card shadow-md">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-primary">
                    Sarah Anderson
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Product Manager
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-muted-foreground">
                "The Acme Courses referral program has been a game-changer for\n
                me. I've been able to earn free courses and even a discount on\n
                my own subscription by referring my colleagues. It's a win-win\n
                for everyone!"
              </blockquote>
            </Card>
            <Card className="p-6 bg-card shadow-md">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-primary">
                    Michael Kim
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Marketing Specialist
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-muted-foreground">
                "I'm really impressed with the Acme Courses referral program.\n
                It's so easy to use, and the rewards are fantastic. I've\n
                already referred several of my friends, and they're all\n
                enjoying the courses as much as I am."
              </blockquote>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
