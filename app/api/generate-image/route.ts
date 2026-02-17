import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 503 }
      )
    }

    const { prompt, style } = await request.json()
    
    // Map style to DALL-E parameters
    const stylePrompts: Record<string, string> = {
      'line-art': ', simple black and white line drawing, coloring book style, clean outlines',
      'watercolor': ', soft watercolor illustration, gentle colors, painterly',
      'cartoon': ', friendly cartoon style, bright colors, simple shapes, kid-friendly',
      'realistic': ', photorealistic, detailed, educational photograph style'
    }
    
    const fullPrompt = prompt + (stylePrompts[style] || stylePrompts['cartoon'])
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: fullPrompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: style === 'line-art' ? 'natural' : 'vivid'
    })
    
    const imageUrl = response.data?.[0]?.url
    
    if (!imageUrl) {
      throw new Error('No image URL returned from OpenAI')
    }
    
    return NextResponse.json({ imageUrl })
  } catch (error: any) {
    console.error('DALL-E generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate image', details: error.message },
      { status: 500 }
    )
  }
}
