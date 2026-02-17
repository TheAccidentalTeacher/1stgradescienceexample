import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock } from 'lucide-react'
import { unit1Lessons } from '@/data/lessons/unit-1-lessons'
import { unit2Lessons } from '@/data/lessons/unit-2-lessons'
import { unit3Lessons } from '@/data/lessons/unit-3-lessons'
import { unit4Lessons } from '@/data/lessons/unit-4-lessons'
import { unit5Lessons } from '@/data/lessons/unit-5-lessons'
import { unit6Lessons } from '@/data/lessons/unit-6-lessons'
import { unit7Lessons } from '@/data/lessons/unit-7-lessons'
import { unit8Lessons } from '@/data/lessons/unit-8-lessons'
import { Lesson } from '@/data/types'

// Generate static params for all lessons
export function generateStaticParams() {
  const params = []
  
  // Unit 1 has 7 lessons
  for (let i = 1; i <= 7; i++) {
    params.push({ id: '1', lessonId: i.toString() })
  }
  
  // Units 2-8 each have lesson 1 (for now)
  for (let unitId = 2; unitId <= 8; unitId++) {
    params.push({ id: unitId.toString(), lessonId: '1' })
  }
  
  return params
}

// Get lesson data
function getLessonData(unitId: number, lessonId: number): Lesson | null {
  const lessonMap: { [key: number]: Lesson[] } = {
    1: unit1Lessons,
    2: unit2Lessons,
    3: unit3Lessons,
    4: unit4Lessons,
    5: unit5Lessons,
    6: unit6Lessons,
    7: unit7Lessons,
    8: unit8Lessons
  }
  
  const lessons = lessonMap[unitId]
  if (!lessons) return null
  
  return lessons.find(l => l.lessonNumber === lessonId) || null
}

