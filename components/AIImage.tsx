'use client'

import { useState, useEffect } from 'react'
import { Loader2, Download } from 'lucide-react'

interface AIImageProps {
  prompt: string
  style?: 'line-art' | 'watercolor' | 'cartoon' | 'realistic'
  alt: string
  className?: string
  showPrompt?: boolean
}

export default function AIImage({ prompt, style = 'cartoon', alt, className = '', showPrompt = false }: AIImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    generateImage()
  }, [prompt, style])
  
  async function generateImage() {
    try {
      setLoading(true)
      setError(false)
      
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, style })
      })
      
      if (response.status === 503) {
        // API key not configured - show friendly message
        setError(true)
        return
      }
      
      if (!response.ok) throw new Error('Generation failed')
      
      const data = await response.json()
      setImageUrl(data.imageUrl)
    } catch (err) {
      console.error('Failed to generate image:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  
  function downloadImage() {
    if (!imageUrl) return
    
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `${alt.replace(/\s+/g, '-')}.png`
    link.click()
  }
  
  if (loading) {
    return (
      <div className={`bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-xl font-bold text-gray-700">Creating your picture...</p>
          <p className="text-lg text-gray-600 mt-2">✨ Using AI magic! ✨</p>
        </div>
      </div>
    )
  }
  
  if (error || !imageUrl) {
    return (
      <div className={`bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-blue-300 rounded-2xl p-6 ${className}`}>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-900 mb-3">
            🎨 Image Preview
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {alt}
          </p>
          <p className="text-md text-gray-600 italic">
            AI image generation ready when API keys are configured
          </p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="relative group">
      <img 
        src={imageUrl} 
        alt={alt}
        className={`rounded-2xl shadow-lg border-4 border-white ${className}`}
      />
      
      {/* Download button appears on hover */}
      <button
        onClick={downloadImage}
        className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        title="Download image"
      >
        <Download className="w-6 h-6 text-blue-600" />
      </button>
      
      {showPrompt && (
        <div className="mt-3 bg-gray-100 rounded-lg p-3">
          <p className="text-sm text-gray-600 italic">🎨 AI Prompt: {prompt}</p>
        </div>
      )}
    </div>
  )
}
