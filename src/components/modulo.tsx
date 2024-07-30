import { ChevronDown } from "lucide-react";
import { AssuntoModulo } from "./assunto-modulo";

interface ModuloProps {
  title: string
  amountLessons: number
  moduleIndex: number
}

export function Modulo({ amountLessons, title, moduleIndex }: ModuloProps) {
  return (
    <div>
      <button className='flex w-full items-center bg-zinc-800 gap-3 p-4'>
        <span className='flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs'>
          {++moduleIndex}
        </span>
        <div className='flex flex-col gap-1 text-left'>
          <strong className='text-sm'>{title}</strong>
          <span className='text-xs text-zinc-400'>{amountLessons} aula{amountLessons > 1 && 's'}</span>
        </div>

        <ChevronDown className='size-5 ml-auto text-zinc-400' />
      </button>

      <nav className='relative flex flex-col gap-4 p-6'>
        <AssuntoModulo name="Fundamentos do Redux" duration="09:13" />
      </nav>
    </div>
  )
}