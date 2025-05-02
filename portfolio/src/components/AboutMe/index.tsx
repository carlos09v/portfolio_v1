import { Fragment } from 'react';
import { useTranslations } from "next-intl";
import { FaInstagram, FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";



export const AboutMe = () => {
  const t = useTranslations('AboutMe');

  return (
    <div id='about' className="scroll-mt-64 mt-20
    flex flex-col md:flex-row md:justify-between items-center  gap-8 w-[90%] md:w-[75%] mx-auto">
      <img src="/assets/aboutme/eu.png" alt="Eu" className='w-40 h-40 md:w-fit md:h-fit object-cover ' />


      <div className="w-full md:w-[70%] font-sans flex flex-col gap-4">
        <h1 className="dark:border-b-orange-tertiary title md:text-3xl text-lg">{t('title')}</h1>
        <p className="mt-4 text-justify ">
          {(t('message') as string).split('\n').map((line, i) => (
            <Fragment key={i}>
              {line}
              <br />
              <br />
            </Fragment>
          ))}
        </p>

        <div className="flex justify-center md:justify-end gap-6">
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
