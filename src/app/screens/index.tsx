import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Dimmer } from '../components/Dimmer';
import { Dialog, Portal } from '../components/Dialog';

function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [dialogOn, setDialogOn] = useState(false);

  const handleDialog = () => {
    setDialogOn(!dialogOn);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      <span>홈페이지</span>
      {loading && <Dimmer />}
      <Button onClick={() => handleDialog()}>Dialog Test</Button>
      <Portal>
        {dialogOn && (
          <Dialog statusDialog={'confirm'} onClose={() => handleDialog()}>
            dialog test 중 입니다.
          </Dialog>
        )}
      </Portal>
    </div>
  );
}

export { HomeScreen };
