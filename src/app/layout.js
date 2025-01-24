import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TerraScout - Location Intelligence Platform',
  description: 'AI-powered location intelligence for smarter business decisions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Maps API */}
        <script src={`https://cdnjs.cloudflare.com/ajax/libs/react-leaflet/3.2.5/react-leaflet.min.js`} 
                defer></script>
      </head>
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">TerraScout</h1>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
