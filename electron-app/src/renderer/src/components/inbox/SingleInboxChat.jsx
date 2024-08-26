/* eslint-disable prettier/prettier */

const SingleInboxChat = () => {
  return (
    <div className="min-h-[66px] max-h-[66px] w-full cursor-pointer flex items-center px-[4px] rounded-[6px]">
      <div className="flex items-center gap-x-[8px] w-full">
        <img
          src="https://i.postimg.cc/ncjDF8z5/1688134121446.jpg"
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-gray-100 font-semibold leading-normal text-[14px]">
              Md. Robiul Alam
            </h1>
            <p className="text-gray-300 leading-normal text-[12px]">04:25 PM</p>
          </div>
          <p className="text-gray-300 leading-normal text-[12px]">You: Hi, whatsapp</p>
        </div>
      </div>
    </div>
  )
}

export default SingleInboxChat
