import Link from "next/link"
import { Copyright, CurrencyBtc, FacebookLogo, GithubLogo, InstagramLogo, LinkSimple, WhatsappLogo } from "phosphor-react"




function Footer() {

    return (
        <>
            <footer className="bg-[#1ef29e] grid grid-cols-1 text-center sm:grid-cols-3">
                <div className="flex flex-col items-center px-5 py-9 text-gray-800 text-lg font-semibold">
                <CurrencyBtc size={32} color="#1ef29e" className="bg-white h-12 w-12 rounded-full" />
                    <p className="mt-5">O control de finanças foi desenvolvido para atender as demandas de entras e saidas pessoais, vindo da necessidade de um controle mais complexo de contas a pagar e a receber.</p>
                </div>
                <div className="px-5 p-9 flex justify-center text-gray-800 text-lg font-semibold">
                    <ul>
                        <li className="mb-5 text-2xl font-bold">Links úteis</li>
                        <li className="mb-3">
                            <Link href="/">
                                <div className="flex cursor-pointer">
                                    <LinkSimple size={32} />
                                    <a>Início</a>
                                </div>
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link href="/about">
                                <div className="flex cursor-pointer">
                                    <LinkSimple size={32} />
                                    <a>Sobre</a>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div className="flex cursor-pointer">
                                    <LinkSimple size={32} />
                                    <a>Login</a>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="px-5 p-9 flex flex-col items-center text-gray-800 text-lg font-semibold">
                    <h2 className="mb-5 text-2xl font-bold">Redes sociais</h2>
                    <ul className="flex gap-4">
                        <li><Link href="https://www.instagram.com/edsonlima95/"><a><InstagramLogo size={32} /></a></Link></li>
                        <li><Link href="https://www.facebook.com/edsonlima95/"><a><FacebookLogo size={32} /></a></Link></li>
                        <li><Link href="/"><a><WhatsappLogo size={32} /></a></Link></li>
                    </ul>
                </div>
            </footer>
            <div className="flex justify-center items-center bg-[#01ec8e] py-3 text-gray-800 font-semibold">
                <Copyright size={20} />
                <p>Feito com ❤️ por mim</p>
            </div>
        </>
    )

}

export default Footer