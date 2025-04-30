
interface CardServiceProps {
  title: string
  message: string
}

export const CardService = ({ message, title }: CardServiceProps) => {
  return (
    <div className="flex flex-col gap-2 w-full bg-[image:var(--gradient-orange-full)] dark:bg-[image:var(--gradient-purple)] p-4 rounded-2xl border dark:border-orange-tertiary border-gray-50 h-fit text-gray-50">
      <p className="font-bold text-lg">{title}</p>
      <p className="font-sans text-sm text-justify">{message}</p>
    </div>
  )
}
