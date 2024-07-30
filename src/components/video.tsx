import ReactPlayer from "react-player";
import { useAppSelector } from "../store";

export function Video() {
  const { id } = useAppSelector((state) => {
    const { lesson, module } = state.player.currentIndex
    return state.player.course.modules[module].lessons[lesson]
  })

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${id}`}
      />
    </div>
  )
}