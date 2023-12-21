import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
    title: 'ChristmasGift',
    description : 'Suprise a friend with a Christmas Gift'
}

const Layout = ({children}) => {
    
  return (
    <html lang='en'>
        <body>
            <Provider >

            <main className="">
                {children}
            </main>
            </Provider>
        </body>

    </html>

    )
}

export default Layout