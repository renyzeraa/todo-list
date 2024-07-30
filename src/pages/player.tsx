import { MessageCircle } from 'lucide-react'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
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
        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow'>
          <div className='flex-1'>

          </div>
          <aside className='w-80 border-l border-zinc-800 bg-zinc-900 h-[600px]'>

          </aside>
        </main>
      </div>
    </div>
  )
}