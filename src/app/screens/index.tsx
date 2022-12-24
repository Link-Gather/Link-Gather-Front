import { useEffect, useState } from 'react';

import { Button, DialogAction, DialogButton, DialogContent, DialogTitle, Dimmer } from 'app/elements';
import { Carousel, Dialog } from 'app/components';
import images from 'app/screens/data.mock';

function HomeScreen() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  const [loading, setLoading] = useState(true);

  // form hook
  // query hooks
  // calculated values
  // effects
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // handlers

  return (
    <div>
      <span>홈페이지</span>

      {loading ? <Dimmer /> : <Carousel images={images} css={{ width: '500px', height: '350px' }} />}

      <DialogButton
        DialogComponent={({ onClose }) => (
          <Dialog width='300px' height='200px'>
            <DialogTitle>제목</DialogTitle>
            <DialogContent>컨텐츠</DialogContent>
            <DialogAction>
              <Button onClick={onClose}>닫기</Button>
              <Button onClick={() => console.log('확인 버튼을 눌렀습니다.')}>확인</Button>
            </DialogAction>
          </Dialog>
        )}
      >
        Dialog
      </DialogButton>
    </div>
  );
}

export { HomeScreen };
