import Image from "next/image"
import { FaRegEye } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { techIconMap } from "@/utils/TechIcon";



interface CardProjectProps {
  name: string
  link: string
  deployLink?: string
  labelButton?: string
  titleCode: string
  codeLink: string
  technologies: string[]
}

export const CardProject = ({ name, link, deployLink, technologies, labelButton, codeLink, titleCode }: CardProjectProps) => {


  return (
    <div className="mt-18 w-80 rounded-2xl overflow-hidden relative">
      <Image
        alt={name}
        src={link}
        width={325}
        height={183}
        className="rounded-t-2xl object-cover h-48"
      />

      <a
        href={codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 p-2 rounded-full bg-[image:var(--gradient-bg-dark)] border border-green-primary"
        title={titleCode}
      >
        <CiShare1 className="w-6 h-6 text-white" />
      </a>


      <div className="dark:bg-[image:var(--gradient-bg-dark)] bg-[image:var(--gradient-orange-full)] border dark:border-orange-tertiary border-black rounded-b-2xl h-20 py-2 px-4 flex justify-around text-gray-50">
        <div className={`flex flex-col items-center ${!deployLink ? 'justify-center' : 'justify-between'}`}>
          <p className="font-sans font-bold text-center">{name}</p>

          {deployLink && (
            <a className="flex items-center gap-2 dark:bg-purple-secundary bg-green-500 py-1 px-2 rounded-lg text-sm font-code uppercase font-medium " href={deployLink} target="_blank" rel="noopener noreferrer">
              <FaRegEye className="text-lg" /> {labelButton}
            </a>
          )}
        </div>

        <div className="border-l" />

        <div className="grid grid-cols-2 gap-2 place-items-center">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={techIconMap[tech]}
              alt={tech}
              className="w-6 h-6"
              title={tech}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
