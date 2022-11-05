import { useEffect, useState } from 'react';
import { Dimmer } from '../components/Dimmer';
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
        dialogStatus={'confirm'}
        dialogContents={'Dialog Confirm Test 내용'}
      >
        Dialog Confirm Test
      </DialogButton>
      <DialogButton
        dialogStatus={'warning'}
        dialogContents={'Dialog Warning Test 내용'}
      >
        Dialog Warning Test
      </DialogButton>
    </div>
  );
}

export { HomeScreen };
