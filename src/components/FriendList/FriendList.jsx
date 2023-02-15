import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends = [] }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
