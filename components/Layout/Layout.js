import React from 'react'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import GlobalStyles from '../globalStyles'
import { StateProvider } from '../ContextApi/StateProvider'
import { initialState } from '../Reducer/reducer'
import reducer from '../Reducer/reducer'


const Layout = ({children}) => {
    return (
        <>
        <StateProvider initialState={initialState} reducer={reducer}>
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
        </StateProvider>
        </>
    )
}

export default Layout
