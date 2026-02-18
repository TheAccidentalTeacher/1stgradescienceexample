'use client'

import { useState, useEffect } from 'react'
import { Volume2, VolumeX, Pause } from 'lucide-react'

interface ReadAloudProps {
  text: string
  autoRead?: boolean
  className?: string
  iconSize?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export default function ReadAloud({ 
  text, 
  autoRead = false, 
  className = '',
  iconSize = 'md',
  showLabel = false
}: ReadAloudProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if browser supports speech synthesis
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
    
    // Auto-read if enabled
    if (autoRead && isSupported) {
      setTimeout(() => speak(), 500) // Small delay for better UX
    }

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [autoRead, isSupported])

  const speak = () => {
    if (!isSupported || !text) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    
    // Get user's preferred speed from accessibility settings, or use default
    const savedRate = parseFloat(localStorage.getItem('speechRate') || '0.9')
    
    // Kid-friendly settings
    utterance.rate = savedRate // User's preference or 0.9 default
    utterance.pitch = 1.1 // Slightly higher pitch (friendly)
    utterance.volume = 1.0

    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    window.speechSynthesis.speak(utterance)
  }

  const pause = () => {
    if (!isSupported) return
    
    if (isPaused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
    } else {
      window.speechSynthesis.pause()
      setIsPaused(true)
    }
  }

  const stop = () => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setIsPaused(false)
  }

  if (!isSupported) return null

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const buttonSizes = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3'
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {!isSpeaking ? (
        <button
          onClick={speak}
          className={`
            ${buttonSizes[iconSize]}
            bg-blue-500 hover:bg-blue-600 
            text-white rounded-full 
            transition-all duration-200
            hover:scale-110 active:scale-95
            shadow-md hover:shadow-lg
            flex items-center gap-2
          `}
          title="Click to hear this read aloud"
          aria-label="Read aloud"
        >
          <Volume2 className={iconSizes[iconSize]} />
          {showLabel && <span className="text-sm font-bold pr-2">Listen 🔊</span>}
        </button>
      ) : (
        <div className="flex gap-1">
          <button
            onClick={pause}
            className={`
              ${buttonSizes[iconSize]}
              bg-orange-500 hover:bg-orange-600 
              text-white rounded-full 
              transition-all duration-200
              shadow-md
              ${isPaused ? 'animate-pulse' : ''}
            `}
            title={isPaused ? "Resume" : "Pause"}
            aria-label={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ? (
              <Volume2 className={iconSizes[iconSize]} />
            ) : (
              <Pause className={iconSizes[iconSize]} />
            )}
          </button>
          <button
            onClick={stop}
            className={`
              ${buttonSizes[iconSize]}
              bg-red-500 hover:bg-red-600 
              text-white rounded-full 
              transition-all duration-200
              shadow-md
            `}
            title="Stop"
            aria-label="Stop reading"
          >
            <VolumeX className={iconSizes[iconSize]} />
          </button>
        </div>
      )}
    </div>
  )
}
