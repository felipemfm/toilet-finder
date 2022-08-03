import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getTest = async () => {
      await axios.get('/test').then((res) => {
        console.log(res.data.message);
        setMessage(res.data.message);
      });
    };
    getTest();
  }, []);

  return (
    <div>
      <h1>Felipe! Joe! Marie!</h1>
      {message ? message : ''}
    </div>
  );
}

export default App;
