import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Desvendando o Redux',
          lessons: [
            { id: 'DCGKemPaScw', title: 'Fundamentos do Typescript', duration: '09:14' },
            { id: 'FrCvs0KF_no', title: 'GTA Remasterizado', duration: '20:01' },
            { id: 'n2sSUORBfzM', title: 'Esquerda Erra', duration: '05:33' },
            { id: 'mdzXBIkBgsA', title: 'Argentina continua barata ?', duration: '07:44' },
            { id: 'js_fWJNlKvU', title: 'F1 e F23 em Spa', duration: '06:19' }
          ],
        },
        {
          id: '2',
          title: 'Conhecendo o Diego',
          lessons: [
            { id: 'A41bhEMHUU4', title: 'Analise do GP da Bélgica', duration: '09:48' },
            { id: '9zbUVr-z4yQ', title: 'Como Investir', duration: '10:22' },
            { id: 'WgPbbWmnXJ8', title: 'Object Detection', duration: '11:12' }
          ],
        }
      ]
    },
    currentIndex: {
      module: 0,
      lesson: 0
    }
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentIndex.module = action.payload[0]
      state.currentIndex.lesson = action.payload[1]
    },
    next: (state) => {
      const { module, lesson } = state.currentIndex
      if (lesson < state.course.modules[module].lessons.length - 1) {
        state.currentIndex.lesson++
      } else if (module < state.course.modules.length - 1) {
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
export const { play, next } = playerSlice.actions