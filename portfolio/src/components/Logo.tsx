import { FaDev } from "react-icons/fa";


export const Logo = () => {
  return (
    <div className="flex gap-2 items-center font-code">
      <FaDev className="dark:fill-orange-tertiary fill-purple-secundary md:text-2xl" />
      <p className="md:text-2xl">
        <span className="dark:text-purple-400 text-green-700 font-medium">Carlos</span>
        <span className="dark:text-green-400 text-purple-700 font-semibold">Vinicius</span>
      </p>
    </div>
  )
}
