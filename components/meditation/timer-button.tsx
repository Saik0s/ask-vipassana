"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { MeditationTimer } from "./meditation-timer"
import { FadeIn } from "@/components/ui/animation-wrapper"

export function TimerButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <>
      <FadeIn delay={0.5} duration={1}>
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 fixed bottom-24 left-6 shadow-md bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300"
          title="Meditation Timer"
        >
          <Clock className="h-5 w-5" />
        </Button>
      </FadeIn>

      <MeditationTimer open={isOpen} onOpenChange={handleOpenChange} />
    </>
  )
}
