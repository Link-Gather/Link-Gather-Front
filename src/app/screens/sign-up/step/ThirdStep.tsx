import React from 'react';
import { FlexBox, CategoryTitle } from '@elements';
import { DropDown } from '@components';

const ThirdStep = () => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const firstData = ['프론트엔드', '백엔드', '디자이너', '기획자'];
  const secondData = ['학생/취준생', '1~3년차', '3~5년차', '5~10년차', '10년차이상'];

  return (
    <FlexBox width='100%' height='100%' direction='column' css={{ gap: '25px' }}>
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
    </FlexBox>
  );
};

export default ThirdStep;
