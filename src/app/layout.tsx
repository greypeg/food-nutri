import React from 'react'
import Header from "./header/page"
import Footer from "./footer/page"
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='flex flex-col min-h-screen'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
