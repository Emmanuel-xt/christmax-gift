import '@styles/globals.css'

export const metadata = {
    title: 'ChristmasGift',
    description : 'Suprise a friend with a Christmas Gift'
}

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <main className="">
                {children}
            </main>
        </body>

    </html>

    )
}

export default Layout