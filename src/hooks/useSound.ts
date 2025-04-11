import { useRef } from 'react'
import { Howl } from 'howler'

export const useSound = (src: string, volume = 1.0) => {
  const soundRef = useRef<Howl | null>(null)

  // Cria o som só uma vez
  if (!soundRef.current) {
    soundRef.current = new Howl({
      src: [src],
      volume,
    })
  }

  const play = () => soundRef.current?.play()
  const pause = () => soundRef.current?.pause()
  const stop = () => soundRef.current?.stop()
  const mute = () => soundRef.current?.mute(true)
  const unmute = () => soundRef.current?.mute(false)

  return { play, pause, stop, mute, unmute }
}
