import Profile from './components/Profile';
import user from './components/Profile/user.json';

import FriendList from './components/FriendList';
import friends from './components/FriendListItem/friends.json';

import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

import s from './App.module.css';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <div className={s.container}>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
