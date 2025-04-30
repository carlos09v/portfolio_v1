'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline  } from "react-icons/io5";


export const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Evita hydration mismatch (quando o React vê diferenças entre o HTML do servidor (SSR) e o que o cliente espera.)
  // Como resolver: aguardar que o componente seja montado no cliente - navegador
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-1.5 bg-[image:var(--gradient-orange)] rounded-full text-2xl transition duration-300 hover:drop-shadow-[0_0_10px_#E68F0E] cursor-pointer border-1 border-purple-secundary"
      title={`Trocar para tema ${isDark ? 'claro' : 'escuro'}`}
    >
      {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  )
}
