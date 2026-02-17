# Multimedia Components

These components bring lessons to life with AI-generated images and educational videos!

## AIImage Component

Generates kid-friendly educational images using DALL-E 3.

### Usage

```tsx
import AIImage from '@/components/AIImage'

<AIImage 
  prompt="A friendly T-Rex and child exploring together in a garden"
  style="cartoon"  // 'line-art' | 'watercolor' | 'cartoon' | 'realistic'
  alt="Dinosaur exploration activity"
  className="w-full h-96"
  showPrompt={false}  // Optional: show the AI prompt below image
/>
```

### Features
- Automatic kid-friendly content filtering
- Loading states with fun animations ("Creating your picture... ✨ Using AI magic!")
- Download button on hover (appears when image loads)
- Error handling with professional placeholder UI
- Multiple art styles (line-art, watercolor, cartoon, realistic)
- **Graceful degradation** - Shows friendly placeholder when API keys not configured
- **503 status detection** - Automatically detects missing API keys and shows blue/purple gradient placeholder

## YouTubeVideo Component

Embeds YouTube videos with preview thumbnails and click-to-play.

### Usage

```tsx
import YouTubeVideo from '@/components/YouTubeVideo'

<YouTubeVideo 
  videoId="AJVCTrGq5CY"
  title="Creation Day 1 - Let There Be Light!"
  description="Watch this fun video about God creating light"
/>
```

### Features
- Thumbnail preview before loading video
- Click-to-play (saves bandwidth)
- Responsive aspect ratio
- Kid-safe embed parameters (no related videos)
- **Thumbnail error handling** - Shows gradient fallback if YouTube thumbnail unavailable

## Image Service

Backend utilities for fetching and generating images.

### API Routes

**Generate AI Image:**
- Endpoint: `/api/generate-image`
- Method: POST
- Body: `{ prompt: string, style: string }`

**Fetch Stock Photo:**
- Endpoint: `/api/stock-photo?query=dinosaur&source=pexels`
- Method: GET
- Sources: 'pexels' | 'unsplash'

### Environment Variables Required

```env
OPENAI_API_KEY=         # DALL-E 3 image generation (REQUIRED for AI images)
PEXELS_API_KEY=         # Stock photos (optional)
UNSPLASH_ACCESS_KEY=    # Stock photos (optional)
```

## Fallback & Error Handling

The multimedia system is designed to work gracefully whether API keys are configured or not:

### 5-Layer Fallback System

1. **Conditional Rendering** - Components only render when data exists
2. **Loading States** - Beautiful animated loading UI during generation
3. **API Key Detection** - Returns 503 status when keys missing
4. **Professional Placeholders** - Blue/purple gradient with friendly message
5. **Error Recovery** - Handles network failures and API errors gracefully

### Without API Keys Configured

When `OPENAI_API_KEY` is not set in Vercel:
- AIImage shows: "🎨 Image Preview - AI image generation ready when API keys are configured"
- Site remains fully functional with all text content, activities, and structure
- Perfect for demos, offline use, or presentations

### With API Keys Configured

When `OPENAI_API_KEY` is set in Vercel environment variables:
- AI-generated images appear automatically (10-15 second generation time)
- Watercolor style for Bible/Creation lessons
- Cartoon style for science lessons
- Download buttons on all generated images
- Cached on CDN after first generation

### Local Development

Create `.env.local` in project root:
```env
OPENAI_API_KEY=your_key_here
```

**Note:** `.env.local` is gitignored and never committed. For production, add keys to Vercel dashboard.
