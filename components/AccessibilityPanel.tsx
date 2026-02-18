'use client'

import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Settings } from 'lucide-react'

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [speechRate, setSpeechRate] = useState(0.9)
  const [speechVoice, setSpeechVoice] = useState('nova')
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Load saved settings
    const savedRate = parseFloat(localStorage.getItem('speechRate') || '0.9')
    const savedVoice = localStorage.getItem('speechVoice') || 'nova'
    setSpeechRate(savedRate)
    setSpeechVoice(savedVoice)
  }, [])

  const updateSpeed = (newRate: number) => {
    setSpeechRate(newRate)
    localStorage.setItem('speechRate', newRate.toString())
  }

  const updateVoice = (newVoice: string) => {
    setSpeechVoice(newVoice)
    localStorage.setItem('speechVoice', newVoice)
  }

  const testVoice = async () => {
    if (isPlaying) {
      // Stop current playback
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)

    try {
      const response = await fetch('/api/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: "Hi! I'm your reading helper! Click the speaker buttons to hear any text on the page. You can change my voice and how fast I talk. Let's learn about God's amazing creation together!",
          voice: speechVoice,
          speed: speechRate
        })
      })

      if (!response.ok) throw new Error('TTS failed')

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
      console.error('Test voice error:', error)
      setIsPlaying(false)
    }
  }

  return (
    <>
      {/* Floating button - Mobile optimized */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white rounded-full p-3 md:p-4 shadow-2xl transition-all hover:scale-110 active:scale-95 tap-highlight touch-active no-select touch-target"
        title="Accessibility Settings"
        aria-label="Accessibility Settings"
      >
        <Settings className="w-7 h-7 md:w-8 md:h-8 animate-spin-slow" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          🔊
        </span>
      </button>

      {/* Panel - Responsive for mobile/tablet */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-24 right-2 left-2 md:left-auto md:right-6 z-50 bg-white rounded-2xl shadow-2xl border-4 border-purple-500 p-4 md:p-6 md:w-80 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-purple-900 flex items-center gap-2">
              <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
              Reading Help
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 active:text-gray-900 text-2xl md:text-3xl touch-target tap-highlight no-select"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Test voice button */}
            <button
              onClick={testVoice}
              className={`w-full ${isPlaying ? 'bg-red-500 hover:bg-red-600 active:bg-red-700' : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'} text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 active:scale-95 tap-highlight touch-active no-select touch-target`}
            >
              {isPlaying ? '⏹️ Stop Test' : '🔊 Test Voice'}
            </button>

            {/* Voice selection */}
            <div>
              <label className="block text-base md:text-lg font-semibold text-gray-700 mb-2">
                Choose a Voice:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => updateVoice('alloy')}
                  className={`py-2 px-2 md:px-3 rounded-lg font-bold transition-all text-xs md:text-sm touch-target tap-highlight touch-active no-select ${
                    speechVoice === 'alloy' 
                      ? 'bg-purple-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Alloy ✨
                </button>
                <button
                  onClick={() => updateVoice('echo')}
                  className={`py-2 px-2 md:px-3 rounded-lg font-bold transition-all text-xs md:text-sm touch-target tap-highlight touch-active no-select ${
                    speechVoice === 'echo' 
                      ? 'bg-purple-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  Echo 🎵
                </button>
                <button
                  onClick={() => updateVoice('fable')}
                  className={`py-2 px-2 md:px-3 rounded-lg font-bold transition-all text-xs md:text-sm touch-target tap-highlight touch-active no-select ${
                    speechVoice === 'fable' 
                      ? 'bg-purple-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  Fable 📖
                </button>
                <button
                  onClick={() => updateVoice('onyx')}
                  className={`py-2 px-2 md:px-3 rounded-lg font-bold transition-all text-xs md:text-sm touch-target tap-highlight touch-active no-select ${
                    speechVoice === 'onyx' 
                      ? 'bg-purple-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  Onyx 🎤
                </button>
                <button
                  onClick={() => updateVoice('nova')}
                  className={`py-2 px-2 md:px-3 rounded-lg font-bold transition-all text-xs md:text-sm touch-target tap-highlight touch-active no-select ${
                    speechVoice === 'nova' 
                      ? 'bg-purple-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  Nova 🌟
                </button>
                <button
                  onClick={() => updateVoice('shimmer')}
                  className={`py-2 px-2 md:px-3 rounded-lg font-bold transition-all text-xs md:text-sm touch-target tap-highlight touch-active no-select ${
                    speechVoice === 'shimmer' 
                      ? 'bg-purple-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  Shimmer ✨
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-2 italic">💡 Nova and Shimmer are great for kids!</p>
            </div>

            {/* Speed control */}
            <div>
              <label className="block text-base md:text-lg font-semibold text-gray-700 mb-2">
                Reading Speed: {speechRate === 0.7 ? 'Slow 🐢' : speechRate === 0.9 ? 'Normal 🚶' : 'Fast 🏃'}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => updateSpeed(0.7)}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all touch-target tap-highlight touch-active no-select ${
                    speechRate === 0.7 
                      ? 'bg-green-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  🐢 Slow
                </button>
                <button
                  onClick={() => updateSpeed(0.9)}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all touch-target tap-highlight touch-active no-select ${
                    speechRate === 0.9 
                      ? 'bg-green-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  🚶 Normal
                </button>
                <button
                  onClick={() => updateSpeed(1.2)}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all touch-target tap-highlight touch-active no-select ${
                    speechRate === 1.2 
                      ? 'bg-green-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                  }`}
                >
                  🏃 Fast
                </button>
              </div>
            </div>

            {/* Helper text */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <p className="text-sm text-purple-900 font-semibold">
                💡 Look for the blue speaker buttons <Volume2 className="inline w-4 h-4" /> throughout the lesson. Click them to hear the text read aloud!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
