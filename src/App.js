import React, { createContext, useContext, useEffect, useState } from 'react';
// import Profile from './Profile';

// const UserContext = createContext('unknown');
// const ThemeContext = createContext('dark');

const UserContext = createContext({ username: 'unknown', helloCount: 0 });
const SetUserContext = createContext(()=>{});

const App = () => {
  const [user, setUser] = useState({ username: 'mike', helloCount: 0 });
  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </SetUserContext.Provider>
  )
};

const Profile = () => {
  const setUser = useContext(SetUserContext);
  const { username, helloCount } = useContext(UserContext);
  return (
      <>
          <p>{`hi, ${username}`}</p>
          <p>{`helloCount ${helloCount}`}</p>
          <button onClick={()=>setUser({username, helloCount: helloCount + 1})}>
              hi
          </button>
      </>
  );
};

// const Profile = React.memo(() => {
//   console.log('Profile Component');
//   // const [user, setUser] = useState(null);
//   // useEffect(()=>{
//   //     getUserApi(userId).then(data=>setUser(data));
//   // }, [userId]);
//   // const user = useUser(userId);
//   return (
//       <div>
//           <Greeting />
//           {/* ... */}
//       </div>
//   );
// });

// function Greeting(){
//   // const username = useContext(UserContext);
//   // const theme = useContext(ThemeContext);
//   return (
//     // <p style={{ color: theme === 'dark' ? 'gray' : 'green' }}>{`Hi, ${username}!`}</p>
//     // <UserContext.Consumer>
//     //   {username => <p>{`Hi, ${username}!`}</p>}
//     // </UserContext.Consumer>
//   )
// }

export default App;