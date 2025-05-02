import Image from "next/image"
import { Button } from "../Button"
import { HiOutlinePlus } from "react-icons/hi2";
import { FiPercent } from "react-icons/fi";
import { Card_InfoMain } from "./Card_InfoMain";
import { useTranslations } from "next-intl";



export const MainContent = () => {
  const t = useTranslations('MainContent');

  return (
    <div id="home" className="scroll-mt-32 w-full mt-28">
    <div className="w-full px-4 sm:px-16 xl:px-32 flex flex-col gap-8 ">
      {/* Botões do topo */}
      <div className="flex flex-wrap justify-between gap-4">
        <Button variant="content">{t('dev_button')}</Button>
        <Button variant="ghost">
          Status: <span className="dark:text-green-primary text-purple-500 underline">{t('ghost_button')}</span>
        </Button>
      </div>
  
      {/* Conteúdo principal (Texto + Imagem) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        {/* Texto */}
        <div className="font-sans flex flex-col justify-between md:gap-24 gap-8 md:w-[35%] w-[90%]">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-4xl text-lg font-bold dark:[text-shadow:1px_0px_4px_#E68F0E]">{'> ' + t('title')}</h1>
            <h2 className="ml-4 md:text-base text-sm">{t('message')}</h2>
          </div>
  
          <div className="flex md:gap-12 gap-4 md:mx-0 mx-auto">
            <Card_InfoMain icon={HiOutlinePlus} text={t('card_info.1')} value={20} />
            <Card_InfoMain icon={FiPercent} text={t('card_info.2')} value="-" iconSize="md:text-5xl text-3xl" />
            <Card_InfoMain icon={HiOutlinePlus} text={t('card_info.3')} value={3} />
          </div>
        </div>
  
        {/* Imagem */}
        <Image
          src="/eu-semBackground.png"
          alt="Carlos Vinicius"
          width={496}
          height={670}
          className="object-contain w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  
    {/* Barra de Tecnologias */}
    <div className="dark:bg-[image:var(--gradient-purple)] bg-[image:var(--gradient-orange)] w-full h-[76px] gradient-orange-border border-y-purple-secundary border-1 flex items-center justify-center gap-8 text-gray-100 font-code font-semibold select-none overflow-x-auto whitespace-nowrap px-4">
      <span>React</span>
      <span>NextJS</span>
      <span>TypeScript</span>
      <span>MySQL</span>
      <span>PostgreSQL</span>
      <span>Spring Boot</span>
      <span>Docker</span>
      <span>Figma</span>
      <span>Python</span>
      <span>...</span>
    </div>
  </div>
  )
}
