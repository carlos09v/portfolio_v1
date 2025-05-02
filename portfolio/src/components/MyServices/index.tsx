import { useMessages, useTranslations } from "next-intl";
import { CardService } from "./CardService"
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";
import Image from "next/image"


export const MyServices = () => {
  const messages = useMessages();
  const t = useTranslations('Services')
  const cardInfo = messages.Services.card_info as {
    title: string
    description: string
  }[]

  return (
    <div id="services" className="mt-12 md:mx-20 mx-12 relative scroll-mt-32 min-h-[570px]">
      <Image
        src="/assets/LeonardAI/Flux_Dev_2.png"
        alt="Flux Dev"
        width={180}
        height={200}
        className="object-contain absolute bottom-0 hidden md:block"
      />
      <Image
        src="/assets/LeonardAI/Flux_Dev_1.png"
        alt="Flux Dev"
        width={230}
        height={200}
        className="object-contain absolute top-0 right-0 hidden md:block"
      />

      <h1 className="dark:border-b-orange-tertiary md:text-4xl text-2xl title font-sans relative z-[1]">
        {t('title')}
      </h1>

      {/* Blur Bottom-Left Full */}
      <div className="absolute bottom-[-4rem] left-0 z-[-1] pointer-events-none w-full hidden md:block dark:block">
        <img
          src="/assets/blur.png"
          alt="blur"
          className="w-full h-44 brightness-200 "
        />
      </div>

      <div className="mt-18 flex flex-col md:grid md:grid-rows-3 md:grid-cols-3 gap-6 relative">
        <div className="col-start-1 row-start-1 relative">
          <CardService title={cardInfo[0].title} message={cardInfo[0].description} />

          {/* Seta para a direita */}
          <div className="hidden md:flex absolute top-[40%] right-[-222px] items-center w-56 h-0.5">

            {/* Bolinha */}
            <div className="w-2 h-2 rounded-full dark:bg-orange-tertiary bg-black" />

            {/* Linha */}
            <div className="flex-1 h-0.5 dark:bg-orange-tertiary bg-black" />

            {/* Setinha */}
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent dark:border-l-orange-tertiary border-l-black" />

            {/* Ícone */}
            <div className="p-3 rounded-full dark:bg-orange-tertiary bg-black flex items-center justify-center">
              {/* Aqui vai o ícone, exemplo: FaCode */}
              <FaCode className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="col-start-2 row-start-2 relative">
          <CardService title={cardInfo[1].title} message={cardInfo[1].description} />

          {/* Seta para a direita */}
          <div className="hidden md:flex absolute top-[40%] right-[-222px] items-center w-56 h-0.5">
            {/* Bolinha */}
            <div className="w-2 h-2 rounded-full dark:bg-orange-tertiary bg-black" />

            {/* Linha */}
            <div className="flex-1 h-0.5 dark:bg-orange-tertiary bg-black" />

            {/* Setinha */}
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent dark:border-l-orange-tertiary border-l-black" />

            {/* Ícone */}
            <div className="p-3 rounded-full dark:bg-orange-tertiary bg-black flex items-center justify-center">
              {/* Aqui vai o ícone, exemplo: FaCode */}
              <FaPaintBrush className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="col-start-3 row-start-3 relative">
          <CardService title={cardInfo[2].title} message={cardInfo[2].description} />

          {/* Seta para a esquerda */}
          <div className="hidden md:flex absolute top-[40%] left-[-670px] items-center w-2xl h-0.5">
            {/* Ícone */}
            <div className="p-3 rounded-full dark:bg-orange-tertiary bg-black flex items-center justify-center">
              {/* Aqui vai o ícone, exemplo: FaCode */}
              <FaServer className="w-6 h-6 text-white" />
            </div>

            {/* Setinha */}
            <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent dark:border-r-orange-tertiary border-r-black" />

            {/* Linha */}
            <div className="flex-1 h-0.5 dark:bg-orange-tertiary bg-black" />

            {/* Bolinha */}
            <div className="w-2 h-2 rounded-full dark:bg-orange-tertiary bg-black" />
          </div>
        </div>
      </div>
    </div>
  )
}
