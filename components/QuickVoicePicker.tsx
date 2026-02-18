'use client'

import { useState, useEffect } from 'react'
import { Volume2 } from 'lucide-react'

const voices = [
  { id: 'nova', name: 'Nova 🌟', recommended: true },
  { id: 'shimmer', name: 'Shimmer ✨', recommended: true },
  { id: 'alloy', name: 'Alloy 🎯', recommended: false },
  { id: 'echo', name: 'Echo 🎵', recommended: false },
  { id: 'fable', name: 'Fable 📖', recommended: false },
  { id: 'onyx', name: 'Onyx 🎤', recommended: false },
]

export default function QuickVoicePicker() {
  const [selectedVoice, setSelectedVoice] = useState('nova')

  useEffect(() => {
    const savedVoice = localStorage.getItem('speechVoice') || 'nova'
    setSelectedVoice(savedVoice)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVoice = e.target.value
    setSelectedVoice(newVoice)
    localStorage.setItem('speechVoice', newVoice)
  }

  return (
    <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
      <Volume2 className="w-5 h-5 text-white" />
      <select
        value={selectedVoice}
        onChange={handleChange}
        className="bg-transparent text-white font-bold text-base border-none outline-none cursor-pointer appearance-none pr-6"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
        }}
      >
        {voices.map((voice) => (
          <option key={voice.id} value={voice.id} className="text-gray-900">
            {voice.name} {voice.recommended ? '⭐' : ''}
          </option>
        ))}
      </select>
    </div>
  )
}
