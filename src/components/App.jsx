import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
//import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json'
import data from '../data/data.json';
import friends from '../data/friends.json';
//import transaction from '../data/transactions.json'
 
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
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};

/*


<TransactionHistory transactions={transaction} />
*/