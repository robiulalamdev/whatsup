/* eslint-disable prettier/prettier */

import { useEffect, useRef, useState } from 'react'

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
      className="flex  border-r-[1px] border-black"
      style={{ width: `${sidebarWidth}px`, minWidth: '260px', maxWidth: '800px' }}
    >
      <div className="flex-1">
        {/* Sidebar content */}
        <div className="p-4">
          <h2 className="text-xl font-semibold">Sidebar</h2>
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
