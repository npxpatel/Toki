import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Header from "./Header";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import { useState } from "react";
import axios from "axios";
import { GiftIcon, RocketIcon, UsersIcon } from "./Icons";
import landingImage from "../assets/imageTop.jpg";

interface inputTypes {
  name: string;
  email: string;
  refferedName: string;
  refferedEmail: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const BACKEND_URL = "https://accredian-backend-task-r19w.onrender.com";

export default function Component() {
  const [input, setInput] = useState<inputTypes>({
    name: "",
    email: "",
    refferedName: "",
    refferedEmail: "",
  });

  async function onSubmit(e: any) {
    e.preventDefault();
    if (!isValidEmail(input.email) || !isValidEmail(input.refferedEmail)) {
      alert("Please enter valid email addresses.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/referrals`, input);

      console.log("Success:", response.data);

      setInput({
        name: "",
        email: "",
        refferedEmail: "",
        refferedName: "",
      });

      alert("Referral submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit referral. Please try again later.");
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="bg-blue-500 from-primary to-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center gap-6 px-4 md:px-6 lg:flex-row lg:gap-12">
            <div className="max-w-xl space-y-4 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Refer Your Friends, Earn Rewards
              </h1>
              <p className="text-lg text-primary-foreground/80 md:text-xl">
                Invite your friends to our courses and earn exciting rewards
                when they sign up.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="w-full max-w-[200px] md:w-auto bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Refer Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <GiftIcon className="size-12 text-primary" />
                    <h3 className=" text-xl font-medium">Refer Your Friends</h3>
                    <p className="text-muted-foreground  ">
                      Enter your friend's details to refer them for our courses
                      and earn rewards.
                    </p>
                    <form className="w-full space-y-4" onSubmit={onSubmit}>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="w-full"
                        onChange={(e) =>
                          setInput({ ...input, name: e.target.value })
                        }
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="w-full"
                        onChange={(e) =>
                          setInput({ ...input, email: e.target.value })
                        }
                      />
                      <Input
                        type="text"
                        placeholder="Friend's Name"
                        className="w-full"
                        onChange={(e) =>
                          setInput({ ...input, refferedName: e.target.value })
                        }
                      />
                      <Input
                        type="email"
                        placeholder="Friend's Email"
                        className="w-full"
                        onChange={(e) =>
                          setInput({ ...input, refferedEmail: e.target.value })
                        }
                      />
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      >
                        Refer Now
                      </Button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <img
              src={landingImage}
              width="600"
              height="400"
              alt="Refer & Earn"
              className="rounded-xl object-cover"
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">
                Refer & Earn
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                Why Join Our Referral Program?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Discover the benefits of our referral program and start earning
                rewards today.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm transition-all hover:scale-105">
                <GiftIcon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium text-primary">
                  Earn Rewards
                </h3>
                <p className="text-muted-foreground">
                  Receive exciting rewards when your friends sign up for our
                  courses.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm transition-all hover:scale-105">
                <UsersIcon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium text-primary">
                  Expand Your Network
                </h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals and grow your
                  professional network.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm transition-all hover:scale-105">
                <RocketIcon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium text-primary">
                  Accelerate Your Learning
                </h3>
                <p className="text-muted-foreground">
                  Encourage your friends to join and learn together for a more
                  rewarding experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
