import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '立思实验室 ｜ Enligence Laboratory',
  description: '立思实验室 ｜ Enligence Laboratory',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-primary text-white">
      <body className={""}>{children}</body>
    </html>
  )
}