export default function LessonPage({ params }: { params: { id: string; lessonId: string } }) {
  const unitId = parseInt(params.id)
  const lessonId = parseInt(params.lessonId)
  const lesson = getLessonData(unitId, lessonId)

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Lesson Coming Soon! 🚧</h1>
        <p className="text-2xl text-gray-600 mb-8">We're still building this lesson for you, Bobby!</p>
        <Link href={`/units/${unitId}`} className="text-2xl text-blue-600 hover:text-blue-800 font-bold">
          ← Back to Unit
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Navigation */}
      <Link 
        href={`/units/${unitId}`} 
        className="inline-flex items-center gap-2 text-2xl text-blue-600 hover:text-blue-800 font-bold"
      >
        <ArrowLeft className="w-8 h-8" /> Back to Unit
      </Link>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl p-8 shadow-xl">
        <div className="flex items-start gap-6">
          <div className="text-9xl">{lesson.icon}</div>
          <div className="flex-grow space-y-3">
            <div className="flex items-center gap-4">
              <span className="bg-white text-purple-600 px-4 py-2 rounded-full text-xl font-bold">
                Lesson {lesson.id}
              </span>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-6 h-6" />
                <span className="text-lg">{lesson.estimatedTime}</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold">{lesson.title}</h1>
            <p className="text-2xl opacity-90">{lesson.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Scripture Section */}
      <div className="scripture-text">
        <div className="flex items-start gap-3 mb-3">
          <BookOpen className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div className="flex-grow">
            <p className="text-2xl mb-3">&quot;{lesson.scripture.text}&quot;</p>
            <p className="text-xl text-blue-700 font-bold">— {lesson.scripture.reference}</p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-500">
        <h2 className="text-4xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <span>🎯</span> What You'll Learn Today!
        </h2>
        <div className="space-y-3">
          {lesson.objectives.map((obj, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-2xl text-gray-800">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary Words */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">📚 New Words to Learn</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {lesson.vocabulary.map((vocab, index) => (
            <div key={index} className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
              <div className="flex items-center gap-3 mb-2">
                {vocab.emoji && <span className="text-4xl">{vocab.emoji}</span>}
                <h3 className="text-3xl font-bold text-blue-900">{vocab.word}</h3>
              </div>
              <p className="text-xl text-gray-700">{vocab.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Blocks */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">💡 Let's Learn!</h2>
        {lesson.content.map((block, index) => {
          const bgColors = {
            explanation: 'bg-white border-blue-200',
            'key-point': 'bg-yellow-50 border-yellow-400',
            'fun-fact': 'bg-purple-50 border-purple-400',
            'bible-connection': 'bg-green-50 border-green-400'
          }
          
          const titleEmojis = {
            explanation: '📖',
            'key-point': '⭐',
            'fun-fact': '🤩',
            'bible-connection': '✝️'
          }

          return (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border-2 ${bgColors[block.type]}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-5xl">{block.emoji || titleEmojis[block.type]}</span>
                <p className="text-2xl leading-relaxed text-gray-800">{block.text}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Activities */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">🎨 Fun Activities!</h2>
        {lesson.activities.map((activity, index) => (
          <div key={index} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border-2 border-orange-300 shadow-lg">
            <h3 className="text-3xl font-bold text-orange-900 mb-4">{activity.title}</h3>
            <p className="text-xl text-gray-700 mb-6 italic">{activity.description}</p>
            
            {/* Materials */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-orange-800 mb-3">📦 What You'll Need:</h4>
              <ul className="space-y-2">
                {activity.materials.map((material, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xl text-gray-800">
                    <span className="text-2xl">✓</span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Notes */}
            {activity.safetyNotes && activity.safetyNotes.length > 0 && (
              <div className="mb-6 bg-red-100 border-2 border-red-400 rounded-xl p-4">
                <h4 className="text-2xl font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Safety First!
                </h4>
                <ul className="space-y-2">
                  {activity.safetyNotes.map((note, idx) => (
                    <li key={idx} className="text-lg text-red-900">• {note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-orange-800 mb-3">📝 Step-by-Step:</h4>
              <ol className="space-y-4">
                {activity.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xl text-gray-800 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* What You'll Discover */}
            <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
              <h4 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span>💡</span> What You'll Discover!
              </h4>
              <p className="text-xl text-gray-800 leading-relaxed">{activity.whatYoullDiscover}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Review Questions - Interactive! */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-300">
        <h2 className="text-4xl font-bold text-purple-900 mb-6 flex items-center gap-3">
          <span>🧠</span> Check What You Learned!
        </h2>
        <p className="text-xl text-gray-700 mb-6">Click on the answer you think is right!</p>
        
        <div className="space-y-6">
          {lesson.reviewQuestions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white rounded-xl p-6 shadow-md" id={`question-${qIndex}`}>
              <div className="flex items-start gap-3 mb-4">
                {q.emoji && <span className="text-4xl">{q.emoji}</span>}
                <p className="text-2xl font-bold text-gray-900 flex-grow">
                  {qIndex + 1}. {q.question}
                </p>
              </div>
              <div className="grid gap-3">
                {q.options.map((option, oIndex) => (
                  <button
                    key={oIndex}
                    className="review-option text-left text-xl p-4 rounded-lg border-2 border-gray-300 bg-gray-50 hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer"
                    data-question={qIndex}
                    data-option={oIndex}
                    data-correct={q.correctAnswer}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="explanation hidden mt-4 p-4 rounded-lg" id={`explanation-${qIndex}`}>
                <p className="text-xl"></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prayer Section */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 text-center border-2 border-blue-300">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span>🙏</span> Prayer Time
        </h2>
        <p className="text-2xl text-gray-800 italic leading-relaxed max-w-3xl mx-auto">
          {lesson.prayerPrompt}
        </p>
      </div>

      {/* Oklahoma Standards */}
      <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-500">
        <h3 className="text-2xl font-bold text-green-900 mb-3">✓ Oklahoma Science Standards</h3>
        <div className="flex flex-wrap gap-3">
          {lesson.oklahomaStandards.map((standard, index) => (
            <span 
              key={index} 
              className="bg-green-600 text-white px-4 py-2 rounded-full text-lg font-semibold"
            >
              {standard}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center py-8">
        {lesson.previousLesson ? (
          <Link
            href={`/units/${unitId}/lesson/${lesson.previousLesson}`}
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-2xl font-bold hover:bg-blue-700 transition-all shadow-lg"
          >
            <ArrowLeft className="w-8 h-8" />
            Previous Lesson
          </Link>
        ) : (
          <div></div>
        )}

        {lesson.nextLesson ? (
          <Link
            href={`/units/${unitId}/lesson/${lesson.nextLesson}`}
            className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full text-2xl font-bold hover:bg-green-700 transition-all shadow-lg"
          >
            Next Lesson
            <ArrowRight className="w-8 h-8" />
          </Link>
        ) : (
          <Link
            href={`/units/${unitId}`}
            className="flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full text-2xl font-bold hover:bg-purple-700 transition-all shadow-lg"
          >
            <CheckCircle2 className="w-8 h-8" />
            Unit Complete!
          </Link>
        )}
      </div>

      {/* Interactive Script for Review Questions */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const options = document.querySelectorAll('.review-option');
          
          options.forEach(option => {
            option.addEventListener('click', function() {
              const questionIndex = parseInt(this.dataset.question);
              const optionIndex = parseInt(this.dataset.option);
              const correctIndex = parseInt(this.dataset.correct);
              const explanationDiv = document.getElementById('explanation-' + questionIndex);
              const explanationText = ${JSON.stringify(lesson.reviewQuestions.map(q => q.explanation))};
              
              // Reset all options in this question
              const allOptions = document.querySelectorAll('[data-question="' + questionIndex + '"]');
              allOptions.forEach(opt => {
                opt.classList.remove('bg-green-200', 'border-green-600', 'bg-red-200', 'border-red-600');
                opt.classList.add('bg-gray-50', 'border-gray-300');
              });
              
              // Mark correct/incorrect
              if (optionIndex === correctIndex) {
                this.classList.remove('bg-gray-50', 'border-gray-300');
                this.classList.add('bg-green-200', 'border-green-600');
                explanationDiv.classList.remove('hidden', 'bg-red-100');
                explanationDiv.classList.add('bg-green-100');
              } else {
                this.classList.remove('bg-gray-50', 'border-gray-300');
                this.classList.add('bg-red-200', 'border-red-600');
                allOptions[correctIndex].classList.remove('bg-gray-50', 'border-gray-300');
                allOptions[correctIndex].classList.add('bg-green-200', 'border-green-600');
                explanationDiv.classList.remove('hidden', 'bg-green-100');
                explanationDiv.classList.add('bg-red-100');
              }
              
              // Show explanation
              explanationDiv.querySelector('p').textContent = explanationText[question Index];
            });
          });
        });
      ` }} />
    </div>
  )
}
