import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/SocialProfile/userData.json';
import data from './components/Statistics/statisticData.json';
import friends from './components/FriendList/friendsData.json';
import transactions from './components/TransactionHistory/transactions.json';
import './App.css';

function App() {
  return (
    <>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
