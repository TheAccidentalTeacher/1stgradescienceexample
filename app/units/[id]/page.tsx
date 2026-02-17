import Link from 'next/link'
import { ArrowLeft, Book, Clock, Target } from 'lucide-react'
import { unit1Lessons } from '@/data/lessons/unit-1-lessons'
import { unit2Lessons } from '@/data/lessons/unit-2-lessons'
import { unit3Lessons } from '@/data/lessons/unit-3-lessons'
import { unit4Lessons } from '@/data/lessons/unit-4-lessons'
import { unit5Lessons } from '@/data/lessons/unit-5-lessons'
import { unit6Lessons } from '@/data/lessons/unit-6-lessons'
import { unit7Lessons } from '@/data/lessons/unit-7-lessons'
import { unit8Lessons } from '@/data/lessons/unit-8-lessons'
import { Lesson } from '@/data/types'

// Map unit IDs to their lessons
const unitLessons: { [key: string]: Lesson[] } = {
  '1': unit1Lessons,
  '2': unit2Lessons,
  '3': unit3Lessons,
  '4': unit4Lessons,
  '5': unit5Lessons,
  '6': unit6Lessons,
  '7': unit7Lessons,
  '8': unit8Lessons,
}

// Generate static params for all unit IDs
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ]
}

const unitData: Record<string, any> = {
  '1': {
    id: 1,
    title: 'God Made Everything!',
    subtitle: 'Creation Week',
    icon: '🌟',
    color: 'bg-purple-500',
    scripture: {
      text: 'In the beginning, God created the heavens and the earth.',
      reference: 'Genesis 1:1',
    },
    overview: 'Learn about the amazing 6 days of creation and how God made everything we see!',
    objectives: [
      'Understand that God created everything in 6 days',
      'Learn what was created each day',
      'See that God called His creation "good"',
      'Know that God rested on Day 7',
    ],
    lessons: [
      {
        day: 1,
        title: 'Day 1: Light and Darkness',
        description: 'God separated light from darkness',
        activities: ['Drawing light and dark', 'Flashlight exploration', 'Day/night observation'],
      },
      {
        day: 2,
        title: 'Day 2: Sky and Water',
        description: 'God made the sky and separated waters',
        activities: ['Cloud watching', 'Water cycle demonstration', 'Sky painting'],
      },
      {
        day: 3,
        title: 'Day 3: Land and Plants',
        description: 'God made dry land appear and created plants',
        activities: ['Plant a seed', 'Soil exploration', 'Leaf collection'],
      },
      {
        day: 4,
        title: 'Day 4: Sun, Moon, and Stars',
        description: 'God created the sun, moon, and stars',
        activities: ['Shadow tracing', 'Moon phases chart', 'Star observation'],
      },
      {
        day: 5,
        title: 'Day 5: Sea Creatures and Birds',
        description: 'God filled the waters and sky with life',
        activities: ['Fish craft', 'Bird watching', 'Ocean sounds'],
      },
      {
        day: 6,
        title: 'Day 6: Land Animals and People',
        description: 'God made animals (including dinosaurs!) and people',
        activities: ['Animal sorting', 'Dinosaur models', 'Image of God discussion'],
      },
      {
        day: 7,
        title: 'Day 7: Rest',
        description: 'God rested and said creation was very good',
        activities: ['Rest and reflection', 'Creation week review', 'Thank you prayer'],
      },
    ],
    oklahomaStandards: [
      '1.ESS1.1 - Patterns in the sky',
      '1.LS1.1 - Plant and animal structures',
      '1.LS3.1 - Parent-offspring similarities',
    ],
  },
  '2': {
    id: 2,
    title: 'Dinosaurs',
    subtitle: "God's Amazing Lizards",
    icon: '🦕',
    color: 'bg-dinosaur',
    scripture: {
      text: 'Behold, Behemoth, which I made as I made you...',
      reference: 'Job 40:15',
    },
    overview: 'Discover the awesome dinosaurs God created on Day 6 and learn why they are so special!',
    objectives: [
      'Learn that dinosaurs lived with people',
      'Understand different types of dinosaurs',
      'Know what happened to dinosaurs (The Flood)',
      'See dinosaurs as part of God\'s creation',
    ],
    lessons: [
      {
        day: 1,
        title: 'What Are Dinosaurs?',
        description: 'Created kinds on Day 6',
        activities: ['Dinosaur sorting', 'Name learning', 'Size comparison'],
      },
      {
        day: 2,
        title: 'Plant-Eating Dinosaurs',
        description: 'Herbivores - gentle giants',
        activities: ['Herbivore models', 'Plant diet exploration', 'Long-neck crafts'],
      },
      {
        day: 3,
        title: 'Meat-Eating Dinosaurs',
        description: 'After the Fall - carnivores appeared',
        activities: ['T-Rex study', 'Teeth comparison', 'Defense mechanisms'],
      },
      {
        day: 4,
        title: 'Where Did Dinosaurs Go?',
        description: 'The Great Flood',
        activities: ['Flood story', 'Fossil formation demo', 'Noah\'s Ark discussion'],
      },
      {
        day: 5,
        title: 'Dinosaurs in the Bible',
        description: 'Behemoth and Leviathan',
        activities: ['Job 40 reading', 'Dragon legends', 'Dinosaur timeline'],
      },
    ],
    oklahomaStandards: [
      '1.LS1.1 - Animal structures',
      '1.LS1.2 - Parent-offspring behavior',
      '1.LS3.1 - Similarities in offspring',
    ],
  },
}

