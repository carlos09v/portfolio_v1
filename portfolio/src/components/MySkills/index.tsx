import { useTranslations } from "next-intl";
import { techIconMap } from '@/utils/TechIcon'
import { TechIcon } from "../../utils/TechIcon";


export const MySkills = () => {
  const t = useTranslations('Skills');

  const skills1 = ['React', 'Nextjs', 'NodeJS', 'TypeScript', 'Tailwind', 'Git', 'Figma'];
  const skills2 = ['Java', 'Spring', 'MySQL', 'PostgreSQL', 'Python', 'Docker'];

  return (
    <div className="mt-28 font-sans">
      <h1 className="dark:border-b-purple-secundary title mx-auto text-center">{t('title')}</h1>


      <div className="dark:bg-[image:var(--gradient-purple)] bg-[image:var(--gradient-orange-full)] h-48 mt-16 border border-gray-50 dark:border-orange-tertiary flex flex-col items-center justify-center gap-3 select-none rounded-4xl w-[75%] mx-auto relative">
        <div className="flex gap-3 ">
          {skills1.map((tech) => (
            <TechIcon key={tech} src={techIconMap[tech]} alt={tech} />
          ))}

        </div>
        <div className="flex gap-3">
          {skills2.map((tech) => (
            <TechIcon key={tech} src={techIconMap[tech]} alt={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
