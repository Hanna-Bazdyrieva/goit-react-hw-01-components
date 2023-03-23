import './App.css';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from '../../data/user';
import stats from '../../data/stats';
import friends from '../../data/friends';
import transactions from '../../data/transactions';

export const App = () => {
  return (
    <>
      <Container>
        <Section title="Profile">
          <Profile user={user} />
        </Section>
        <Section title="Statistics">
          <Statistics title="Download Statistics" stats={stats} />
        </Section>
        <Section title="Friends List">
          <FriendList friends={friends} />
        </Section>
        <Section title="Transactions Table">
          <TransactionHistory transactions={transactions} />
        </Section>
      </Container>
    </>
  );
};
