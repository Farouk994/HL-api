import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Profile from './Profile';

const User = () => {
  const [showUser, setShowUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      API.getUser()
        .then((res) => {
          setShowUser(res.data.results);
          console.log(showUser)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      <Profile user={showUser} />
    </div>
  );
};

export default User;
