import './globals.css'


export const metadata = {
  title: 'Яндекс.Дом',
  description: 'Дом.Яндекс',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
