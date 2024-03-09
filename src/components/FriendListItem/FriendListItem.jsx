import style from './FriendListItem.module.css'

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={style.friendsItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={
        isOnline ? style.online : style.offline
      }>{
          isOnline ? "online" : "offline"
        }</p>
    </div>
  );
}

export default FriendListItem;