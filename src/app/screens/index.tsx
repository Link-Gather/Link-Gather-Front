import { useEffect, useState } from 'react';
import { Carousel, Dimmer } from '../components';
import imageData from 'app/components/Carousel/data.mock';

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
      {loading ? (
        <Dimmer />
      ) : (
        <Carousel imageData={imageData} width='600px' height='350px' />
      )}
    </div>
  );
}

export { HomeScreen };
