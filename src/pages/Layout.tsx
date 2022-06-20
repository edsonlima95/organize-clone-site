import { useState } from "react"
import Header from "../components/Header"
import { MenuLeft } from "../components/MenuLeft"


type LayoutProps = {
    children: React.ReactNode
}


function Layout({ children }: LayoutProps) {

    const [isMenuOpen, setMenuOpen] = useState(false)

   function menuOpen(){
       setMenuOpen(!isMenuOpen)
   }

    return (
        <>
            <Header menuOpen={menuOpen} />
            <main className="">
                <MenuLeft isMenuOpen={isMenuOpen} onMenuToggle={setMenuOpen}></MenuLeft>
                {children}
            </main>
        </>

    )

}

export default Layout