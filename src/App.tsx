import { useState } from 'react'
import './App.css'

const views = [
  {
    id: 'view',
    title: 'Визуализация',
    src: '/klumba-visualization.png',
    alt: 'Перспективный вид смешанной клумбы с пионами, лилиями, флоксом, лавандой, гладиолусами, анютиными глазками и низкой гвоздикой',
  },
  {
    id: 'plan',
    title: 'План посадки',
    src: '/klumba-plan.png',
    alt: 'Схема клумбы сверху с подписями растений',
  },
] as const

export default function App() {
  const [active, setActive] = useState<(typeof views)[number]['id']>('view')
  const current = views.find((view) => view.id === active) ?? views[0]

  return (
    <main className="page">
      <header className="header">
        <p className="eyebrow">Смешанный цветник</p>
        <h1>Дизайн-проект клумбы</h1>
        <p className="lede">
          Два куста пиона, три лилии, флокс, лаванда, гладиолусы, анютины глазки
          и низкая гвоздика. Дополнили эхинацеей и шалфеем.
        </p>
        <nav className="tabs" aria-label="Виды проекта">
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              className={view.id === active ? 'tab is-active' : 'tab'}
              onClick={() => setActive(view.id)}
            >
              {view.title}
            </button>
          ))}
        </nav>
      </header>

      <figure className="frame">
        <img src={current.src} alt={current.alt} />
        <figcaption>{current.title}</figcaption>
      </figure>
    </main>
  )
}
