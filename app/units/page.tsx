import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const units = [
  {
    id: 1,
    title: 'Unit 1: God Made Everything!',
    subtitle: 'Creation Week - Genesis 1-2',
    lessons: 7,
    color: 'bg-purple-100 border-purple-500',
    icon: '🌟',
  },
  {
    id: 2,
    title: "Unit 2: Dinosaurs",
    subtitle: "God's Amazing Lizards",
    lessons: 5,
    color: 'bg-purple-100 border-dinosaur',
    icon: '🦕',
  },
  {
    id: 3,
    title: 'Unit 3: Big Machines',
    subtitle: 'Simple Machines & Physics',
    lessons: 5,
    color: 'bg-orange-100 border-truck',
    icon: '🚜',
  },
  {
    id: 4,
    title: 'Unit 4: Bugs Are Cool!',
    subtitle: 'Insects & Small Creatures',
    lessons: 6,
    color: 'bg-lime-100 border-bug',
    icon: '🐛',
  },
  {
    id: 5,
    title: 'Unit 5: Amazing Plants',
    subtitle: 'Seeds, Trees & Flowers',
    lessons: 5,
    color: 'bg-green-100 border-green-600',
    icon: '🌱',
  },
  {
    id: 6,
    title: 'Unit 6: Weather & Seasons',
    subtitle: "God's Patterns in Nature",
    lessons: 5,
    color: 'bg-yellow-100 border-yellow-500',
    icon: '☀️',
  },
  {
    id: 7,
    title: 'Unit 7: My Amazing Body',
    subtitle: 'Fearfully and Wonderfully Made',
    lessons: 5,
    color: 'bg-pink-100 border-pink-500',
    icon: '👂',
  },
  {
    id: 8,
    title: 'Unit 8: The Earth',
    subtitle: 'Rocks, Mountains & The Flood',
    lessons: 5,
    color: 'bg-amber-100 border-amber-700',
    icon: '⛰️',
  },
]

export default function UnitsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-900">
          All Science Units 📚
        </h1>
        <p className="text-2xl text-gray-600">
          Click on any unit to start learning!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {units.map((unit) => (
          <Link
            key={unit.id}
            href={`/units/${unit.id}`}
            className={`${unit.color} border-4 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-start gap-6">
              <div className="text-7xl flex-shrink-0">{unit.icon}</div>
              <div className="flex-grow space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">{unit.title}</h2>
                <p className="text-xl text-gray-700">{unit.subtitle}</p>
                <div className="flex items-center gap-2 text-gray-600 pt-2">
                  <span className="text-lg font-semibold">{unit.lessons} Lessons</span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="scripture-text text-center py-8 mt-12">
        <p className="text-2xl mb-3">
          &quot;For by him all things were created, in heaven and on earth, visible and invisible...&quot;
        </p>
        <p className="text-lg text-blue-700">Colossians 1:16 (ESV)</p>
      </div>
    </div>
  )
}
