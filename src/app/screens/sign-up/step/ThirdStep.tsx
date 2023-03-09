import React from 'react';
import { FlexBox, Input, CategoryTitle } from '@elements';
import { DropDown } from '@components';

const ThirdStep = () => {
  return (
    <FlexBox width='100%' height='100%' direction='column' css={{ gap: '25px' }}>
      <FlexBox width='100%' justifyContent='space-between' css={{ border: '1px solid black' }}>
        <FlexBox width='54%' direction='column'>
          <CategoryTitle label='직무*' />
          <DropDown width='100%' value='기획자'></DropDown>
        </FlexBox>
        <FlexBox width='43%' direction='column'>
          <CategoryTitle label='경력*' />
          <DropDown width='100%' value='1~3년차'></DropDown>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <CategoryTitle label='보유 기술*' />
      </FlexBox>
    </FlexBox>
  );
};

export default ThirdStep;
