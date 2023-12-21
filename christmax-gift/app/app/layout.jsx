import React from 'react'

export default function AppLayout({children}) {
  return (
    <section>
        <main className="relative">
            {children}
        </main>
    </section>
  )
}

