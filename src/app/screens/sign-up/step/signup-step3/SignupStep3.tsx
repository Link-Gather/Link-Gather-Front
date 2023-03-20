import { FlexBox, CategoryTitle, Button } from '@elements';
import { DropDown } from '@components';
import palette from '@libs/theme/palettes';

const SignupStep3 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  const firstData = ['프론트엔드', '백엔드', '디자이너', '기획자'];
  const secondData = ['학생/취준생', '1~3년차', '3~5년차', '5~10년차', '10년차이상'];
  // effects
  // handlers

  return (
    <FlexBox
      width='100%'
      height='100%'
      direction='column'
      alignItems='center'
      position='relative'
      css={{ gap: '25px' }}
    >
      <FlexBox width='100%' marginTop='25px' justifyContent='space-between'>
        <FlexBox width='54%' direction='column'>
          <CategoryTitle label='직무*' />
          <DropDown value='기획자' data={firstData}></DropDown>
        </FlexBox>
        <FlexBox width='43%' direction='column'>
          <CategoryTitle label='경력*' />
          <DropDown value='1~3년차' data={secondData}></DropDown>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <CategoryTitle label='보유기술*' />
      </FlexBox>
      <Button
        onClick={moveNextStep}
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        width='320px'
        height='48px'
        fontSize='20px'
        css={{ position: 'absolute', bottom: '40px', borderRadius: '32px' }}
      >
        회원가입
      </Button>
    </FlexBox>
  );
};

export { SignupStep3 };
