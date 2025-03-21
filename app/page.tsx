"use client"

import Link from "next/link"
import Image from "next/image"
import { SlideUp, FadeIn } from "@/components/ui/animation-wrapper"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <SlideUp duration={1.2} className="text-center space-y-8">
        <FadeIn delay={0.2} duration={1.5}>
          <div className="flex justify-center mb-6">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg">
              <Image
                src="/logo.webp"
                alt="Vipassana Logo"
                width={96}
                height={96}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} duration={1.5}>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl mb-6">
            Welcome to Ask Vipassana
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} duration={1.5}>
          <p className="max-w-[600px] mx-auto text-muted-foreground text-lg leading-relaxed tracking-wide">
            Your practical guide for authentic Vipassana wisdom.
          </p>
        </FadeIn>

        <div className="responsive-height">
          <style jsx>{`
            @media (max-height: 800px) {
              .responsive-height {
                display: none;
              }
            }
            @media (min-height: 801px) {
              .responsive-height {
                display: block;
              }
            }
          `}</style>
          <FadeIn delay={0.8} duration={1.5}>
            <p className="max-w-[600px] mx-auto text-muted-foreground text-lg leading-relaxed tracking-wide">
              Ask questions, receive clear meditation instructions, and discover daily applications of profound Dhamma teachings—accessible, direct, and completely free from commercialization.
            </p>
          </FadeIn>

          <FadeIn delay={1.0} duration={1.5}>
            <p className="max-w-[600px] mx-auto text-muted-foreground text-lg leading-relaxed tracking-wide">
              Clear your mind. Take your first step.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={1.2} duration={1.5}>
          <Link
            href="/chat"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-all duration-500 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Start Conversation
          </Link>
        </FadeIn>
      </SlideUp>

      <footer className="fixed bottom-0 w-full py-4 text-center text-sm">
        <p>Created with ❤️ by <a href="https://tarasenko.dev?utm_source=askvipassana" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Igor Tarasenko</a></p>
        <div className="flex justify-center space-x-4 mt-1">
          <a href="https://x.com/sa1k0s" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="h-4 w-4 inline-block" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://github.com/saik0s" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="h-4 w-4 inline-block" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  )
}
