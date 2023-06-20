import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Hero',
  description: 'Next Hero',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href='/home'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </nav>
        {children}
        <footer className='text-center my-5'>all copyright resolved by Rashed Hasan</footer>
        </body>
    </html>
  )
}

export default RootLayout
