import { useEffect, useState } from 'react';
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
      {loading && <Dimmer />}

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
