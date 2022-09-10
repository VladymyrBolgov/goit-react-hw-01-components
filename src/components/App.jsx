import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData from './data/user.json';
import statsData from './data/data.json';
import friendData from './data/friends.json';
import transactionData from './data/transactions.json'
 
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'grey',
        paddingTop: '40px',
        gap: '40px',
      }}
    >
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statsData} />
    </div>
  );
};

/*

<FriendList friends={friendData} />
<TransactionHistory transactions={transactionData} />
*/