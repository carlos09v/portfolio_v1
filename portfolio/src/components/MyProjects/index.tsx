import { useTranslations } from "next-intl";
import { CardProject } from "./CardProject";
import { ProjectCarousel } from "./ProjectCarousel";


export const MyProjects = () => {
  const t = useTranslations('Portfolio');
  return (
    <div id="portfolio" className="scroll-mt-32 mt-8  font-sans">
      <h1 className="dark:border-b-orange-tertiary title ml-20">{t('title')}</h1>
      
      <ProjectCarousel />
    </div>
  )
}
