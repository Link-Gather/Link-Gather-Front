import { useEffect, useState } from 'react';
import { Carousel } from '../components';
import images from 'app/screens/data.mock';
import { Dimmer } from '../components/Dimmer';
import { Dialog } from 'app/components/Dialog';
import { DialogButton } from '../components/Dialog/DialogButton';

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

      {loading ? <Dimmer /> : <Carousel images={images} css={{ width: '500px', height: '350px' }} />}

      <DialogButton
        render={({ onClose }) => (
          <Dialog dialogStatus={'confirm'} onClose={onClose} title={'제목'}>
            Render Prop!
          </Dialog>
        )}
      >
        Dialog Open
      </DialogButton>
    </div>
  );
}

export { HomeScreen };
