import './globals.css'
import localFont from 'next/font/local'

const Aeonik = localFont({
   src:'fonts/Aeonik-Medium.otf',
   variable:'--font-medium' })
const AeonikBold = localFont({
    src:'fonts/Aeonik-Bold.otf',
    variable:'--font-bold' })
 
const AeonikBlack = localFont({
   src:'fonts/Aeonik-Black.otf', 
   variable: '--font-black'})

export const metadata = {
  title: 'First Online Money Transfer',
  description: 'First Online Money Transfer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Aeonik.variable} ${AeonikBold.variable} ${AeonikBlack.variable} `}>{children}</body>
    </html>
  )
}
