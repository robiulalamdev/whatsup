/* eslint-disable prettier/prettier */

import { useState, useEffect } from 'react'

const Frame = () => {
  const [isMaximized, setIsMaximized] = useState(false)

  useEffect(() => {
    // Listen to events from the main process
    window.api.receive('window-maximized', () => {
      setIsMaximized(true)
    })

    window.api.receive('window-unmaximized', () => {
      setIsMaximized(false)
    })

    // Request initial state
    window.api.send('check-window-state')

    return () => {
      // Clean up event listeners when the component is unmounted
      window.api.removeAllListeners('window-maximized')
      window.api.removeAllListeners('window-unmaximized')
    }
  }, [])

  const toggleMaximizeWindow = () => {
    if (isMaximized) {
      window.api.send('unmaximize-window')
    } else {
      window.api.send('maximize-window')
    }
  }

  const minimizeWindow = () => {
    window.api.send('minimize-window')
  }

  const closeWindow = () => {
    window.api.send('close-window')
  }

  return (
    <div className="header">
      <button onClick={minimizeWindow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
          width={32}
        >
          <path
            fillRule="evenodd"
            d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button onClick={toggleMaximizeWindow}>{isMaximized ? '🗗' : '[]'}</button>
      <button onClick={closeWindow}>X</button>
    </div>
  )
}

export default Frame
