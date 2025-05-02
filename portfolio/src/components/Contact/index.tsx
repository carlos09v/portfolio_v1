import { useTranslations } from "next-intl";
import { AiOutlineMail } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";


import { Logo } from "../Logo";
import { Form } from "./Form";

export const Contact = () => {
  const t = useTranslations('ContactMe');


  return (
    <div className="mt-20 mx-auto md:w-[80%] w-[95%] bg-orange-tertiary dark:bg-[image:var(--gradient-orange-full)] border dark:border-purple-secundary border-black md:p-6 p-4 flex flex-col md:flex-row gap-6  rounded-tr-3xl rounded-tl-3xl font-sans text-gray-50">
      {/* Left panel: info */}
      <div className="flex flex-col justify-between gap-6 md:w-1/3 items-center">
        <h2 className="text-lg font-semibold ">{t('question')}</h2>


        <div className="flex items-center gap-4">
          <AiOutlineMail className="w-8 h-8" />
          <span className="text-sm underline">carlos09v@gmail.com</span>
        </div>

        <div className="dark:md:block dark:hidden">
          <Logo />
        </div>
      </div>

      <div className="hidden md:block w-px bg-gray-50" />


      {/* Form panel */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold uppercase">{t('form.title')}</h2>

        <Form button={t('form.button')} email_placeholder={t('form.placeholder_2')} name_placeholder={t('form.placeholder_1')} textarea_placeholder={t('form.placeholder_3')} />
      </div>
    </div>
  )
}
