'use client'

import { useState, useEffect, useRef } from 'react'
import { Volume2, Play } from 'lucide-react'

const voices = [
  { id: 'nova', name: 'Nova', emoji: '🌟', description: 'Bright & Fun (Best for Kids!)' },
  { id: 'shimmer', name: 'Shimmer', emoji: '✨', description: 'Soft & Warm (Great for Kids!)' },
  { id: 'alloy', name: 'Alloy', emoji: '🎯', description: 'Balanced & Clear' },
  { id: 'echo', name: 'Echo', emoji: '🎵', description: 'Friendly & Smooth' },
  { id: 'fable', name: 'Fable', emoji: '📖', description: 'Expressive & Warm' },
  { id: 'onyx', name: 'Onyx', emoji: '🎤', description: 'Deep & Strong' },
]

export default function VoiceSelector() {
  const [selectedVoice, setSelectedVoice] = useState('nova')
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const savedVoice = localStorage.getItem('speechVoice') || 'nova'
    setSelectedVoice(savedVoice)
  }, [])

  const handleVoiceChange = async (voiceId: string) => {
    setSelectedVoice(voiceId)
    localStorage.setItem('speechVoice', voiceId)
    
    // Auto-preview the voice
    previewVoice(voiceId)
  }

  const previewVoice = async (voiceId: string) => {
    // Stop any current playback
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    setIsPlaying(true)

    try {
      const response = await fetch('/api/text-to-speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: "Hi Bobby! I'm your reading helper! Click the speaker buttons anywhere to hear me read!",
          voice: voiceId,
          speed: 0.9
        })
      })

      if (!response.ok) {
        setIsPlaying(false)
        return
      }

      const audioBlob = await response.blob()
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      audioRef.current = audio

      audio.onended = () => {
        setIsPlaying(false)
        URL.revokeObjectURL(audioUrl)
      }

      audio.onerror = () => {
        setIsPlaying(false)
        URL.revokeObjectURL(audioUrl)
      }

      await audio.play()
    } catch (error) {
      console.error('Voice preview error:', error)
      setIsPlaying(false)
    }
  }

  const currentVoice = voices.find(v => v.id === selectedVoice) || voices[0]

  return (
    <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-2xl p-4 md:p-6 shadow-lg border-4 border-purple-300">
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2 flex items-center justify-center gap-2">
          <Volume2 className="w-6 h-6 md:w-8 md:h-8" />
          Choose Your Reading Voice!
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Pick a voice you like and I'll read everything to you! 🔊
        </p>
      </div>

      {/* Voice Grid - Optimized for mobile/tablet */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mb-4">
        {voices.map((voice) => (
          <button
            key={voice.id}
            onClick={() => handleVoiceChange(voice.id)}
            disabled={isPlaying}
            className={`
              relative p-3 md:p-4 rounded-xl border-3 transition-all transform
              touch-target tap-highlight touch-active no-select
              ${selectedVoice === voice.id 
                ? 'bg-purple-500 text-white border-purple-700 scale-105 shadow-xl' 
                : 'bg-white text-gray-800 border-gray-300 hover:border-purple-400 hover:shadow-md active:scale-95'
              }
              ${isPlaying ? 'opacity-50 cursor-wait' : 'cursor-pointer'}
            `}
          >
            <div className="text-3xl md:text-4xl mb-1 md:mb-2">{voice.emoji}</div>
            <div className="text-lg md:text-xl font-bold mb-1">{voice.name}</div>
            <div className="text-xs opacity-80 hidden md:block">{voice.description}</div>
            {selectedVoice === voice.id && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-lg md:text-xl">
                ✓
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Current Selection Display - Mobile optimized */}
      <div className="bg-white rounded-xl p-3 md:p-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="text-4xl md:text-5xl">{currentVoice.emoji}</div>
          <div className="flex-1 md:flex-initial">
            <div className="text-lg md:text-xl font-bold text-gray-900">
              Current: {currentVoice.name}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{currentVoice.description}</div>
          </div>
        </div>
        <button
          onClick={() => previewVoice(selectedVoice)}
          disabled={isPlaying}
          className={`
            w-full md:w-auto
            flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-base md:text-lg transition-all
            touch-target tap-highlight touch-active no-select
            ${isPlaying 
              ? 'bg-gray-300 text-gray-600 cursor-wait' 
              : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
            }
          `}
        >
          <Play className="w-5 h-5 md:w-6 md:h-6" />
          {isPlaying ? 'Playing...' : 'Test Voice'}
        </button>
      </div>

      {/* Tip - Always visible on mobile */}
      <div className="mt-3 md:mt-4 bg-yellow-100 border-2 border-yellow-400 rounded-xl p-3 text-center">
        <p className="text-xs md:text-sm text-yellow-900 font-semibold">
          💡 Tip: Click the blue speaker buttons <Volume2 className="inline w-3 h-3 md:w-4 md:h-4" /> anywhere in a lesson to hear that voice read to you!
        </p>
      </div>
    </div>
  )
}
