import Provider from '@components/Provider'
import React from 'react'

export default function AppLayout({children}) {
  return (
    <section>
      <Provider >

        <main className="relative">
            {children}
        </main>
      </Provider>
    </section>
  )
}

