import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Bobby's Science Adventure",
  description: "A 1st Grade Christian Science Curriculum - Young Earth Creation",
  keywords: 'science, 1st grade, homeschool, Christian, young earth creation, dinosaurs, Oklahoma standards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <a href="/" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
              🦕 Bobby&apos;s Science Adventure 🚜
            </a>
            <div className="flex gap-4">
              <a href="/" className="text-xl hover:text-yellow-300 transition-colors">
                Home
              </a>
              <a href="/units" className="text-xl hover:text-yellow-300 transition-colors">
                Units
              </a>
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
      </body>
    </html>
  )
}
