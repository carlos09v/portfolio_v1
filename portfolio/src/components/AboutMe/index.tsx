import { Fragment } from 'react';
import { useTranslations } from "next-intl";
import { FaInstagram, FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";



export const AboutMe = () => {
  const t = useTranslations('AboutMe');

  return (
    <div id='about' className="scroll-mt-64 mt-20 flex items-center justify-between w-[75%] mx-auto">
      <img src="/assets/aboutme/eu.png" alt="Eu" />


      <div className="w-4xl font-sans p-4 rounded-lg rounded-bl-4xl border bg-[image:var(--gradient-bg-dark)] border-purple-secundary dark:bg-none dark:p-0 dark:border-0 text-gray-50">
        <h1 className="dark:border-b-orange-tertiary title ">{t('title')}</h1>
        <p className="mt-4 text-justify ">
          {(t('message') as string).split('\n').map((line, i) => (
            <Fragment key={i}>
              {line}
              <br />
              <br />
            </Fragment>
          ))}
        </p>

        <div className="flex gap-6 justify-end mt-2 ">
          <a href="https://www.instagram.com/carlos09v/" target='_blank'>
            <FaInstagram className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/carlos09v/" target='_blank'>
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://www.behance.net/carlos09v" target='_blank'>
            <FaBehance className="w-8 h-8" />
          </a>
          <a href="https://github.com/carlos09v" target='_blank'>
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  )
}
