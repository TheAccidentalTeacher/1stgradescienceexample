'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface YouTubeVideoProps {
  videoId: string
  title: string
  description?: string
  thumbnail?: string
}

export default function YouTubeVideo({ videoId, title, description }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbnailError, setThumbnailError] = useState(false)
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-blue-300">
      <div className="relative aspect-video bg-gray-900">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative group cursor-pointer"
          >
            {!thumbnailError ? (
              <img 
                src={thumbnailUrl} 
                alt={title}
                className="w-full h-full object-cover"
                onError={() => setThumbnailError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-24 h-24 mx-auto mb-4 opacity-75" />
                  <p className="text-2xl font-bold">Click to Play Video</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
              <div className="bg-red-600 rounded-full p-8 group-hover:scale-110 transition-transform">
                <Play className="w-16 h-16 text-white fill-white" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">📺 {title}</h3>
        {description && (
          <p className="text-lg text-gray-700">{description}</p>
        )}
      </div>
    </div>
  )
}
