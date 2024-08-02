import ReactPlayer from "react-player";
import { useAppDispatch, useAppSelector } from "../store";
import { next } from "../store/slices/player";

export function Video() {
  const dispatch = useAppDispatch()

  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player
    return state.player.course?.modules[currentModuleIndex].lessons[currentLessonIndex]
  })

  function handleNextVideo() {
    dispatch(next())
  }

  if (!lesson?.id) {
    return null
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handleNextVideo}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}