// Image generation and fetching service for kid-friendly educational content

interface ImageOptions {
  prompt: string
  style?: 'line-art' | 'watercolor' | 'cartoon' | 'realistic'
  ageAppropriate?: boolean
}

/**
 * Generate AI image using OpenAI DALL-E
 * Perfect for custom educational illustrations
 */
export async function generateAIImage(options: ImageOptions): Promise<string> {
  const { prompt, style = 'line-art', ageAppropriate = true } = options
  
  // Enhance prompt for kid-friendly content
  const enhancedPrompt = ageAppropriate 
    ? `${prompt}, child-friendly, educational, colorful, safe for 7-year-old, ${style} style, simple and clear, biblical perspective`
    : prompt

  try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: enhancedPrompt,
        style 
      })
    })
    
    if (!response.ok) throw new Error('Failed to generate image')
    
    const data = await response.json()
    return data.imageUrl
  } catch (error) {
    console.error('AI image generation failed:', error)
    return '/images/placeholder.jpg' // Fallback
  }
}

/**
 * Fetch stock photos from Pexels/Unsplash
 * Great for real-world examples
 */
export async function fetchStockPhoto(query: string, source: 'pexels' | 'unsplash' = 'pexels'): Promise<string> {
  try {
    const response = await fetch(`/api/stock-photo?query=${encodeURIComponent(query)}&source=${source}`)
    
    if (!response.ok) throw new Error('Failed to fetch stock photo')
    
    const data = await response.json()
    return data.imageUrl
  } catch (error) {
    console.error('Stock photo fetch failed:', error)
    return '/images/placeholder.jpg'
  }
}

/**
 * Generate line-art coloring page
 * Perfect for printable activities
 */
export async function generateColoringPage(subject: string): Promise<string> {
  return generateAIImage({
    prompt: `Simple black and white line drawing of ${subject} for coloring, clean outlines, no shading, coloring book style`,
    style: 'line-art',
    ageAppropriate: true
  })
}

/**
 * Pre-generate image for faster loading
 * Call this during build time for static export
 */
export async function preGenerateImages(lessons: any[]): Promise<Map<string, string>> {
  const imageCache = new Map<string, string>()
  
  for (const lesson of lessons) {
    // Generate hero image
    if (lesson.heroImage) {
      const url = await generateAIImage({ 
        prompt: lesson.heroImage,
        style: 'watercolor'
      })
      imageCache.set(`hero-${lesson.id}`, url)
    }
    
    // Generate activity images
    for (const activity of lesson.activities) {
      if (activity.imagePrompt) {
        const url = await generateAIImage({
          prompt: activity.imagePrompt,
          style: 'cartoon'
        })
        imageCache.set(`activity-${lesson.id}-${activity.title}`, url)
      }
    }
  }
  
  return imageCache
}

/**
 * Get educational GIF from Giphy
 * For fun, animated explanations
 */
export async function getEducationalGif(searchTerm: string): Promise<string> {
  try {
    const response = await fetch(`/api/giphy?search=${encodeURIComponent(searchTerm)}`)
    
    if (!response.ok) throw new Error('Failed to fetch GIF')
    
    const data = await response.json()
    return data.gifUrl
  } catch (error) {
    console.error('GIF fetch failed:', error)
    return ''
  }
}
