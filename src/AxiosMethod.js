import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AxiosPractice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response);
        setData(response.data);
      })



      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default AxiosPractice;
