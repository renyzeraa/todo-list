import { Video } from "lucide-react";

interface AssuntoModuloProps {
  name: string
  duration: string // formato HH:MM
  onPlay: () => void
}

export function AssuntoModulo({ name, duration, onPlay }: AssuntoModuloProps) {
  return (
    <button onClick={onPlay} className='flex items-center gap-3 text-sm text-zinc-400'>
      <Video className='size-4 text-zinc-500' />
      <span>{name}</span>
      <span className='ml-auto font-mono text-xs text-zinc-500'>{duration}</span>
    </button>
  )
}