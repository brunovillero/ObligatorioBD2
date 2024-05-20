import { useState, useEffect } from 'react';
import { axiosClient } from './axiosClient';
import './App.css';

function App() {
  interface IUser {
    email: string;
  }

  const [users, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      try {
        let res = await axiosClient.get('/users');
        let users_data = res.data;
        console.log(users_data);
        setUser(users_data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
    return () => {
      mounted = false
    }
  }, []);

  return (
    <div className="App">
      <div className='App-border'>
        {users.map(user => <div key={user.email}>{user.email}</div>)}
      </div>
    </div>
  );
}

export default App;
