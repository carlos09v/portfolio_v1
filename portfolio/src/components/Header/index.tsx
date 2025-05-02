import { Button } from "../Button"
import { Logo } from "../Logo"
import { ThemeButton } from "./B_Theme"
import MobileMenu from "./MobileMenu";
import { B_Lang } from "./ToggleLang"
import { useTranslations } from 'next-intl';


// Obs: No figma, o header tem um height de 101px. No codigo, se utiliza o padding pra responsividade!
export const Header = () => {
  const t = useTranslations('Header');

  return (

    <header className="px-4 sm:px-16 xl:px-32 py-4 sm:py-6 dark:bg-green-900 border-b-purple-secundary rounded-b-4xl border-b-1 flex items-center justify-between bg-orange-tertiary text-gray-50 fixed top-0 left-0 right-0 z-50 md:max-w-7xl max-w-96 mx-auto">
      <Logo />

      <B_Lang />
      <nav className="hidden md:flex items-center gap-8 font-sans font-semibold text-lg">
        <a href="#home" className="hover:underline">{t('home')}</a>
        <a href="#services" className="hover:underline">{t('services')}</a>
        <a href="#portfolio" className="hover:underline">{t('portfolio')}</a>
        <a href="#about" className="hover:underline">{t('about')}</a>

        {/* <Button variant="header">{t('contact')}</Button> */}
      </nav>


      <div className="md:hidden">
        <MobileMenu />
      </div>

      <ThemeButton />
    </header >
  )
}
