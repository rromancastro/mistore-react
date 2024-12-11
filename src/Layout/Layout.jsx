import { NavBar, Footer } from '../components'

export const Layout = ( {children} ) => {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}