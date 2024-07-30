import { MessageCircle } from 'lucide-react'
import { Header } from '../components/header'
import { Video } from '../components/video'
import { Modulo } from '../components/modulo'

export function Player() {
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
            <Video url='https://www.youtube.com/watch?v=vCy75f6rq8o' />
          </div>
          <aside className='absolute top-0 right-0 divide-y-2 divide-zinc-900 bottom-0 w-80 border-l border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
            <Modulo title='Desvendando o Redux' amountLessons={1} moduleIndex={0} />
            <Modulo title='Desvendando o Redux' amountLessons={3} moduleIndex={1} />
            <Modulo title='Desvendando o Redux' amountLessons={4} moduleIndex={2} />
            <Modulo title='Desvendando o Redux' amountLessons={4} moduleIndex={3} />
            <Modulo title='Desvendando o Redux' amountLessons={8} moduleIndex={4} />
          </aside>
        </main>
      </div>
    </div>
  )
}