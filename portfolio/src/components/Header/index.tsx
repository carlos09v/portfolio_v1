import { Button } from "../Button"
import { Logo } from "../Logo"
import { ThemeButton } from "./B_Theme"
import { B_Lang } from "./ToggleLang"
import { useTranslations } from 'next-intl';


// Obs: No figma, o header tem um height de 101px. No codigo, se utiliza o padding pra responsividade!
export const Header = () => {
  const t = useTranslations('Header');

  return (

    <header className="mx-64 py-6 px-[1.3125rem] dark:bg-green-900 border-b-purple-secundary rounded-b-4xl border-b-1 flex items-center justify-between bg-orange-tertiary text-gray-50 fixed top-0 left-0 right-0 z-50">
      <Logo />

      <nav className="flex items-center gap-12  font-sans font-semibold text-[1.1875rem]">
        <B_Lang />
        <a href="#home" className="hover:underline">{t('home')}</a>
        <a href="#services" className="hover:underline">{t('services')}</a>
        <a href="#portfolio" className="hover:underline">{t('portfolio')}</a>
        <a href="#about" className="hover:underline">{t('about')}</a>

        {/* <Button variant="header">{t('contact')}</Button> */}
      </nav>

      <ThemeButton />
    </header >
  )
}
