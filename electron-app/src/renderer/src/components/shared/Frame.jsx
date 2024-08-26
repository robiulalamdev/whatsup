/* eslint-disable prettier/prettier */

import { useState, useEffect } from 'react'
import logo from '../../assets/brand/whatsapp.png'
import {
  IFrame_Close,
  IFrame_Maximize,
  IFrame_Minimize,
  IFrame_UnMaximize
} from '../../utils/icons/global'

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
    <div className="DRAG_ON px-[12px] min-h-[42px] max-h-[42px] flex justify-between items-center">
      <div className="flex items-center gap-x-[8px]">
        <img src={logo} alt="" className="w-[24px] h-[24px] object-contain" />
        <h1 className="text-white text-[11px]">WhatsApp</h1>
      </div>
      <div className="flex justify-end items-center gap-x-[12px] h-full">
        <button
          onClick={minimizeWindow}
          className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]"
        >
          {IFrame_Minimize}
        </button>
        <button
          onClick={toggleMaximizeWindow}
          className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]"
        >
          {isMaximized ? IFrame_Maximize : IFrame_UnMaximize}
        </button>
        <button
          onClick={closeWindow}
          className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]"
        >
          {IFrame_Close}
        </button>
      </div>
    </div>
  )
}

export default Frame
