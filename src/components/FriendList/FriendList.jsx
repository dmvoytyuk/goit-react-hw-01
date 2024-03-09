import FriendListItem from '../FriendListItem/FriendListItem'
import style from './FriendList.module.css'
function FriendList({ friends }) {

  return (
    <>
      <ul className={style.friendsList}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
        </li>
        ))}
      </ul>
    </>
  );
}

export default FriendList;