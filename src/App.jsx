import React, { useRef } from 'react'
import './App.css'
import VideoJs from './components/videojs'

const App = () => {
  const playerRef = useRef(null)

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: false,
    fluid: false,
    preload: 'auto',
    sources: [
      {
        src: 'https://ik.imagekit.io/3a0xqnpdx/Ehsaas_720P.mp4',
        type: 'video/mp4'
      }
    ],
    playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
    controlBar: {
      fullscreenToggle: true
    },
    plugins: {
      httpSourceSelector: {
        default: 'auto',
        displayCurrentQuality: true
      }
    }
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    player.on('waiting', () => {
      console.log('Player is waiting')
    })

    player.on('dispose', () => {
      console.log('Player will dispose')
    })
  }

  return (
    <div className="app">
      <div className="player-container">
        <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  )
}

export default App