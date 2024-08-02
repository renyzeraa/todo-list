import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  id: number
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>

}

interface PlayerState {
  course: Course | null
  currentIndex: {
    module: number
    lesson: number
  }
}

const initialState: PlayerState = {
  course: null,
  currentIndex: {
    module: 0,
    lesson: 0
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Course>) => {
      state.course = action.payload
    },
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentIndex.module = action.payload[0]
      state.currentIndex.lesson = action.payload[1]
    },
    next: (state) => {
      const { module, lesson } = state.currentIndex
      const modules = state.course?.modules

      if (modules && lesson < modules[module].lessons.length - 1) {
        state.currentIndex.lesson++
      } else if (modules && module < modules.length - 1) {
        state.currentIndex.module++
        state.currentIndex.lesson = 0
      }
      else {
        state.currentIndex.lesson = 0
        state.currentIndex.module = 0
      }
    }
  },
})

export const player = playerSlice.reducer
export const { play, next, start } = playerSlice.actions