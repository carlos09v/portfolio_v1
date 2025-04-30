import { useTranslations } from "next-intl";
import { AiOutlineMail } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";


import { Logo } from "../Logo";
import { Button } from "../Button";
import { Form } from "./Form";

export const Contact = () => {
  const t = useTranslations('ContactMe');
  

  return (
    <div className="mt-20 mx-auto w-[80%] bg-purple-700/70  dark:bg-[image:var(--gradient-orange-full)] border dark:border-purple-secundary border-black px-5 py-6 flex justify-between rounded-tr-3xl rounded-tl-3xl font-sans text-gray-50">
      <div className="flex flex-col justify-between gap-6">
        <h2 className="text-lg font-semibold ">{t('question')}</h2>
        <div className="mx-auto">

          <div className="flex items-center gap-4">
            <AiOutlineMail className="w-8 h-8" />
            <span className="text-sm underline">carlos09v@gmail.com</span>
          </div>
        </div>


        <div className="dark">
          <Logo />
        </div>
      </div>

      <div className="w-px bg-gray-50" />

      <div className="w-[60%]">
        <h2 className="text-lg font-semibold uppercase">{t('form.title')}</h2>

       <Form button={t('form.button')} email_placeholder={t('form.placeholder_2')} name_placeholder={t('form.placeholder_1')} textarea_placeholder={t('form.placeholder_3')} />
      </div>
    </div>
  )
}
