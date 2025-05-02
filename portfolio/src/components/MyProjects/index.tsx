import { useTranslations } from "next-intl";
import { ProjectCarousel } from "./ProjectCarousel";


export const MyProjects = () => {
  const t = useTranslations('Portfolio');
  return (
    <div id="portfolio" className="scroll-mt-32 mt-12  font-sans md:ml-20">
      <h1 className="dark:border-b-orange-tertiary title md:text-4xl text-2xl md:ml-0 ml-12">{t('title')}</h1>
      
      <ProjectCarousel />
    </div>
  )
}
