'use client'

import { useState, useEffect } from 'react'
import { Check, Star, Sparkles } from 'lucide-react'

interface VocabCardProps {
  word: string
  definition: string
  emoji?: string
  lessonId: string
  wordIndex: number
}

export default function VocabCard({ word, definition, emoji, lessonId, wordIndex }: VocabCardProps) {
  const [isLearned, setIsLearned] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)
  const storageKey = `vocab-${lessonId}-${wordIndex}`

  useEffect(() => {
    // Check if this word was already learned
    const learned = localStorage.getItem(storageKey)
    if (learned === 'true') {
      setIsLearned(true)
    }
  }, [storageKey])

  const handleClick = () => {
    if (isLearned) return // Already learned, don't do anything

    // Flip animation
    setIsFlipping(true)
    
    setTimeout(() => {
      setIsLearned(true)
      localStorage.setItem(storageKey, 'true')
      
      // Update total words learned
      const currentTotal = parseInt(localStorage.getItem('totalWordsLearned') || '0')
      localStorage.setItem('totalWordsLearned', (currentTotal + 1).toString())
      
      setIsFlipping(false)
    }, 300)
  }

  return (
    <button
      onClick={handleClick}
      className={`
        relative rounded-xl p-6 border-2 text-left w-full
        transition-all duration-300
        ${isFlipping ? 'scale-105 rotate-2' : 'scale-100 rotate-0'}
        ${isLearned 
          ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-400 shadow-lg' 
          : 'bg-blue-50 border-blue-300 hover:border-blue-500 hover:shadow-md cursor-pointer'
        }
      `}
      disabled={isLearned}
    >
      {/* Learned badge */}
      {isLearned && (
        <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-2 shadow-lg animate-bounce">
          <Check className="w-6 h-6" />
        </div>
      )}

      {/* Sparkle effect when not learned */}
      {!isLearned && (
        <div className="absolute -top-2 -right-2 text-yellow-500 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>
      )}

      <div className="flex items-center gap-3 mb-2">
        {emoji && <span className="text-4xl">{emoji}</span>}
        <h3 className={`text-3xl font-bold ${isLearned ? 'text-green-900' : 'text-blue-900'}`}>
          {word}
        </h3>
      </div>
      <p className="text-xl text-gray-700">{definition}</p>

      {/* Click to learn prompt */}
      {!isLearned && (
        <div className="mt-3 text-sm text-blue-600 font-semibold flex items-center gap-2">
          <Star className="w-4 h-4" />
          Click to learn this word! ⭐
        </div>
      )}

      {isLearned && (
        <div className="mt-3 text-sm text-green-700 font-bold flex items-center gap-2">
          <Check className="w-4 h-4" />
          You learned this word! 🎉
        </div>
      )}
    </button>
  )
}
