import Link from "next/link"
import { Browsers, House, Laptop, PhoneCall, X, User, SignIn } from "phosphor-react"

type Aside = {
    isMenuOpen: boolean,
    onMenuToggle: (param: boolean) => void
}

export function MenuLeft({ isMenuOpen, onMenuToggle }: Aside) {
    
    return (
        <aside className={`fixed z-30 w-64 top-0 h-full ${isMenuOpen ? 'left-0 duration-1000' : '-left-80 duration-1000'}`} aria-label="Sidebar">
            <div className="overflow-y-auto  py-4 px-3 h-full bg-[#0fb673]">
                <ul className="space-y-2">
                    <li className="flex justify-end">
                        <X size={40} color="white" onClick={() => onMenuToggle(!isMenuOpen)}/>
                    </li>
                    <li>
                    <Link href="/" passHref>

                        <a onClick={() => onMenuToggle(!isMenuOpen)} className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-[#11cf83]">
                            <span className="ml-3 flex items-center gap-2"><House size={20} /> Home</span>
                        </a>
                    </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                        <a onClick={() => onMenuToggle(!isMenuOpen)} className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-[#11cf83]">
                            <span className="ml-3 flex items-center gap-2"><User size={20} />Sobre</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        <a className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-[#11cf83]">
                            <span className="ml-3 flex items-center gap-2"><SignIn size={20} />Login</span>
                        </a>
                        </Link>
                    </li>
                   
                </ul>
            </div>

        </aside>

    )
}
