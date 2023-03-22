import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

function FriendList({ friends }) {
  console.log('FriendList -> friends:', friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  // title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
