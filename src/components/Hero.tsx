import heroImage from '../assets/hero.png'
import { Button } from '#ui/button.tsx'
import { FileText, GitBranch, Home, MoveDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,oklch(0_0_0/5%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/5%)_1px,transparent_1px)] [background-size:48px_48px] dark:[background-image:linear-gradient(to_right,oklch(1_0_0/5%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/5%)_1px,transparent_1px)]"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-16 lg:py-0">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center">

          {/* ── Text ── */}
          <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              Available for work
            </span>

            <div className="space-y-1">
              <p className="text-lg text-muted-foreground">Hi, I'm</p>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Shankar<br />Poudel
              </h1>
            </div>

            <p className="text-xl font-medium text-muted-foreground">
              {/* TODO: update with your role */}
              Software Engineer · Full Stack & Cloud
            </p>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:max-w-sm xl:max-w-md">
              {/* TODO: update with your bio */}
              I build fast, accessible, and thoughtful web applications.
              Focused on clean architecture and great developer experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button size="lg" asChild>
                <a href="#projects">
                  View My Work
                  <MoveDown />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                {/* TODO: update href to your actual resume */}
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <FileText />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-1 lg:justify-start">
              <Button variant="ghost" size="icon-lg" asChild>
                {/* TODO: update href to your GitHub */}
                <a href="https://github.com/shankar" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitBranch className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon-lg" asChild>
                {/* TODO: update href to your LinkedIn */}
                <a href="https://linkedin.com/in/shankar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Home className="size-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative">
              {/* Offset decorative border */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-border" />
              {/* Accent dot grid */}
              <div
                aria-hidden
                className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-foreground/5"
              />
              <img
                src={heroImage}
                alt="Shankar Poudel"
                className="relative h-72 w-64 rounded-2xl object-cover object-top shadow-lg sm:h-80 sm:w-72 lg:h-[420px] lg:w-[340px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
