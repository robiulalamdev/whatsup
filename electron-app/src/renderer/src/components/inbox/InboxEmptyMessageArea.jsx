/* eslint-disable prettier/prettier */
import React from 'react'
import bg from '../../assets/brand/whatsapp-gray.png'

const InboxEmptyMessageArea = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="max-w-[410px]">
        <img src={bg} alt="" className="max-w-[60px] object-contain mx-auto" />
        <h1 className="text-center text-gray-300 text-[16px] leading-normal font-medium mt-[12px]">
          WhatsApp for Windows
        </h1>
        <p className="text-center text-[#868383] leading-normal text-[13px] font-medium mt-[12px]">
          Send and receive messages without keeping your phone online. Use WhatsApp on up to 4
          linked devices and 1 phone at the same time.
        </p>
      </div>
    </div>
  )
}

export default InboxEmptyMessageArea
