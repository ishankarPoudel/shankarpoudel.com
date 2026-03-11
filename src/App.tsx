import { Button } from "@/components/ui/button"
import {
  Sun,
  Linkedin,
  Github,
  Mail,
  FileText,
  Monitor,
} from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            home
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            projects
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            blog
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Monitor className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Sun className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl font-bold italic mb-4">
              hi ted here. <span className="not-italic">👋</span>
            </h1>
            <p className="text-lg text-amber-400 mb-4">
              29yo software engineer from Singapore 🇸🇬
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Backend by profession, full-stack by passion. I build and self-host the lot.
            </p>

            <div className="mb-8">
              <p className="text-foreground mb-1">
                For Q&A, start a chat with Ted Support{" "}
                <span className="inline-block transform rotate-45">↘</span>
              </p>
              <p className="text-muted-foreground text-sm">
                For any escalations, please find my{" "}
                <a href="#" className="text-amber-400 hover:underline">
                  Ted Lead
                </a>{" "}
                instead.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="gap-2 border-border hover:bg-accent"
              >
                Resume
                <FileText className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Stacked Photos */}
          <div className="relative">
            <div className="relative w-72 h-80">
              {/* Background card */}
              <div className="absolute top-4 left-4 w-64 h-72 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 transform rotate-6 shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=500&fit=crop"
                  alt="Beach background"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Foreground card */}
              <div className="absolute top-0 left-0 w-64 h-72 rounded-xl bg-card transform -rotate-3 shadow-xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
