import { Link } from 'react-router-dom';
import { Button, DialogAction, DialogContent, DialogTitle } from '@elements';
import { Carousel, Dialog } from '@components';
import { useDialog } from '@hooks';

export const images = [
  {
    id: 0,
    src: 'https://www.hotelscombined.co.kr/rimg/himg/16/58/ac/leonardo-2013827-OR_twilight_-_sakis_new_O-220265.jpg?width=1366&height=768&crop=true',
    alt: '첫번째 슬라이드',
  },
  {
    id: 1,
    src: 'https://mblogthumb-phinf.pstatic.net/20151205_23/travelra_1449282954291qFyxs_JPEG/_MG_2353.JPG?type=w2',
    alt: '두번째 슬라이드',
  },
  {
    id: 2,
    src: 'https://pix10.agoda.net/geo/country/51/3_51_switzerland_02.jpg?s=1920x',
    alt: '세번째 슬라이드',
  },
];

function HomeScreen() {
  // prop destruction
  // lib hooks
  const { isOpenDialog, openDialog, closeDialog } = useDialog();

  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div>
      <span>홈페이지</span>

      <Carousel images={images} css={{ width: '500px', height: '350px' }} />
      <Button onClick={openDialog}>Dialog</Button>
      {isOpenDialog && (
        <Dialog width='300px' height='200px'>
          <DialogTitle>제목</DialogTitle>
          <DialogContent>컨텐츠</DialogContent>
          <DialogAction>
            <Button onClick={closeDialog}>닫기</Button>
            <Button onClick={closeDialog}>확인</Button>
          </DialogAction>
        </Dialog>
      )}
      <button>
        <Link to='/login'>로그인화면으로 이동</Link>
      </button>
    </div>
  );
}

export { HomeScreen };
