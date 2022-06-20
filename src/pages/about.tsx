import { ChartLine, CheckSquareOffset, CurrencyDollar, Wallet } from "phosphor-react"
import Cta from '../components/Button'


function About() {

    return (
        <>
            <header className="h-96 bg-gradient-to-r from-[#36d394] to-[#13e2b8] flex justify-center items-center">
                <h1 className="text-gray-700 text-6xl font-bold">Sobre</h1>
            </header>

            <section className="my-28">
                <div className="text-center mb-16 p-5 sm:p-0">
                    <h2 className="text-gray-600 font-bold text-5xl">Controle, gerenciei, e lance</h2>
                    <p className="text-gray-500 font-semibold mt-5 text-xl">Tudo que você precisa para gerenciar o seu dinheiro <br /> de  forma fácil, simples e grátis.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 text-center p-5 sm:p-0">
                    <div className="flex flex-col justify-center items-center">
                        <CheckSquareOffset size={42} className="text-[#1ef29e]" />
                        <h2 className="text-gray-600 font-bold text-xl mt-5">Lançamentos</h2>
                        <p className="text-gray-500 mt-5 text-lg">Controle geral de entradas e saidas <br /> de suas finanças pessoais</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
                        <Wallet size={42} className="text-[#1ef29e]" />
                        <h2 className="text-gray-600 font-bold text-xl mt-5">Carteiras</h2>
                        <p className="text-gray-500 mt-5 text-lg">Os lançamentos são lançados por carteiras <br />podendo ser casa, pessoal, cartão e etc</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
                        <ChartLine size={42} className="text-[#1ef29e]" />
                        <h2 className="text-gray-600 font-bold text-xl mt-5">Relatórios</h2>
                        <p className="text-gray-500 mt-5 text-lg">Tudo que você lançar em relatórios <br /> por datas ou tipo de lançamento</p>

                    </div>
                </div>

            </section>
            
            <section className="bg-gray-200 py-14 flex flex-col justify-center items-center text-center sm:text-left">
                <CurrencyDollar size={62} className="text-gray-200 p-1 mb-3 bg-gray-400 rounded-full" />
                <p className="text-gray-700 text-4xl font-bold">Quero começar a controlar</p>
                <Cta />
            </section>
        </>
    )

}

export default About