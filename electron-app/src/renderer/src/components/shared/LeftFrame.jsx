/* eslint-disable prettier/prettier */

import {
  ILF_Archived_Chats,
  ILF_Call,
  ILF_Inbox,
  ILF_Menu,
  ILF_Settings,
  ILF_Start_Msg,
  ILF_Status
} from '../../utils/icons/global'

const LeftFrame = () => {
  return (
    <div className="min-w-[48px] h-[95.9vh] flex flex-col justify-between items-center pt-[24px]">
      <div className="flex flex-col items-center gap-y-[12px]">
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          {ILF_Menu}
        </button>
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          {ILF_Inbox}
        </button>
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          {ILF_Call}
        </button>
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          {ILF_Status}
        </button>
      </div>
      <div className="flex flex-col items-center gap-y-[12px] mb-[24px]">
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          {ILF_Start_Msg}
        </button>
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          {ILF_Archived_Chats}
        </button>
        <div className="h-[1px] w-[35px] bg-gray-700 rounded-[12px]"></div>
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          {ILF_Settings}
        </button>
        <button className="DRAG_OFF text-gray-200 hover:bg-[#2D2D2D] cursor-pointer h-[32px] w-[35px] flex justify-center items-center rounded-[5px]">
          <img
            src="https://i.postimg.cc/ncjDF8z5/1688134121446.jpg"
            alt="Profile Icon"
            className="w-[24px] h-[24px] rounded-full object-cover"
          />
        </button>
      </div>
    </div>
  )
}

export default LeftFrame
