import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from '../HW1';


type FriendMessagePropsType = {
  message: MessageType
}

const FriendMessage = (props: FriendMessagePropsType) => {
  let {user, message} = props.message
  return (
    <div
      id={'hw1-friend-message-' + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        <img
          id={'hw1-friend-avatar-' + props.message.id}
          src={user.avatar}
          alt='avatar'
        />
        <div className={s.friendText}>
          <div
            id={'hw1-friend-name-' + props.message.id}
            className={s.friendName}
          >
            {user.name}

            {/**/}
          </div>
          <pre
            id={'hw1-friend-text-' + props.message.id}
            className={s.friendMessageText}
          >
            {message.text}

            {/**/}
                    </pre>
        </div>
      </div>
      <div
        id={'hw1-friend-time-' + props.message.id}
        className={s.friendTime}
      >
        {message.time}

        {/**/}
      </div>
    </div>
  )
}

export default FriendMessage
