/* eslint-disable prettier/prettier */

import bg from '../../assets/images/inbox/inbox-bg.png'

const InboxMessageContainer = () => {
  return (
    <div
      className="w-full h-full flex-1 bg-[#414040] p-4 overflow-auto scroll_off"
      style={{
        backgroundImage: `url(${bg})`
      }}
    ></div>
  )
}

export default InboxMessageContainer
