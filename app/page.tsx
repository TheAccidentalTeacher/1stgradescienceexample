import Link from 'next/link'
import { BookOpen, Microscope, Globe, Wrench, Sparkles } from 'lucide-react'

const units = [
  {
    id: 1,
    title: 'God Made Everything!',
    subtitle: 'Creation Week',
    icon: '🌟',
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
    description: 'Learn about the 6 days of creation!',
  },
  {
    id: 2,
    title: "Dinosaurs",
    subtitle: "God's Amazing Lizards",
    icon: '🦕',
    color: 'bg-dinosaur',
    hoverColor: 'hover:bg-purple-700',
    description: 'Discover awesome dinosaurs God created!',
  },
  {
    id: 3,
    title: 'Big Machines',
    subtitle: 'Simple Machines & Physics',
    icon: '🚜',
    color: 'bg-truck',
    hoverColor: 'hover:bg-orange-700',
    description: 'Learn how trucks and machines work!',
  },
  {
    id: 4,
    title: 'Bugs Are Cool!',
    subtitle: 'Insects & Small Creatures',
    icon: '🐛',
    color: 'bg-bug',
    hoverColor: 'hover:bg-lime-600',
    description: 'Explore tiny creatures God designed!',
  },
  {
    id: 5,
    title: 'Amazing Plants',
    subtitle: 'Seeds, Trees & Flowers',
    icon: '🌱',
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    description: 'See how plants grow from tiny seeds!',
  },
  {
    id: 6,
    title: 'Weather & Seasons',
    subtitle: 'Sun, Moon, Stars & Rain',
    icon: '☀️',
    color: 'bg-yellow-500',
    hoverColor: 'hover:bg-yellow-600',
    description: 'Understand God\'s patterns in the sky!',
  },
  {
    id: 7,
    title: 'My Amazing Body',
    subtitle: 'Five Senses',
    icon: '👂',
    color: 'bg-pink-500',
    hoverColor: 'hover:bg-pink-600',
    description: 'You are fearfully and wonderfully made!',
  },
  {
    id: 8,
    title: 'The Earth',
    subtitle: 'Rocks, Mountains & The Flood',
    icon: '⛰️',
    color: 'bg-amber-700',
    hoverColor: 'hover:bg-amber-800',
    description: 'Learn about the earth God gave us!',
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl shadow-xl">
        <h1 className="text-6xl font-bold text-gray-900">
          Welcome, Bobby! 🎉
        </h1>
        <p className="text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Get ready to explore <span className="text-blue-600 font-bold">God&apos;s Amazing Creation</span> through science!
        </p>
        <div className="flex justify-center gap-6 text-6xl pt-4">
          <span className="bounce-on-hover cursor-pointer">🦕</span>
          <span className="bounce-on-hover cursor-pointer">🚜</span>
          <span className="bounce-on-hover cursor-pointer">🌟</span>
          <span className="bounce-on-hover cursor-pointer">🐛</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="activity-card text-center">
          <BookOpen className="w-16 h-16 mx-auto text-blue-600 mb-3" />
          <h3 className="text-2xl font-bold">8 Units</h3>
          <p className="text-gray-600">Fun Topics</p>
        </div>
        <div className="activity-card text-center">
          <Microscope className="w-16 h-16 mx-auto text-green-600 mb-3" />
          <h3 className="text-2xl font-bold">Many</h3>
          <p className="text-gray-600">Experiments</p>
        </div>
        <div className="activity-card text-center">
          <Globe className="w-16 h-16 mx-auto text-purple-600 mb-3" />
          <h3 className="text-2xl font-bold">Bible</h3>
          <p className="text-gray-600">Verses</p>
        </div>
        <div className="activity-card text-center">
          <Wrench className="w-16 h-16 mx-auto text-orange-600 mb-3" />
          <h3 className="text-2xl font-bold">Hands-On</h3>
          <p className="text-gray-600">Activities</p>
        </div>
      </div>

      {/* Units Grid */}
      <div>
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-900">
          Choose Your Adventure! 🚀
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.map((unit) => (
            <Link
              key={unit.id}
              href={`/units/${unit.id}`}
              className={`${unit.color} ${unit.hoverColor} text-white rounded-2xl p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer`}
            >
              <div className="text-center space-y-3">
                <div className="text-7xl mb-2">{unit.icon}</div>
                <h3 className="text-2xl font-bold">{unit.title}</h3>
                <p className="text-lg opacity-90">{unit.subtitle}</p>
                <p className="text-sm opacity-80 pt-2">{unit.description}</p>
                <div className="pt-4">
                  <Sparkles className="w-8 h-8 mx-auto" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bible Verse Section */}
      <div className="scripture-text text-center py-8">
        <p className="text-2xl mb-3">
          &quot;In the beginning, God created the heavens and the earth.&quot;
        </p>
        <p className="text-lg text-blue-700">Genesis 1:1 (ESV)</p>
      </div>

      {/* Learning Goals */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          What You&apos;ll Learn This Year! 📚
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-xl">
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>How God created everything in 6 days</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>All about dinosaurs and when they lived</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>How big machines and trucks work</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>Why bugs are important (even if small!)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>How plants grow from tiny seeds</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>Patterns in weather and seasons</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>How your amazing body works</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl">✅</span>
            <p>About the great Flood and Noah&apos;s Ark</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <Link
          href="/units"
          className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white text-3xl font-bold py-6 px-12 rounded-full shadow-2xl transform transition-all hover:scale-110 hover:shadow-3xl"
        >
          Start Learning Now! 🎓
        </Link>
      </div>
    </div>
  )
}
