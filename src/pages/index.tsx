import Image from "next/image"
import { CurrencyDollar, ThumbsUp, PencilSimpleLine, Wallet, CheckCircle } from 'phosphor-react'
import Cta from '../components/Button'

function Home() {


  return (
    <>

      <div className="hero relative min-h-[500px] lg:min-h-[600px]">
        <div className="absolute flex justify-center items-center bottom-0 bg-[#00000080] w-full h-full z-10">
          <div className="flex justify-center flex-col items-center sm:-mt-28">
            <h1 className="text-white text-4xl px-5 md:px-0 sm:text-5xl font-bold shadow-sm text-center">Comece a controlar suas contas <br className="hidden sm:block"></br> e tenha maior controle </h1>
            <p className="mt-6 text-2xl p-5 text-center sm:text-left sm:text-2xl text-white">Cria sua conta agora mesmo é simples, fácil e totalmente grátis</p>
            <Cta />
          </div>
        </div>
        <img src="/images/hero.jpg" alt="" className="w-full h-[500px] lg:h-[600px]"  />
      </div>

      <section className="p-6">

        <div className="relative z-20 -top-16  sm:-top-36 flex justify-center">
          <Image src="/images/dash.png" className="rounded m-5 shadow-2xl " alt="" width={900} height={500} />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-gray-600 font-bold text-5xl">Controlar seu dinheiro nunca <br className="hidden sm:block"></br> foi tão fácil</h2>
          <p className="text-gray-500 font-semibold mt-5 text-xl">Confira abaixo o que você pode fazer com o controle de finanças</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          <div className="mb-16">
            <Image src="/images/bg2.svg" width={200} height={200}></Image>
            <h2 className="text-gray-600 font-bold text-xl">Contas a receber</h2>
            <p className="text-gray-500 mt-5 text-lg">Controle tudo que você tem a receber e fique <br />por dentro de todas as entradas do seu bolso</p>
          </div>
          <div className="mb-16">
            <Image src="/images/bg3.svg" width={200} height={200}></Image>
            <h2 className="text-gray-600 font-bold text-xl">Contas a pagar</h2>
            <p className="text-gray-500 mt-5 text-lg">Controle tudo que você precisa pagar e fique <br />por dentro de todas as saidas do seu bolso</p>
          </div>

          <div className="mb-16">
            <Image src="/images/bg1.svg" width={200} height={200}></Image>
            <h2 className="text-gray-600 font-bold text-xl">Relatórios</h2>
            <p className="text-gray-500 mt-5 text-lg">Todos os gastos e recebidos em um só lugar <br /> relatórios semanal, mensal ou pela data que desejar</p>
          </div>
        </div>

      </section>

      <section className="sm:mt-32 py-10 bg-gray-200">
        <div className="flex justify-around items-center p-10 sm:p-0 sm:text-left sm:items-start mt-20 flex-col sm:flex-row">
          <div>
            <h3 className="text-gray-600 font-bold text-4xl text-center md:text-left">Aqui você contrala todos <br className="hidden sm:block"></br> os seus <br className="sm:hidden"></br> lançamenos</h3>
            <ul className="my-10">
              <li className="flex items-center content-center">
                <CurrencyDollar size={32} className="mr-3" />
                <div>
                  <span className="text-gray-500 font-medium mt-5 text-lg">Lançamentos unicos, parcelados ou fixos</span>
                </div>
              </li>
              <li className="flex items-center content-center mt-5">
                <ThumbsUp size={32} className="mr-3" />
                <div>
                  <span className="text-gray-500 font-medium mt-5 text-lg">Você quem manda no status de seus lançamentos</span>
                </div>
              </li>
              <li className="flex items-center content-center mt-5">
                <PencilSimpleLine size={32} className="mr-3" />
                <div>
                  <span className="text-gray-500 font-medium mt-5 text-lg">Faça edições ou até mesmo exclua seus lancamentos</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <Image src="/images/lancamentos.png" className="rounded" alt="" width={700} height={350}></Image>
          </div>
        </div>

        <div className="flex justify-center my-8 sm:my-28">
          <div className="border border-gray-400 w-1/12 rounded text-center"></div>
        </div>

        <div className="flex justify-around flex-col-reverse sm:flex-row-reverse mb-20 p-10 sm:p-0">
          <div>
            <Image src="/images/carteiras.png" className="rounded" alt="" width={700} height={350}></Image>
          </div>
          <div className="">
            <h3 className="text-gray-600 font-bold text-4xl text-center md:text-left">Aqui você contrala todas <br className="hidden sm:block"></br> as suas <br className="sm:hidden"></br> carteiras</h3>
            <ul className="my-10">
              <li className="flex items-center content-center">
                <Wallet size={32} className="mr-3" />
                <div>
                  <span className="text-gray-500 font-medium mt-5 text-lg">Lançamentos feitos por carteiras</span>
                </div>
              </li>
              <li className="flex items-center content-center mt-5">
                <CheckCircle size={32} className="mr-3" />
                <div>
                  <span className="text-gray-500 font-medium mt-5 text-lg">Selecione uma carteira com apenas um click</span>
                </div>
              </li>
              <li className="flex items-center content-center mt-5">
                <PencilSimpleLine size={32} className="mr-3" />
                <div>
                  <span className="text-gray-500 font-medium mt-5 text-lg">Edite suas carteiras quando quiser</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section className="my-28 grid grid-cols-1 p-8 sm:grid-cols-2">
        <div>
          <Image src="/images/bg5.svg" alt="" layout="responsive" width={700} height={350} />
        </div>
        <div className="text-center mt-10 sm:mt-0">
          <h4 className="text-gray-600 font-bold text-5xl mb-10">E ai, vamos começar a <br /> controlar suas contas ?</h4>
          <p className="text-gray-500 font-semibold mt-5 text-xl mb-16">Clique no botão abaixo e faça seu cadastro totalmente grátis <br /> e tenha controle total de tudo que entra e sai de seu bolso</p>
          <Cta />
        </div>
      </section>
    </>
  )
}

export default Home
