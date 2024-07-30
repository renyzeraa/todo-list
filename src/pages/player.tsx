import { ChevronDown, MessageCircle, Video } from 'lucide-react'
import ReactPlayer from 'react-player'

export function Player() {
  return (
    <div className="bg-zinc-950 text-zinc-50 flex justify-center items-center py-8 h-screen">
      <div className="felx w-[1240px] flex-col gap-6">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Fundamentos do Redux</h2>
            <span className="text-zinc-300 text-sm">Modulo: Desvendando o Redux</span>
          </div>
          <button
            className='flex items-center text-sm font-medium text-white gap-2 rounded bg-violet-500 px-3 py-2 hover:bg-violet-600'
          >
            <MessageCircle size={30} />
            Deixar feedback
          </button>
        </div>
        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className='flex-1'>
            <div className='w-full bg-zinc-950 aspect-video'>
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=vCy75f6rq8o"
              />
            </div>
          </div>
          <aside className='absolute top-0 right-0 divide-y-2 divide-zinc-900 bottom-0 w-80 border-l border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
            <div>
              <button className='flex w-full items-center bg-zinc-800 gap-3 p-4'>
                <span className='flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs'>
                  1
                </span>
                <div className='flex flex-col gap-1 text-left'>
                  <strong className='text-sm'>Desvendando o Redux</strong>
                  <span className='text-xs text-zinc-400'>12 aulas</span>
                </div>

                <ChevronDown className='size-5 ml-auto text-zinc-400' />
              </button>

              <nav className='relative flex flex-col gap-4 p-6'>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
              </nav>
            </div>
            <div>
              <button className='flex w-full items-center bg-zinc-800 gap-3 p-4'>
                <span className='flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs'>
                  1
                </span>
                <div className='flex flex-col gap-1 text-left'>
                  <strong className='text-sm'>Desvendando o Redux</strong>
                  <span className='text-xs text-zinc-400'>12 aulas</span>
                </div>

                <ChevronDown className='size-5 ml-auto text-zinc-400' />
              </button>

              <nav className='relative flex flex-col gap-4 p-6'>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
                <button className='flex items-center gap-3 text-sm text-zinc-400'>
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamentos do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>09:13</span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}