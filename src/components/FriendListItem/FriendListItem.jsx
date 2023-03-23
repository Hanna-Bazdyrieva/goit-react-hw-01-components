import { Friend, Name, Avatar, Status } from './FriendListItem.styled';
import PropTypes from 'prop-types';
function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <Friend>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Friend>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
export default FriendListItem;
