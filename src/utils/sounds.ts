import { Howl } from 'howler'

// Exemplo de som de notificação (adicione seu próprio arquivo de áudio em /public/sounds/)
export const timerEndSound = new Howl({
  src: ['public/sounds/som3.mp3'],
  volume: 0.7,
})