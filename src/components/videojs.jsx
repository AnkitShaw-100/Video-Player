import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-http-source-selector'

const VideoJs = ({ options, onReady }) => {
    const playerRef = useRef(null)
    const videoRef = useRef(null)

    useEffect(() => {
        if (!videoRef.current) return

        if (!playerRef.current) {
            const videoElement = document.createElement('video')
            videoElement.className = 'video-js vjs-big-play-centered'
            videoRef.current.appendChild(videoElement)

            playerRef.current = videojs(videoElement, options || {}, () => {
                const player = playerRef.current
                if (player && typeof player.httpSourceSelector === 'function') {
                    try {
                        const pluginOptions = (options && options.plugins && options.plugins.httpSourceSelector) || {}
                        player.httpSourceSelector(pluginOptions)
                    } catch (error) {
                        console.log(error);
                    }
                }

                if (onReady) onReady(player)
            })
        } else {
            const player = playerRef.current
            if (options && options.sources) {
                player.src(options.sources)
            }
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose()
                playerRef.current = null
            }
        }
    }, [options, onReady])

    return (
        <div data-vjs-player>
            <div ref={videoRef} />
        </div>
    )
}

export default VideoJs
