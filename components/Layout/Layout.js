import React from 'react'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import GlobalStyles from '../globalStyles'


const Layout = ({children}) => {
    return (
        <>
        <GlobalStyles/>
        <nav>
          <Navbar/>  
        </nav>
        <main>
                {children}
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default Layout
