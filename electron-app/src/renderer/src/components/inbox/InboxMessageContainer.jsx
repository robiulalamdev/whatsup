/* eslint-disable prettier/prettier */

import bg from '../../assets/images/inbox/inbox-bg.png'
import InboxEmptyMessageArea from './InboxEmptyMessageArea'

const InboxMessageContainer = () => {
  return (
    <div className="w-full h-full flex-1 p-4 overflow-auto scroll_off">
      <InboxEmptyMessageArea />
      {/* <div
        className="w-full h-full flex-1 p-4 overflow-auto scroll_off"
        //   style={{
        //     backgroundImage: `url(${bg})`
        //   }}
      ></div> */}
    </div>
  )
}

export default InboxMessageContainer
