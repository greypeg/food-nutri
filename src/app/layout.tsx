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
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
