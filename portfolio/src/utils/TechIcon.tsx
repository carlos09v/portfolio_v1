
interface TechIconProps {
  src: string
  alt: string
  size?: number
}

export const TechIcon = ({ src, alt, size = 56 }: TechIconProps) => {
  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="md:w-12 w-8 md:h-12 h-8 transition-transform duration-300 hover:scale-110"
        draggable={false}
        title={alt} // nativo ou usa uma lib
      />
    </div>
  )
}

export const techIconMap: Record<string, string> = {
  React: '/assets/skills/React.svg',
  Nextjs: '/assets/skills/Nextjs.svg',
  NodeJS: '/assets/skills/NodeJS.svg',
  TypeScript: '/assets/skills/TypeScript.svg',
  Tailwind: '/assets/skills/Tailwind.svg',
  Git: '/assets/skills/Git.svg',
  Figma: '/assets/skills/Figma.svg',
  Java: '/assets/skills/Java.svg',
  Spring: '/assets/skills/Spring.svg',
  MySQL: '/assets/skills/MySQL.svg',
  PostgreSQL: '/assets/skills/PostgreSQL.svg',
  Python: '/assets/skills/Python.svg',
  Docker: '/assets/skills/Docker.svg',
  Html: '/assets/skills/Html.svg',
  Css: '/assets/skills/Css.svg',
  JavaScript: '/assets/skills/JavaScript.svg',
  // adicione mais conforme necessário
}