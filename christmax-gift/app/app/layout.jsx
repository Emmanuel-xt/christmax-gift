import React from 'react'

export default function AppLayout({children}) {
  return (
    <section>
        <main className="">
            {children}
        </main>
    </section>
  )
}

