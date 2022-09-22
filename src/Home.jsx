import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navegacion from './routes/Navegacion'

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Navegacion />
            </main>
            <Footer />
        </>
    )
}
