'use client'

import { useState, useEffect } from 'react'
import { Volume2, VolumeX, Settings } from 'lucide-react'

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [autoRead, setAutoRead] = useState(false)
  const [speechRate, setSpeechRate] = useState(0.9)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
    
    // Load saved settings
    const savedAutoRead = localStorage.getItem('autoRead') === 'true'
    const savedRate = parseFloat(localStorage.getItem('speechRate') || '0.9')
    setAutoRead(savedAutoRead)
    setSpeechRate(savedRate)
  }, [])

  const toggleAutoRead = () => {
    const newValue = !autoRead
    setAutoRead(newValue)
    localStorage.setItem('autoRead', newValue.toString())
  }

  const updateSpeed = (newRate: number) => {
    setSpeechRate(newRate)
    localStorage.setItem('speechRate', newRate.toString())
  }

  const testVoice = () => {
    if (!isSupported) return
    
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance("This is how the reading voice sounds! Click the speaker buttons to hear any text on the page.")
    utterance.rate = speechRate
    utterance.pitch = 1.1
    window.speechSynthesis.speak(utterance)
  }

  if (!isSupported) return null

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 active:scale-95"
        title="Accessibility Settings"
        aria-label="Accessibility Settings"
      >
        <Settings className="w-8 h-8 animate-spin-slow" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          🔊
        </span>
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl border-4 border-purple-500 p-6 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-purple-900 flex items-center gap-2">
              <Volume2 className="w-6 h-6" />
              Reading Help
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Test voice button */}
            <button
              onClick={testVoice}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105"
            >
              🔊 Test Voice
            </button>

            {/* Speed control */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Reading Speed: {speechRate === 0.7 ? 'Slow 🐢' : speechRate === 0.9 ? 'Normal 🚶' : 'Fast 🏃'}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => updateSpeed(0.7)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    speechRate === 0.7 
                      ? 'bg-green-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🐢 Slow
                </button>
                <button
                  onClick={() => updateSpeed(0.9)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    speechRate === 0.9 
                      ? 'bg-green-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🚶 Normal
                </button>
                <button
                  onClick={() => updateSpeed(1.2)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    speechRate === 1.2 
                      ? 'bg-green-500 text-white scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
