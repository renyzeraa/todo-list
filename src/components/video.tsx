import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch()

  const { id } = useAppSelector((state) => {
    const { lesson, module } = state.player.currentIndex
    return state.player.course.modules[module].lessons[lesson]
  })

  function handleNextVideo() {
    dispatch(next())
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handleNextVideo}
        url={`https://www.youtube.com/watch?v=${id}`}
      />
    </div>
  )
}