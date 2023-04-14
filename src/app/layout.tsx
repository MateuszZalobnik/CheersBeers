import './globals.css'

export const metadata = {
  title: 'CheerToBeers',
  description: 'Beers web app built using free API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
