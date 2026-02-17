'use client'

import { useState, useEffect } from 'react'
import { Trophy, Star, Award } from 'lucide-react'

interface VocabProgressProps {
  lessonId: string
  totalWords: number
}

export default function VocabProgress({ lessonId, totalWords }: VocabProgressProps) {
  const [learnedCount, setLearnedCount] = useState(0)
  const [totalLifetimeWords, setTotalLifetimeWords] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    const checkProgress = () => {
      let learned = 0
      for (let i = 0; i < totalWords; i++) {
        const storageKey = `vocab-${lessonId}-${i}`
        if (localStorage.getItem(storageKey) === 'true') {
          learned++
        }
      }
      
      const previousCount = learnedCount
      setLearnedCount(learned)
      
      // Show celebration if just completed all words
      if (learned === totalWords && previousCount < totalWords && previousCount > 0) {
        setShowCelebration(true)
        setTimeout(() => setShowCelebration(false), 3000)
      }

      // Get total lifetime words
      const total = parseInt(localStorage.getItem('totalWordsLearned') || '0')
      setTotalLifetimeWords(total)
    }

    checkProgress()
    
    // Listen for storage changes (when vocab cards are clicked)
    window.addEventListener('storage', checkProgress)
    
    // Also check every second in case of same-tab updates
    const interval = setInterval(checkProgress, 1000)
    
    return () => {
      window.removeEventListener('storage', checkProgress)
      clearInterval(interval)
    }
  }, [lessonId, totalWords, learnedCount])

  const percentage = (learnedCount / totalWords) * 100
  const isComplete = learnedCount === totalWords

  return (
    <div className="space-y-4">
      {/* Main progress bar */}
      <div className="bg-white rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-purple-900 flex items-center gap-2">
            <Star className="w-7 h-7 text-yellow-500" />
            Your Progress
          </h3>
          <span className="text-3xl font-bold text-purple-900">
            {learnedCount}/{totalWords}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="bg-gray-200 rounded-full h-8 overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 flex items-center justify-center text-white font-bold ${
              isComplete ? 'bg-green-500' : 'bg-blue-500'
            }`}
            style={{ width: `${percentage}%` }}
          >
            {percentage > 20 && `${Math.round(percentage)}%`}
          </div>
        </div>

        {/* Encouragement message */}
        <div className="mt-3 text-center">
          {learnedCount === 0 && (
            <p className="text-lg text-gray-600">👆 Click on the word cards above to learn them!</p>
          )}
          {learnedCount > 0 && learnedCount < totalWords && (
            <p className="text-lg text-blue-700 font-semibold">
              Great job! Keep going! 💪
            </p>
          )}
          {isComplete && (
            <p className="text-lg text-green-700 font-bold flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6" />
              Amazing! You learned all the words! 🎉
            </p>
          )}
        </div>
      </div>

      {/* Lifetime stats */}
      {totalLifetimeWords > 0 && (
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 border-2 border-yellow-400">
          <div className="flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-orange-600" />
            <p className="text-xl font-bold text-orange-900">
              You've learned {totalLifetimeWords} word{totalLifetimeWords !== 1 ? 's' : ''} total! 🌟
            </p>
          </div>
        </div>
      )}

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-green-500 animate-bounce">
            <div className="text-center">
              <div className="text-9xl mb-4">🎉</div>
              <h2 className="text-5xl font-bold text-green-900 mb-4">
                LESSON COMPLETE!
              </h2>
              <p className="text-3xl text-green-700">
                You learned all {totalWords} words! 🌟
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
