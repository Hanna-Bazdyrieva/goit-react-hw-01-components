import './App.css';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import user from '../../data/user';
import stats from '../../data/stats';
import friends from '../../data/friends';

export const App = () => {
  return (
    <>
      {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div> */}
      <Profile user={user} />

      <Statistics stats={stats} />
      <FriendList friends={friends} />
    </>
  );
};
