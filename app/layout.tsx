import type { Metadata } from 'next'
import './globals.css'
import AccessibilityPanel from '@/components/AccessibilityPanel'
import QuickVoicePicker from '@/components/QuickVoicePicker'

export const metadata: Metadata = {
  title: "Bobby's Science Adventure",
  description: "A 1st Grade Christian Science Curriculum - Young Earth Creation",
  keywords: 'science, 1st grade, homeschool, Christian, young earth creation, dinosaurs, Oklahoma standards',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Allow zooming for accessibility
    userScalable: true,
  },
  themeColor: '#2563eb', // Blue theme color
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Bobby's Science",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 md:p-4 shadow-lg">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <a href="/" className="text-2xl md:text-3xl font-bold hover:text-yellow-300 transition-colors tap-highlight touch-active no-select">
              🦕 Bobby&apos;s Science Adventure 🚜
            </a>
            <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto justify-center">
              <a href="/" className="text-lg md:text-xl hover:text-yellow-300 transition-colors tap-highlight touch-target no-select">
                Home
              </a>
              <a href="/units" className="text-lg md:text-xl hover:text-yellow-300 transition-colors tap-highlight touch-target no-select">
                Units
              </a>
              <QuickVoicePicker />
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-800 text-white p-6 mt-12">
          <div className="container mx-auto text-center">
            <p className="text-lg mb-2">
              &quot;The heavens declare the glory of God, and the sky above proclaims his handiwork.&quot;
            </p>
            <p className="text-sm text-gray-400">Psalm 19:1 (ESV)</p>
            <p className="text-sm text-gray-400 mt-4">
              Oklahoma 1st Grade Science Standards • Young Earth Creation Perspective
            </p>
          </div>
        </footer>

        {/* Accessibility Panel - Available on all pages */}
        <AccessibilityPanel />
      </body>
    </html>
  )
}
