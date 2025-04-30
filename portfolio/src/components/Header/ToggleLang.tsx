import Image from "next/image"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"

export const B_Lang = () => {
  const locale = useLocale()
  

  return (
    <Link
      href='/'
      locale={locale == 'pt' ? 'en' : 'pt'}
      className="flex items-center justify-center transition-transform duration-300 ease-in-out active:scale-95 pt-2"
    >
      <Image
        src={locale == 'pt' ? '/assets/header/togglePT.png' : '/assets/header/toggleEN.png'}
        alt="Toggle Language"
        width={59}
        height={24}
        className="transition-all duration-300 ease-in-out bg-center"
      />
    </Link>
  )
}
