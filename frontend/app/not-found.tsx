import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <h1 className="text-8xl font-extrabold tracking-tight text-primary">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-muted-foreground leading-7">
          Looks like you've wandered off the intended path. Let's get you back to the portfolio.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link href="/">
            <Button size="lg">
              Back to Home
            </Button>
          </Link>

          <a
            href="mailto:sowmya.vejerla@gmail.com"
          >
            <Button
              variant="outline"
              size="lg"
            >
              Contact Me
            </Button>
          </a>

        </div>

      </div>
    </main>
  );
}