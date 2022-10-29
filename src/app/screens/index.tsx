import { useEffect, useState } from 'react';
import { Dimmer } from '../components';

function HomeScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      <span>홈페이지</span>
      {loading && <Dimmer />}
    </div>
  );
}

export { HomeScreen };
