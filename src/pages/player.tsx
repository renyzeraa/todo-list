import { MessageCircle } from 'lucide-react'
import { Header } from '../components/header'
import { Video } from '../components/video'
import { Modulo } from '../components/modulo'
import { useAppSelector } from '../store'

export function Player() {
  const { modules } = useAppSelector((state) => (
    {
      modules: state.player.course.modules
    }
  ))

  return (
    <div className="bg-zinc-950 text-zinc-50 flex justify-center items-center py-8 h-screen">
      <div className="felx w-[1240px] flex-col gap-6">
        <div className="flex items-center justify-between ">
          <Header
            title='Fundamentos do Redux'
            description='Modulo: Desvendando o Redux'
          />
          <button
            className='flex items-center text-sm font-medium text-white gap-2 rounded bg-violet-500 px-3 py-2 hover:bg-violet-600'
          >
            <MessageCircle size={30} />
            Deixar feedback
          </button>
        </div>
        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className='flex-1'>
            <Video />
          </div>
          <aside className='absolute top-0 right-0 divide-y-2 divide-zinc-900 bottom-0 w-80 border-l border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
            {modules.map(({ id, lessons, title }, index) => (
              <Modulo key={id} title={title} amountLessons={lessons.length} moduleIndex={index} />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}