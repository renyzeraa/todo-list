import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";
import { Frown } from 'lucide-react'

export function Video() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((state) => {
    const { lesson, module } = state.player.currentIndex
    return state.player.course?.modules[module].lessons[lesson]
  })

  function handleNextVideo() {
    dispatch(next())
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      {lesson?.id ?
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handleNextVideo}
          url={`https://www.youtube.com/watch?v=${lesson.id}`}
        />
        :
        <h1 className="font-sans text-2xl h-full flex justify-center items-center gap-2">
          Nenhum vídeo selecionado... <Frown size={30} />
        </h1>
      }

    </div>
  )
}