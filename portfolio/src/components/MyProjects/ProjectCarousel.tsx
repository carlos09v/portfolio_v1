'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useRef } from 'react'
import { CardProject } from './CardProject'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export const ProjectCarousel = () => {
  const t = useTranslations('Portfolio')
  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderInstanceRef, slider] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 8,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 'auto',
          spacing: 16,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 'auto',
          spacing: 24,
        },
      },
    },
  })

  return (
    <div className="relative md:mr-20 ">
      {/* Linha Vertical Esquerda */}
      <div className="absolute top-[22%] bottom-0 left-0 w-1 dark:bg-green-primary bg-orange-tertiary opacity-80 blur-sm h-68" />
      {/* Linha Vertical Direita */}
      <div className="absolute top-[22%] bottom-0 right-0 w-1 dark:bg-green-primary bg-orange-tertiary opacity-80 blur-sm h-68" />
      
      {/* Setas */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-0 top-[60%] -translate-y-1/2 z-10 dark:bg-purple-secundary bg-zinc-900 p-2 rounded-full shadow hover:scale-110 transition"
      >
        <FaArrowLeft className='text-gray-50' />
      </button>

      <button
        onClick={() => slider.current?.next()}
        className="absolute right-0 top-[60%] -translate-y-1/2 z-10 dark:bg-purple-secundary bg-zinc-900 p-2 rounded-full shadow hover:scale-110 transition"
      >
        <FaArrowRight className='text-gray-50' />
      </button>

      {/* Carrossel */}
      <div ref={sliderInstanceRef} className="keen-slider px-6">
        <div className="keen-slider__slide min-w-fit">
          <CardProject
            name="Mercadinho 4.0"
            link="/assets/portfolio/mercadinho.jpg"
            technologies={['React', 'TypeScript', 'Docker', 'NodeJS']}
            deployLink="https://mercadinho4-0.vercel.app"
            labelButton={t('button')}
            codeLink='https://github.com/carlos09v/Mercadinho'
            titleCode={t('titleCode')}
          />
        </div>
        <div className="keen-slider__slide min-w-fit">
          <CardProject
            name="NLWs Rocketseat"
            link="/assets/portfolio/nlw.jpg"
            technologies={['React', 'TypeScript', 'Docker', 'NodeJS']}
            codeLink='https://github.com/carlos09v/NLWs_Rocketseat'
            titleCode={t('titleCode')}
          />
        </div>
        <div className="keen-slider__slide min-w-fit">
          <CardProject
            name="Gestor de Veículos 🚗"
            link="/assets/portfolio/gestorVeiculo.jpg"
            technologies={['Java', 'PostgreSQL', 'Spring', 'Docker']}
            codeLink='https://github.com/carlos09v/GestorDeVeiculos_desafio'
            titleCode={t('titleCode')}
          />
        </div>
        <div className="keen-slider__slide min-w-fit">
          <CardProject
            name="React Projects"
            link="/assets/portfolio/reactProjects.jpg"
            technologies={['React', 'TypeScript']}
            codeLink='https://github.com/carlos09v/ReactProjects'
            titleCode={t('titleCode')}
          />
        </div>
        <div className="keen-slider__slide min-w-fit">
          <CardProject
            name="Frontend Basics"
            link="/assets/portfolio/frontendBasics.jpg"
            technologies={['Html', 'Css', 'JavaScript']}
            codeLink='https://github.com/carlos09v/FrontEnd-Basics'
            titleCode={t('titleCode')}
          />
        </div>
        <div className="keen-slider__slide min-w-fit">
          <CardProject
            name="Projeto Pokemon"
            link="/assets/portfolio/projetoPokemon.jpg"
            technologies={['Html', 'Css', 'JavaScript']}
            deployLink="https://carlos09v.github.io/Projeto-Pokemon/"
            labelButton={t('button')}
            codeLink='https://github.com/carlos09v/Projeto-Pokemon'
            titleCode={t('titleCode')}
          />
        </div>
        <div className="keen-slider__slide min-w-fit">
          <CardProject
            name="Dev Links"
            link="/assets/portfolio/devLinks.jpg"
            technologies={['React', 'TypeScript']}
            deployLink="https://devlinks-carlos09v.vercel.app"
            labelButton={t('button')}
            codeLink='https://github.com/carlos09v/devlinks'
            titleCode={t('titleCode')}
          />
        </div>
      </div>
    </div>
  )
}
