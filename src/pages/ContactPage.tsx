import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Navbar } from '../components/organisms/Navbar'
import { Footer } from '../components/organisms/Footer'
import { SOCIAL_LINKS } from '../constants/socialLinks'
import { useTheme } from '../context/ThemeContext'

type Status = 'idle' | 'sending' | 'success' | 'error'

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL ?? ''
export function ContactPage() {
  const { darkMode } = useTheme()
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!FORMSPREE_URL) { setStatus('error'); return }
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full px-3 py-2.5 rounded-[8px] text-[0.88rem] outline-none
    border transition-colors duration-150
    bg-white dark:bg-[#111110]
    text-[#1a1a1a] dark:text-[#e8e8e0]
    placeholder:text-[#bbb] dark:placeholder:text-[#444440]`

  const inputStyle = {
    borderColor: darkMode ? '#2a2a28' : '#e0e0d8',
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] dark:bg-[#0d0d0d] text-[#1a1a1a] dark:text-[#e8e8e0] font-sans transition-colors duration-300">
      <Navbar />

      <main
        className={`max-w-[900px] mx-auto pt-8 sm:pt-10 px-4 sm:px-8 md:px-10 pb-8 transition-all duration-[500ms] ease-in-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium mb-10
            text-[#888] dark:text-[#666660]
            hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]
            transition-colors duration-150 group"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          Back to home
        </Link>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-16">

          {/* ── Left: info ── */}
          <div className="space-y-6">
            <div>
              <h1 className="text-[2rem] font-bold tracking-[-0.02em] text-[#0d0d0d] dark:text-[#f0f0e8] leading-tight mb-3">
                Let's connect.
              </h1>
              <p className="text-[0.9rem] text-[#666] dark:text-[#888880] leading-[1.7]">
                I'm open to new opportunities, collaborations, or just a friendly chat.
                My inbox is always open — I'll do my best to get back to you.
              </p>
            </div>

            <div className="h-px bg-[#e0e0d8] dark:bg-[#2a2a28]" />

            {/* Direct email */}
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#aaa] dark:text-[#444440] mb-2">
                Email
              </p>
              <a
                href="mailto:shankarpoudel499@gmail.com"
                className="text-[0.88rem] font-medium text-[#555] dark:text-[#888880]
                  hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]
                  transition-colors duration-150 break-all"
              >
                shankarpoudel499@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#aaa] dark:text-[#444440] mb-3">
                Elsewhere
              </p>
              <div className="flex flex-col gap-2.5">
                {SOCIAL_LINKS.filter((l) => l.label !== 'Email').map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-[0.88rem] font-medium
                      text-[#555] dark:text-[#888880]
                      hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]
                      transition-colors duration-150 group"
                  >
                    <span className="text-[#bbb] dark:text-[#3a3a38] group-hover:text-current transition-colors duration-150">
                      {link.icon}
                    </span>
                    {link.label}
                    <svg viewBox="0 0 24 24" className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: darkMode ? '#202020' : '#e6e6de',
              backgroundColor: darkMode ? '#141412' : '#ffffff',
            }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-semibold text-[0.95rem] text-[#1a1a1a] dark:text-[#e8e8e0]">Message sent!</p>
                <p className="text-[0.83rem] text-[#888] dark:text-[#666660]">I'll get back to you as soon as I can.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-[0.78rem] font-medium text-[#aaa] dark:text-[#555550] hover:text-[#555] dark:hover:text-[#888880] transition-colors duration-150"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#aaa] dark:text-[#444440]">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#aaa] dark:text-[#444440]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#aaa] dark:text-[#444440]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-[0.78rem] text-red-500 dark:text-red-400">
                    Something went wrong. Try emailing me directly instead.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-1 w-full py-2.5 rounded-[8px] text-[0.88rem] font-semibold
                    transition-colors duration-150 disabled:opacity-60"
                  style={{
                    backgroundColor: darkMode ? '#e8e8e0' : '#1a1a1a',
                    color: darkMode ? '#0d0d0d' : '#ffffff',
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
    
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
