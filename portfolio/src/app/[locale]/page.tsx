import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { MyProjects } from "@/components/MyProjects";
import { MyServices } from "@/components/MyServices";
import { MySkills } from "@/components/MySkills";
import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations('Footer');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 md:mx-[7.5rem] mx-10 bg-gray-50/30 dark:bg-black/50 border-x-2 border-orange-tertiary dark:border-purple-secundary">
        <MainContent />
        <MyServices />
        <MyProjects />
        <MySkills />
        <AboutMe />
        <Contact />
      </main>

      {/* Footer fora do main */}
      <footer className="py-2 sm:py-4 dark:bg-green-900 bg-purple-secundary w-full flex items-center justify-end dark:border-t-orange-tertiary border-t-green-primary border-t text-gray-50 px-4 sm:px-12">
        <span className="font-sans uppercase text-sm mr-12">{t('footer')}</span>
      </footer>
    </div>
  )
}
