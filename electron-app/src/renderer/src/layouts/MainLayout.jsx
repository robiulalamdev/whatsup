/* eslint-disable prettier/prettier */

import { Outlet } from 'react-router-dom'
import Frame from '../components/shared/Frame'
import LeftFrame from '../components/shared/LeftFrame'

const MainLayout = () => {
  return (
    <div className="h-screen w-full bg-[#202020]">
      <Frame />
      <div className="flex items-start w-full">
        <LeftFrame />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
