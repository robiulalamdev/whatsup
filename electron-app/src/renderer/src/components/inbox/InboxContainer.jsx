/* eslint-disable prettier/prettier */

import InboxChatsContainer from './InboxChatsContainer'
import InboxMessageContainer from './InboxMessageContainer'

function InboxContainer() {
  return (
    <div className="flex h-screen">
      <InboxChatsContainer />
      <InboxMessageContainer />
    </div>
  )
}

export default InboxContainer
