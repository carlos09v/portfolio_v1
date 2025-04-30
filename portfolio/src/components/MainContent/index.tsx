import Image from "next/image"
import { Button } from "../Button"
import { HiOutlinePlus } from "react-icons/hi2";
import { FiPercent } from "react-icons/fi";
import { Card_InfoMain } from "./Card_InfoMain";
import { useTranslations } from "next-intl";



export const MainContent = () => {
  const t = useTranslations('MainContent');

  return (
    <div id="home" className="scroll-mt-32 w-full mt-28 h-[620px] flex flex-col justify-between">
      <div className="ml-20">
        <div className="flex items-center justify-between mr-20">
          <Button variant="content">{t('dev_button')}</Button>
          <Button variant="ghost">
            Status: <span className="dark:text-green-primary text-purple-500 underline">{t('ghost_button')}</span></Button>
        </div>

        <div className="flex justify-between">
          <div className="font-sans flex flex-col justify-between mt-15 w-[31%]">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold dark:[text-shadow:1px_0px_4px_#E68F0E]">{'> ' + t('title')}</h1>
              <h2 className="ml-4">{t('message')}</h2>
            </div>


            <div className="mb-18 flex gap-12">
              <Card_InfoMain icon={HiOutlinePlus} text={t('card_info.1')} value={20} />
              <Card_InfoMain icon={FiPercent} text={t('card_info.2')} value='-' iconSize="text-5xl" />
              <Card_InfoMain icon={HiOutlinePlus} text={t('card_info.3')} value={3} />
            </div>
          </div>


          <Image
            src="/eu-semBackground.png"
            alt="Carlos Vinicius"
            width={496}
            height={670}
            className="object-contain "
          />
        </div>
      </div>


      <div className="dark:bg-[image:var(--gradient-purple)] bg-[image:var(--gradient-orange)] w-full h-[76px] gradient-orange-border border-y-purple-secundary border-1 flex items-center justify-center gap-8 text-gray-100 font-code font-semibold select-none">
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
