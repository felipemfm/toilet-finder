import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/reset.css';
import './styles/base.css';
import Header from './components/layout/Header';
import TopArea  from './components/layout/TopArea';
import MapArea from './components/layout/MapArea';

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
    <>
      <Header />
      <TopArea />
      {/* <MapArea /> */}
      <div>
        {message ? message : ''}
      </div>
    </>
  );
}

export default App;
