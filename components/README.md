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
- Loading states with fun animations
- Download button on hover
- Error handling with retry option
- Multiple art styles

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
OPENAI_API_KEY=         # DALL-E 3 image generation
PEXELS_API_KEY=         # Stock photos
UNSPLASH_ACCESS_KEY=    # Stock photos (alternative)
GIPHY_API_KEY=          # Educational GIFs
```
