/* eslint-disable prettier/prettier */

import { useEffect, useRef, useState } from 'react'
import { IIChats_New, IIChats_Search } from '../../utils/icons/global'
import SingleInboxChat from './SingleInboxChat'

const InboxChatsContainer = () => {
  // State to manage the sidebar's width
  const [sidebarWidth, setSidebarWidth] = useState(250) // Initial width in pixels

  // Refs to track resizing state and the last mouse X position
  const isResizing = useRef(false)
  const lastDownX = useRef(0)

  useEffect(() => {
    // Handler for mouse move events
    const handleMouseMove = (e) => {
      if (!isResizing.current) return

      // Calculate the change in mouse position
      const deltaX = e.clientX - lastDownX.current
      lastDownX.current = e.clientX

      // Update the sidebar width, ensuring it stays within bounds
      setSidebarWidth((prevWidth) => {
        let newWidth = prevWidth + deltaX
        if (newWidth < 200) newWidth = 200 // Minimum width
        if (newWidth > 500) newWidth = 500 // Maximum width
        return newWidth
      })
    }

    // Handler for mouse up events
    const handleMouseUp = () => {
      if (isResizing.current) {
        isResizing.current = false
      }
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Handler for mouse down events on the resizer
  const handleMouseDown = (e) => {
    isResizing.current = true
    lastDownX.current = e.clientX
  }
  return (
    <div
      className="flex  border-r-[1px] border-gray-900"
      style={{ width: `${sidebarWidth}px`, minWidth: '260px', maxWidth: '800px' }}
    >
      <div className="flex-1 px-[16px] py-[16px]">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-[16px] font-semibold leading-normal">Chats</h1>
          <div className="flex items-center gap-[16px]">
            <button className="text-white w-[20px]">{IIChats_New}</button>
            <button className="text-white w-[20px]">
              <div className="w-[16px] h-[1px] bg-white mx-auto"></div>
              <div className="w-[12px] h-[1px] bg-white mx-auto mt-[3px]"></div>
              <div className="w-[7px] h-[1px] bg-white mx-auto mt-[3px]"></div>
            </button>
          </div>
        </div>
        <div className="mt-[24px] h-[32px] w-full relative">
          <button className="text-white rotate-90 absolute left-[10px] top-[10px]">
            {IIChats_Search}
          </button>
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="w-full h-full bg-[#383737] focus:bg-[#292626] border-b-[1px] outline-none focus:outline-none border-gray-400 rounded-[3px] text-gray-200 placeholder:text-gray-200 text-[13px] pl-[30px]"
          />
        </div>
        <div className="mt-[16px]">
          <SingleInboxChat />
          <SingleInboxChat />
          <SingleInboxChat />
          <SingleInboxChat />
          <SingleInboxChat />
        </div>
      </div>
      <div
        onMouseDown={handleMouseDown}
        className="w-1 cursor-col-resize hover:bg-[#202020]"
        style={{ userSelect: 'none' }}
      ></div>
    </div>
  )
}

export default InboxChatsContainer
