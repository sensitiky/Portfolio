"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JSX, SVGProps, useState } from "react";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Main: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/enviaremail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Email sent successfully:", data.message);
        alert("¡Correo enviado correctamente!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        console.error("Failed to send email:", errorData.error);
        alert(
          "Hubo un error al enviar el correo. Por favor intenta nuevamente."
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Hubo un error al enviar el correo. Por favor intenta nuevamente.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-darken-4 text-foreground">
      <header className="px-4 lg:px-6 py-4 border-b">
        <div className="container flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <CodeIcon className="w-6 h-6" />
            <span>Mario Corea</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              About Me
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="w-6 h-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 p-6">
                <Link
                  href="#about"
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  About Me
                </Link>
                <Link
                  href="#skills"
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  Contact
                </Link>
                <Link href="/formulario"></Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <section id="about" className="py-12 md:py-16 lg:py-20">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Im Mario Corea
              </h1>
              <p className="text-muted-foreground text-lg">
                Im a developer with a passion for creating
                <br />
                innovative and user-friendly web applications.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/CV-Correa Mario .pdf"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  View Resume
                </Link>
                <Link
                  href="mailto:mariomcorrea@outlook.com"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-darken-4 px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <Image
              src="/mario.jpg"
              width={500}
              height={500}
              alt="Mario Corea"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section id="skills" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight">My Stack</h2>
              <p className="text-muted-foreground text-lg">
                I have experience in several programming languages and
                technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <EclipseIcon className="w-10 h-10" />
                <span className="text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CpuIcon className="w-10 h-10" />
                <span className="text-sm font-medium">C++</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <PiIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-10 h-10" />
                <span className="text-sm font-medium">SQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <HashIcon className="w-10 h-10" />
                <span className="text-sm font-medium">HTML</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-10 h-10" />
                <span className="text-sm font-medium">CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-10 h-10" />
                <span className="text-sm font-medium">React</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
              <p className="text-muted-foreground text-lg">
                Check out some of my recent work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>IESA Web</CardTitle>
                  <CardDescription>
                    A web application built with React, Node.js, and MongoDB.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Project1.png"
                    width={400}
                    height={300}
                    alt="Project 1"
                    className="rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://iesa-web.vercel.app/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dynamic Web Service for File Handling</CardTitle>
                  <CardDescription>
                    A full-stack web application enabling CSV file uploads and
                    dynamic data search, built with React, Node.js, and SQLite.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Project2.png"
                    width={400}
                    height={300}
                    alt="Project 2"
                    className="rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://full-stack-take-home-test-ashen.vercel.app/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>
                    A mobile application built with React Native.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 3"
                    className="rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
              <p className="text-muted-foreground text-lg">
                Feel free to reach out if you have any questions or just want to
                connect.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto space-y-4 mt-8"
            >
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
              <Textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full"
                required
              />
              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="py-4 border-t">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Mario Corea.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Main;
function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CodepenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function CpuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function EclipseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  );
}

function HashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  );
}
