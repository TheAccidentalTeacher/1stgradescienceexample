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
}

export interface ReviewQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  emoji?: string
}

export interface ContentBlock {
  type: 'explanation' | 'key-point' | 'fun-fact' | 'bible-connection'
  text: string
  emoji?: string
}

export interface Lesson {
  id: number | string
  unitId: number | string
  lessonNumber: number
  title: string
  subtitle: string
  icon: string
  heroImage?: string // URL or path
  scripture: Scripture
  objectives: string[]
  vocabulary: Vocabulary[]
  content: ContentBlock[]
  activities: Activity[]
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
