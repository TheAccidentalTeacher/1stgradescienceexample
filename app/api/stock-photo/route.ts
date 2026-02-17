import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const source = searchParams.get('source') || 'pexels'
  
  if (!query) {
    return NextResponse.json({ error: 'Query parameter required' }, { status: 400 })
  }
  
  try {
    if (source === 'pexels') {
      return await fetchFromPexels(query)
    } else if (source === 'unsplash') {
      return await fetchFromUnsplash(query)
    } else {
      return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
    }
  } catch (error: any) {
    console.error('Stock photo fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stock photo', details: error.message },
      { status: 500 }
    )
  }
}

async function fetchFromPexels(query: string) {
  if (!process.env.PEXELS_API_KEY) {
    throw new Error('Pexels API key not configured')
  }

  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY
      }
    }
  )
  
  if (!response.ok) throw new Error('Pexels API error')
  
  const data = await response.json()
  const imageUrl = data.photos?.[0]?.src?.large || '/images/placeholder.jpg'
  
  return NextResponse.json({ imageUrl })
}

async function fetchFromUnsplash(query: string) {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    throw new Error('Unsplash API key not configured')
  }

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    }
  )
  
  if (!response.ok) throw new Error('Unsplash API error')
  
  const data = await response.json()
  const imageUrl = data.results?.[0]?.urls?.regular || '/images/placeholder.jpg'
  
  return NextResponse.json({ imageUrl })
}
