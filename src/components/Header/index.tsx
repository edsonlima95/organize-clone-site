import Link from "next/link"
import { CurrencyBtc, List } from 'phosphor-react'
import { Dispatch, SetStateAction } from "react"


type HeaderProps = {
  menuOpen: () => void
}

function Header({menuOpen}:HeaderProps) {

  return (
    <header className="bg-gradient-to-r from-[#1ef29e] to-[#13e2b8] h-16 flex items-center">
      <div className="pl-5 ml-5 flex">
        <Link href="/">
          <CurrencyBtc size={25} color="#1ef29e" className="bg-white h-10 w-10 rounded-full cursor-pointer" />
        </Link>
      </div>
      <nav className="hidden lg:flex container mx-auto justify-end items-center h-20">
        <ul className="flex items-center mr-10 justify-center gap-5">
          <li className="text-lg font-semibold text-white"><Link href="/"><a>Home</a></Link></li>
          <li className="text-lg font-semibold text-white"><Link href="/about"><a>Sobre</a></Link></li>
          <li className="text-lg font-semibold text-white"><Link href="/"><a>Login</a></Link></li>
        </ul>
      </nav>
      <div className="flex lg:hidden w-full justify-end mr-5 ">
          <div  className="bg-[#0fb673] p-2 rounded cursor-pointer">
            <List onClick={menuOpen} size={32} />
          </div>
      </div>
    </header>
  )

}

export default Header