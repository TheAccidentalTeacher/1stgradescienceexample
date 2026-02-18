'use client'

import { useState, useEffect, useRef } from 'react'
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
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Auto-read if enabled
    if (autoRead) {
      setTimeout(() => speak(), 500) // Small delay for better UX
    }

    return () => {
      // Cleanup audio on unmount
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [autoRead])

  const speak = async () => {
    if (!text) return

    setIsLoading(true)

    try {
      // Get user preferences
      const savedRate = parseFloat(localStorage.getItem('speechRate') || '0.9')
      const savedVoice = localStorage.getItem('speechVoice') || 'nova' // nova is kid-friendly

      // Call OpenAI TTS API
      const response = await fetch('/api/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          voice: savedVoice,
          speed: savedRate
        })
      })

      if (!response.ok) {
        throw new Error('TTS API failed')
      }

      // Get audio blob
      const audioBlob = await response.blob()
      const audioUrl = URL.createObjectURL(audioBlob)

      // Create and play audio element
      const audio = new Audio(audioUrl)
      audioRef.current = audio

      audio.onplay = () => {
        setIsSpeaking(true)
        setIsPaused(false)
        setIsLoading(false)
      }

      audio.onended = () => {
        setIsSpeaking(false)
        setIsPaused(false)
        URL.revokeObjectURL(audioUrl)
      }

      audio.onerror = () => {
        setIsSpeaking(false)
        setIsPaused(false)
        setIsLoading(false)
        URL.revokeObjectURL(audioUrl)
      }

      await audio.play()

    } catch (error) {
      console.error('Speech error:', error)
      setIsLoading(false)
      setIsSpeaking(false)
      setIsPaused(false)
    }
  }

  const pause = () => {
    if (!audioRef.current) return
    
    if (isPaused) {
      audioRef.current.play()
      setIsPaused(false)
    } else {
      audioRef.current.pause()
      setIsPaused(true)
    }
  }

  const stop = () => {
    if (!audioRef.current) return
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setIsSpeaking(false)
    setIsPaused(false)
  }

  if (isLoading) {
    return (
      <div className="inline-flex items-center gap-2">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      </div>
    )
  }

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