export default async function UnitPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const unit = unitData[id]
  const lessons = unitLessons[id] || []

  if (!unit) {
    return (
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Unit Coming Soon! 🚧</h1>
        <p className="text-2xl text-gray-600 mb-8">This unit is being built just for you, Bobby!</p>
        <Link href="/units" className="text-2xl text-blue-600 hover:text-blue-800 font-bold">
          ← Back to All Units
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <Link href="/units" className="inline-flex items-center gap-2 text-2xl text-blue-600 hover:text-blue-800 font-bold">
        <ArrowLeft className="w-8 h-8" /> Back to Units
      </Link>

      {/* Header */}
      <div className={`${unit.color} text-white rounded-3xl p-8 shadow-xl`}>
        <div className="flex items-center gap-6">
          <div className="text-9xl">{unit.icon}</div>
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">{unit.title}</h1>
            <p className="text-2xl opacity-90">{unit.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Scripture */}
      <div className="scripture-text">
        <p className="text-2xl mb-2">&quot;{unit.scripture.text}&quot;</p>
        <p className="text-lg text-blue-700">{unit.scripture.reference} (ESV)</p>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">What You&apos;ll Learn 🎯</h2>
        <p className="text-2xl text-gray-700 mb-6">{unit.overview}</p>
        <div className="space-y-3">
          {unit.objectives.map((obj: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-3xl">✅</span>
              <p className="text-xl text-gray-800 pt-1">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lessons */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Lessons 📖</h2>
        {lessons.length > 0 ? (
          <div className="space-y-6">
            {lessons.map((lesson, index) => (
              <Link 
                key={lesson.id} 
                href={`/units/${id}/lesson/${lesson.lessonNumber}`}
                className="activity-card hover:border-primary block transition-all hover:scale-102 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    {lesson.lessonNumber}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{lesson.icon}</span>
                      <h3 className="text-3xl font-bold text-gray-900">{lesson.title}</h3>
                    </div>
                    <p className="text-xl text-gray-700 mb-3">{lesson.subtitle}</p>
                    <div className="flex items-center gap-2 text-lg text-gray-600 mb-4">
                      <Clock className="w-5 h-5" />
                      <span>{lesson.estimatedTime}</span>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 mb-3">
                      <p className="text-lg font-bold text-blue-900 mb-2">What You'll Do:</p>
                      <ul className="space-y-2">
                        {lesson.activities.slice(0, 3).map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center gap-2 text-lg text-blue-800">
                            <span className="text-2xl">🎨</span>
                            {activity.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-3 mb-3">
                      <p className="text-lg font-bold text-purple-900 mb-1">📖 Scripture:</p>
                      <p className="text-md text-purple-800">{lesson.scripture.reference}</p>
                    </div>
                    
                    <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-xl">
                      <span>Start Lesson</span>
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 text-center">
            <p className="text-2xl text-yellow-800 font-bold mb-2">📚 Lessons Coming Soon!</p>
            <p className="text-xl text-yellow-700">We're building amazing lessons for this unit!</p>
          </div>
        )}
      </div>

      {/* Oklahoma Standards */}
      <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-500">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-10 h-10 text-green-700" />
          <h2 className="text-3xl font-bold text-green-900">Oklahoma Science Standards</h2>
        </div>
        <ul className="space-y-2">
          {unit.oklahomaStandards.map((standard: string, index: number) => (
            <li key={index} className="text-xl text-green-800 flex items-center gap-2">
              <span className="text-2xl">✓</span>
              {standard}
            </li>
          ))}
        </ul>
      </div>

      {/* Start Button */}
      <div className="text-center py-8">
        <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-3xl font-bold py-6 px-12 rounded-full shadow-2xl transform transition-all hover:scale-110">
          Start Lesson 1! 🚀
        </button>
      </div>
    </div>
  )
}
