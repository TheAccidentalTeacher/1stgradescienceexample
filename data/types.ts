// Type definitions for curriculum content

export interface Scripture {
  reference: string
  text: string
  version?: string
}

export interface Vocabulary {
  word: string
  definition: string
  emoji?: string
}

export interface Activity {
  title: string
  description: string
  materials: string[]
  safetyNotes?: string[]
  steps: string[]
  whatYoullDiscover: string
  imagePrompt?: string // For AI image generation
  imageStyle?: 'line-art' | 'watercolor' | 'cartoon' | 'realistic'
}

export interface ReviewQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  emoji?: string
}

export interface VideoResource {
  videoId: string // YouTube video ID
  title: string
  description: string
  duration?: string
}

export interface ContentBlock {
  type: 'explanation' | 'key-point' | 'fun-fact' | 'bible-connection'
  text: string
  emoji?: string
  imagePrompt?: string // Optional image for this content block
}

export interface Lesson {
  id: number | string
  unitId: number | string
  lessonNumber: number
  title: string
  subtitle: string
  icon: string
  heroImage?: string // URL or path or AI prompt
  heroImageStyle?: 'line-art' | 'watercolor' | 'cartoon' | 'realistic'
  scripture: Scripture
  objectives: string[]
  vocabulary: Vocabulary[]
  content: ContentBlock[]
  activities: Activity[]
  videos?: VideoResource[] // YouTube educational videos
  reviewQuestions: ReviewQuestion[]
  prayerPrompt: string
  oklahomaStandards: string[]
  estimatedTime: string
  nextLesson?: number
  previousLesson?: number
}

export interface Unit {
  id: number
  title: string
  subtitle: string
  icon: string
  color: string
  hoverColor: string
  description: string
  scripture: Scripture
  overview: string
  objectives: string[]
  lessonsCount: number
  oklahomaStandards: string[]
}
